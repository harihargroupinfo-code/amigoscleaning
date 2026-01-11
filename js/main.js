document.addEventListener("DOMContentLoaded", () => {
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  const loginBtn = document.getElementById("loginBtn");
  const logoutBtn = document.getElementById("logoutBtn");
  const signupBtn = document.getElementById("signupBtn");

  if (isLoggedIn === "true") {
    // Hide Login & Signup
    if (loginBtn) loginBtn.style.display = "none";
    if (signupBtn) signupBtn.style.display = "none";

    // Show Logout
    if (logoutBtn) logoutBtn.style.display = "inline-block";
  } else {
    // Show Login & Signup
    if (loginBtn) loginBtn.style.display = "inline-block";
    if (signupBtn) signupBtn.style.display = "inline-block";

    // Hide Logout
    if (logoutBtn) logoutBtn.style.display = "none";
  }
});

function logout() {
  localStorage.removeItem("isLoggedIn");
  localStorage.removeItem("userRole");

  alert("Logged out successfully");
  window.location.replace("index.html");
}

function toggleMenu() {
  document.querySelector(".nav-right")?.classList.toggle("active");
}
