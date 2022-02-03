const parentmenu = document.querySelectorAll(".contain-submenu");

const toggleMenu = (event) => {
  const expand = document.querySelector(".expand");
  const li = event.target.closest(".contain-submenu"); // or .parentElement
  const toggleclass = "expand";
  event.target.getAttribute("role") == undefined || null
    ? event.preventDefault()
    : "";
  expand == undefined ? "" : expand.classList.remove(toggleclass);
  li.classList[1] === undefined
    ? li.classList.add(toggleclass)
    : li.classList.remove(toggleclass);
};

parentmenu.forEach(
  (parent = (e) => {
    e.addEventListener("click", toggleMenu);
  })
);
