window.addEventListener("load", () => {
  const categories = document.getElementsByClassName("categories__item");
  for (let i = 0; i < categories.length; i++) {
    categories[i].addEventListener("click", () => {
      window.location.replace(
        "/views/galery.html?category=" +
          categories[i].getAttribute("data-value").toLowerCase()
      );
    });
    categories[i].addEventListener("mouseover", () => {
      document
        .getElementsByClassName("categories__filter-intensive")
        [i].classList.add("categories__filter-intensive--show");
    });
    categories[i].addEventListener("mouseleave", () => {
      document
        .getElementsByClassName("categories__filter-intensive")
        [i].classList.remove("categories__filter-intensive--show");
    });
  }
});
