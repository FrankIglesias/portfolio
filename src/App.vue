<template>
  <div class="column">
    <navbar></navbar>
    <h1>Ignacio Francisco Janin Iglesias</h1>
    <h2>Frotnend developer</h2>
    <span>I'm a graduate software engineer from UTN. I'm currently working at Wolox as Front-End Engineering Manager using technologies such as React, Angular and Vue. I also love doing research on new technologies and putting them into practice in personal projects.</span>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'

export default {
  name: 'App',
  components: { 
    Navbar
  }
}
</script>

<style lang="scss">
@import "./scss/application";
</style>
