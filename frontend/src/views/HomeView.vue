<template>
  <section>
    <p>This site is built with FastAPI and Vue. (VS Code)</p>

    <div v-if="isLoggedIn" id="logout">
      <p id="logout">Click <router-link class="link" to="/dashboard">here</router-link> to view all notes.</p>
    </div>
    <p v-else>
      <span><router-link class="link" to="/register">Register</router-link></span>
      <span> or </span>
      <span><router-link class="link" to="/login">Log In</router-link></span>
    </p>
  </section>
</template>
<script>

import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HomeView',
  computed : {
    isLoggedIn: function() {
      return this.$store.getters.isAuthenticated;
    }
  },
});
</script>
