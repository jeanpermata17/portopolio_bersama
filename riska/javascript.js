// popup muncul saat halaman dibuka
window.onload = () => {
  document.getElementById("popup").style.display = "flex";
};

// tutup popup
function closePopup() {
  document.getElementById("popup").style.display = "none";
}

const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
  reveals.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    }
  });
});
