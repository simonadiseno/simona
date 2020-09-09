window.addEventListener("load", () => {
  const footerBtn = document.getElementById("footer-btn");
  const footer = document.getElementById("footer");
  let footerActive = false;
  footerBtn.addEventListener("click", () => {
    if (footerActive) {
      footer.classList.remove("footer--active");
      footerBtn.src = "/static/assets/icons/down-arrow-w.svg";
    } else {
      footer.classList.add("footer--active");
      footerBtn.src = "/static/assets/icons/up-arrow-w.svg";
    }
    footerActive = !footerActive;
  });
});
