(()=>{"use strict";var e={d:(n,l)=>{for(var t in l)e.o(l,t)&&!e.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:l[t]})},o:(e,n)=>Object.prototype.hasOwnProperty.call(e,n)};function n(){const e=document.createElement("ul");["home","menu","about"].forEach((n=>e.appendChild(a("li",null,null,n))));const n=document.createElement("nav");n.appendChild(e),i.appendChild(n)}function l(){const e=document.createElement("footer"),n=a("p",null,null,"inspired by <a>https://github.com/ginnerzapata/restaurant</a>");e.appendChild(n),i.appendChild(e)}e.d({},{k:()=>i,U:()=>a});const t=[{name:"Varenyky",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque placerat, tellus sit amet",price:"10$"},{name:"Kotleta po-Kyivski",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque placerat, tellus sit amet",price:"20$"},{name:"Borsht",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque placerat, tellus sit amet",price:"15$"}],i=document.getElementById("content");function a(e,n,l,t){const i=document.createElement(e);return n&&(i.id=n),l&&l.forEach((e=>i.classList.add(e))),t&&(i.innerText=t),i}function d(){i.innerHTML="",n(),function(){const e=document.createElement("main"),n=a("p",null,null,"Title 1"),l=a("h1",null,null,"Title 2"),t=document.createElement("hr"),d=a("p",null,null,"Porta phasellus fusce diam metus pellentesque viverra cursus."),u=a("button",null,null,"Go to Menu");e.appendChild(n),e.appendChild(l),e.appendChild(t),e.appendChild(d),e.appendChild(u),i.appendChild(e)}(),l()}d(),document.addEventListener("click",(e=>{const u=e.target.innerText;"HOME"===u&&d(),"MENU"!==u&&"Go to Menu"!==u||(i.innerHTML="",n(),function(){const e=document.createElement("main");e.classList.add("main");const n=a("p",null,null,"Title 1"),l=a("h1",null,null,"Menu"),d=document.createElement("hr");e.appendChild(n),e.appendChild(l),e.appendChild(d),t.forEach((n=>{const l=a("div",null,["menu-item"],null),t=a("h2",null,["golden"],n.name),i=a("p",null,null,n.description),d=a("h2",null,["golden"],n.price),u=a("hr",null,["menu-hr"],null);l.appendChild(t),l.appendChild(i),l.appendChild(d),l.appendChild(u),e.appendChild(l)})),i.appendChild(e)}(),l()),"ABOUT"===u&&(i.innerHTML="",n(),function(){const e=document.createElement("main");e.classList.add("main");const n=a("p",null,null,"Title 1"),l=a("h1",null,null,"Title 3"),t=document.createElement("hr"),d=a("p",null,null,"Porta phasellus fusce diam metus pellentesque viverra cursus Facilisis mollis suscipit dictumst montes aliquet facilisi fringilla litora in ut eros.");e.appendChild(n),e.appendChild(l),e.appendChild(t),e.appendChild(d),i.appendChild(e)}(),l())}))})();