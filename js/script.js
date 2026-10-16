/* ========================================
   WORKS FILTER
======================================== */

const filterButtons = document.querySelectorAll(".filter-button");
const workCards = document.querySelectorAll(".work-card");

filterButtons.forEach((button) => {

    button.addEventListener("click", () => {

        const filter = button.dataset.filter;


        // ボタンの active を切り替える
        filterButtons.forEach((item) => {
            item.classList.remove("active");
        });

        button.classList.add("active");


        // WORKSを絞り込む
        workCards.forEach((card) => {

            const category = card.dataset.category;

            if (
                filter === "all" ||
                category === filter
            ) {

                card.classList.remove("hide");

            } else {

                card.classList.add("hide");

            }

        });

    });

});


/* ========================================
   MOBILE MENU
======================================== */

const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");

if (hamburger && nav) {

    hamburger.addEventListener("click", () => {

        const isActive = hamburger.classList.toggle("active");

        nav.classList.toggle("active");

        hamburger.setAttribute(
            "aria-expanded",
            isActive
        );

    });


    // メニューをクリックしたら閉じる
    const navLinks = nav.querySelectorAll("a");

    navLinks.forEach((link) => {

        link.addEventListener("click", () => {

            hamburger.classList.remove("active");
            nav.classList.remove("active");

            hamburger.setAttribute(
                "aria-expanded",
                "false"
            );

        });

    });

}


/* ========================================
   HEADER SCROLL
======================================== */

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 30) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

});


/* ========================================
   SCROLL ANIMATION
======================================== */

const animationTargets = document.querySelectorAll(
    ".section-heading, .about-content, .work-card, .video-intro-inner, .skill, .contact-content"
);

animationTargets.forEach((element) => {
    element.classList.add("fade-in");
});


const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("is-visible");

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.1
    }
);


animationTargets.forEach((element) => {
    observer.observe(element);
});