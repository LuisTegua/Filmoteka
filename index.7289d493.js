const e=document.querySelector(".header__nav");document.querySelector(".header--library").style.display="none",document.querySelector(".menu").classList.add("active"),e.addEventListener("click",(e=>{console.log(e.target.dataset.value),document.querySelector(".header--search").style.display="none",document.querySelector(".header--library").style.display="none",document.querySelector(`.header--${e.target.dataset.value}`).style.display="flex",document.querySelectorAll(".menu").forEach((e=>{e.classList.remove("active")})),"search"==e.target.dataset.value?document.querySelector(".menu").classList.add("active"):e.target.classList.add("active")}));const t=document.querySelector('.nav__item[data-value="library"]'),a=document.querySelector('.nav__item[data-value="search"]'),r=document.querySelector(".header");t.addEventListener("click",(()=>{r.classList.remove("header-home"),r.classList.add("header-library"),document.querySelector(".body-movies").style.display="none",document.querySelector(".movielist").style.display="flex"})),a.addEventListener("click",(()=>{r.classList.remove("header-library"),r.classList.add("header-home"),document.querySelector(".body-movies").style.display="flex",document.querySelector(".movielist").style.display="none"})),r.classList.add("header-home"),document.querySelector(".movielist").style.display="none";
//# sourceMappingURL=index.7289d493.js.map