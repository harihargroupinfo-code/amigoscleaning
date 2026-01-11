document.addEventListener("DOMContentLoaded", () => {
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  const role = localStorage.getItem("userRole");

  if (isLoggedIn) {
    document.body.classList.add("logged-in");

    const welcome = document.getElementById("welcomeUser");
    if (welcome && role) {
      welcome.textContent = `Welcome ${role.charAt(0).toUpperCase() + role.slice(1)}`;
      welcome.style.display = "inline-block";
    }
  } else {
    document.body.classList.remove("logged-in");
  }
});

function logout() {
  localStorage.removeItem("isLoggedIn");
  localStorage.removeItem("userRole");
  window.location.href = "index.html";
}
