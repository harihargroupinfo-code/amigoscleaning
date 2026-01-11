document.addEventListener("DOMContentLoaded", () => {
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

  if (isLoggedIn) {
    document.body.classList.add("logged-in");
  } else {
    document.body.classList.remove("logged-in");
  }
});

function logout() {
  localStorage.removeItem("isLoggedIn");
  localStorage.removeItem("userRole");
  window.location.href = "index.html";
}
