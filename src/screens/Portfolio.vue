<template>
  <div class="column full-height">
    <h1 class="title">Portfolio</h1>
    <h2 class="hide-sm">
      Projects taken from
      <a href="www.github.com/FrankIglesias" target="_blank"
        >my github account</a
      >
    </h2>
    <div v-if="filteredProjects" class="row wrap">
      <div class="radio-input">
        <input
          type="radio"
          id="all"
          name="lang"
          v-model="selectedLang"
          :value="''"
        />
        <label for="all">All</label>
      </div>
      <div v-for="lang in langs" :key="lang" class="radio-input">
        <input
          type="radio"
          :id="lang"
          name="lang"
          v-model="selectedLang"
          :value="lang"
        />
        <label :for="lang">{{ lang }}</label>
      </div>
    </div>
    <div class="column">
      <v-data-iterator
      :items="filteredProjects"
      :items-per-page="itemsCount"
      :page="page"
      hide-default-footer
      >
        <template v-slot:default="props">
          <div class="projects-container">
            <project v-for="project in props.items" :key="project.id" :project="project"></project>
          </div>
        </template>
      </v-data-iterator>
    </div>
    <div v-if="filteredProjects.length /itemsCount > 1" class="row page-buttons">
      <button class="text-lg" v-show="page !== 1" @click="changePage(page-1)">
        <v-icon>mdi-arrow-left</v-icon>
      </button>
      <button class="text-lg" v-show="Math.ceil(filteredProjects.length /itemsCount) !== page" @click="changePage(page+1)">
        <v-icon>mdi-arrow-right</v-icon>
      </button>
    </div>
  </div>
</template>

<script>
import Project from "../components/Project.vue";
import { getRepos } from "../services/github";
export default {
  components: {
    Project,
  },
  data() {
    return {
      projects: [],
      langs: [],
      selectedLang: "",
      page: 1,
      itemsCount: window.innerWidth > 900 ? 20 : 6
    };
  },
  mounted() {
    getRepos().then((response) => {
      if (response.ok) {
        this.projects = response.data;
        this.langs = Object.keys(
          response.data.reduce(
            (acc, project) => ({ ...acc, [project.language]: 1 }),
            {}
          )
        );
      }
    });
  },
  computed: {
    filteredProjects() {
      return this.projects.filter((project) =>
        this.selectedLang ? project.language === this.selectedLang : true
      );
    },
    watch: {
      filteredProjects() {
        this.page = 0;
      }
    },
  },
  methods: {
    changePage(page) {
      this.page = page;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "src/scss/fonts";
@import "src/scss/colors";

.projects-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(5, 100px);
  min-height: 700px;
  grid-gap: 20px;
  margin: 20px 0;

  @media screen and (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-template-rows: initial;
    grid-gap: 10px;
    min-height: auto;
    margin: 10px 0 0;
  }
}

.radio-input {
  position: relative;

  input {
    position: absolute;
    width: 0;
    height: 0;
    opacity: 0;
  }

  label {
    @extend .bebas;
    padding: 10px;
    border: 1px solid $white;
    border-right-width: 0;
    min-width: 50px;
    text-align: center;
    cursor: pointer;
    margin: 20px 0;
    transition: color, background 0.4s ease-in-out;
  
    @media screen and (max-width: 900px) {
      margin: 0;
    }

    &:hover {
      background: $white;
      color: $primary-color;
    }

    &:last-of-type {
      border-right-width: 1px;
    }
  }

  input:checked + label {
    background: $white;
    color: $primary-color;
  }
}

.page-buttons {
  margin: 0 20px;

  @media screen and (max-width: 900px) {
    margin: 0;
  }
}
</style>
