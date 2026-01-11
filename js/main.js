document.addEventListener("DOMContentLoaded", function () {
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

  const loginBtn = document.getElementById("loginBtn");
  const signupBtn = document.getElementById("signupBtn");
  const logoutBtn = document.getElementById("logoutBtn");

  if (isLoggedIn) {
    if (loginBtn) loginBtn.classList.add("hide-auth");
    if (signupBtn) signupBtn.classList.add("hide-auth");
    if (logoutBtn) logoutBtn.style.display = "inline-block";
  } else {
    if (loginBtn) loginBtn.classList.remove("hide-auth");
    if (signupBtn) signupBtn.classList.remove("hide-auth");
    if (logoutBtn) logoutBtn.style.display = "none";
  }
});

function logout() {
  localStorage.removeItem("isLoggedIn");
  localStorage.removeItem("userRole");
  window.location.href = "index.html";
}
