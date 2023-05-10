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
