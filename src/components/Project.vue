<template>
  <div class="project column">
    <a class="bebas link text-m" :href="project.html_url" target="_blank">{{
      project.name
    }}</a>
    <span>{{ project.description }}</span>
    <span>{{ project.language }}</span>
  </div>
</template>

<script>
export default {
  props: {
    project: Object,
  },
};
</script>

<style lang="scss" scoped>
.project {
  width: 100%;
  max-width: 300px;
  margin: 10px 10px 10px 0;
}
</style>
