// ---------------------------------
//          Menu Page Scripts
// ---------------------------------

// ---------------------------------
//         Back to Top Scripts
// ---------------------------------
document.addEventListener("DOMContentLoaded", function () {
    var backToTop = document.getElementById("back-to-top");
    var footer = document.querySelector("footer");

    window.addEventListener("scroll", function () {
        var windowHeight = window.innerHeight;
        var footerOffset = footer.offsetTop;
        var scrollPosition = window.scrollY;

        if (scrollPosition + windowHeight > footerOffset) {
            var distanceToBottom = scrollPosition + windowHeight - footerOffset;
            backToTop.style.bottom = distanceToBottom + 2 + "px";
        } else {
            backToTop.style.bottom = "2rem";
        }

        if (scrollPosition > 100) {
            backToTop.style.display = "block";
        } else {
            backToTop.style.display = "none";
        }
    });

    backToTop.addEventListener("click", function (event) {
        event.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    });
});

// ---------------------------------
//      Jump to Section Scripts
// ---------------------------------
document.querySelectorAll('.dropdown-content a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        var targetId = this.getAttribute('href').substring(1);
        var targetElement = document.getElementById(targetId);

        if (targetElement) {
            var offset = targetElement.offsetTop - 225;

            window.scrollTo({
                top: offset,
                behavior: 'smooth',
            });
        }
    });
});

// ---------------------------------
//    Toggle Section Menu Scripts
// ---------------------------------
let dropbtn = document.querySelector('.dropbtn');
let dropdownContent = document.querySelector('.dropdown-content');

function toggleDropdown() {
    if (dropdownContent.style.display === 'block') {
        closeDropdown();
    } else {
        openDropdown();
    }
}

function openDropdown() {
    dropdownContent.style.display = 'block';
    dropbtn.classList.add('focused');
    dropbtn.classList.add('clicked');
}

function closeDropdown() {
    dropdownContent.style.display = 'none';
    dropbtn.classList.remove('focused');
    dropbtn.classList.remove('clicked');
}

document.addEventListener('click', function (event) {
    var dropdownMenu = document.querySelector('.dropdown-menu');
    if (!dropdownMenu.contains(event.target)) {
        closeDropdown();
    }
});

document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && dropdownContent.style.display === 'block') {
        closeDropdown();
    }
});

dropbtn.addEventListener('mouseenter', function() {
    if (!dropbtn.classList.contains('clicked')) {
        openDropdown();
    }
});

dropbtn.addEventListener('mouseleave', function() {
    if (!dropbtn.classList.contains('clicked')) {
        closeDropdown();
    }
});

document.querySelectorAll('.dropdown-content a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        closeDropdown();
    });
});