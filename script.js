function changerTheme() {
  const body = document.body;
  const flame = document.querySelector(".flamme");

  const bascule = !body.classList.contains("dark");
  flame.style.transition = "opacity 0.4s ease-in-out";
  flame.style.opacity = bascule ? "0" : "1";

  setTimeout(() => {
    body.classList.toggle("dark");
  }, 100);
}

window.addEventListener("load", () => {
  document.body.style.opacity = 0;
  document.body.style.transition = "opacity 1s ease-in-out";
  setTimeout(() => {
    document.body.style.opacity = 1;
  }, 100);
});
