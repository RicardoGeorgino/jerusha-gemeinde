document.addEventListener("DOMContentLoaded", function () {
  const currentPage = window.location.pathname.split("/").pop();
  const navLinks = document.querySelectorAll("nav a");

  navLinks.forEach((link) => {
    let linkTarget = link.getAttribute("href");

    // Nur Dateiname vergleichen (ohne Pfad)
    linkTarget = linkTarget.split("/").pop();

    if (linkTarget === currentPage) {
      link.classList.add("active");
    }
  });
});