<template>
  <div class="column experience" :class="{ colapsed }">
    <span class="double-greater-decoration subtitle">{{ position.title }}</span>
    <span>{{ position.date }}</span>
    <span v-html="position.description"></span>
    <button @click="toggle" class="more-info hide-sm">
      {{ colapsed ? "Show more" : "Colapse" }}
      <v-icon>{{ colapsed ? "mdi-arrow-down" : "mdi-arrow-up" }}</v-icon>
    </button>
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
  height: auto;
  max-height: 1000px;
  transition: max-height 0.4s ease-in-out;
  position: relative;
  overflow-y: hidden;
  padding-bottom: 20px;
}

.colapsed {
  max-height: 60px;
}

.more-info {
  position: absolute;
  bottom: 0;
  width: 100%;
  z-index: 1;
  background: #1d1d1d;
}
</style>
