const hamburgerBtn = document.getElementById("hamburger-btn");
const navMenu = document.getElementById("nav-menu");
const closeBtn = document.getElementById("close-btn");
const navLinks = navMenu.querySelectorAll("a");

const certPhotos = document.querySelectorAll(".cert-photo");

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

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        navLinks.forEach(item => {
            item.classList.remove("selected");
        });

        link.classList.add("selected");

        navMenu.classList.remove("active");
        hamburgerBtn.style.display = "block";
        closeBtn.style.display = "none";
        document.body.classList.remove("open-nav");
    });
});

certPhotos.forEach(item => {
    item.addEventListener("click", () => {
        item.classList.toggle("fullscreen");
    });
});

anime({
    targets: '#landing-page .landing-element',
    opacity: [0, 1],
    translateY: [20, 0],
    delay: anime.stagger(500),
    duration: 1000,
    easing: 'easeOutQuad'
});