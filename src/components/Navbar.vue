<template>
  <div class="row space-between">
    <a href="/">Frank</a>
    <div class="row">
      <a
        v-for="socialLink in socialLinks"
        :key="socialLink.link"
        :href="socialLink.link"
        target="_blank"
      >
        <img :src="socialLink.img" />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      socialLinks: [
        {
          img: "image",
          link: "",
        },
        {
          img: "image",
          link: "",
        },
        {
          img: "image",
          link: "",
        },
        {
          img: "image",
          link: "",
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
</style>
