// Wait for the DOM to fully load before executing scripts
document.addEventListener('DOMContentLoaded', () => {
    // Select the navbar element
    const navbar = document.getElementById('navbar');

    // Function to change navbar's background color based on scroll position
    function handleScroll() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }

    // Add the 'scrolled' class when the page is scrolled
    window.addEventListener('scroll', handleScroll);

    // Add event listeners for hover effects on navigation links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('mouseover', () => {
            link.classList.add('hovered');
        });
        link.addEventListener('mouseout', () => {
            link.classList.remove('hovered');
        });
    });
});

/* Extra JS if you want to add active link functionality */
// Function to update active link based on scroll position
document.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('.section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            navLinks.forEach(link => link.classList.remove('active'));
            navLinks[index].classList.add('active');
        }
    });
});
