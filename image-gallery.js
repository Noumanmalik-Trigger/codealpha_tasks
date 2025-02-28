const galleryItems = document.querySelectorAll(".gallery-item");
const modal = document.getElementById("modal");
const modalImage = document.getElementById("modalImage");
const caption = document.getElementById("caption");
const closeBtn = document.getElementById("closeBtn");

galleryItems.forEach((item) => {
  item.addEventListener("click", function () {
    modal.style.display = "flex";
    modalImage.src = this.src;
    caption.textContent = this.alt;
  });
});

closeBtn.addEventListener("click", function () {
  modal.style.display = "none";
});

modal.addEventListener("click", function (e) {
  if (e.target === modal) {
    modal.style.filter = "none";
  }
});
