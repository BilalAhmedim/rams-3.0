const parentmenu = document.querySelectorAll(".contain-submenu");
const ham = document.querySelector(".hamburger");

// Toggle Navigation Menus
const toggleNavItems = (event) => {
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
    e.addEventListener("click", toggleNavItems);
  })
);

// Toggle Navigation
const toggleNav = (e) => {
  const hamMenu = e.target.closest(".hamburger");
  hamMenu.classList[1] == "open"
    ? hamMenu.classList.remove("open")
    : hamMenu.classList.add("open");
  console.log(hamMenu.classList);
};

ham.addEventListener("click", toggleNav);
