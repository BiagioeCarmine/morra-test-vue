<template>
<div v-if="loggedIn">
    <button @click="logOut">Logout</button>
    <hr />
</div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Logout",
  data: () => {
    return {
        loggedIn: false
    }
  },
  mounted() {
      if(localStorage.getItem("token") != null) this.loggedIn = true;
  },
  methods: {
      logOut() {
          localStorage.removeItem('token');
          location.href = "/#/login";
      }
  }

});
</script>
