(()=>{var t={20:()=>{let t=[{color:"hearts",rank:"A",img:"./static/туз черви.svg"},{color:"hearts",rank:"K",img:"./static/король черви.svg"},{color:"hearts",rank:"Q",img:"./static/дама черви.svg"},{color:"hearts",rank:"J",img:"./static/валет черви.svg"},{color:"hearts",rank:"10",img:"./static/10 черви.svg"},{color:"hearts",rank:"9",img:"./static/9 черви.svg"},{color:"hearts",rank:"8",img:"./static/8 черви.svg"},{color:"hearts",rank:"7",img:"./static/7 черви.svg"},{color:"hearts",rank:"6",img:"./static/6 черви.svg"},{color:"spades",rank:"A",img:"./static/туз крести.svg"},{color:"spades",rank:"K",img:"./static/король крести.svg"},{color:"spades",rank:"Q",img:"./static/дама крести.svg"},{color:"spades",rank:"J",img:"./static/валет крести.svg"},{color:"spades",rank:"10",img:"./static/10 крести.svg"},{color:"spades",rank:"9",img:"./static/9 крести.svg"},{color:"spades",rank:"8",img:"./static/8 крести.svg"},{color:"spades",rank:"7",img:"./static/7 крести.svg"},{color:"spades",rank:"6",img:"./static/6 крести.svg"},{color:"clubs",rank:"A",img:"./static/туз пики.svg"},{color:"clubs",rank:"K",img:"./static/король пики.svg"},{color:"clubs",rank:"Q",img:"./static/дама пики.svg"},{color:"clubs",rank:"J",img:"./static/валет пики.svg"},{color:"clubs",rank:"10",img:"./static/10 пики.svg"},{color:"clubs",rank:"9",img:"./static/9 пики.svg"},{color:"clubs",rank:"8",img:"./static/8 пики.svg"},{color:"clubs",rank:"7",img:"./static/7 пики.svg"},{color:"clubs",rank:"6",img:"./static/6 пики.svg"},{color:"diamonds",rank:"A",img:"./static/туз бубны.svg"},{color:"diamonds",rank:"K",img:"./static/король бубны.svg"},{color:"diamonds",rank:"Q",img:"./static/дама бубны.svg"},{color:"diamonds",rank:"J",img:"./static/валет бубны.svg"},{color:"diamonds",rank:"10",img:"./static/10 бубны.svg"},{color:"diamonds",rank:"9",img:"./static/9 бубны.svg"},{color:"diamonds",rank:"8",img:"./static/8 бубны.svg"},{color:"diamonds",rank:"7",img:"./static/7 бубны.svg"},{color:"diamonds",rank:"6",img:"./static/6 бубны.svg"}],s=[];const e=document.querySelector(".container");function c(t){if(null==t||!1===t)return document.createTextNode("");if("string"==typeof t||"number"==typeof t||!0===t)return document.createTextNode(t);if(Array.isArray(t)){const s=document.createDocumentFragment();return t.forEach((t=>{s.appendChild(c(t))})),s}const s=document.createElement(t.tag);return t.cls&&[].concat(t.cls).forEach((t=>{s.classList.add(t)})),t.attrs&&Object.keys(t.attrs).forEach((e=>{s.setAttribute(e,t.attrs[e])})),s.appendChild(c(t.content)),s}new class{constructor(t){this.container=t,this.gameLvlSelect()}gameLvlSelect(){this.container.replaceChildren(),e.appendChild(c({tag:"div",class:"game",content:[{tag:"div",cls:"section",content:[{tag:"div",cls:"section_content",content:[{tag:"p",cls:"section-title",content:"Выбери  сложность"},{tag:"div",cls:"section_selectors",content:[{tag:"div",cls:["section_selector","firstSelector"],content:"1"},{tag:"div",cls:["section_selector","secondSelector"],content:"2"},{tag:"div",cls:["section_selector","thirdSelector"],content:"3"}]},{tag:"button",cls:"sectionButton",content:"Старт"}]}]}]}));const t=document.querySelector(".firstSelector"),s=document.querySelector(".secondSelector"),a=document.querySelector(".thirdSelector");t.addEventListener("click",(t=>{this.easyLvl()})),s.addEventListener("click",(t=>{this.normalLvl()})),a.addEventListener("click",(t=>{this.hardLvl()}))}easyLvl(){this.container.replaceChildren(),e.appendChild(c({tag:"game",cls:"game",content:[{tag:"div",cls:"game_topContent",content:[{tag:"div",cls:"game_topContent-timer",content:"timer"},{tag:"button",cls:"game_topContent-button",content:"Начать заново"}]},{tag:"div",cls:"game_table"}]}));const a=document.querySelector(".game_table");t.sort((()=>Math.random()-.5));for(let e=0;e<3;e++)s.push(t[e]),s.push(t[e]);s.sort((()=>Math.random()-.5));for(let t=0;t<s.length;t++){const t=document.createElement("img");t.src="./static/рубашка.svg",t.classList.add("card"),a.appendChild(t),t.style.height="100px"}const n=document.querySelectorAll(".card");let r=null,o=null,l=!0;n.forEach(((t,e)=>{t.src=s[e].img,setTimeout((()=>{n.forEach(((t,s)=>{t.src="./static/рубашка.svg"}))}),5e3)})),n.forEach(((t,e)=>t.addEventListener("click",(c=>{!0!==l||t.classList.contains("identical")||(t.src=s[e].img,t.src=s[e].img,null===r?r=e:e!=r&&(o=e,l=!1),null!==r&&null!==o&&r!==o&&(n[r].src===n[o].src?(n[r].classList.add("identical"),n[o].classList.add("identical"),r=null,o=null,l=!0):n[r].src!==n[o].src&&setTimeout((()=>{console.log(t.src),n[r].src="./static/рубашка.svg",n[o].src="./static/рубашка.svg",r=null,o=null,l=!0}),500)),Array.from(n).every((t=>t.className.includes("identical")))&&alert("Вы победили"))}))))}normalLvl(){this.container.replaceChildren(),e.appendChild(c({tag:"game",cls:"game",content:[{tag:"div",cls:"game_topContent",content:[{tag:"div",cls:"game_topContent-timer",content:"timer"},{tag:"button",cls:"game_topContent-button",content:"Начать заново"}]},{tag:"div",cls:"game_table"}]}));const a=document.querySelector(".game_table");t.sort((()=>Math.random()-.5));for(let e=0;e<6;e++)s.push(t[e]),s.push(t[e]);s.sort((()=>Math.random()-.5));for(let t=0;t<s.length;t++){const t=document.createElement("img");t.src="./static/рубашка.svg",t.classList.add("card"),a.appendChild(t),t.style.height="100px"}const n=document.querySelectorAll(".card");let r=null,o=null,l=!0;n.forEach(((t,e)=>{t.src=s[e].img,setTimeout((()=>{n.forEach(((t,s)=>{t.src="./static/рубашка.svg"}))}),5e3)})),n.forEach(((t,e)=>t.addEventListener("click",(c=>{!0!==l||t.classList.contains("identical")||(t.src=s[e].img,t.src=s[e].img,null===r?r=e:e!=r&&(o=e,l=!1),null!==r&&null!==o&&r!==o&&(n[r].src===n[o].src?(n[r].classList.add("identical"),n[o].classList.add("identical"),r=null,o=null,l=!0):n[r].src!==n[o].src&&setTimeout((()=>{console.log(t.src),n[r].src="./static/рубашка.svg",n[o].src="./static/рубашка.svg",r=null,o=null,l=!0}),500)),Array.from(n).every((t=>t.className.includes("identical")))&&alert("Вы победили"))}))))}hardLvl(){this.container.replaceChildren(),e.appendChild(c({tag:"game",cls:"game",content:[{tag:"div",cls:"game_topContent",content:[{tag:"div",cls:"game_topContent-timer",content:"timer"},{tag:"button",cls:"game_topContent-button",content:"Начать заново"}]},{tag:"div",cls:"game_table"}]}));const a=document.querySelector(".game_table");t.sort((()=>Math.random()-.5));for(let e=0;e<9;e++)s.push(t[e]),s.push(t[e]);s.sort((()=>Math.random()-.5));for(let t=0;t<s.length;t++){const t=document.createElement("img");t.src="./static/рубашка.svg",t.classList.add("card"),a.appendChild(t),t.style.height="100px"}const n=document.querySelectorAll(".card");let r=null,o=null,l=!0;n.forEach(((t,e)=>{t.src=s[e].img,setTimeout((()=>{n.forEach(((t,s)=>{t.src="./static/рубашка.svg"}))}),5e3)})),n.forEach(((t,e)=>t.addEventListener("click",(c=>{!0!==l||t.classList.contains("identical")||(t.src=s[e].img,t.src=s[e].img,null===r?r=e:e!=r&&(o=e,l=!1),null!==r&&null!==o&&r!==o&&(n[r].src===n[o].src?(n[r].classList.add("identical"),n[o].classList.add("identical"),r=null,o=null,l=!0):n[r].src!==n[o].src&&setTimeout((()=>{console.log(t.src),n[r].src="./static/рубашка.svg",n[o].src="./static/рубашка.svg",r=null,o=null,l=!0}),500)),Array.from(n).every((t=>t.className.includes("identical")))&&alert("Вы победили"))}))))}}(e)}},s={};function e(c){var a=s[c];if(void 0!==a)return a.exports;var n=s[c]={exports:{}};return t[c](n,n.exports,e),n.exports}e.n=t=>{var s=t&&t.__esModule?()=>t.default:()=>t;return e.d(s,{a:s}),s},e.d=(t,s)=>{for(var c in s)e.o(s,c)&&!e.o(t,c)&&Object.defineProperty(t,c,{enumerable:!0,get:s[c]})},e.o=(t,s)=>Object.prototype.hasOwnProperty.call(t,s),(()=>{"use strict";e(20)})()})();