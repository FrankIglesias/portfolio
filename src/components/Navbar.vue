<template>
  <div class="container column space-between middle">
    <a href="/" class="bebas subtitle" v-html="'<span>< / ></span>'"></a>
    <div class="column">
      <a
        v-for="socialLink in socialLinks"
        :key="socialLink.img"
        :href="socialLink.link"
        target="_blank"
      >
        <v-icon class="icon">{{ socialLink.img }}</v-icon>
      </a>
      <span data-menuanchor="contact">
        <a href="#contact">
          <v-icon class="icon">mdi-email</v-icon>
        </a>
      </span>
      <a :href="resumePdf" download>
        <v-icon class="icon">mdi-file-account</v-icon>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      resumePdf: "https://go-mailer.franciscojiglesias.vercel.app/CV.pdf",
      socialLinks: [
        {
          img: "mdi-github",
          link: "https://github.com/FrankIglesias",
        },
        {
          img: "mdi-linkedin",
          link: "https://www.linkedin.com/in/francisco-janin-iglesias/",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.container {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 50px;
  padding: 10px;
  z-index: 1;
  border-right: 1px solid gray;
  @media screen and (max-width: 900px) {
    padding: 10px 10px 75px;
  }
}

.icon {
  font-size: 30px;
  line-height: 40px;
  margin: 5px 0;
}
</style>
