const burger = document.getElementById("burger");
const navMenu = document.getElementById("nav-menu");

burger.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

document.addEventListener("DOMContentLoaded", function () {
  const animatedElements = document.querySelectorAll(".animate-on-scroll");

  if (animatedElements.length > 0) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.2 }
    );

    animatedElements.forEach((el) => observer.observe(el));
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const zoomElements = document.querySelectorAll(".zoom-on-scroll");

  if (zoomElements.length > 0) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.2 }
    );

    zoomElements.forEach((el) => observer.observe(el));
  }
});

document.addEventListener("DOMContentLoaded", function () {
  try {
    const animatedItems = document.querySelectorAll(
      ".fade-in, .slide-in, .slide-up, .zoom-in"
    );

    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.2,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          observer.unobserve(entry.target);
        }
      });
    }, options);

    animatedItems.forEach((item) => observer.observe(item));
  } catch (e) {}
});
document.addEventListener("DOMContentLoaded", function () {
  try {
    const cards = document.querySelectorAll(".mobile-platform-card");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("card-visible");
            }, index * 200);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.2,
      }
    );

    cards.forEach((card) => observer.observe(card));
  } catch (e) {}
});
document.addEventListener("DOMContentLoaded", function () {
  try {
    const animatedSections = document.querySelectorAll(".animate-on-scroll");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const items = entry.target.querySelectorAll(".advantage-item");
            items.forEach((item) => item.classList.add("rotate-in", "visible"));
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.3,
      }
    );

    animatedSections.forEach((section) => observer.observe(section));
  } catch (e) {}
});

const switcher = document.getElementById("lang-switcher");

switcher.addEventListener("change", function () {
  const lang = this.value;
  if (lang === "ru") {
    window.location.href = "index-ru.html";
  } else if (lang === "uz") {
    window.location.href = "index.html";
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const currentPage = window.location.pathname;
  if (currentPage.includes("ru")) {
    switcher.value = "ru";
  } else {
    switcher.value = "uz";
  }
});
