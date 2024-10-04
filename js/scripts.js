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

// Smooth Scroll for links with # in href
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) { // When the scroll is greater than 100px
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});
