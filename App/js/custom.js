const parentmenu = document.querySelectorAll(".contain-submenu");

const toggleMenu = (event) => {
  const expand = document.querySelector(".expand");
  const li = event.target.parentElement;
  const toggleclass = "expand";
  event.preventDefault();
  console.log(expand); // laga
  expand == undefined ? "" : expand.classList.remove(toggleclass);
  console.log(expand); // hata
  li.classList[1] === undefined
    ? li.classList.add(toggleclass)
    : li.classList.remove(toggleclass);
  console.log(expand); // aya
};

parentmenu.forEach(
  (parent = (e) => {
    e.addEventListener("click", toggleMenu);
  })
);
