// Custom JavaScript
const canvas = document.getElementById('binaryRain');
const ctx = canvas.getContext('2d');

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

const binaryChars = '01';
const numDrops = 200;
const drops = [];
for (let i = 0; i < numDrops; i++) {
    drops.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        fontSize: 10 + Math.random() * 25,
        alpha: 0.3 + Math.random() * 0.7,
        speed: 1 + Math.random() * 3
    });
}


function draw() {
    // Semi-transparent overlay for trailing effect
    ctx.fillStyle = "rgba(26, 5, 47, 1)"; // your blue
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    drops.forEach(drop => {
        const text = binaryChars.charAt(Math.floor(Math.random() * binaryChars.length));

        // Glow effect for closer drops (bigger size)
        ctx.shadowColor = "rgba(251, 250, 238, 0.85)";
        ctx.shadowBlur = drop.fontSize > 20 ? 12 : 5;

        ctx.font = drop.fontSize + "px monospace";
        ctx.fillStyle = `rgba(251, 250, 238, ${drop.alpha})`; // pure blue look
        ctx.fillText(text, drop.x, drop.y);

        // Update position (falling diagonal for more depth illusion)
        drop.x += 0.3 * drop.speed;
        drop.y += drop.speed * drop.fontSize / 20;

        // Reset if off screen
        if (drop.y > canvas.height || drop.x > canvas.width) {
            drop.x = Math.random() * canvas.width * 0.3;
            drop.y = 0;
            drop.fontSize = 10 + Math.random() * 25;
            drop.alpha = 0.3 + Math.random() * 0.7;
            drop.speed = 1 + Math.random() * 3;
        }
    });
}

// Run animation
setInterval(draw, 40); // lower = faster


let lastScrollPosition = 0;
const navbar = document.querySelector('.navbar');
const navbarHeight = navbar.offsetHeight;

window.addEventListener('scroll', function () {
    let currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScrollPosition > lastScrollPosition && currentScrollPosition > navbarHeight) {
        // User is scrolling down and past the navbar height
        navbar.classList.add('hidden');
        navbar.classList.remove('visible');
    } else {
        // User is scrolling up
        navbar.classList.add('visible');
        navbar.classList.remove('hidden');
    }

    lastScrollPosition = currentScrollPosition;
});

// Show the navbar when hovering near the top of the page
window.addEventListener('mousemove', function (event) {
    if (event.clientY <= 50) {
        // If the mouse is near the top (within 50px of the top)
        navbar.classList.add('visible');
        navbar.classList.remove('hidden');
    }
});

// Collapse the navbar when a link is clicked (for smaller screens)
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function () {
        const navbarCollapse = document.querySelector('.navbar-collapse');
        const isNavbarExpanded = navbarCollapse.classList.contains('show');

        if (isNavbarExpanded) {
            // Collapse the navbar after clicking a link
            new bootstrap.Collapse(navbarCollapse).hide();
        }
    });
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

window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) { // When the scroll is greater than 100px
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});
