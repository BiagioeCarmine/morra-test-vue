<template>
  <div class="home">
    <h1>Gioca</h1>
      <div v-if="waiting">
        <h1 style="color: green">Sei in attesa. Abbi pazienza.</h1>
        <span v-if="inPrivateQueue">User ID: {{ userId }}</span>
      </div>
      <div v-else>
        <h1>Coda pubblica</h1>
        <button @click="addToPublicQueue">Aggiungiti alla coda pubblica</button>

        <h1>Coda privata</h1>
        <button @click="addToPrivateQueue">"Crea una lobby" (aka aggiungiti all coda privata)</button>
        <h2>Gioca con gli amici</h2>
        <form @submit.prevent="playWithFriend">
          <input type="text" placeholder="User ID Amico" v-model="friendId" />
          <button>Gioca con amico</button>
        </form>
      </div>
  </div>
</template>

<script>
import backend from "../backend";

export default {
  name: "Home",
  data: () => {
    return {
      connected: false,
      waiting: false,
      userId: undefined,
      friendId: "",
      inPrivateQueue: false,
      id: null,
      token: ""
    }
  },
  mounted: async function() {
    let token = localStorage.getItem("token");
    if(token == null) {
      console.log("andiamo al login per token mancante");
      window.location.href = "/#/login";
      return;
    }

    try {
      let res = await backend.verifyUser(token);
      this.id = res.data.id;
    } catch(e) {
      console.log("andiamo al login per token non valido");
      window.location.href = "/#/login";
      return;
    }

    console.log("non andiamo al login");

    this.token = token
    this.userId = JSON.parse(atob(token.split(".")[1])).id;

      
  },
  beforeRouteLeave: function() {
    this.waiting = false;
  },
  methods: {
    playMatch(id) {
      location.href = `/#/play?match=${id}`
    },
    handlePolling(data) {
      if(!this.waiting) return;
      if(data.inQueue == true) {
        let pollTime = new Date(data.pollBefore); // 2021-04-28T15:49:57.109787+00:00
        setTimeout(this.pollForMatches, pollTime.getTime()-Date.now());
      } else {
        this.waiting = false;
        this.inPrivateQueue = false;
        console.log("utente rimosso per inattività");
      }
    },
    async pollForMatches() {
      if(!this.waiting) return;
      let res = await backend.getQueueStatus(this.token);
      if(res.status == 201 || res.data.created) {
        this.playMatch(res.data.match);
      } else if(res.status == 200) {
        this.handlePolling(res.data);
      } else {
        console.log(`stato sconosciuto: ${res.status}: ${res.data}`);
      }
    },
    async addToPublicQueue() {
      let res = await backend.addToPublicQueue(this.token);
      if(res.status == 201 || res.data.created) {
        this.playMatch(res.data.match);
      } else if(res.status == 200) {
        this.waiting = true;
        this.handlePolling(res.data);
      } else {
        console.log(`stato sconosciuto: ${res.status}: ${res.data}`);
      }
    },
    async addToPrivateQueue() {
      let res = await backend.addToPrivateQueue(this.token);
      this.waiting = true;
      this.inPrivateQueue = true;
      this.handlePolling(res.data);
    },
    async playWithFriend() {
      try {  
        let res = await backend.playWithFriend(this.friendId, this.token);
        this.playMatch(res.data.match);
      } catch(e) {
        alert("l'utente selezionato non è online");
      }
    }
  }
}
</script>
