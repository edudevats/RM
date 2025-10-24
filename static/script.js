// Language toggle functionality
document.addEventListener('DOMContentLoaded', function() {
    const langToggle = document.getElementById('lang-toggle');
    if (langToggle) {
        langToggle.addEventListener('click', function() {
            const currentPage = window.location.pathname.split('/').pop();
            let targetPage = '';

            if (currentPage.includes('-es.html')) {
                // Switch from Spanish to English
                targetPage = currentPage.replace('-es.html', '.html');
            } else {
                // Switch from English to Spanish
                targetPage = currentPage.replace('.html', '-es.html');
            }

            // Handle special cases
            if (currentPage === 'index.html') {
                targetPage = 'index-es.html';
            } else if (currentPage === 'index-es.html') {
                targetPage = 'index.html';
            }

            window.location.href = targetPage;
        });
    }

    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });

        // Close mobile menu when clicking on a link
        const navLinks = document.querySelectorAll('.nav-menu a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
            });
        });
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});

// Add scroll effect to header
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (header) {
        if (window.scrollY > 100) {
            header.style.background = 'rgba(44, 62, 80, 0.95)';
        } else {
            header.style.background = 'linear-gradient(135deg, #2c3e50 0%, #3498db 100%)';
        }
    }
});