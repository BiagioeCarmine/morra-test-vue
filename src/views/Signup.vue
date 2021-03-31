<template>
    <form @submit.prevent="signUp">
        <input placeholder="username" type="text" v-model="username" />
        <input placeholder="password" type="password" v-model="password" />
        <button>Signup</button>
    </form>
</template>

<script>
import backend from "../backend"

export default {
  name: 'Signup',
  data: () => {
      return {
        username: "",
        password: ""
      }
  },
  methods: {
      async signUp() {
          try {
            let res = await backend.signUp(this.$data.username, this.$data.password);
            alert("Signup eseguito con successo");
            window.location.href = "/#/login";
          } catch(e) { alert(`Si è verificato l'errore\n${e}`);}
      }
  }
}
</script>
