/* =========================
   MOBILE MENU
========================= */

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});


/* =========================
   CLOSE MENU AFTER CLICK
========================= */

const links = document.querySelectorAll(".nav-links a");

links.forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

    });

});


/* =========================
   CONTACT FORM
========================= */

const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = document.getElementById("name").value;

    alert(
        `Thank you, ${name}! Your message has been received.`
    );

    contactForm.reset();

});


/* =========================
   ACTIVE NAVIGATION
========================= */

const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", () => {

    const scrollPosition = window.scrollY + 150;

    sections.forEach(section => {

        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute("id");

        if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionTop + sectionHeight
        ) {

            links.forEach(link => {
                link.classList.remove("active");
            });

            const activeLink = document.querySelector(
                `.nav-links a[href="#${sectionId}"]`
            );

            if (activeLink) {
                activeLink.classList.add("active");
            }

        }

    });

});