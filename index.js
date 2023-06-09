// menu button

let menuButton = document.querySelector(".menu-btn");
let navbarList = document.querySelector(".navbar-list");
menuButton.addEventListener("click", () => {
  navbarList.classList.toggle("active");
  
  if (menuButton.children[0].classList.contains("fa-bars")) {
    menuButton.children[0].classList.remove("fa-bars");
    menuButton.children[0].classList.add("fa-xmark");
  } else {
    menuButton.children[0].classList.add("fa-bars");
    menuButton.children[0].classList.remove("fa-xmark");
  }
});

// ----------------------------------------------
