
  // Get modal elements
  const modal = document.getElementById("myModal");
  const modalImg = document.getElementById("img01");
  const closeBtn = document.getElementsByClassName("close")[0];

  // All clickable images
  const images = document.querySelectorAll(".clickable-img");

  // When an image is clicked, show it in the modal
  images.forEach(img => {
    img.addEventListener("click", () => {
      modal.style.display = "block";
      modalImg.src = img.src;
    });
  });

  // Close when clicking on the close button
  closeBtn.onclick = function() {
    modal.style.display = "none";
  };

  // Close when clicking outside the image
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });