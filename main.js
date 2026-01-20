// LOGOUT FUNCTION (GLOBAL)
function logout() {
  localStorage.clear();
  window.location.href = "login.html";
}

// AUTH UI HANDLER
document.addEventListener("DOMContentLoaded", () => {
  const loggedIn = localStorage.getItem("loggedIn");
  const userName = localStorage.getItem("userName");
  const role = localStorage.getItem("role");

  const welcome = document.getElementById("welcomeUser");
  const loginBtn = document.getElementById("loginBtn");
  const signupBtn = document.getElementById("signupBtn");
  const logoutBtn = document.getElementById("logoutBtn");

  if (loggedIn === "true" && userName) {
    if (welcome) {
      welcome.innerHTML = `Welcome, ${userName} 👋 (${role})`;
      welcome.style.display = "inline-block";
    }
    if (loginBtn) loginBtn.style.display = "none";
    if (signupBtn) signupBtn.style.display = "none";
    if (logoutBtn) logoutBtn.style.display = "inline-block";
  } else {
    if (logoutBtn) logoutBtn.style.display = "none";
  }
});
