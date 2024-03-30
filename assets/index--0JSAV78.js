var le=Object.defineProperty;var de=(r,e,t)=>e in r?le(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var b=(r,e,t)=>(de(r,typeof e!="symbol"?e+"":e,t),t),Q=(r,e,t)=>{if(!e.has(r))throw TypeError("Cannot "+t)};var s=(r,e,t)=>(Q(r,e,"read from private field"),t?t.call(r):e.get(r)),i=(r,e,t)=>{if(e.has(r))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(r):e.set(r,t)},n=(r,e,t,a)=>(Q(r,e,"write to private field"),a?a.call(r,t):e.set(r,t),t);var V=(r,e,t,a)=>({set _(o){n(r,e,o,t)},get _(){return s(r,e,a)}}),m=(r,e,t)=>(Q(r,e,"access private method"),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const d of o)if(d.type==="childList")for(const h of d.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&a(h)}).observe(document,{childList:!0,subtree:!0});function t(o){const d={};return o.integrity&&(d.integrity=o.integrity),o.referrerPolicy&&(d.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?d.credentials="include":o.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function a(o){if(o.ep)return;o.ep=!0;const d=t(o);fetch(o.href,d)}})();class Z{}b(Z,"availableBoards",{easy:{uiSpecs:{rowSize:5,rowCount:5,nodeSizeInPx:90,verticalOffsetInPx:36,horizontalOffsetInPx:40},snakesList:[{head:6,tail:4},{head:20,tail:9},{head:22,tail:17}],laddersList:[{bottom:2,top:8},{bottom:10,top:18},{bottom:15,top:17}]},medium:{uiSpecs:{rowSize:10,rowCount:10,nodeSizeInPx:61,verticalOffsetInPx:11,horizontalOffsetInPx:19},snakesList:[{head:38,tail:20},{head:51,tail:10},{head:76,tail:54},{head:91,tail:73},{head:97,tail:61}],laddersList:[{bottom:5,top:58},{bottom:14,top:49},{bottom:53,top:72},{bottom:64,top:83}]},difficult:{uiSpecs:{rowSize:10,rowCount:10,nodeSizeInPx:59,verticalOffsetInPx:13,horizontalOffsetInPx:23},snakesList:[{head:17,tail:7},{head:54,tail:34},{head:62,tail:19},{head:64,tail:60},{head:87,tail:36},{head:93,tail:73},{head:95,tail:75},{head:98,tail:79}],laddersList:[{bottom:1,top:38},{bottom:4,top:14},{bottom:9,top:31},{bottom:21,top:42},{bottom:28,top:84},{bottom:51,top:67},{bottom:72,top:91},{bottom:80,top:99}]},classic:{uiSpecs:{rowSize:10,rowCount:10,nodeSizeInPx:61,verticalOffsetInPx:11,horizontalOffsetInPx:19},snakesList:[{head:40,tail:3},{head:43,tail:18},{head:27,tail:5},{head:54,tail:31},{head:66,tail:45},{head:76,tail:58},{head:89,tail:53},{head:99,tail:41}],laddersList:[{bottom:4,top:25},{bottom:13,top:46},{bottom:33,top:49},{bottom:42,top:63},{bottom:50,top:69},{bottom:62,top:81},{bottom:74,top:92}]},rockets:{uiSpecs:{rowSize:10,rowCount:10,nodeSizeInPx:61,verticalOffsetInPx:10,horizontalOffsetInPx:16},snakesList:[{head:43,tail:17},{head:50,tail:5},{head:56,tail:8},{head:73,tail:15},{head:84,tail:58},{head:87,tail:49},{head:98,tail:40}],laddersList:[{bottom:2,top:23},{bottom:4,top:68},{bottom:6,top:45},{bottom:20,top:59},{bottom:30,top:96},{bottom:52,top:72},{bottom:57,top:96},{bottom:71,top:92}]},dragons:{uiSpecs:{rowSize:10,rowCount:10,nodeSizeInPx:60,verticalOffsetInPx:11,horizontalOffsetInPx:19},snakesList:[{head:30,tail:16},{head:37,tail:3},{head:56,tail:8},{head:84,tail:64},{head:87,tail:31},{head:99,tail:40}],laddersList:[{bottom:2,top:23},{bottom:6,top:45},{bottom:20,top:59},{bottom:52,top:72},{bottom:57,top:96},{bottom:74,top:94},{bottom:78,top:98}]}});class c{static htmlElemFromString(e){return new DOMParser().parseFromString(e,"text/html").body.firstChild}static capitalize(e){return e.charAt(0).toUpperCase()+e.slice(1)}static shuffleArray(e){e.sort(()=>Math.random()-.5)}static isSpacebarPressed(e){return e.keyCode===this.spacebarKeyCode}static isEnterPressed(e){return e.keyCode===this.enterKeyCode}}b(c,"spacebarKeyCode",32),b(c,"enterKeyCode",13),b(c,"padToTwoDigits",e=>`0${e}`.slice(-2));class z{static getDiceFaceHtml(e){let t="";switch(e){case 1:t=`<div class="dice first-face">
          <span class="dot">
          </span>
        </div>`;break;case 2:t=`<div class="dice second-face">
          <span class="dot">
          </span>
          <span class="dot">
          </span>
        </div>`;break;case 3:t=`<div class="dice third-face">
          <span class="dot"></span>
          <span class="dot"></span>
          <span class="dot"></span>
        </div>`;break;case 4:t=`<div class="fourth-face dice">
          <div class="dice-column">
            <span class="dot"></span>
            <span class="dot"></span>
          </div>
          <div class="dice-column">
            <span class="dot"></span>
            <span class="dot"></span>
          </div>
        </div>`;break;case 5:t=`<div class="fifth-face dice">
          <div class="dice-column">
            <span class="dot"></span>
            <span class="dot"></span>
          </div>
          <div class="dice-column">
            <span class="dot"></span>
          </div>
          <div class="dice-column">
            <span class="dot"></span>
            <span class="dot"></span>
          </div>
        </div>`;break;case 6:t=`<div class="sixth-face dice">
          <div class="dice-column">
            <span class="dot"></span>
            <span class="dot"></span>
            <span class="dot"></span>
          </div>
          <div class="dice-column">
            <span class="dot"></span>
            <span class="dot"></span>
            <span class="dot"></span>
          </div>
        </div>`;break;default:t='<div class="dice"></div>';break}return t.replace(/(\r\n|\n|\r|\t)/gm,"")}static showCurrentDiceRoll(e){const t=document.getElementById("current-dice-roll");t.classList.remove("is-hidden"),t.innerHTML=z.getDiceFaceHtml(e)}static resetCurrentDiceRoll(){const e=document.getElementById("current-dice-roll");e.innerHTML=z.getDiceFaceHtml(0)}rollDice(){return Math.floor(Math.random()*6)+1}}class p{static addLoggerEntry(e){const t=new Date,a=t.getHours()>12?"PM":"AM",o=t.getHours()%12===0?12:t.getHours()%12,d=`${c.padToTwoDigits(o)}:${c.padToTwoDigits(t.getMinutes())}:${c.padToTwoDigits(t.getSeconds())} ${a}`,h=document.getElementById("logger"),g=c.htmlElemFromString(`<div class="is-family-code mb-3"><p class="is-flex is-justify-content-space-between is-align-items-baseline has-text-weight-semibold has-text-grey"><span>Bot</span><span class="is-size-7">${d}<span></p><p>${e}</p><hr class="m-1"></div>`);h.appendChild(g),h.scrollTop=h.scrollHeight}}class ${static showCurrentTurnText(){document.getElementById("current-player-turn").textContent=`${l.currentPlayerDisplayName}'s turn`}}b($,"disableControls",!1);var E,T,x,C,S,R,_,U,ee,G,te,W,ae,j,se,Y,re;const u=class u{constructor(e,t,a){i(this,R);i(this,U);i(this,G);i(this,W);i(this,j);i(this,Y);i(this,E,void 0);i(this,T,void 0);i(this,x,void 0);i(this,C,void 0);i(this,S,void 0);n(this,x,e),n(this,E,Z.availableBoards[t]),n(this,T,t),n(this,S,a.slice(0,s(this,x))),n(this,C,["beige","black","greenyellow","salmon"]),m(this,R,_).call(this),m(this,U,ee).call(this),m(this,G,te).call(this),m(this,W,ae).call(this),m(this,j,se).call(this),m(this,Y,re).call(this),p.addLoggerEntry("Game is ready to be played"),p.addLoggerEntry(`${u.currentPlayerDisplayName}'s turn, ${u.currentPlayerDisplayName} can roll the die`)}static get currentPlayerDisplayName(){return c.capitalize(u.currentPlayer.playerName)}get dice(){return new z}get nodes(){return u.nodes}get players(){return u.players}};E=new WeakMap,T=new WeakMap,x=new WeakMap,C=new WeakMap,S=new WeakMap,R=new WeakSet,_=function(){document.getElementById("game-board-img").src=`./images/boards/${s(this,T)}.jpg`,p.addLoggerEntry("Initialized Board Image")},U=new WeakSet,ee=function(){const{rowSize:e,rowCount:t}=s(this,E).uiSpecs;for(var a=0;a<e*t;a++)u.nodes.push(new ce);p.addLoggerEntry("Initialized Nodes")},G=new WeakSet,te=function(){s(this,E).snakesList.forEach(e=>{const{head:t,tail:a}=e;u.nodes[t-1].setSnake(new oe(t,a))}),p.addLoggerEntry("Initialized Snakes")},W=new WeakSet,ae=function(){s(this,E).laddersList.forEach(e=>{const{top:t,bottom:a}=e;u.nodes[a-1].setLadder(new ie(t,a))}),p.addLoggerEntry("Initialized Ladders")},j=new WeakSet,se=function(){const e=document.getElementById("player-colors");c.shuffleArray(s(this,C)),c.shuffleArray(s(this,S));for(let t=0;t<s(this,x);t++){const a=s(this,C)[t],o=s(this,S)[t],d=c.htmlElemFromString(`<div id="${a}-player" class="player ${a}-player" style="color: ${a};"><i class="fas fa-chess-pawn"></i></div>`);u.players.push(new pe(a,0,s(this,E).uiSpecs,o)),document.getElementById("initial-spacer-div").appendChild(d),e.appendChild(c.htmlElemFromString(`<p><span class="has-text-weight-semibold">${o}</span> - ${c.capitalize(a)}</p>`))}p.addLoggerEntry("Initialized Players"),u.currentPlayer=u.players[0],$.showCurrentTurnText()},Y=new WeakSet,re=function(){const e=document.getElementById("time-passed");let t=0;const a=60;setInterval(()=>{t<a?e.innerHTML=`00:${c.padToTwoDigits(t)}`:e.innerHTML=`${c.padToTwoDigits(Math.floor(t/a))}:${c.padToTwoDigits(t%a)}`,t++},1e3),p.addLoggerEntry("Initialized Timer")},b(u,"currentPlayer",null),b(u,"players",[]),b(u,"nodes",[]);let l=u;var w,L;class ce{constructor(){i(this,w,void 0);i(this,L,void 0);n(this,w,new oe(null,null)),n(this,L,new ie(null,null))}get snake(){return s(this,w)}setSnake(e){n(this,w,e)}get ladder(){return s(this,L)}setLadder(e){n(this,L,e)}hasSnakeHead(){return!!s(this,w).head}hasLadderBottom(){return!!s(this,L).bottom}}w=new WeakMap,L=new WeakMap;var k,B;class oe{constructor(e,t){i(this,k,void 0);i(this,B,void 0);n(this,k,e),n(this,B,t)}get head(){return s(this,k)}get tail(){return s(this,B)}}k=new WeakMap,B=new WeakMap;var O,M;class ie{constructor(e,t){i(this,O,void 0);i(this,M,void 0);n(this,O,e),n(this,M,t)}get top(){return s(this,O)}get bottom(){return s(this,M)}}O=new WeakMap,M=new WeakMap;var H,f,y,F,P,D,K,v,I,q,ne;class pe{constructor(e,t,a,o){i(this,D);i(this,v);i(this,q);i(this,H,void 0);i(this,f,void 0);i(this,y,void 0);i(this,F,void 0);i(this,P,void 0);n(this,P,500),n(this,H,a),n(this,y,e),n(this,F,o),n(this,f,t)}get currentPosition(){return s(this,f)}get playerId(){return s(this,y)}get playerName(){return s(this,F)}moveUponDiceRoll(e){z.showCurrentDiceRoll(e),p.addLoggerEntry(`Die rolled ${e}`);const t=s(this,f)===0,a=s(this,f)+e>100,o=e===6;if(t){const g=document.getElementById(`${s(this,y)}-player`);g.remove(),document.getElementById("snake-board").appendChild(g)}if(a){if(p.addLoggerEntry(`Die rolled ${e}. Die roll overflow, can't move ahead. ${l.currentPlayerDisplayName} needs ${100-s(this,f)} to win the game`),o){p.addLoggerEntry(`Die rolled ${e}, ${l.currentPlayerDisplayName} gets an extra die roll`),m(this,v,I).call(this,s(this,y),!1);return}m(this,v,I).call(this,s(this,y));return}p.addLoggerEntry(`${l.currentPlayerDisplayName} is moving on the board`);let d=0,h=setInterval(()=>{if(d++,V(this,f)._++,m(this,D,K).call(this),d>=e){const g=l.nodes[l.currentPlayer.currentPosition-1];if(clearInterval(h),g.hasSnakeHead()){p.addLoggerEntry(`Aww, ${l.currentPlayerDisplayName} got bit by a snake`),n(this,f,g.snake.tail),m(this,v,I).call(this,s(this,y)),setTimeout(()=>{m(this,D,K).call(this)},s(this,P));return}if(g.hasLadderBottom()){p.addLoggerEntry(`${l.currentPlayerDisplayName} climbed a ladder, gets an extra die roll`),n(this,f,g.ladder.top),m(this,v,I).call(this,s(this,y),!1),setTimeout(()=>{m(this,D,K).call(this)},s(this,P));return}if(o){p.addLoggerEntry(`Die rolled ${e}, ${l.currentPlayerDisplayName} gets an extra die roll`),m(this,v,I).call(this,s(this,y),!1);return}m(this,v,I).call(this,s(this,y))}},s(this,P))}}H=new WeakMap,f=new WeakMap,y=new WeakMap,F=new WeakMap,P=new WeakMap,D=new WeakSet,K=function(){const{x:e,y:t}=m(this,q,ne).call(this,s(this,f)),a=document.getElementById(`${s(this,y)}-player`);a.style.bottom=`${t}px`,a.style.left=`${e}px`},v=new WeakSet,I=function(e,t=!0){if(l.currentPlayer.currentPosition===100&&(p.addLoggerEntry(`Congratulations ${l.currentPlayerDisplayName}! You won the game`),alert(`Congratulations ${c.capitalize(l.currentPlayer.playerId)} Wins! You won the game`),window.location.reload()),t){const h=(l.players.map(g=>s(g,y)).indexOf(e)+1)%l.players.length;l.currentPlayer=l.players[h],$.showCurrentTurnText(),p.addLoggerEntry("Switching Turn")}p.addLoggerEntry(`${l.currentPlayerDisplayName}'s turn, ${l.currentPlayerDisplayName} can roll the die`),z.resetCurrentDiceRoll(),$.disableControls=!1},q=new WeakSet,ne=function(e){const{horizontalOffsetInPx:t,nodeSizeInPx:a,rowSize:o,verticalOffsetInPx:d}=s(this,H),h=J=>J%o===0,g=J=>J%2===0;let A,N;return h(e)?A=e/o-1:A=Math.floor(e/o),g(A)?h(e)?N=o-1:N=e%o-1:h(e)?N=0:N=Math.abs(e%o-o),{x:a*N+t,y:a*A+d}};class me{static selectBoard(e,t){const a=document.getElementById("selected-board");e.forEach(o=>{o.classList.remove("selected")}),a.value=t.currentTarget.getAttribute("data-board"),t.currentTarget.classList.add("selected")}}const X=()=>{const r=document.getElementById("player-count"),e=Math.abs(parseInt(r.value,10));if(isNaN(e))throw alert("Enter a valid number"),new Error("Halted game execution");if(e>4)throw alert("Max 4 players can play the game"),new Error("Halted game execution");if(e<=1)throw alert("Min 2 players can play the game"),new Error("Halted game execution");document.getElementById("game-init-step").classList.add("is-hidden"),document.getElementById("snake-game-step").classList.remove("is-hidden"),document.getElementById("snake-game-step").classList.add(`${document.getElementById("selected-board").value}-snake-board`);const t=Array.from(document.getElementsByClassName("player-name-input")).map(({value:a})=>a);return new l(e,document.getElementById("selected-board").value,t)};document.addEventListener("DOMContentLoaded",()=>{let r=null;const e=document.getElementById("player-count");document.getElementById("start-game").addEventListener("click",()=>{r=X()}),e.addEventListener("keypress",a=>{c.isEnterPressed(a)&&(r=X())});const t=Array.from(document.getElementsByClassName("board-container"));t.forEach(a=>{a.addEventListener("click",me.selectBoard.bind(null,t))}),document.body.onkeyup=a=>{if(c.isSpacebarPressed(a)){if($.disableControls)return;$.disableControls=!0,l.currentPlayer.moveUponDiceRoll(r.dice.rollDice())}},e.focus()});
