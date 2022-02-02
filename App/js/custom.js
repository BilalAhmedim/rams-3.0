const parentmenu = document.querySelectorAll(".contain-submenu");

const toggleMenu = (event) => {
  const li = event.target.parentElement;
  const toggleclass = "expand";
  const siblingul = event.target.nextElementSibling;
  event.preventDefault();
  li.classList[1] === undefined
    ? li.classList.add(toggleclass)
    : li.classList.remove(toggleclass);
};

parentmenu.forEach(
  (parent = (e) => {
    e.addEventListener("click", toggleMenu);
  })
);
