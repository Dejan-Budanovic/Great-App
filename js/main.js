/* NAVBAR ACTIVE CLASS */

const currentLocation = location.pathname;
const navBtn = document.querySelectorAll(".navBtn");
const navLength = navBtn.length;
for (let i = 0; i < navBtn.length; i++) {
  if (navBtn[i].pathname === currentLocation) {
    navBtn[i].classList.add("active");
  }
}

/* NAVBAR ACTIVE CLASS END */

/* HAMBURGER MENU */

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".navBtn");
const headerBtm = document.querySelector(".header-bottom");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  hamburger.classList.toggle("open");
  headerBtm.classList.toggle("open");
});

/* HAMBURGER MENU END */
