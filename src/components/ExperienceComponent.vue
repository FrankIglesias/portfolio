<template>
  <div class="column experience" :class="{ colapsed }">
    <span class="double-greater-decoration subtitle">{{ position.title }}</span>
    <span>{{ position.date }}</span>
    <span class="hide-sm" v-html="position.description"></span>
  </div>
</template>
<script>
export default {
  props: {
    position: Object,
  },
  data() {
    return {
      colapsed: true,
    };
  },
  methods: {
    toggle() {
      this.colapsed = !this.colapsed;
    },
  },
};
</script>
<style lang="scss" scoped>
.experience {
  max-width: 500px;
  margin: 20px 0;
}
</style>
