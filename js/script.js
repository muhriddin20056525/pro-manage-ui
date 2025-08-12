const overlay = document.querySelector(".overlay");
const navList = document.querySelector(".nav-list");
const menuBtn = document.querySelector(".nav-menu");

let toggle = false;

menuBtn.addEventListener("click", () => {
  toggle = !toggle;

  overlay.classList.toggle("show");
  navList.classList.toggle("show");

  if (toggle) {
    menuBtn.innerHTML = `<i class="fa-solid fa-xmark"></i>`;
  } else {
    menuBtn.innerHTML = `<i class="fa-solid fa-bars"></i>`;
  }
});
