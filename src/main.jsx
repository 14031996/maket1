import "./assets/scss/style.scss"

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

//Читать далее
document.querySelector(".main__text-more").addEventListener("click", function () {
  const content = document.querySelector(".main__text-content");
  const button = this;

  content.classList.toggle("main__text-content--expanded");

  if (content.classList.contains("main__text-content--expanded")) {
    button.textContent = "Свернуть";
  } else {
    button.textContent = "Читать далее";
  }
});


//показать все
document.querySelectorAll(".slider-text").forEach((button) => {
  button.addEventListener("click", function () {
    const sliderContainer = this.closest(".slider-container");
    if (!sliderContainer) return;

    const hiddenItems = sliderContainer.querySelectorAll(
      ".slider-brands--unvisible-laptop"
    );
    const isHidden = hiddenItems[0]?.style.display === "none";

    hiddenItems.forEach((item) => {
      item.style.display = isHidden ? "block" : "none";
    });

    this.textContent = isHidden ? "Скрыть" : "Показать все";
  });
});

//Бургер меню
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

document.addEventListener("DOMContentLoaded", function () {
  const modals = [
    {
      trigger: ".round-icon--repair",
      modal: ".feedback-text",
      multipleTriggers: true,
    },
    {
      trigger: ".round-icon--checkstatus",
      modal: ".feedback-text-call",
      multipleTriggers: true,
    },
  ];


modals.forEach((config) => {
  const triggers = config.multipleTriggers
    ? document.querySelectorAll(config.trigger)
    : [document.querySelector(config.trigger)];
  const modal = document.querySelector(config.modal);
  const closeButton = modal.querySelector(".button-close");

  function openModal() {
    modals.forEach((m) => {
      if (m.modal !== config.modal) {
        document.querySelector(m.modal).style.display = "none";
      }
    });

    modal.style.display = "block";
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    modal.style.display = "none";
    document.body.style.overflow = "";
  }

  modal.style.display = "none";

  triggers.forEach((trigger) => {
    if (trigger) {
      trigger.addEventListener("click", function (e) {
        e.stopPropagation();
        openModal();
      });
    }
  });

  if (closeButton) {
    closeButton.addEventListener("click", closeModal);
  }

  document.addEventListener("click", function (e) {
    const isTrigger = Array.from(triggers).some(
      (trigger) => trigger && trigger.contains(e.target)
    );

    if (!modal.contains(e.target) && !isTrigger) {
      closeModal();
    }
  });

  modal.addEventListener("click", function (e) {
    e.stopPropagation();
  });
});
});



