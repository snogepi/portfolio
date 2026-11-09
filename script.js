const hamburgerBtn = document.getElementById("hamburger-btn");
const navMenu = document.getElementById("nav-menu");
const closeBtn = document.getElementById("close-btn");
const navLinks = navMenu.querySelectorAll("a");

const certPhotos = document.querySelectorAll(".cert-photo");
const projectContainers = document.querySelectorAll(".project-container");

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

projectContainers.forEach(item => {
    item.addEventListener("click", () => {
        item.classList.toggle("fullscreen");
    });
})

anime({
    targets: '#landing-page .landing-element',
    opacity: [0, 1],
    translateY: [20, 0],
    delay: anime.stagger(150),
    duration: 800,
    easing: 'easeOutQuad'
});

const sectionObserverOptions = {
    threshold: 0.55
};

const pageSectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        const elements = entry.target.querySelectorAll('.anim-element');

        if (entry.isIntersecting) {
            anime.remove(elements);
            anime({
                targets: elements,
                opacity: [0, 1],
                translateY: [30, 0],
                delay: anime.stagger(150),
                duration: 800,
                easing: 'easeOutQuad',
                begin: () => {
                    elements.forEach(el => el.style.visibility = "visible");
                },
                complete: (anim) => {
                    anim.animatables.forEach(target => {
                        target.target.style.transform = '';
                    });
                }
            });
        }

        else {
            anime.remove(elements);
            anime({
                targets: elements,
                opacity: [1, 0],
                translateY: [0, -20],
                duration: 400,
                easing: 'easeInQuad',
                complete: () => {
                    elements.forEach(el => el.style.visibility = "hidden");
                }
            });
        }
    });
}, sectionObserverOptions);

const sections = document.querySelectorAll('#landing-page, #about-page, #stack-page, #certifications-page, #projects-page, #contact-page');

sections.forEach(section => {
    pageSectionObserver.observe(section);
});