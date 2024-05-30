const menue = document.querySelector(".fa-bars");
const close = document.querySelector(".fa-multiply");

menue.addEventListener("click", () => {
  document.querySelector(".nav").classList.add("active");
});

close.addEventListener("click", () => {
  document.querySelector(".nav").classList.remove("active");
});
