// // Select all images in the grid
// const images = document.querySelectorAll(".image-grid img");

// // Add a click event listener to each image
// images.forEach((img) => {
//   img.addEventListener("click", () => {
//     // Open the image in a new tab when clicked
//     window.open(img.src, "_blank");
//   });
// });

// Select the current year and insert it into the footer
const yearSpan = document.getElementById("year");
const currentYear = new Date().getFullYear();
yearSpan.textContent = currentYear;

const form = document.getElementById("contact-form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  // Get form values
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  // Send email using email.js
  emailjs
    .send("service_kfq6nye", "template_h7s70ve", {
      from_name: name,
      from_email: email,
      message: message,
    })
    .then(
      (response) => {
        alert("Your message has been sent successfully!");
        form.reset();
      },
      (error) => {
        alert("Oops! An error occurred, please try again.");
        console.log(error);
      }
    );
});

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
