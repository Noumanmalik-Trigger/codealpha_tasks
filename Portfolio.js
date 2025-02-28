document.addEventListener("DOMContentLoaded", function () {
  const nameHeading = document.querySelector("header h1");

  nameHeading.addEventListener("click", function () {});
});

document.addEventListener("DOMContentLoaded", function () {
  const about = document.querySelector("section h2");

  about.addEventListener("mouseover", function () {
    about.style.animation = "moveAnimation 3s ease-in-out infinite";
  });

  about.addEventListener("mouseout", function () {
    about.style.animation = "none";
  });
});
