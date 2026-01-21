function logout() {
  // Remove ONLY session-related keys
  localStorage.removeItem("loggedIn");
  localStorage.removeItem("role");
  localStorage.removeItem("userEmail");
  localStorage.removeItem("userName");

  // Optional: keep last role cleared
  localStorage.removeItem("currentUser");

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
// Prevent accidental full clear
window.addEventListener("storage", (e) => {
  if (e.key === null) {
    console.warn("localStorage.clear() was triggered");
  }
});

<script>
document.addEventListener("DOMContentLoaded", () => {
  const footer = document.createElement("footer");
  footer.className = "site-footer";
  footer.innerHTML =
    "AMIGOS – A Product by Harihar Group of Industries | All Rights Reserved";
  document.body.appendChild(footer);
});
</script>

<script>
document.addEventListener("DOMContentLoaded", () => {
  const footer = document.createElement("footer");
  footer.className = "site-footer";
  footer.innerHTML = `
    <div class="footer-content">
      <span class="footer-brand">AMIGOS</span>
      <span class="footer-text">
        A Product by Harihar Group of Industries | All Rights Reserved
      </span>
    </div>
  `;
  document.body.appendChild(footer);
});
</script>

<script>
document.addEventListener("DOMContentLoaded", () => {
  const year = new Date().getFullYear();

  const footer = document.createElement("footer");
  footer.className = "site-footer";

  footer.innerHTML = `
    <div class="wave"></div>

    <div class="footer-wrapper">
      <div class="footer-brand">AMIGOS</div>

      <div class="footer-social">
        <a href="https://www.instagram.com/amigos_cleaning_partner?igsh=cmw0d2s3NjBsNjJj" target="_blank">
          <i class="fab fa-instagram"></i>
        </a>
        <a href="https://www.facebook.com/profile.php?id=100085486467451&mibextid=ZbWKwL" target="_blank">
          <i class="fab fa-facebook-f"></i>
        </a>
      </div>

      <div class="footer-text">
        © ${year} AMIGOS — A Product by Harihar Group of Industries<br>
        All Rights Reserved
      </div>
    </div>
  `;

  document.body.appendChild(footer);
});
</script>


