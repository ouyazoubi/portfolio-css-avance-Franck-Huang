let estSombre = false;

function basculerTheme() {
  const corps = document.body;
  const flamme = document.querySelector(".flamme");

  estSombre = !estSombre;

  flamme.style.transition = "opacity 0.6s ease";
  flamme.style.opacity = estSombre ? 0 : 1;

  setTimeout(() => {
    corps.classList.toggle("sombre");
  }, 300);
}

window.onload = () => {
  document.body.style.opacity = 0;
  document.body.style.transition = "opacity 1.2s ease";
  setTimeout(() => {
    document.body.style.opacity = 1;
  }, 100);
};
