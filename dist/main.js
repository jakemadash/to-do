(()=>{"use strict";var e={935:(e,t,o)=>{var r=o(62);const n=(()=>{const e=(e,t,o,n)=>{const d=r.m.newToDo(e,t,o,n);return Object.assign({},{ToDos:[]},d)},t=e([],"default");return{newProject:e,addToProject:()=>{t.ToDos.push(r.m.addToDo()),console.log(t.ToDos)}}})(),d=(document.querySelector(".container"),document.querySelector("div > div")),c=document.querySelector("form");d.addEventListener("click",(()=>{d.textContent="",c.removeAttribute("hidden")})),document.querySelectorAll("button").forEach((e=>e.addEventListener("click",(()=>{"Submit"==e.textContent?(n.addToProject(),d.textContent="+",c.setAttribute("hidden","")):c.reset()}))))},62:(e,t,o)=>{o.d(t,{m:()=>r});const r=(()=>{const e=(e,t,o,r)=>({title:e,details:t,dueDate:o,priority:r});return{newToDo:e,addToDo:()=>{const t=document.querySelector("form"),o=t.elements.title.value,r=t.elements.details.value,n=t.elements["due-date"].value,d=t.elements.priority.value;return e(o,r,n,d)}}})()}},t={};function o(r){var n=t[r];if(void 0!==n)return n.exports;var d=t[r]={exports:{}};return e[r](d,d.exports,o),d.exports}o.d=(e,t)=>{for(var r in t)o.o(t,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o(935),o(62)})();