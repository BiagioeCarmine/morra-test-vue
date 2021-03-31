<template>
    <form @submit.prevent="logIn">
        <input placeholder="username" type="text" v-model="username" />
        <input placeholder="password" type="password" v-model="password" />
        <button>Login</button>
    </form>
    <a href="/#/signup">oppure Registrati</a>
</template>

<script>
import backend from "../backend"

export default {
  name: 'Login',
  data: () => {
      return {
        username: "",
        password: ""
      }
  },
  methods: {
      async logIn() {
        try {
            let res = await backend.logIn(this.$data.username, this.$data.password);
            window.localStorage.setItem("token", res.data);
            window.location.href = "/";
        } catch(e){ alert(`Si è verificato l'errore\n${e}`);}
      }
  }
}
</script>
