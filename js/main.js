document.addEventListener("DOMContentLoaded", () => {
  // FAQ accordion
  document.querySelectorAll(".faq-item").forEach((item) => {
    const question = item.querySelector(".faq-q");
    question.addEventListener("click", () => {
      const isOpen = item.classList.contains("open");
      document.querySelectorAll(".faq-item.open").forEach((open) => {
        if (open !== item) open.classList.remove("open");
      });
      item.classList.toggle("open", !isOpen);
    });
  });

  // Mobile nav toggle
  const toggle = document.querySelector(".nav-toggle");
  const navLinks = document.querySelector(".nav-links");
  if (toggle && navLinks) {
    toggle.addEventListener("click", () => {
      const isShown = navLinks.style.display === "flex";
      navLinks.style.display = isShown ? "none" : "flex";
      navLinks.style.cssText += isShown
        ? ""
        : "position:absolute; top:84px; left:0; right:0; background:#0d0d34; flex-direction:column; padding:20px 24px; gap:18px; border-top:1px solid rgba(255,255,255,0.08);";
    });

    navLinks.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        if (window.innerWidth <= 920) navLinks.style.display = "none";
      });
    });
  }
});
