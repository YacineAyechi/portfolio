// Select the current year and insert it into the footer
const yearSpan = document.getElementById("year");
const currentYear = new Date().getFullYear();
yearSpan.textContent = currentYear;

// Add smooth scrolling effect to navbar links
const navbarLinks = document.querySelectorAll('nav a[href^="#"]');
navbarLinks.forEach((link) => {
  link.addEventListener("click", smoothScroll);
});

function smoothScroll(e) {
  e.preventDefault();
  const targetId = this.getAttribute("href");
  document.querySelector(targetId).scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}

const galleryItems = document.querySelectorAll(".gallery-item");
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightbox-image");

galleryItems.forEach((item) => {
  item.addEventListener("click", () => {
    lightboxImage.src = item.src;
    lightbox.style.display = "flex";
  });
});

lightbox.addEventListener("click", () => {
  lightbox.style.display = "none";
});

// Scroll Up Function
const scrollArrow = document.querySelector("#scroll-arrow");

window.addEventListener("scroll", function () {
  if (window.pageYOffset > 500) {
    scrollArrow.classList.add("show");
  } else {
    scrollArrow.classList.remove("show");
  }
});

scrollArrow.addEventListener("click", function (e) {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: "smooth" });
});
