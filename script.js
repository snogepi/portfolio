const hamburgerBtn = document.getElementById("hamburger-btn");
const navMenu = document.getElementById("nav-menu");
const closeBtn = document.getElementById("close-btn");

hamburgerBtn.addEventListener("click", () => {
    navMenu.classList.add("active");
    hamburgerBtn.style.display = "none";
    closeBtn.style.display = "block";
    document.body.classList.add("open-nav");
});

closeBtn.addEventListener("click", () => {
    navMenu.classList.remove("active");
    hamburgerBtn.style.display = "block";
    closeBtn.style.display = "none";
    document.body.classList.remove("open-nav");
});