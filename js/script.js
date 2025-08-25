// ============================================ NAVBAR ============================================

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

// ============================================ ACCORDION ============================================

const accordionContents = document.querySelectorAll(".faq-item-content");
const accordionIcons = document.querySelectorAll(".faq-item button");

let accordionToggle = false;

accordionIcons.forEach((accIcon, accIconIndex) => {
  accIcon.addEventListener("click", () => {
    accordionToggle = !accordionToggle;
    if (accordionToggle) {
      accIcon.innerHTML = `<i class="fa-solid fa-chevron-up"></i>`;
    } else {
      accIcon.innerHTML = `<i class="fa-solid fa-chevron-down"></i>`;
    }

    accordionContents.forEach((accItem, accItemIndex) => {
      if (accIconIndex === accItemIndex) {
        accItem.classList.toggle("show");
      }
    });
  });
});
