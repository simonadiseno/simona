window.addEventListener("load", () => {
  let active = false;
  const btn = document.getElementById("btn-collapse");
  const nav = document.getElementById("responsive-nav");
  const collapse = document.getElementById("hamburger-inner");
  const links = document.getElementsByClassName("link");
  btn.addEventListener(
    "click",
    (e) => {
      if (active) {
        for (let i = 0; i < links.length; i++) {
          links[i].classList.add("d-none");
        }
        btn.classList.remove("is-active");
        nav.classList.remove("Main__responsive-nav-active");
        collapse.classList.add("hamburger-inner-active");
        active = false;
      } else {
        for (let i = 0; i < links.length; i++) {
          links[i].classList.remove("d-none");
        }
        btn.classList.add("is-active");
        nav.classList.add("Main__responsive-nav-active");
        collapse.classList.remove("hamburger-inner-active");
        active = true;
      }
    },
    false
  );
});
