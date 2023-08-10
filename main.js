(()=>{"use strict";const t=new class{constructor(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:4;this.boardSize=t,this.container=null,this.boardEl=null,this.cells=[]}bindToDOM(t){if(!(t instanceof HTMLElement))throw new Error('Контейнер не является элементом "HTMLElement"');this.container=t}drawUi(){this.checkBinding(),this.container.innerHTML='\n      <div class="board-container">\n        <div data-id="board" class="board"></div>\n      </div>\n    ',this.boardEl=this.container.querySelector("[data-id=board]"),this.boardEl.setAttribute("style",`grid-template-columns: repeat(${this.boardSize}, 1fr)`);for(let t=0;t<this.boardSize**2;t+=1){const t=document.createElement("div");t.classList.add("cell","map-tile"),this.boardEl.append(t)}this.cells=Array.from(this.boardEl.children)}startRandom(){const t=document.createElement("img");let e;t.src="assets/goblin2dbd01ce16c0fa83cb67.png",setInterval((()=>{const n=function(t,e){const n=Math.ceil(0),i=Math.floor(e);return Math.floor(Math.random()*(i-n)+n)}(0,this.cells.length-1);n===e?n===this.cells.length-1?e-=1:e+=1:e=n,this.cells[e].append(t)}),1e3)}checkBinding(){if(null===this.container)throw new Error("Игровой процесс не привязан к DOM")}}(4);t.bindToDOM(document.querySelector("#game-container")),t.drawUi(),t.startRandom()})();