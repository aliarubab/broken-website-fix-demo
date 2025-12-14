// Fixed: Navbar toggle
const menuBtn = document.getElementById("menuBtn"); // Correct ID
const menu = document.getElementById("menu");

menuBtn.addEventListener("click", () => {
  menu.classList.toggle("active"); // Fixed: toggle class instead of always 'block'
});
// Fixed: Change text button
const heading = document.getElementById("heading"); // Defined heading
const changeTextBtn = document.getElementById("changeText");

changeTextBtn.addEventListener("click", () => {
  heading.textContent = "Text Changed!"; // Fixed: JS now changes text properly
});

// Fixed: Form validation
const submitBtn = document.getElementById("submit");
const emailInput = document.getElementById("email");
const errorMsg = document.getElementById("error");

submitBtn.addEventListener("click", () => {
  const email = emailInput.value.trim();
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Simple email regex

  if (email === "") {
    errorMsg.textContent = "Email is required"; // Fixed: updated error element
    errorMsg.style.color = "red";
  } else if (!regex.test(email)) {
    errorMsg.textContent = "Enter a valid email"; // Fixed: added regex validation
    errorMsg.style.color = "red";
  } else {
    errorMsg.textContent = "Thank you!"; // Fixed: success message
    errorMsg.style.color = "green";
  }
});