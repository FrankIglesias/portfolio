<template>
  <div class="column container">
    <h1 class="title">Let's chat</h1>
    <form class="contact-form">
    <input class="contact-input" type="text" name="first-name" placeholder="Name" />
    <input class="contact-input" type="text" name="last-name" placeholder="Last Name" />
    <input class="contact-input" type="email" name="email" placeholder="Email" />
    <input class="contact-input" type="text" name="subject" placeholder="Subject" />
    <textarea class="contact-input" name="body" placeholder="Write a message" />
    <button class="contact-buttons" type="button">Clear</button>
    <button class="contact-buttons" type="submit">Send!</button>
    </form>

  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
.container {
  padding-left: 70px;
  min-height: 100vh;
}

.contact-form {
  display: grid;
  grid-template-columns: 200px 200px;
  grid-row: 50px;
  grid-gap: 20px;

  textarea,
  input[name="subject"],
  input[name="email"] {
    grid-column: 1 / span 2;
  }
}

.contact-input {
  height: 100%;
  background: rgba(255,255,255, 0.3);
  padding: 8px;
}

.contact-buttons {
  border: 1px solid #FFF;
  padding: 10px;
  transition: color, background 0.3s ease-in-out;

  &:hover {
    background: #FFF;
    color: #1d1d1d;
  }
}
</style>
