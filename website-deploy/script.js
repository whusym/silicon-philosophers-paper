// Note: BibTeX functionality removed as paper is under review

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// Handle code button click
document.getElementById('code-btn').addEventListener('click', function(e) {
    e.preventDefault();
    // Update this URL with your GitHub repository when available
    alert('Code and data repository will be made available upon publication. Please contact the authors for early access.');
});

// Add fade-in animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Apply fade-in to sections
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
});

// Add parallax effect to header
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    const scrolled = window.pageYOffset;
    if (header) {
        header.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Lazy load images
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    observer.unobserve(img);
                }
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// Add hover effect to finding cards
document.querySelectorAll('.finding-card, .implication-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.borderColor = getComputedStyle(document.documentElement)
            .getPropertyValue('--primary-color');
    });

    card.addEventListener('mouseleave', function() {
        this.style.borderColor = getComputedStyle(document.documentElement)
            .getPropertyValue('--border-color');
    });
});

// Print warning for console explorers
console.log('%cThe Collapse of Heterogeneity in Silicon Philosophers', 'font-size: 24px; font-weight: bold; color: #2563eb;');
console.log('%cExploring this site? Check out the full paper and code!', 'font-size: 14px; color: #64748b;');
