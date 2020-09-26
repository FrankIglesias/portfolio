<template>
  <div class="column container">
    <h1 class="title">Portfolio</h1>
    <h2>Projects taken from <a href="www.github.com/FrankIglesias" target="_blank">my github account</a></h2>
    <div class="row wrap">
    <project v-for="project in projects" :key="project.id" :project="project"></project>
    </div>
  </div>
</template>

<script>
import Project from '../components/Project.vue'
import { getRepos } from '../services/github'
export default {
  components: {
    Project
  },
  data() {
    return {
      projects: []
    }
  },
mounted() {
  getRepos().then(response => {
    if(response.ok) {
      this.projects = response.data
    }
  })
}
}
</script>

<style lang="scss" scoped>
.container {
  padding-left: 70px;
  min-height: 100vh;
}
</style>
