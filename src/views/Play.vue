<template>
  <div class="about">
    <h1>Gioca la partita {{ q }}</h1>
  </div>

</template>
<script>
import backend from "../backend"
import {useRoute} from 'vue-router';

export default {
  name: 'Login',
  data: () => {
      return {
        q: useRoute().query.q
      }
  },
  methods: {
      async login() {
        try {
            let res = await backend.logIn(this.username, this.password);
            window.localStorage.setItem("token", res.data);
            window.location.href = "/";
        } catch(e){ alert(`Si è verificato l'errore\n${e}`);}
      }
  }
}
</script>
