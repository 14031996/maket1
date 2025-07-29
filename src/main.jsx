import "./assets/scss/style.scss"
// import "../../style.css"

const swiper = new Swiper(".swiper", {
  slidesPerView: "auto",
  spaceBetween: 30,
  direction: "horizontal",
  loop: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

const showMoreBtn = document.querySelector(".slider-text");
const hiddenBrands = document.querySelectorAll(".slider-brands--unvisible-laptop");

showMoreBtn.addEventListener("click", function () {
  hiddenBrands.forEach((brand) => {
    brand.classList.toggle("slider-brands--unvisible-laptop");
  });

  this.textContent = this.textContent.includes("Показать")
    ? "Скрыть"
    : "Показать все";
});

const leftMenu = document.querySelector(".aside");
const openLeftMenu = document.querySelector(".round-icon--burger");

openLeftMenu.addEventListener("click", function () {
  popup.classList.add("visible");
});

document.addEventListener("DOMContentLoaded", function () {
  const burgerIcon = document.querySelector(".round-icon--burger");
  const asideMenu = document.querySelector(".aside");
  const overlay = document.createElement("div");
  overlay.className = "aside-overlay";
  document.body.appendChild(overlay);

  function checkScreenSize() {
    if (window.innerWidth >= 1440) {
      asideMenu.classList.add("active");
      overlay.classList.remove("active");
      document.body.classList.remove("menu-open");
    } else {
      asideMenu.classList.remove("active");
    }
  }

  checkScreenSize();

//только для мобильных/планшетов
  function openMenu() {
    if (window.innerWidth < 1440) {
      asideMenu.classList.add("active");
      overlay.classList.add("active");
      document.body.classList.add("menu-open");
    }
  }

  function closeMenu() {
    if (window.innerWidth < 1440) {
      asideMenu.classList.remove("active");
      overlay.classList.remove("active");
      document.body.classList.remove("menu-open");
    }
  }

  burgerIcon.addEventListener("click", function (e) {
    e.stopPropagation();
    openMenu();
  });

  overlay.addEventListener("click", closeMenu);

  const closeBtn = asideMenu.querySelector(".round-icon--menu");
  if (closeBtn) {
    closeBtn.addEventListener("click", closeMenu);
  }

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      closeMenu();
    }
  });

  window.addEventListener("resize", function () {
    checkScreenSize();

//десктоп- закрываем оверлей
    if (window.innerWidth >= 1440) {
      overlay.classList.remove("active");
      document.body.classList.remove("menu-open");
    }
  });
});

