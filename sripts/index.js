// memunculkan navbar navbar
const navDaftar = document.querySelector(".nav-daftar");
document.querySelector("#nav-toggle").addEventListener("click", () => {
  navDaftar.classList.toggle("active");
});

// menyembunyikan kembali navbar setelah list di klik
const navItem = document.querySelectorAll(".nav-item");
const linkAction = () => {
  navDaftar.classList.remove("active");
};
navItem.forEach((n) => n.addEventListener("click", linkAction));

// menyembunyikan navbar saat klik di bagian luar navbar
const navToggle = document.querySelector("#nav-toggle");
document.addEventListener("click", (e) => {
  if (!e.target.matches("#nav-toggle, #nav-toggle *")) {
    navDaftar.classList.remove("active");
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
