const moreIcon = document.querySelector(".more-icon");
const hiddenNav = document.querySelector(".hidden-navbar");

function change() {
  if (hiddenNav.style.display === "flex") {
    hiddenNav.style.display = "none";
    hiddenNav.style.top = "-200px";
  } else {
    hiddenNav.style.display = "flex";
    hiddenNav.style.top = "60px";
  }
}

moreIcon.addEventListener("click", change);

window.addEventListener("resize", () => {
  let width = window.screen.width;

  if (width < 300 || width > 600) {
    hiddenNav.style.display = "none";
  }
});
