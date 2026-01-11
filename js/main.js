document.addEventListener("DOMContentLoaded", function () {
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

  // Hide/show ALL login & signup buttons (even duplicates)
  document.querySelectorAll("#loginBtn, #signupBtn").forEach(btn => {
    btn.style.display = isLoggedIn ? "none" : "inline-block";
  });

  // Show/hide logout
  document.querySelectorAll("#logoutBtn").forEach(btn => {
    btn.style.display = isLoggedIn ? "inline-block" : "none";
  });
});

function logout() {
  localStorage.removeItem("isLoggedIn");
  localStorage.removeItem("userRole");
  window.location.href = "index.html";
}
