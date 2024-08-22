// Custom JavaScript
const numStars = 150; // Number of stars
const starfield = document.getElementById('starfield');

for (let i = 0; i < numStars; i++) {
    const star = document.createElement('div');
    const size = Math.random() * 3 + 1; // Random size between 1 and 4
    const x = Math.random() * window.innerWidth; // Random x position
    const y = Math.random() * window.innerHeight; // Random y position
    
    star.classList.add('star');
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    star.style.left = `${x}px`;
    star.style.top = `${y}px`;
    star.style.animationDuration = `${Math.random() * 1 + 0.5}s`; // Random flicker duration

    starfield.appendChild(star);
}

$(document).ready(function () {
    $(".nav-link").on("mouseover", function () {
        var position = $(this).position(); // Use position relative to the navbar
        var width = $(this).outerWidth(); // Use outerWidth for full width
        $(".slide2")
            .css({ opacity: 1, left: position.left, width: width })
            .addClass("squeeze");
    });

    $(".nav-link").on("mouseout", function () {
        $(".slide2").css({ opacity: 0 }).removeClass("squeeze");
    });

    $(".nav-link").on("mousemove", function () {
        var position = $(this).position(); // Use position relative to the navbar
        var width = $(this).outerWidth(); // Use outerWidth for full width
        $(".slide1").css({ left: position.left, width: width });
    });

    // Initial positioning
    var currentWidth = $(".navbar-nav .nav-item:first-child").outerWidth();
    var current = $(".navbar-nav .nav-item:first-child").position();
    $(".slide1").css({ left: current.left, width: currentWidth });
});

// Smooth Scroll for links with # in href
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
