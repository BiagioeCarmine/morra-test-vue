(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0ddbee"],{8363:function(e,t,n){"use strict";n.r(t);var r=n("7a23"),a={key:0},i=Object(r["f"])(" Partita finita "),c={key:0},o=Object(r["g"])("h1",null,"Hai vinto, complimenti, dona del danaro a carmine@carminezacc.com su PayPal e vincerai anche altre partite",-1),u={key:1},l=Object(r["g"])("h1",null,"Hai perso, dona del danaro a carmine@carminezacc.com su PayPal e vedi che vincerai almeno una partita prima o poi",-1),d={key:1},s={key:2},b=Object(r["g"])("h1",null,"Gioca la partita",-1),p={key:0},O=Object(r["f"])("1"),h=Object(r["g"])("br",null,null,-1),j=Object(r["f"])("2"),m=Object(r["g"])("br",null,null,-1),g=Object(r["f"])("3"),v=Object(r["g"])("br",null,null,-1),f=Object(r["f"])("4"),w=Object(r["g"])("br",null,null,-1),y=Object(r["f"])("5"),x=Object(r["g"])("br",null,null,-1),k=Object(r["f"])("2"),R=Object(r["g"])("br",null,null,-1),U=Object(r["f"])("3"),P=Object(r["g"])("br",null,null,-1),A=Object(r["f"])("4"),T=Object(r["g"])("br",null,null,-1),M=Object(r["f"])("5"),V=Object(r["g"])("br",null,null,-1),_=Object(r["f"])("6"),D=Object(r["g"])("br",null,null,-1),S=Object(r["f"])("7"),q=Object(r["g"])("br",null,null,-1),F=Object(r["f"])("8"),I=Object(r["g"])("br",null,null,-1),z=Object(r["f"])("9"),H=Object(r["g"])("br",null,null,-1),J=Object(r["f"])("10"),G=Object(r["g"])("br",null,null,-1);function L(e,t,n,L,N,B){return e.over?(Object(r["p"])(),Object(r["d"])("div",a,[i,12==e.scoreUser?(Object(r["p"])(),Object(r["d"])("div",c,[o])):Object(r["e"])("",!0),12==e.scoreOtherPlayer?(Object(r["p"])(),Object(r["d"])("div",u,[l])):Object(r["e"])("",!0)])):e.waiting?(Object(r["p"])(),Object(r["d"])("div",d," In attesa... ")):(Object(r["p"])(),Object(r["d"])("div",s,[b,Object(r["g"])("h2",null,Object(r["v"])(e.secondiRimanenti)+" secondi rimanenti per scegliere la mossa",1),Object(r["g"])("h2",null,Object(r["v"])(e.secondiRimanenti2)+" secondi rimanenti per saper eil risultato del round",1),Object(r["g"])("h2",null,Object(r["v"])(e.scoreUser)+"-"+Object(r["v"])(e.scoreOtherPlayer),1),e.notFirstRound?(Object(r["p"])(),Object(r["d"])("h2",p," Nell'ultimo round l'altro giocatore ha buttato "+Object(r["v"])(e.handOtherPlayer)+" e ha urlato "+Object(r["v"])(e.predictionOtherPlayer)+"!!",1)):Object(r["e"])("",!0),Object(r["g"])("h2",null,"Mano, scelta "+Object(r["v"])(e.hand),1),Object(r["A"])(Object(r["g"])("input",{type:"radio",value:"1","onUpdate:modelValue":t[1]||(t[1]=function(t){return e.hand=t})},null,512),[[r["x"],e.hand]]),O,h,Object(r["A"])(Object(r["g"])("input",{type:"radio",value:"2","onUpdate:modelValue":t[2]||(t[2]=function(t){return e.hand=t})},null,512),[[r["x"],e.hand]]),j,m,Object(r["A"])(Object(r["g"])("input",{type:"radio",value:"3","onUpdate:modelValue":t[3]||(t[3]=function(t){return e.hand=t})},null,512),[[r["x"],e.hand]]),g,v,Object(r["A"])(Object(r["g"])("input",{type:"radio",value:"4","onUpdate:modelValue":t[4]||(t[4]=function(t){return e.hand=t})},null,512),[[r["x"],e.hand]]),f,w,Object(r["A"])(Object(r["g"])("input",{type:"radio",value:"5","onUpdate:modelValue":t[5]||(t[5]=function(t){return e.hand=t})},null,512),[[r["x"],e.hand]]),y,x,Object(r["g"])("h2",null,"Previsione, scelta "+Object(r["v"])(e.prediction),1),Object(r["A"])(Object(r["g"])("input",{type:"radio",value:"2","onUpdate:modelValue":t[6]||(t[6]=function(t){return e.prediction=t})},null,512),[[r["x"],e.prediction]]),k,R,Object(r["A"])(Object(r["g"])("input",{type:"radio",value:"3","onUpdate:modelValue":t[7]||(t[7]=function(t){return e.prediction=t})},null,512),[[r["x"],e.prediction]]),U,P,Object(r["A"])(Object(r["g"])("input",{type:"radio",value:"4","onUpdate:modelValue":t[8]||(t[8]=function(t){return e.prediction=t})},null,512),[[r["x"],e.prediction]]),A,T,Object(r["A"])(Object(r["g"])("input",{type:"radio",value:"5","onUpdate:modelValue":t[9]||(t[9]=function(t){return e.prediction=t})},null,512),[[r["x"],e.prediction]]),M,V,Object(r["A"])(Object(r["g"])("input",{type:"radio",value:"6","onUpdate:modelValue":t[10]||(t[10]=function(t){return e.prediction=t})},null,512),[[r["x"],e.prediction]]),_,D,Object(r["A"])(Object(r["g"])("input",{type:"radio",value:"7","onUpdate:modelValue":t[11]||(t[11]=function(t){return e.prediction=t})},null,512),[[r["x"],e.prediction]]),S,q,Object(r["A"])(Object(r["g"])("input",{type:"radio",value:"8","onUpdate:modelValue":t[12]||(t[12]=function(t){return e.prediction=t})},null,512),[[r["x"],e.prediction]]),F,I,Object(r["A"])(Object(r["g"])("input",{type:"radio",value:"9","onUpdate:modelValue":t[13]||(t[13]=function(t){return e.prediction=t})},null,512),[[r["x"],e.prediction]]),z,H,Object(r["A"])(Object(r["g"])("input",{type:"radio",value:"10","onUpdate:modelValue":t[14]||(t[14]=function(t){return e.prediction=t})},null,512),[[r["x"],e.prediction]]),J,G]))}var N=n("1da1"),B=(n("96cf"),n("466d"),n("ac1f"),n("20d4")),C=n("6c02"),E={name:"Play",data:function(){return{q:Object(C["c"])().query.match,scoreUser:0,scoreOtherPlayer:0,waiting:!0,hand:1,match:{},prediction:2,remainingTime:5,nextRoundTime:null,secondiRimanenti:0,handOtherPlayer:void 0,predictionOtherPlayer:void 0,token:"",id:0,notFirstRound:!1,weAreUser1:!1,active:!0,over:!1}},created:function(){var e=Object(N["a"])(regeneratorRuntime.mark((function e(){var t,n,r=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t=localStorage.getItem("token"),null!=t){e.next=5;break}return console.log("andiamo al login per token mancante"),window.location.href="/#/login",e.abrupt("return");case 5:return e.prev=5,e.next=8,B["a"].verifyUser(t);case 8:n=e.sent,this.id=n.data.id,e.next=17;break;case 12:return e.prev=12,e.t0=e["catch"](5),console.log("andiamo al login per token non valido"),window.location.href="/#/login",e.abrupt("return");case 17:return this.token=t,e.next=20,this.getMatch();case 20:this.match.userid1==this.id?this.weAreUser1=!0:this.match.userid2!=this.id&&(alert("con questa partita non c'entri niente"),window.location.href="/"),setInterval(this.calculateRemainingSeconds,100),setTimeout((function(){r.waiting&&(window.location.href="/")}),15e3);case 23:case"end":return e.stop()}}),e,this,[[5,12]])})));function t(){return e.apply(this,arguments)}return t}(),beforeRouteLeave:function(){this.active=!1},methods:{calculateRemainingSeconds:function(){var e=this;return Object(N["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.secondiRimanenti=Math.floor((new Date(e.nextRoundTime).getTime()-Date.now())/1e3);case 1:case"end":return t.stop()}}),t)})))()},getMatch:function(){var e=this;return Object(N["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,B["a"].getMatch(e.q);case 2:e.match=t.sent,e.waiting&&!e.match.confirmed&&setTimeout(e.getMatch,800),e.match.confirmed&&(e.waiting=!1,e.nextRoundTime=e.match.start_time,n=new Date(e.match.start_time).getTime()-Date.now(),setTimeout(e.setMove,n),e.remainingTime=Math.floor(n/1e3));case 5:case"end":return t.stop()}}),t)})))()},setMove:function(){var e=this;return Object(N["a"])(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.active){t.next=2;break}return t.abrupt("return");case 2:return t.prev=2,t.next=5,B["a"].setMove(e.hand,e.prediction,e.match.id,e.token);case 5:n=t.sent,r=new Date(n.data.next_round_results).getTime()-Date.now(),setTimeout(e.getMove,r),t.next=13;break;case 10:t.prev=10,t.t0=t["catch"](2),alert("Si è verificato l'errore\n".concat(t.t0));case 13:case"end":return t.stop()}}),t,null,[[2,10]])})))()},getMove:function(){var e=this;return Object(N["a"])(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.active){t.next=2;break}return t.abrupt("return");case 2:return e.notFirstRound=!0,t.prev=3,t.next=6,B["a"].getMove(e.match.id);case 6:if(n=t.sent,console.log(n.data),e.weAreUser1?(e.scoreUser=n.data.cur_points1,e.scoreOtherPlayer=n.data.cur_points2,e.handOtherPlayer=n.data.hand2,e.predictionOtherPlayer=e.handOtherPlayer=n.data.prediction2):(e.scoreUser=n.data.cur_points2,e.scoreOtherPlayer=n.data.cur_points1,e.handOtherPlayer=n.data.hand1,e.predictionOtherPlayer=e.handOtherPlayer=n.data.prediction1),"over"!=n.data.next_round_start){t.next=12;break}return e.over=!0,t.abrupt("return");case 12:r=new Date(n.data.next_round_start).getTime()-Date.now(),e.nextRoundTime=n.data.next_round_start,setTimeout(e.setMove,r),t.next=20;break;case 17:t.prev=17,t.t0=t["catch"](3),alert("Si è verificato l'errore\n".concat(t.t0));case 20:case"end":return t.stop()}}),t,null,[[3,17]])})))()}}};E.render=L;t["default"]=E}}]);
//# sourceMappingURL=chunk-2d0ddbee.81a44991.js.map