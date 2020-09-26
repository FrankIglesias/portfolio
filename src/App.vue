<template>
  <div class="column">
    <navbar></navbar>
    <main-view></main-view>
    <experience></experience>
    <portfolio></portfolio>
    <contact></contact>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import AppFooter from './components/Footer.vue'
import MainView from './screens/Main.vue'
import Contact from './screens/Contact.vue'
import Experience from './screens/Experience.vue'
import Portfolio from './screens/Portfolio.vue'

export default {
  name: 'App',
  components: { 
    Navbar,
    MainView,
    Experience,
    AppFooter,
    Portfolio,
    Contact
  }
}
</script>

<style lang="scss">
@import "./scss/application";
</style>
