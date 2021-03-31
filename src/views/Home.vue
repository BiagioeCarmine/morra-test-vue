<template>
  <div class="home">
    <h1>Gioca</h1>
    <div v-if="connected">
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
    <span v-else style="color: red">Caricamento in corso</span>
  </div>
</template>

<script>
import {io} from "socket.io-client";

export default {
  name: "Home",
  data: () => {
    return {
      connected: false,
      waiting: false,
      userId: undefined,
      friendId: "",
      inPrivateQueue: false,
      socket: null,
      token: ""
    }
  },
  mounted: function() {
    let token = localStorage.getItem("token");
    if(token == null) {
      console.log("andiamo al login");
      window.location.href = "/#/login";
      return;
    }

    console.log("non andiamo al login");
    this.socket = io("https://morra.carminezacc.com/mm", { transports: ["websocket"] });

    this.socket.on("match created", data => {
      location.href = "/#/play?match="+data
    });


    this.token = token
    this.userId = JSON.parse(atob(token.split(".")[1])).id;

    this.socket.on("connect", () => {this.connected = true})
      
  },
  methods: {
    addToPublicQueue() {
      this.socket.emit("queue", this.token, data => {
        if(data == "OK") {
          this.waiting = true;
        } else alert(data);
      });
      
    },
    addToPrivateQueue() {
      this.socket.emit("private_queue", this.token, data => {
        if(data == "OK") {
          this.waiting = true;
          this.inPrivateQueue = true;
        } else alert(data);
      });
    },
    playWithFriend() {
      this.socket.emit("play_with_friend", this.token, this.friendId, data => {
        if(data != "OK") {
          alert(data);
        }
      });
    }
  }
}
</script>
