<template>
  <div class="column">
    <navbar></navbar>
    <full-page ref="fullpage" :options="options" id="fullpage">
      <div class="section">
        <main-view></main-view>
      </div>
      <div class="section">
        <experience></experience>
      </div>
      <div class="section">
        <portfolio></portfolio>
      </div>
      <div class="section">
        <contact></contact>
      </div>
    </full-page>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import MainView from "./screens/Main.vue";
import Contact from "./screens/Contact.vue";
import Experience from "./screens/Experience.vue";
import Portfolio from "./screens/Portfolio.vue";

export default {
  name: "App",
  data() {
    return {
      options: {
      }
    }
  },
  components: {
    Navbar,
    MainView,
    Experience,
    Portfolio,
    Contact,
  },
};
</script>

<style lang="scss">
@import "./scss/application";

.section {
  min-height: 100vh;
  > *:first-child {
    padding: 40px 70px 40px 70px;
  
    @media screen and (max-width: 900px) {
      padding: 40px 10px 40px 70px;
    }
  }
}
</style>
