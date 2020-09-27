<template>
  <div class="row middle full-height">
    <div class="column">
      <h1 class="title">Let's chat</h1>
      <form class="contact-form">
        <input
          class="contact-input"
          type="text"
          name="first-name"
          placeholder="Name"
        />
        <input
          class="contact-input"
          type="text"
          name="last-name"
          placeholder="Last Name"
        />
        <input
          class="contact-input"
          type="email"
          name="email"
          placeholder="Email"
        />
        <input
          class="contact-input"
          type="text"
          name="subject"
          placeholder="Subject"
        />
        <textarea
          class="contact-input"
          name="body"
          placeholder="Write a message"
        />
        <button class="contact-buttons bebas" type="button">Clear</button>
        <button class="contact-buttons bebas" type="submit">Send!</button>
      </form>
      <h3 class="text-m">Contact info</h3>
      <span class="slash-decoration">Email: ifrancisco.iglesias@gmail.com</span>
      <span class="slash-decoration">Phone: +541133578314</span>
      <span class="slash-decoration">Address: Av San Juan 2070 CABA, Argentina</span>
      <app-footer></app-footer>
    </div>
    </div>
</template>

<script>
import AppFooter from "../components/Footer.vue";
export default {
  components: {
    AppFooter,
  },
};
</script>

<style lang="scss" scoped>
.contact-form {
  display: grid;
  grid-template-columns: 200px 200px;
  grid-gap: 5px;
  margin-bottom: 20px;

  textarea,
  input[name="subject"],
  input[name="email"] {
    grid-column: 1 / span 2;
  }

  @media screen and (max-width: 900px) {
    grid-template-columns: 1fr 1fr;
  }
}

.contact-input {
  height: 100%;
  background: rgba(255, 255, 255, 0.3);
  padding: 8px;
}

.contact-buttons {
  border: 1px solid #fff;
  padding: 10px;
  transition: color, background 0.3s ease-in-out;

  &:hover {
    background: #fff;
    color: #1d1d1d;
  }
}
</style>
