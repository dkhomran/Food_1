let toggleBtn = document.querySelector("#toggle-btn");
let navMenu = document.querySelector("#nav-menu");
let loading = document.querySelector("#loading");
let btnTop = document.querySelector(".btnTOP");

toggleBtn.onclick = (eo) => {
  navMenu.classList.toggle("active");
  toggleBtn.classList.toggle("fa-xmark");
};

window.onscroll = (eo) => {
  navMenu.classList.remove("active");
  toggleBtn.classList.remove("fa-xmark");

  if (scrollY > 20) {
    btnTop.classList.add("active");
  } else {
    btnTop.classList.remove("active");
  }
};

btnTop.onclick = (eo) => {
  window.scroll(0, 0);
};

window.onload = (eo) => {
  setInterval((eo) => {
    loading.style.display = "none";
  }, 1000);
};
