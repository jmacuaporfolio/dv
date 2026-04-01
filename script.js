// Hamburger menu toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});

// Smooth scroll
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
        navLinks.classList.remove('show'); // close menu on mobile
    });
});

// Fade-in sections on scroll
const faders = document.querySelectorAll('.fade-in');
const appearOptions = { threshold: 0.2, rootMargin: "0px 0px -50px 0px" };
const appearOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
    });
}, appearOptions);

faders.forEach(fader => appearOnScroll.observe(fader));

// Typing effect for roles
const roles = [
    "Freelance Web Developer",
    "Data Encoder",
    "Information System Analyst"
];

let i = 0, j = 0, currentRole = "", isDeleting = false;
const typedText = document.querySelector(".typed-text");

function type() {
    if (i >= roles.length) i = 0;
    currentRole = roles[i];

    if (!isDeleting) {
        typedText.textContent = currentRole.slice(0, j + 1);
        j++;
        if (j === currentRole.length) {
            isDeleting = true;
            setTimeout(type, 1500);
            return;
        }
    } else {
        typedText.textContent = currentRole.slice(0, j - 1);
        j--;
        if (j === 0) {
            isDeleting = false;
            i++;
        }
    }
    setTimeout(type, isDeleting ? 35 : 65);
}

type();
