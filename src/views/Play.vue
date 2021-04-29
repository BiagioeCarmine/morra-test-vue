<template>
  <div v-if="over">
    Partita finita
    <div v-if="scoreUser == 12">
      <h1>Hai vinto, complimenti, dona del danaro a carmine@carminezacc.com su PayPal e vincerai anche altre partite</h1>
    </div>
    <div v-if="scoreOtherPlayer == 12">
      <h1>Hai perso, dona del danaro a carmine@carminezacc.com su PayPal e vedi che vincerai almeno una partita prima o poi</h1>
    </div>
  </div>
  <div v-else-if="waiting">
    In attesa...
  </div>
  <div v-else>
    <h1>Gioca la partita</h1>
    <h2>{{ secondiRimanenti }} secondi rimanenti per scegliere la mossa</h2>
    <h2> {{ scoreUser }}-{{ scoreOtherPlayer }}</h2>
    <h2 v-if="scoreOtherPlayer != 0 || scoreUser != 0"> Nell'ultimo round l'altro giocatore ha buttato {{ handOtherPlayer }} e ha urlato {{ predictionOtherPlayer }}!!</h2>
    <h2>Mano, scelta {{ hand }}</h2>
    <input type="radio" value=1 v-model="hand" />1<br />
    <input type="radio" value=2 v-model="hand" />2<br />
    <input type="radio" value=3 v-model="hand" />3<br />
    <input type="radio" value=4 v-model="hand" />4<br />
    <input type="radio" value=5 v-model="hand" />5<br />
    <h2>Previsione, scelta {{ prediction }}</h2>
    <input type="radio" value=2 v-model="prediction" />2<br />
    <input type="radio" value=3 v-model="prediction" />3<br />
    <input type="radio" value=4 v-model="prediction" />4<br />
    <input type="radio" value=5 v-model="prediction" />5<br />
    <input type="radio" value=6 v-model="prediction" />6<br />
    <input type="radio" value=7 v-model="prediction" />7<br />
    <input type="radio" value=8 v-model="prediction" />8<br />
    <input type="radio" value=9 v-model="prediction" />9<br />
    <input type="radio" value=10 v-model="prediction" />10<br />
  </div>

</template>
<script>
import backend from "../backend"
import {useRoute} from 'vue-router';

export default {
  name: 'Play',
  data: () => {
      return {
        q: useRoute().query.match,
        scoreUser: 0,
        scoreOtherPlayer: 0,
        waiting: true,
        hand: 1,
        match: {},
        prediction: 2,
        remainingTime: 5,
        nextRoundTime: null,
        secondiRimanenti: 0,
        handOtherPlayer: undefined,
        predictionOtherPlayer: undefined,
        token: "",
        id: 0,
        weAreUser1: false,
        active: true,
        over: false
      }
  },
  created: async function() {
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
    this.token = token;
    await this.getMatch();
    if(this.match.userid1 == this.id) {
      this.weAreUser1 = true;
    } else if (this.match.userid2 != this.id) {
      alert("con questa partita non c'entri niente");
      window.location.href = "/";
    }

    setInterval(this.calculateRemainingSeconds, 100)
    setTimeout(() => {
      if(this.waiting)
        window.location.href = "/";
    }, 15000)
  },
  beforeRouteLeave: function() {
    this.active = false;
  },
  methods: {
      async calculateRemainingSeconds() {
        this.secondiRimanenti = Math.floor((new Date(this.nextRoundTime).getTime()-Date.now())/1000)
      },
      async getMatch() {
        this.match = await backend.getMatch(this.q);
        if(this.waiting && !this.match.confirmed) {
          setTimeout(this.getMatch, 800) // aspettiamo che la partita sia confermata
        }
        if(this.match.confirmed) {
          this.waiting = false;
          this.nextRoundTime = this.match.start_time;
          let msToNextRound = new Date(this.match.start_time).getTime()-Date.now();
          setTimeout(this.setMove, msToNextRound);
          this.remainingTime = Math.floor(msToNextRound/1000);
        }
      },
      async setMove() {
        if(!this.active) return;
        try {
            let res = await backend.setMove(this.hand, this.prediction, this.match.id, this.token);
            let msToNextRound = new Date(res.data.next_round_results).getTime()-Date.now();
            setTimeout(this.getMove, msToNextRound);
        } catch(e){ alert(`Si è verificato l'errore\n${e}`);}
      },
      async getMove() {
        if(!this.active) return;
        try {
            let res = await backend.getMove(this.match.id);
            console.log(res.data);
            if(this.weAreUser1) {
              this.scoreUser = res.data.cur_points1;
              this.scoreOtherPlayer = res.data.cur_points2;
              this.handOtherPlayer = res.data.hand2;
              this.predictionOtherPlayer = this.handOtherPlayer = res.data.prediction2;
            } else {
              this.scoreUser = res.data.cur_points2;
              this.scoreOtherPlayer = res.data.cur_points1;
              this.handOtherPlayer = res.data.hand1;
              this.predictionOtherPlayer = this.handOtherPlayer = res.data.prediction1;
            }
            if(res.data.next_round_start == "over") {
              this.over = true;
              return;
            }
            let msToNextRound = new Date(res.data.next_round_start).getTime()-Date.now();
            this.nextRoundTime = res.data.next_round_start;
            setTimeout(this.setMove, msToNextRound);
        } catch(e){ alert(`Si è verificato l'errore\n${e}`);}
      }
  }
}
</script>
