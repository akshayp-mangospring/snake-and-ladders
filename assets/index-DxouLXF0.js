var le=Object.defineProperty;var de=(r,e,t)=>e in r?le(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var f=(r,e,t)=>(de(r,typeof e!="symbol"?e+"":e,t),t),V=(r,e,t)=>{if(!e.has(r))throw TypeError("Cannot "+t)};var a=(r,e,t)=>(V(r,e,"read from private field"),t?t.call(r):e.get(r)),o=(r,e,t)=>{if(e.has(r))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(r):e.set(r,t)},l=(r,e,t,s)=>(V(r,e,"write to private field"),s?s.call(r,t):e.set(r,t),t);var X=(r,e,t,s)=>({set _(i){l(r,e,i,t)},get _(){return a(r,e,s)}}),m=(r,e,t)=>(V(r,e,"access private method"),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const c of i)if(c.type==="childList")for(const h of c.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function t(i){const c={};return i.integrity&&(c.integrity=i.integrity),i.referrerPolicy&&(c.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?c.credentials="include":i.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(i){if(i.ep)return;i.ep=!0;const c=t(i);fetch(i.href,c)}})();class K{}f(K,"availableBoards",{classic:{uiSpecs:{rowSize:10,rowCount:10,nodeSizeInPx:61,verticalOffsetInPx:11,horizontalOffsetInPx:19},snakesList:[{head:40,tail:3},{head:43,tail:18},{head:27,tail:5},{head:54,tail:31},{head:66,tail:45},{head:76,tail:58},{head:89,tail:53},{head:99,tail:41}],laddersList:[{bottom:4,top:25},{bottom:13,top:46},{bottom:33,top:49},{bottom:42,top:63},{bottom:50,top:69},{bottom:62,top:81},{bottom:74,top:92}]},rockets:{uiSpecs:{rowSize:10,rowCount:10,nodeSizeInPx:61,verticalOffsetInPx:10,horizontalOffsetInPx:16},snakesList:[{head:43,tail:17},{head:50,tail:5},{head:56,tail:8},{head:73,tail:15},{head:84,tail:58},{head:87,tail:49},{head:98,tail:40}],laddersList:[{bottom:2,top:23},{bottom:4,top:68},{bottom:6,top:45},{bottom:20,top:59},{bottom:30,top:96},{bottom:52,top:72},{bottom:57,top:96},{bottom:71,top:92}]},dragons:{uiSpecs:{rowSize:10,rowCount:10,nodeSizeInPx:60,verticalOffsetInPx:11,horizontalOffsetInPx:19},snakesList:[{head:30,tail:16},{head:37,tail:3},{head:56,tail:8},{head:84,tail:64},{head:87,tail:31},{head:99,tail:40}],laddersList:[{bottom:2,top:23},{bottom:6,top:45},{bottom:20,top:59},{bottom:52,top:72},{bottom:57,top:96},{bottom:74,top:94},{bottom:78,top:98}]}}),f(K,"dieRollsHtml",{0:"<div></div>",1:'<div class="dice first-face"><span class="dot"></span></div>',2:'<div class="dice second-face"><span class="dot"></span><span class="dot"></span></div>',3:'<div class="dice third-face"><span class="dot"></span><span class="dot"></span><span class="dot"></span></div>',4:'<div class="fourth-face dice"><div class="dice-column"><span class="dot"></span><span class="dot"></span></div><div class="dice-column"><span class="dot"></span><span class="dot"></span></div></div>',5:'<div class="fifth-face dice"><div class="dice-column"><span class="dot"></span><span class="dot"></span></div><div class="dice-column"><span class="dot"></span></div><div class="dice-column"><span class="dot"></span><span class="dot"></span></div></div>',6:'<div class="sixth-face dice"><div class="dice-column"><span class="dot"></span><span class="dot"></span><span class="dot"></span></div><div class="dice-column"><span class="dot"></span><span class="dot"></span><span class="dot"></span></div></div>'});class n{static htmlElemFromString(e){return new DOMParser().parseFromString(e,"text/html").body.firstChild}static capitalize(e){return e.charAt(0).toUpperCase()+e.slice(1)}static shuffleArray(e){e.sort(()=>Math.random()-.5)}static isSpacebarPressed(e){return e.keyCode===this.spacebarKeyCode}static isEnterPressed(e){return e.keyCode===this.enterKeyCode}}f(n,"spacebarKeyCode",32),f(n,"enterKeyCode",13),f(n,"sleep",e=>new Promise(t=>setTimeout(t,e))),f(n,"padToTwoDigits",e=>`0${e}`.slice(-2));class N{static getDiceFaceHtml(e){return K.dieRollsHtml[e]}static showCurrentDiceRoll(e){const t=document.getElementById("current-dice-roll");t.classList.remove("is-hidden"),t.innerHTML=N.getDiceFaceHtml(e)}static resetCurrentDiceRoll(){const e=document.getElementById("current-dice-roll");e.innerHTML=N.getDiceFaceHtml(0)}rollDice(){return Math.floor(Math.random()*6)+1}}class p{static addLoggerEntry(e){const t=new Date,s=t.getHours()>12?"PM":"AM",i=t.getHours()%12===0?12:t.getHours()%12,c=`${n.padToTwoDigits(i)}:${n.padToTwoDigits(t.getMinutes())}:${n.padToTwoDigits(t.getSeconds())} ${s}`,h=document.getElementById("logger"),g=n.htmlElemFromString(`<div class="is-family-code mb-3"><p class="is-flex is-justify-content-space-between is-align-items-baseline has-text-weight-semibold has-text-grey"><span>Bot</span><span class="is-size-7">${c}<span></p><p>${e}</p><hr class="m-1"></div>`);h.appendChild(g),h.scrollTop=h.scrollHeight}}class v{static showCurrentTurnText(){document.getElementById("current-player-turn").textContent=`${n.capitalize(d.currentPlayerDisplayName)}'s turn`}}f(v,"disableControls",!1),f(v,"showGameWinner",()=>{document.getElementById("game-won-wrapper").classList.remove("is-hidden"),document.getElementById("game-winner-name").textContent=`${n.capitalize(d.currentPlayerDisplayName)}`});var w,T,z,C,x,G,_,W,ee,U,te,j,se,q,ae,Y,re;const u=class u{constructor(e,t,s){o(this,G);o(this,W);o(this,U);o(this,j);o(this,q);o(this,Y);o(this,w,void 0);o(this,T,void 0);o(this,z,void 0);o(this,C,void 0);o(this,x,void 0);l(this,z,e),l(this,w,K.availableBoards[t]),l(this,T,t),l(this,x,s.slice(0,a(this,z))),l(this,C,["#ffd54f","#9fa9db","#a4d7a7","#ef9b9b"]),m(this,G,_).call(this),m(this,W,ee).call(this),m(this,U,te).call(this),m(this,j,se).call(this),m(this,q,ae).call(this),m(this,Y,re).call(this),p.addLoggerEntry("Game is ready to be played"),p.addLoggerEntry(`${u.currentPlayerDisplayName}'s turn, ${u.currentPlayerDisplayName} can roll the die`)}static get currentPlayerDisplayName(){return n.capitalize(u.currentPlayer.playerName)}get dice(){return new N}get nodes(){return u.nodes}get players(){return u.players}};w=new WeakMap,T=new WeakMap,z=new WeakMap,C=new WeakMap,x=new WeakMap,G=new WeakSet,_=function(){document.getElementById("game-board-img").src=`./images/boards/${a(this,T)}.jpg`,p.addLoggerEntry("Initialized Board Image")},W=new WeakSet,ee=function(){const{rowSize:e,rowCount:t}=a(this,w).uiSpecs;for(var s=0;s<e*t;s++)u.nodes.push(new ce);p.addLoggerEntry("Initialized Nodes")},U=new WeakSet,te=function(){a(this,w).snakesList.forEach(e=>{const{head:t,tail:s}=e;u.nodes[t-1].setSnake(new ie(t,s))}),p.addLoggerEntry("Initialized Snakes")},j=new WeakSet,se=function(){a(this,w).laddersList.forEach(e=>{const{top:t,bottom:s}=e;u.nodes[s-1].setLadder(new ne(t,s))}),p.addLoggerEntry("Initialized Ladders")},q=new WeakSet,ae=function(){const e=document.getElementById("player-colors");n.shuffleArray(a(this,C)),n.shuffleArray(a(this,x));for(let t=0;t<a(this,z);t++){const s=a(this,C)[t],i=a(this,x)[t],c=n.htmlElemFromString(`<div id="${s}-player" class="player ${s}-player" style="color: ${s};"><i class="fas fa-chess-pawn"></i></div>`);u.players.push(new pe(s,0,a(this,w).uiSpecs,i)),document.getElementById("initial-spacer-div").appendChild(c),e.appendChild(n.htmlElemFromString(`<p><span class="has-text-weight-semibold">${n.capitalize(i)}</span> - ${n.capitalize(s)}</p>`))}p.addLoggerEntry("Initialized Players"),u.currentPlayer=u.players[0],v.showCurrentTurnText()},Y=new WeakSet,re=function(){const e=document.getElementById("time-passed");let t=0;const s=60;setInterval(()=>{t<s?e.innerHTML=`00:${n.padToTwoDigits(t)}`:e.innerHTML=`${n.padToTwoDigits(Math.floor(t/s))}:${n.padToTwoDigits(t%s)}`,t++},1e3),p.addLoggerEntry("Initialized Timer")},f(u,"currentPlayer",null),f(u,"players",[]),f(u,"nodes",[]);let d=u;var L,P;class ce{constructor(){o(this,L,void 0);o(this,P,void 0);l(this,L,new ie(null,null)),l(this,P,new ne(null,null))}get snake(){return a(this,L)}setSnake(e){l(this,L,e)}get ladder(){return a(this,P)}setLadder(e){l(this,P,e)}hasSnakeHead(){return!!a(this,L).head}hasLadderBottom(){return!!a(this,P).bottom}}L=new WeakMap,P=new WeakMap;var B,k;class ie{constructor(e,t){o(this,B,void 0);o(this,k,void 0);l(this,B,e),l(this,k,t)}get head(){return a(this,B)}get tail(){return a(this,k)}}B=new WeakMap,k=new WeakMap;var M,O;class ne{constructor(e,t){o(this,M,void 0);o(this,O,void 0);l(this,M,e),l(this,O,t)}get top(){return a(this,M)}get bottom(){return a(this,O)}}M=new WeakMap,O=new WeakMap;var H,b,y,A,D,$,R,E,I,J,oe;class pe{constructor(e,t,s,i){o(this,$);o(this,E);o(this,J);o(this,H,void 0);o(this,b,void 0);o(this,y,void 0);o(this,A,void 0);o(this,D,void 0);l(this,D,500),l(this,H,s),l(this,y,e),l(this,A,i),l(this,b,t)}get currentPosition(){return a(this,b)}get playerId(){return a(this,y)}get playerName(){return a(this,A)}async moveUponDiceRoll(e){N.showCurrentDiceRoll(e),p.addLoggerEntry(`Die rolled ${e}`);const t=a(this,b)===0,s=a(this,b)+e>100,i=e===6;if(t){const g=document.getElementById(`${a(this,y)}-player`);g.remove(),document.getElementById("snake-board").appendChild(g)}if(s){if(p.addLoggerEntry(`Die rolled ${e}. Die roll overflow, can't move ahead. ${n.capitalize(d.currentPlayerDisplayName)} needs ${100-a(this,b)} to win the game`),i){p.addLoggerEntry(`Die rolled ${e}, ${n.capitalize(d.currentPlayerDisplayName)} gets an extra die roll`),await n.sleep(1e3),m(this,E,I).call(this,a(this,y),!1);return}await n.sleep(2e3),m(this,E,I).call(this,a(this,y));return}p.addLoggerEntry(`${n.capitalize(d.currentPlayerDisplayName)} is moving on the board`);let c=0,h=setInterval(()=>{if(c++,X(this,b)._++,m(this,$,R).call(this),c>=e){const g=d.nodes[d.currentPlayer.currentPosition-1];if(clearInterval(h),g.hasSnakeHead()){p.addLoggerEntry(`Aww, ${n.capitalize(d.currentPlayerDisplayName)} got bit by a snake`),l(this,b,g.snake.tail),m(this,E,I).call(this,a(this,y)),setTimeout(()=>{m(this,$,R).call(this)},a(this,D));return}if(g.hasLadderBottom()){p.addLoggerEntry(`${n.capitalize(d.currentPlayerDisplayName)} climbed a ladder, gets an extra die roll`),l(this,b,g.ladder.top),m(this,E,I).call(this,a(this,y),!1),setTimeout(()=>{m(this,$,R).call(this)},a(this,D));return}if(i){p.addLoggerEntry(`Die rolled ${e}, ${n.capitalize(d.currentPlayerDisplayName)} gets an extra die roll`),m(this,E,I).call(this,a(this,y),!1);return}m(this,E,I).call(this,a(this,y))}},a(this,D))}}H=new WeakMap,b=new WeakMap,y=new WeakMap,A=new WeakMap,D=new WeakMap,$=new WeakSet,R=function(){const{x:e,y:t}=m(this,J,oe).call(this,a(this,b)),s=document.getElementById(`${a(this,y)}-player`);s.style.bottom=`${t}px`,s.style.left=`${e}px`},E=new WeakSet,I=async function(e,t=!0){if(d.currentPlayer.currentPosition===100&&(p.addLoggerEntry(`Congratulations ${n.capitalize(d.currentPlayerDisplayName)}! You won the game`),v.disableControls=!0,v.showGameWinner(),await n.sleep(2e4),window.location.reload()),t){const h=(d.players.map(g=>a(g,y)).indexOf(e)+1)%d.players.length;d.currentPlayer=d.players[h],await n.sleep(1e3),v.showCurrentTurnText(),p.addLoggerEntry("Switching Turn")}p.addLoggerEntry(`${n.capitalize(d.currentPlayerDisplayName)}'s turn, ${n.capitalize(d.currentPlayerDisplayName)} can roll the die`),N.resetCurrentDiceRoll(),v.disableControls=!1},J=new WeakSet,oe=function(e){const{horizontalOffsetInPx:t,nodeSizeInPx:s,rowSize:i,verticalOffsetInPx:c}=a(this,H),h=Q=>Q%i===0,g=Q=>Q%2===0;let F,S;return h(e)?F=e/i-1:F=Math.floor(e/i),g(F)?h(e)?S=i-1:S=e%i-1:h(e)?S=0:S=Math.abs(e%i-i),{x:s*S+t,y:s*F+c}};class me{static selectBoard(e,t){const s=document.getElementById("selected-board");e.forEach(i=>{i.classList.remove("selected")}),s.value=t.currentTarget.getAttribute("data-board"),t.currentTarget.classList.add("selected")}}const Z=()=>{const r=document.getElementById("player-count"),e=Math.abs(parseInt(r.value,10));if(isNaN(e))throw alert("Enter a valid number"),new Error("Halted game execution");if(e>4)throw alert("Max 4 players can play the game"),new Error("Halted game execution");if(e<=1)throw alert("Min 2 players can play the game"),new Error("Halted game execution");document.getElementById("game-init-step").classList.add("is-hidden"),document.getElementById("snake-game-step").classList.remove("is-hidden"),document.getElementById("snake-game-step").classList.add(`${document.getElementById("selected-board").value}-snake-board`);const t=Array.from(document.getElementsByClassName("player-name-input")).map(({value:s})=>s);return new d(e,document.getElementById("selected-board").value,t)};document.addEventListener("DOMContentLoaded",()=>{let r=null;const e=document.getElementById("player-count");document.getElementById("start-game").addEventListener("click",()=>{r=Z()}),e.addEventListener("keypress",s=>{n.isEnterPressed(s)&&(r=Z())});const t=Array.from(document.getElementsByClassName("board-container"));t.forEach(s=>{s.addEventListener("click",me.selectBoard.bind(null,t))}),document.body.onkeyup=s=>{if(n.isSpacebarPressed(s)){if(v.disableControls)return;v.disableControls=!0,d.currentPlayer.moveUponDiceRoll(r.dice.rollDice())}},e.focus()});
