// Loading Animation
window.addEventListener('load', () => {
    const loading = document.querySelector('.loading');
    if (loading) {
        loading.classList.add('hidden');
    }
});

// Navbar Scroll Effect
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile Menu Toggle
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
        // Close mobile menu after clicking
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    });
});

// Enhanced Scroll Reveal Animation
const observerOptions = {
    threshold: 0.2,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.classList.add('fade-in-up');
            }, index * 100);
        }
    });
}, observerOptions);

// Observe all sections and cards for scroll reveal
document.querySelectorAll('section, .card, .service-card, .review-card, .product-card, .collection-card, .item-card, .gallery-item').forEach(element => {
    observer.observe(element);
});

// Parallax Effect for Hero Background
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroImage = document.querySelector('.hero-image');
    if (heroImage) {
        heroImage.style.transform = `scale(${1 + scrolled * 0.0005})`;
    }
});

// Floating Bubbles Animation Enhancement
const bubbles = document.querySelectorAll('.bubble');
bubbles.forEach((bubble, index) => {
    bubble.style.animationDelay = `${index * 0.5}s`;
    bubble.style.left = `${Math.random() * 100}%`;
    bubble.style.animationDuration = `${4 + Math.random() * 4}s`;
});

// Gallery Hover Effect
document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.style.transform = 'scale(1.05)';
    });

    item.addEventListener('mouseleave', () => {
        item.style.transform = 'scale(1)';
    });
});

// Enhanced Product Card Hover Glow
document.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.boxShadow = '0 25px 50px rgba(0, 212, 255, 0.4), 0 0 30px rgba(0, 212, 255, 0.2)';
        card.style.borderColor = 'rgba(0, 212, 255, 0.5)';
    });

    card.addEventListener('mouseleave', () => {
        card.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.3)';
        card.style.borderColor = '';
    });
});

// Enhanced Service Card Icon Animation
document.querySelectorAll('.service-card').forEach(card => {
    const icon = card.querySelector('.service-icon');
    card.addEventListener('mouseenter', () => {
        icon.style.transform = 'scale(1.3) rotate(15deg)';
        icon.style.transition = 'transform 0.4s ease';
        icon.style.filter = 'drop-shadow(0 0 20px rgba(0, 212, 255, 0.6))';
    });

    card.addEventListener('mouseleave', () => {
        icon.style.transform = 'scale(1) rotate(0deg)';
        icon.style.filter = '';
    });
});

// Enhanced Collection Card Floating Animation
document.querySelectorAll('.collection-card').forEach(card => {
    let animationId;
    const float = () => {
        const time = Date.now() * 0.001;
        card.style.transform = `translateY(${Math.sin(time) * 8}px)`;
        animationId = requestAnimationFrame(float);
    };

    card.addEventListener('mouseenter', () => {
        cancelAnimationFrame(animationId);
        card.style.transform = 'translateY(-15px) scale(1.02)';
        card.style.boxShadow = '0 25px 50px rgba(0, 212, 255, 0.3)';
    });

    card.addEventListener('mouseleave', () => {
        float();
        card.style.boxShadow = '';
    });

    float();
});

// Enhanced Review Card Star Animation
document.querySelectorAll('.stars').forEach(stars => {
    stars.addEventListener('mouseenter', () => {
        stars.style.transform = 'scale(1.2)';
        stars.style.transition = 'transform 0.3s ease';
        stars.style.filter = 'drop-shadow(0 0 15px rgba(255, 215, 0, 0.8))';
    });

    stars.addEventListener('mouseleave', () => {
        stars.style.transform = 'scale(1)';
        stars.style.filter = '';
    });
});

// Enhanced Gallery Hover Effect with Lightbox Preview
document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.style.transform = 'scale(1.05)';
        item.style.boxShadow = '0 20px 40px rgba(0, 212, 255, 0.3)';
        item.style.borderColor = 'rgba(0, 212, 255, 0.4)';
    });

    item.addEventListener('mouseleave', () => {
        item.style.transform = 'scale(1)';
        item.style.boxShadow = '';
        item.style.borderColor = '';
    });
});

// Parallax Effect for Section Backgrounds
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const sections = document.querySelectorAll('section');

    sections.forEach(section => {
        if (section.style.backgroundAttachment === 'fixed') {
            const rate = scrolled * -0.5;
            section.style.backgroundPosition = `center ${rate}px`;
        }
    });
});

// Smooth Button Click Animations
document.querySelectorAll('.btn-primary, .btn-secondary, .btn-outline').forEach(button => {
    button.addEventListener('click', (e) => {
        button.style.transform = 'scale(0.95)';
        setTimeout(() => {
            button.style.transform = 'scale(1)';
        }, 150);
    });
});

// Dynamic Loading Animation for Images
document.querySelectorAll('img').forEach(img => {
    img.addEventListener('load', () => {
        img.style.opacity = '0';
        img.style.animation = 'fadeIn 0.5s ease forwards';
    });
});

// Add fadeIn animation
const style = document.createElement('style');
style.textContent = `
@keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
}
`;
document.head.appendChild(style);

// Dynamic Year Update
const yearElement = document.querySelector('.footer-bottom p');
if (yearElement) {
    const currentYear = new Date().getFullYear();
    yearElement.innerHTML = yearElement.innerHTML.replace('2024', currentYear);
}

// Performance Optimization: Lazy Load Images
const images = document.querySelectorAll('img[data-src]');
const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.classList.remove('lazy');
            imageObserver.unobserve(img);
        }
    });
});

images.forEach(img => imageObserver.observe(img));

// Accessibility: Keyboard Navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    }
});

// Prevent Right Click (Optional for premium feel)
document.addEventListener('contextmenu', (e) => {
    e.preventDefault();
});

// Console Welcome Message
console.log('%c🌿 Tropical Nature Aquarium 🌿', 'color: #00d4ff; font-size: 20px; font-weight: bold;');
console.log('%cWelcome to our premium aquarium website!', 'color: #ffffff; font-size: 14px;');
console.log('%cDeveloped with ❤️ for aquatic enthusiasts', 'color: #b0b0b0; font-size: 12px;');