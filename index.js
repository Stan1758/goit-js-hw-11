import{a as c,S as u,i as a}from"./assets/vendor-CrlV4O_2.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))e(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&e(i)}).observe(document,{childList:!0,subtree:!0});function n(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function e(t){if(t.ep)return;t.ep=!0;const o=n(t);fetch(t.href,o)}})();const p="50197209-2a2796b344803c480c3c957e7",d="https://pixabay.com/api/";async function f(r){const s={key:p,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0};try{return(await c.get(d,{params:s})).data}catch(n){throw console.error("Помилка при запиті до Pixabay:",n),n}}document.querySelector(".gallery");document.querySelector(".loader");const y=new u(".gallery a");function m(){return document.querySelector(".gallery")}function g(r){const s=document.querySelector(".gallery"),n=r.map(e=>`
    <li class="gallery-item">
      <a href="${e.largeImageURL}" title="${e.tags}">
        <img src="${e.webformatURL}" alt="${e.tags}" loading="lazy" />
      </a>
      <div class="info">
  <div class="info-item">
    <p><b>Likes</b></p>
    <p class="value">${e.likes}</p>
  </div>
  <div class="info-item">
    <p><b>Views</b></p>
    <p class="value">${e.views}</p>
  </div>
  <div class="info-item">
    <p><b>Comments</b></p>
    <p class="value">${e.comments}</p>
  </div>
  <div class="info-item">
    <p><b>Downloads</b></p>
    <p class="value">${e.downloads}</p>
  </div>
</div>
    </li>
  `).join("");s.insertAdjacentHTML("beforeend",n),y.refresh()}function h(){const r=m();r.innerHTML=""}function b(){const r=document.querySelector(".loader-wrapper");r&&(r.style.display="flex")}function v(){const r=document.querySelector(".loader-wrapper");r&&(r.style.display="none")}const l=document.querySelector(".form");l.addEventListener("submit",r=>{r.preventDefault();const n=l.elements["search-text"].value.trim();if(!n){a.warning({title:"Hello!",message:"The search field cannot be empty",position:"topRight"});return}h(),b(),f(n).then(e=>{if(!e.hits||!e.hits.length){a.info({title:"",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}g(e.hits)}).catch(e=>{a.error({title:"Error",message:"Something went wrong, please try again.",position:"topRight"})}).finally(()=>{v()})});
//# sourceMappingURL=index.js.map
