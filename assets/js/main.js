
document.querySelectorAll(".progress-bar").forEach(bar => {
  let value = bar.style.width;
  bar.style.width = "0%";
  setTimeout(() => {
    bar.style.width = value;
  }, 300);
});



  const menuToggle = document.getElementById("menu-toggle");
  const navLinks = document.querySelector("nav ul");

  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    // đổi icon ☰ ↔ ✖
    menuToggle.textContent = navLinks.classList.contains("active") ? "✖" : "☰";
  });

