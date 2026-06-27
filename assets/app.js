/* =====================================================
   QUALIDRINKS EVENTS
   PREMIUM WEBSITE JAVASCRIPT
===================================================== */



    /* ==========================================
       PRELOADER
    ========================================== */

    const preloader = document.getElementById("preloader");

    document.addEventListener("DOMContentLoaded", () => {

        setTimeout(() => {

            preloader.classList.add("preloader-hide");

            setTimeout(() => {
                preloader.style.display = "none";
            }, 500);

        }, 1000);

    });

    /* ==========================================
       STICKY NAVBAR
    ========================================== */

    const navbar = document.querySelector(".navbar");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 100) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }

    });

    /* ==========================================
       MOBILE MENU
    ========================================== */

    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");

    if (hamburger) {

        hamburger.addEventListener("click", () => {

            navLinks.classList.toggle("active");

        });

    }

    document.querySelectorAll(".nav-links a").forEach(link => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("active");

        });

    });

    /* ==========================================
       REVEAL ON SCROLL
    ========================================== */

    const revealElements = document.querySelectorAll(
        ".section, .service-card, .stat-card, .pricing-card"
    );

    const revealOnScroll = () => {

        revealElements.forEach(element => {

            const windowHeight = window.innerHeight;
            const elementTop = element.getBoundingClientRect().top;

            if (elementTop < windowHeight - 100) {

                element.classList.add("active");

            }

        });

    };

    window.addEventListener("scroll", revealOnScroll);

    revealOnScroll();

    /* ==========================================
       COUNTER ANIMATION
    ========================================== */

    // const counters = document.querySelectorAll(".counter");

    // const startCounter = counter => {

    //     const target = Number(counter.dataset.target);

    //     let count = 0;

    //     const speed = target / 100;

    //     const updateCounter = () => {

    //         count += speed;

    //         if (count < target) {

    //             counter.innerText = Math.floor(count);

    //             requestAnimationFrame(updateCounter);

    //         } else {

    //             counter.innerText = target;

    //         }

    //     };

    //     updateCounter();

    // };

    // let counterStarted = false;

    // const runCounters = () => {

    //     const statsSection = document.querySelector(".stats");

    //     if (!statsSection) return;

    //     const position = statsSection.getBoundingClientRect().top;

    //     if (position < window.innerHeight && !counterStarted) {

    //         counters.forEach(startCounter);

    //         counterStarted = true;

    //     }

    // };

    // window.addEventListener("scroll", runCounters);

    // runCounters();

    /* ==========================================
       FAQ ACCORDION
    ========================================== */

    const faqQuestions = document.querySelectorAll(".faq-question");

    faqQuestions.forEach(question => {

        question.addEventListener("click", () => {

            const answer = question.nextElementSibling;

            const isOpen =
                answer.style.maxHeight &&
                answer.style.maxHeight !== "0px";

            document.querySelectorAll(".faq-answer").forEach(item => {

                item.style.maxHeight = null;
                item.classList.remove("active");

            });

            if (!isOpen) {

                answer.style.maxHeight =
                    answer.scrollHeight + "px";

                answer.classList.add("active");

            }

        });

    });

    /* ==========================================
       TESTIMONIAL SLIDER
    ========================================== */

    const testimonials =
        document.querySelectorAll(".testimonial");

    let testimonialIndex = 0;

    function showTestimonial(index) {

        testimonials.forEach(item => {

            item.classList.remove("active");

        });

        testimonials[index].classList.add("active");

    }

    if (testimonials.length > 0) {

        setInterval(() => {

            testimonialIndex++;

            if (testimonialIndex >= testimonials.length) {

                testimonialIndex = 0;

            }

            showTestimonial(testimonialIndex);

        }, 5000);

    }

    /* ==========================================
       BACK TO TOP
    ========================================== */

    const backToTop =
        document.getElementById("backToTop");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 500) {

            backToTop.classList.add("show");

        } else {

            backToTop.classList.remove("show");

        }

    });


    if (backToTop) {

    backToTop.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}

    /* ==========================================
       LIGHTBOX GALLERY
    ========================================== */

    const galleryImages =
        document.querySelectorAll(".gallery img");

    if (galleryImages.length > 0) {

        const lightbox = document.createElement("div");
        lightbox.className = "lightbox";

        lightbox.innerHTML = `
            <span class="lightbox-close">&times;</span>
            <img src="" alt="">
        `;

        document.body.appendChild(lightbox);

        const lightboxImage =
            lightbox.querySelector("img");

        const closeButton =
            lightbox.querySelector(".lightbox-close");

        galleryImages.forEach(image => {

            image.addEventListener("click", () => {

                lightbox.classList.add("active");

                lightboxImage.src = image.src;

            });

        });

        closeButton.addEventListener("click", () => {

            lightbox.classList.remove("active");

        });

        lightbox.addEventListener("click", e => {

            if (e.target === lightbox) {

                lightbox.classList.remove("active");

            }

        });

    }
    


    /* ==========================================
       CONTACT FORM
    ========================================== */

    const contactForm =
        document.querySelector(".contact-form");

    if (contactForm) {

        contactForm.addEventListener("submit", e => {

            e.preventDefault();

            const name = document.getElementById("name").value;
            const email = document.getElementById("email").value;
            const phone = document.getElementById("phone").value;
            const eventType = document.getElementById("eventType").value;
            const explan = document.getElementById("explan").value;
            const guestNumber = document.getElementById("guestNumber").value;

            const message = `New Form Submission:%0AName: ${name}
            %0AEmail: ${email}
            %0APhone: ${phone}
            %0AEvent-Type: ${eventType}
            %0ANumber Of Guests: ${guestNumber}
            %0ADescription: ${explan}`;

            window.open(
                `https://wa.me/2349042983124?text=${encodeURIComponent(message)}`,
                '_blank'
            );
         
           

        });

    }

    /* ==========================================
       SMOOTH ACTIVE NAV LINKS
    ========================================== */

    const sections =
        document.querySelectorAll("section");

    const navItems =
        document.querySelectorAll(".nav-links a");

    window.addEventListener("scroll", () => {

        let current = "";

        sections.forEach(section => {

            const sectionTop =
                section.offsetTop - 150;

            const sectionHeight =
                section.clientHeight;

            if (
                pageYOffset >= sectionTop &&
                pageYOffset < sectionTop + sectionHeight
            ) {

                current = section.getAttribute("id");

            }

        });

        navItems.forEach(link => {

            link.classList.remove("current");

            if (
                link.getAttribute("href") ===
                `#${current}`
            ) {

                link.classList.add("current");

            }

        });

    });

    /* ==========================================
       PARALLAX HERO EFFECT
    ========================================== */

    // const hero = document.querySelector(".hero");

    // window.addEventListener("scroll", () => {

    //     const scrollValue = window.scrollY;

    //     if (hero) {

    //         hero.style.backgroundPositionY =
    //             scrollValue * 0.4 + "px";

    //     }

    // });

    /* ==========================================
       FLOATING EFFECT FOR SERVICE CARDS
    ========================================== */

    // const cards =
    //     document.querySelectorAll(".service-card");

    // cards.forEach((card, index) => {

    //     card.style.animation =
    //         `floatCard ${3 + index * 0.2}s ease-in-out infinite`;

    // });

//});

/* ==========================================
   FLOATING CARD KEYFRAME
========================================== */

// const style = document.createElement("style");

// style.innerHTML = `
// @keyframes floatCard {

//     0% {
//         transform: translateY(0px);
//     }

//     50% {
//         transform: translateY(-8px);
//     }

//     100% {
//         transform: translateY(0px);
//     }

// }
// `;

// document.head.appendChild(style);

/* ==========================================
   CONSOLE BRANDING
========================================== */

console.log(
`
======================================
QUALIDRINKS EVENTS
Premium Beverage Management Website
======================================
`
);