const navItems = document.querySelectorAll(".nav-item");
navItems.forEach((item) => {
  item.addEventListener("click", () => {
    item.classList.toggle("nav-item-expanded");
  });
});

const sidebarCollapser = document.querySelector("svg.sidebar-collapser");
const sidebar = document.querySelector("aside");
console.log(sidebarCollapser);
sidebarCollapser.addEventListener("click", () => {
  sidebar.classList.toggle("collapsed");
});
