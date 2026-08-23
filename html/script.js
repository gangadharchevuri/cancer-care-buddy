// ================= PAGE LOADED =================

document.addEventListener("DOMContentLoaded", () => {

    // ================= SCROLL REVEAL =================

    const revealElements = document.querySelectorAll(
        ".section, .skill-card, .project-card, .timeline-item, .certificate-card, .career-goals div"
    );

    const revealObserver = new IntersectionObserver(
        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                }

            });

        },
        {
            threshold: 0.15
        }
    );


    revealElements.forEach((element) => {
        element.classList.add("reveal");
        revealObserver.observe(element);
    });


    // ================= NAVBAR SCROLL EFFECT =================

    const navbar = document.querySelector(".navbar");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }

    });



    // ================= ACTIVE NAVIGATION =================

    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".navbar nav a");


    window.addEventListener("scroll", () => {

        let currentSection = "";

        sections.forEach((section) => {

            const sectionTop = section.offsetTop - 120;
            const sectionHeight = section.offsetHeight;

            if (
                window.scrollY >= sectionTop &&
                window.scrollY < sectionTop + sectionHeight
            ) {
                currentSection = section.getAttribute("id");
            }

        });


        navLinks.forEach((link) => {

            link.classList.remove("active");

            if (
                link.getAttribute("href") ===
                `#${currentSection}`
            ) {
                link.classList.add("active");
            }

        });

    });


    // ================= SMOOTH LINK HANDLING =================

    document.querySelectorAll('a[href^="#"]').forEach((link) => {

        link.addEventListener("click", (event) => {

            const targetId = link.getAttribute("href");

            if (targetId === "#") {
                return;
            }

            const target = document.querySelector(targetId);

            if (target) {

                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        });

    });


    // ================= TYPING EFFECT =================

    const titleElement = document.querySelector(".hero h2");

    if (titleElement) {

        const titles = [
            "Cyber Security Enthusiast",
            "Software Developer",
            "Python Learner",
            "Tech Enthusiast"
        ];

        let titleIndex = 0;
        let characterIndex = 0;
        let deleting = false;


        function typeEffect() {

            const currentTitle = titles[titleIndex];

            if (!deleting) {

                titleElement.textContent =
                    currentTitle.substring(
                        0,
                        characterIndex + 1
                    );

                characterIndex++;

                if (characterIndex === currentTitle.length) {

                    deleting = true;

                    setTimeout(typeEffect, 1800);

                    return;
                }

            } else {

                titleElement.textContent =
                    currentTitle.substring(
                        0,
                        characterIndex - 1
                    );

                characterIndex--;

                if (characterIndex === 0) {

                    deleting = false;

                    titleIndex =
                        (titleIndex + 1) % titles.length;

                }

            }

            setTimeout(
                typeEffect,
                deleting ? 50 : 90
            );

        }


        typeEffect();

    }


    // ================= CURRENT YEAR =================

    const copyright = document.querySelector(".copyright");

    if (copyright) {

        const year = new Date().getFullYear();

        copyright.textContent =
            `© ${year} Chevuri Gangadhar Rao. All Rights Reserved.`;

    }

});