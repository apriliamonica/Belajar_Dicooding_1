// memunculkan navbar navbar
const navList = document.querySelector(".nav-list");
document.querySelector("#nav-toggle").addEventListener("click", () => {
  navList.classList.toggle("active");
});

// menyembunyikan kembali navbar setelah list di klik
const navLink = document.querySelectorAll(".nav-link");
const linkAction = () => {
  navList.classList.remove("active");
};
navLink.forEach((n) => n.addEventListener("click", linkAction));

// menyembunyikan navbar saat klik di bagian luar navbar
const navToggle = document.querySelector("#nav-toggle");
document.addEventListener("click", (e) => {
  if (!e.target.matches("#nav-toggle, #nav-toggle *")) {
    navList.classList.remove("active");
  }
});

// smooth scrolling saat menekan link navbar
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});
