document.addEventListener("DOMContentLoaded", () => {
if (window.innerWidth <= 1024) {
  document.getElementById("warning-en").style.display = "block";
  document.getElementById("warning-ru").style.display = "block";
}
});

function setLanguage(lang) {
  localStorage.setItem("lang", lang);
  window.location.href = "../home_page/index.html";
}
