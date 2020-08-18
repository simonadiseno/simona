window.addEventListener("load", () => {
  let active = false;
  const btn = document.getElementById("btn-collapse");
  const nav = document.getElementById("responsive-nav");
  const collapse = document.getElementById("hamburger-inner");
  btn.addEventListener(
    "click",
    (e) => {
      if (active) {
        btn.classList.remove("is-active");
        nav.classList.remove("Main__responsive-nav-active");
        collapse.classList.add("hamburger-inner-active");
        active = false;
      } else {
        btn.classList.add("is-active");
        nav.classList.add("Main__responsive-nav-active");
        collapse.classList.remove("hamburger-inner-active");
        active = true;
      }
    },
    false
  );
});
