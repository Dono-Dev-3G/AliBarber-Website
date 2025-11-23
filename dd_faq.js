const accordions = document.querySelectorAll(".accordion");

accordions.forEach((accordion) => {
  accordion.addEventListener("click", () => {
    accordion.classList.toggle("active");
    const panel = accordion.nextElementSibling;

    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      // Close other panels
      document.querySelectorAll(".panel").forEach(p => p.style.maxHeight = null);
      document.querySelectorAll(".accordion").forEach(a => a.classList.remove("active"));
      
      // Open this one
      accordion.classList.add("active");
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
});