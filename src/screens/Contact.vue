<template>
  <div class="row middle full-height space-between">
    <div class="column">
      <h1 class="title">Let's chat</h1>
      <form @submit.prevent="emailUser" class="contact-form">
        <input
          class="contact-input"
          type="text"
          name="name"
          v-model="name"
          placeholder="Name"
        />
        <input
          class="contact-input"
          type="text"
          name="last_name"
          v-model="lastName"
          placeholder="Last Name"
        />
        <input
          class="contact-input"
          type="email"
          name="email"
          v-model="email"
          placeholder="Email"
        />
        <input
          class="contact-input"
          type="text"
          name="subject"
          v-model="subject"
          placeholder="Subject"
        />
        <textarea
          class="contact-input"
          name="message"
          v-model="message"
          placeholder="Write a message"
        />
        <button class="contact-buttons bebas" type="button">Clear</button>
        <button class="contact-buttons bebas" type="submit">Send!</button>
      </form>
      <h3 class="text-m">Contact info</h3>
      <span class="slash-decoration">Email: ifrancisco.iglesias@gmail.com</span>
      <span class="slash-decoration">Phone: +541133578314</span>
      <span class="slash-decoration"
        >Address: Av San Juan 2070 CABA, Argentina</span
      >
      <app-footer></app-footer>
    </div>
    <img src="../assets/contact_photo.jpeg" class="contact-image" />
    <v-snackbar v-model="snackbar" :timeout="3000">
      Email has been seent
    </v-snackbar>
  </div>
</template>

<script>
import AppFooter from "../components/Footer.vue";
import { sendEmail } from "../services/email";
export default {
  data() {
    return {
      snackbar: false,
      name: "",
      lastName: "",
      email: "",
      subject: "",
      message: "",
    };
  },
  components: {
    AppFooter,
  },
  methods: {
    emailUser(event) {
      event.preventDefault();
      sendEmail({
        name: this.name,
        last_name: this.lastName,
        email: this.email,
        subject: this.subject,
        message: this.message,
      }).then((response) => {
        if (response.ok) {
          this.snackbar = true;
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "src/scss/colors";

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
  border: 1px solid $white;
  padding: 10px;
  letter-spacing: 1px;
  transition: color, background 0.3s ease-in-out;

  &:hover {
    background: $white;
    color: $primary-color;
  }
}

.contact-image {
  height: 100vh;
  opacity: 0.7;
  position: relative;
  left: 225px;
  max-width: 50vw;
  object-fit: cover;
}
</style>
