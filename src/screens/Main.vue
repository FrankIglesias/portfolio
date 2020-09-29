<template>
  <div class="full-height row middle space-between">
    <div class="column">
      <h1 class="title">Ignacio Francisco Janin Iglesias</h1>
      <h2 class="subtitle">Frontend developer</h2>
      <span class="description"
        >I'm a graduate software engineer from UTN. I'm currently working at
        Wolox as Front-End Engineering Manager using technologies such as React,
        Angular and Vue. I also love doing research on new technologies and
        putting them into practice in personal projects.
      </span>
    </div>
    <span class="hero-text title" v-html="'< />'"></span>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "src/scss/fonts";
@import "src/scss/colors";

.description {
  max-width: 300px;
}

.hero-text {
  @extend .bebas;
  background: url("../assets/hero_image.jpeg");
  background-size: cover;
  background-repeat: no-repeat;
  color: $transparent;
  background-clip: text;
  font-size: 500px;
  line-height: 500px;
  user-select: none;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  white-space: nowrap;

  @media screen and (max-width: 900px) {
    display: none;
  }
}
</style>
