<template>
  <a class="project column" :href="project.html_url" target="_blank">
    <span class="subtitle double-greater-decoration project-name">{{
      project.name
    }}</span>
    <span class="hide-sm">{{ project.description }}</span>
    <span class="language" :style="langColor">{{ project.language }}</span>
  </a>
</template>

<script>
import languages from '../utils/languages'
export default {
  props: {
    project: Object,
  },
  computed: {
    langColor() {
      return {backgroundColor: languages[this.project.language]?.color}
    }
  }
};
</script>

<style lang="scss" scoped>
.project {
  width: 100%;
  max-width: 300px;

  &:hover {
    .project-name {
      text-decoration: underline;
    }
  }
}

.project-name {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.language {
  width: fit-content;
  border-radius: 10px;
  padding: 2px 5px;
  margin: 5px 5px 5px 0;
}
</style>
