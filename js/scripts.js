// ---------------------------------
//        Nav Menu Scripts
// ---------------------------------

// ---------------------------------
//         Active Page Script
// ---------------------------------
const currentPage = window.location.pathname;
const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
    if (link.href.includes(`${currentPage}`)) {
        link.classList.add('active');
    }

    link.addEventListener('mouseenter', function() {
        link.classList.remove('active');
    });

    link.addEventListener('mouseleave', function() {
        if (link.href.includes(`${currentPage}`)) {
            link.classList.add('active');
        }
    });
});

// ---------------------------------
//       Mobile Menu Script
// ---------------------------------
const hamburger = document.querySelector(".burger-menu");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach(n => n.
addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}));

