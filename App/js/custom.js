const parentmenu = document.querySelectorAll(".contain-submenu");
const nav = document.querySelector(".primary-nav");
const ham = document.querySelector(".hamburger");
const header = document.querySelector("header");
const section = document.querySelector("section.hero");
const article = document.querySelector("article.about");
const hamMenu = document.querySelector(".hamburger");
const fallback = [section, article];

// disable context menu
// document.addEventListener(
//   "contextmenu",
//   (menu = (event) => {
//     event.preventDefault();
//   })
// );

// Toggle Navigation Menus
const toggleNavItems = (event) => {
  const expand = document.querySelector(".expand");
  const li = event.target.closest(".contain-submenu"); // or .parentElement
  const toggleclass = "expand";
  event.target.getAttribute("role") == "menuitem" ? event.preventDefault() : "";
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
  state = nav.getAttribute("aria-expanded");
  if (hamMenu.classList[1] == "open") {
    hamMenu.classList.remove("open");
    nav.classList.remove("expand-nav");
    state = "false";
  } else {
    hamMenu.classList.add("open");
    nav.classList.add("expand-nav", "true");
    state = "true";
  }
  nav.setAttribute("aria-expanded", state);
  console.log(nav);
};

ham.addEventListener("click", toggleNav);

// close navigation on click outside

const closeNav = (e) => {
  const targets = e.target;
  if (!(hamMenu.classList[1] === undefined || null)) {
    hamMenu.classList.remove("open");
    nav.classList.remove("expand-nav");
  }
};

fallback.forEach(
  (fallbacks = (e) => {
    e.addEventListener("click", closeNav);
  })
);
