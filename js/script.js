const scriptURL =
  "https://script.google.com/macros/s/AKfycbzgR_ABrVjGcEg2k6CHt9h7oRPyil-yXP97ZwvOGu69sS71OMNzVGEo2o553FGrYm1r/exec";
const form = document.forms["form-contact"];
const btnKirim = document.querySelector(".btn-kirim");
const btnLoading = document.querySelector(".btn-loading");
const myAlert = document.querySelector(".alert");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  //   Tampilkan tombol Loading, hilangkan tombol kirim
  btnLoading.classList.toggle("d-none");
  btnKirim.classList.toggle("d-none");

  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      //   Hilangkan tombol Loading, tampilkan tombol kirim
      btnLoading.classList.toggle("d-none");
      btnKirim.classList.toggle("d-none");
      myAlert.classList.toggle("d-none");
      form.reset();
      console.log("Success!", response);
    })
    .catch((error) => console.error("Error!", error.message));
});

// AOS

const galImg = Array.from(document.querySelectorAll(".gallery-img"));

galImg.forEach((img, i) => {
  img.dataset.aos = "fade-down";
  img.dataset.aosDelay = i * 200;
  img.dataset.aosDuration = 1000;
});

AOS.init({
  duration: 1000,
});

// GSAP
gsap.registerPlugin(TextPlugin);
gsap.from(".navbar", {
  duration: 3,
  opacity: 0,
  ease: "back",
});
gsap.from(".display-4", {
  duration: 2,
  delay: 0.5,
  opacity: 0,
  ease: "back",
});

gsap.to(".lead", {
  duration: 1.5,
  delay: 1,
  text: "Android Developer",
});

gsap.to(".lead", {
  duration: 1.5,
  delay: 3,
  text: "Frontend Developer",
});

gsap.to(".lead", {
  duration: 1.5,
  delay: 5,
  text: "Backend Developer",
});

gsap.to(".lead", {
  duration: 1.5,
  delay: 7,
  text: "Software Developer",
});

// tilt.js

VanillaTilt.init(document.querySelectorAll(".tech-box"), {
  max: 35,
  speed: 1000,
  glare: true,
});
