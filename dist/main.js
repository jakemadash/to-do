(()=>{"use strict";const e=(e,t,o,n)=>({title:e,details:t,dueDate:o,priority:n}),t=((t,o,n,i)=>{const l=e([],"default",void 0,void 0);return Object.assign({},{ToDos:[]},l)})(),o=(document.querySelector(".container"),document.querySelector("div > div")),n=document.querySelector("form");o.addEventListener("click",(()=>{o.textContent="",n.removeAttribute("hidden")})),document.querySelectorAll("button").forEach((i=>i.addEventListener("click",(()=>{if("Submit"==i.textContent){const i=n.elements.title.value,l=n.elements.details.value,r=n.elements["due-date"].value,d=n.elements.priority.value,u=e(i,l,r,d);t.ToDos.push(u),console.log(t.ToDos),o.textContent="+",n.setAttribute("hidden","")}}))))})();