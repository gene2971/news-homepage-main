const toggle = document.querySelector(".toggle");
const nav = document.querySelector(".nav-list");

toggle.addEventListener("click", () => {
  const visibility = nav.getAttribute("data-visible");
  if (visibility === "false") {
    nav.setAttribute("data-visible", true);
    toggle.setAttribute("aria-expanded", true);
  } else {
    nav.setAttribute("data-visible", false);
    toggle.setAttribute("aria-expanded", false);
  }

  console.log(visibility);
});
