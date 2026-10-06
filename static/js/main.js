/**
 * AMAN KUMAR THAKUR - PORTFOLIO JAVASCRIPT
 * Interactive controls: Mobile nav, scroll effects, toast notifications, smooth scroll
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Mobile Menu Toggle
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileNavMenu = document.getElementById('mobileNavMenu');

    if (mobileMenuBtn && mobileNavMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            const isOpen = mobileNavMenu.classList.toggle('is-open');
            mobileMenuBtn.classList.toggle('is-active');
            mobileMenuBtn.setAttribute('aria-expanded', isOpen);
            mobileNavMenu.setAttribute('aria-hidden', !isOpen);
        });

        // Close menu when a link inside is clicked
        const mobileLinks = mobileNavMenu.querySelectorAll('a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileNavMenu.classList.remove('is-open');
                mobileMenuBtn.classList.remove('is-active');
                mobileMenuBtn.setAttribute('aria-expanded', 'false');
                mobileNavMenu.setAttribute('aria-hidden', 'true');
            });
        });
    }

    // 2. Sticky Header Elevation on Scroll
    const header = document.getElementById('siteHeader');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 30) {
            header?.classList.add('scrolled');
        } else {
            header?.classList.remove('scrolled');
        }
    }, { passive: true });

    // 3. Back to Top Button
    const backToTopBtn = document.getElementById('backToTopBtn');
    if (backToTopBtn) {
        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // 4. Auto-dismiss Toast Messages
    const toastContainer = document.getElementById('toastContainer');
    if (toastContainer) {
        const toasts = toastContainer.querySelectorAll('.toast-message');
        toasts.forEach(toast => {
            setTimeout(() => {
                toast.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
                toast.style.opacity = '0';
                toast.style.transform = 'translateX(100%)';
                setTimeout(() => toast.remove(), 400);
            }, 6000);
        });
    }

    // 5. Contact Form UX enhancement
    const contactForm = document.getElementById('contactForm');
    const submitBtn = document.getElementById('submitBtn');
    if (contactForm && submitBtn) {
        contactForm.addEventListener('submit', () => {
            submitBtn.disabled = true;
            submitBtn.innerHTML = '<span>Sending Message...</span> <i class="fa-solid fa-spinner fa-spin"></i>';
        });
    }
});
