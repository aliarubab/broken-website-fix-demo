// Navbar toggle (BROKEN)
const menuButton = document.getElementById("menuButton");
const menu = document.getElementById("menu");

menuButton.addEventListener("click", function () {
  menu.style.display = "block";
});

// Change text button (BROKEN)
document.getElementById("changeText").addEventListener("click", function () {
  heading.textContent = "Text Changed!";
});

// Form validation (BROKEN)
document.getElementById("submit").addEventListener("click", function () {
  const email = document.getElementById("email").value;

  if (email === "") {
    error.innerHTML = "Email required";
  }
});