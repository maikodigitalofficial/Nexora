document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenuOverlay = document.getElementById('mobileMenuOverlay');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-links a');

    function toggleMenu() {
        const isActive = mobileMenuOverlay.classList.contains('active');

        if (isActive) {
            mobileMenuBtn.classList.remove('active');
            mobileMenuBtn.setAttribute('aria-expanded', 'false');
            mobileMenuOverlay.classList.remove('active');
            mobileMenuOverlay.setAttribute('aria-hidden', 'true');
            document.body.style.overflow = '';
        } else {
            mobileMenuBtn.classList.add('active');
            mobileMenuBtn.setAttribute('aria-expanded', 'true');
            mobileMenuOverlay.classList.add('active');
            mobileMenuOverlay.setAttribute('aria-hidden', 'false');
            document.body.style.overflow = 'hidden';
        }
    }

    mobileMenuBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        toggleMenu();
    });

    // Close mobile menu when clicking a link
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (mobileMenuOverlay.classList.contains('active')) {
                toggleMenu();
            }
        });
    });

    // Close mobile menu when clicking overlay background
    mobileMenuOverlay.addEventListener('click', function(e) {
        if (e.target === mobileMenuOverlay) {
            toggleMenu();
        }
    });

    // Navbar scroll effect
    const navbar = document.getElementById('navbar');
    let ticking = false;

    function updateNavbar() {
        const currentScroll = window.pageYOffset;
        if (currentScroll > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        ticking = false;
    }

    window.addEventListener('scroll', function() {
        if (!ticking) {
            window.requestAnimationFrame(updateNavbar);
            ticking = true;
        }
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Escape key to close mobile menu
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && mobileMenuOverlay.classList.contains('active')) {
            toggleMenu();
        }
    });

    // Trap focus in mobile menu when open
    mobileMenuOverlay.addEventListener('keydown', function(e) {
        if (e.key === 'Tab') {
            const focusableElements = mobileMenuOverlay.querySelectorAll('a, button');
            const firstFocusable = focusableElements[0];
            const lastFocusable = focusableElements[focusableElements.length - 1];

            if (e.shiftKey) {
                if (document.activeElement === firstFocusable) {
                    lastFocusable.focus();
                    e.preventDefault();
                }
            } else {
                if (document.activeElement === lastFocusable) {
                    firstFocusable.focus();
                    e.preventDefault();
                }
            }
        }
    });
});



// Scroll reveal for Why Choose Us cards
const whyCards = document.querySelectorAll('.why-card');

const cardObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            cardObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.15,
    rootMargin: '0px 0px -40px 0px'
});

whyCards.forEach(card => {
    cardObserver.observe(card);
});



// ══════════════════════════════════════
// SERVICES SECTION — Scroll Reveal
// Append to main.js
// ══════════════════════════════════════

// Services header
const servicesHeader = document.querySelector('.services-header');
if (servicesHeader) {
    const headerObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                headerObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    headerObserver.observe(servicesHeader);
}

// Service cards
const serviceCards = document.querySelectorAll('.service-card');

const serviceCardObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            serviceCardObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -40px 0px'
});

serviceCards.forEach(card => {
    serviceCardObserver.observe(card);
});

// Outcomes bar
const outcomesBar = document.querySelector('.services-outcomes-bar');
if (outcomesBar) {
    const outcomesObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                outcomesObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });

    outcomesObserver.observe(outcomesBar);
}

// CTA banner
const servicesCta = document.querySelector('.services-cta-banner');
if (servicesCta) {
    const ctaObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                ctaObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });

    ctaObserver.observe(servicesCta);
}



// ══════════════════════════════════════
// PORTFOLIO SECTION — Scroll Reveal
// Append to main.js
// ══════════════════════════════════════

document.addEventListener('DOMContentLoaded', function() {

    // Portfolio header
    const portfolioHeader = document.querySelector('.portfolio-header');
    if (portfolioHeader) {
        const portfolioHeaderObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    portfolioHeaderObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.15 });

        portfolioHeaderObserver.observe(portfolioHeader);
    }

    // Portfolio filters
    const portfolioFilters = document.querySelector('.portfolio-filters');
    if (portfolioFilters) {
        const filtersObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    filtersObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.2 });

        filtersObserver.observe(portfolioFilters);
    }

    // Case cards with staggered delay
    const caseCards = document.querySelectorAll('.case-card');

    const caseCardObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                caseCardObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -40px 0px'
    });

    caseCards.forEach((card, index) => {
        // Assign data-delay for CSS stagger
        card.setAttribute('data-delay', index % 6);
        caseCardObserver.observe(card);
    });

    // ── Filter functionality ──
    const filterTabs = document.querySelectorAll('.filter-tab');

    filterTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            // Update active state
            filterTabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');

            const filterValue = this.getAttribute('data-filter');
            const cards = document.querySelectorAll('.case-card');

            cards.forEach(card => {
                const category = card.getAttribute('data-category');

                if (filterValue === 'all' || category === filterValue) {
                    card.style.display = 'flex';
                    // Small delay to allow display:flex to apply before adding visible class
                    requestAnimationFrame(() => {
                        card.classList.add('visible');
                    });
                } else {
                    card.style.display = 'none';
                    card.classList.remove('visible');
                }
            });
        });
    });

});


// Scroll reveal for Pricing cards
const pricingCards = document.querySelectorAll('.pricing-card');
const retainerCards = document.querySelectorAll('.retainer-card');

const pricingObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            pricingObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -40px 0px'
});

pricingCards.forEach(card => {
    pricingObserver.observe(card);
});

retainerCards.forEach(card => {
    pricingObserver.observe(card);
});


// ══════════════════════════════════════
// TESTIMONIALS SECTION — Seamless Infinite Carousel
// ══════════════════════════════════════

document.addEventListener('DOMContentLoaded', function() {

    const carouselTrack = document.getElementById('carouselTrack');

    if (!carouselTrack) return;

    // ── Clone cards for seamless loop ──
    // The CSS animation scrolls from 0 to -50%.
    // We duplicate all original cards so the second half is an
    // exact mirror of the first. When the animation hits -50%,
    // the visual state is identical to 0%, so the reset is invisible.
    const originalCards = Array.from(carouselTrack.querySelectorAll('.testimonial-card'));

    originalCards.forEach(card => {
        const clone = card.cloneNode(true);
        clone.setAttribute('aria-hidden', 'true');
        // Remove IDs from clones to avoid duplicates
        clone.querySelectorAll('[id]').forEach(el => el.removeAttribute('id'));
        carouselTrack.appendChild(clone);
    });

    // ── Pause when carousel is not in viewport (performance) ──
    const carouselContainer = document.querySelector('.testimonials-carousel');

    if (carouselContainer && 'IntersectionObserver' in window) {
        const visibilityObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    carouselTrack.style.animationPlayState = 'running';
                } else {
                    carouselTrack.style.animationPlayState = 'paused';
                }
            });
        }, { threshold: 0.05 });

        visibilityObserver.observe(carouselContainer);
    }

});


// ═══════════════════════════════════════════════════════
// ABOUT SECTION — Scroll Reveal & Animated Counters
// ═══════════════════════════════════════════════════════

(function() {
    'use strict';

    // ─── Scroll Reveal Observer ──────────────────────────
    const revealElements = document.querySelectorAll([
        '.about-header',
        '.about-spotlight',
        '.about-stats-row',
        '.values-section',
        '.about-cta-banner'
    ].join(','));

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');

                if (entry.target.classList.contains('about-stats-row')) {
                    animateCounters();
                }

                revealObserver.unobserve(entry.target);
            }
        });
    }, {
        root: null,
        rootMargin: '0px 0px -60px 0px',
        threshold: 0.08
    });

    revealElements.forEach(el => revealObserver.observe(el));

    // ─── Animated Number Counters ──────────────────────────
    let countersAnimated = false;

    function animateCounters() {
        if (countersAnimated) return;
        countersAnimated = true;

        const counters = document.querySelectorAll('.about-stat-number[data-count]');

        counters.forEach(counter => {
            const target = parseInt(counter.getAttribute('data-count'), 10);
            const suffix = counter.querySelector('.about-stat-suffix');
            const duration = 2000;
            const startTime = performance.now();

            function update(currentTime) {
                const elapsed = currentTime - startTime;
                const progress = Math.min(elapsed / duration, 1);
                const easeOut = 1 - Math.pow(1 - progress, 3);
                const current = Math.floor(easeOut * target);

                const suffixHTML = suffix ? suffix.outerHTML : '';
                counter.innerHTML = current + suffixHTML;

                if (progress < 1) {
                    requestAnimationFrame(update);
                } else {
                    counter.innerHTML = target + suffixHTML;
                }
            }

            requestAnimationFrame(update);
        });
    }

})();


// ═══════════════════════════════════════════════════════
// FAQ SECTION — Scroll Reveal & Accordion Toggle
// ═══════════════════════════════════════════════════════

document.addEventListener('DOMContentLoaded', function() {
    'use strict';

    // ─── Scroll Reveal for FAQ Section ───────────────────
    const faqSection = document.querySelector('.faq-section');

    if (faqSection) {
        const faqObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    faqObserver.unobserve(entry.target);
                }
            });
        }, {
            root: null,
            rootMargin: '0px 0px -80px 0px',
            threshold: 0.1
        });

        faqObserver.observe(faqSection);
    }

    // ─── Accordion Functionality ─────────────────────────
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');

        question.addEventListener('click', function() {
            const isActive = item.classList.contains('active');

            // Close all other items
            faqItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                }
            });

            // Toggle current item
            if (isActive) {
                item.classList.remove('active');
            } else {
                item.classList.add('active');
            }
        });

        // Keyboard accessibility
        question.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                question.click();
            }
        });

        // Add tabindex and role for accessibility
        question.setAttribute('tabindex', '0');
        question.setAttribute('role', 'button');
        question.setAttribute('aria-expanded', 'false');

        // Update aria-expanded on toggle
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
                    const isExpanded = item.classList.contains('active');
                    question.setAttribute('aria-expanded', isExpanded);
                }
            });
        });

        observer.observe(item, { attributes: true });
    });
});



// ═══════════════════════════════════════════════════════
// CONTACT SECTION — Scroll Reveal & Form Handling
// Append to main.js
// ═══════════════════════════════════════════════════════

document.addEventListener('DOMContentLoaded', function() {
    'use strict';

    // ─── Scroll Reveal Observer ─────────────────────────
    const contactRevealElements = document.querySelectorAll([
        '.contact-header',
        '.contact-info-panel',
        '.contact-form-panel',
        '.contact-trust-bar'
    ].join(','));

    const contactObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                contactObserver.unobserve(entry.target);
            }
        });
    }, {
        root: null,
        rootMargin: '0px 0px -60px 0px',
        threshold: 0.08
    });

    contactRevealElements.forEach(el => contactObserver.observe(el));

    // ─── Form Validation & WhatsApp Redirect ──────────────
    const contactForm = document.getElementById('contactForm');
    const formSuccess = document.getElementById('formSuccess');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const submitBtn = contactForm.querySelector('.form-submit');
            const nameInput = document.getElementById('contactName');
            const phoneInput = document.getElementById('contactPhone');
            const businessInput = document.getElementById('businessName');
            const packageSelect = document.getElementById('packageInterest');
            const messageInput = document.getElementById('contactMessage');

            // Get selected business type
            const businessType = document.querySelector('input[name="businessType"]:checked')?.value || 'salon';

            // Validation
            let hasError = false;

            // Reset errors
            document.querySelectorAll('.form-group').forEach(g => g.classList.remove('has-error'));

            if (!nameInput.value.trim()) {
                nameInput.closest('.form-group').classList.add('has-error');
                hasError = true;
            }

            if (!phoneInput.value.trim()) {
                phoneInput.closest('.form-group').classList.add('has-error');
                hasError = true;
            }

            if (hasError) {
                // Shake animation on first error field
                const firstError = contactForm.querySelector('.has-error .form-input');
                if (firstError) {
                    firstError.focus();
                    firstError.style.animation = 'shake 0.4s ease';
                    setTimeout(() => firstError.style.animation = '', 400);
                }
                return;
            }

            // Show loading state
            submitBtn.classList.add('is-loading');

            // Build WhatsApp message
            const packageText = packageSelect.value ?
                `Package: ${packageSelect.options[packageSelect.selectedIndex].text}` :
                'Package: Not sure yet';

            const message = encodeURIComponent(
                `Hi SalonFlow! I'm ${nameInput.value.trim()} from ${businessInput.value.trim() || 'a new business'}.\n\n` +
                `Business Type: ${businessType.charAt(0).toUpperCase() + businessType.slice(1)}\n` +
                `${packageText}\n` +
                `${messageInput.value.trim() ? `\nDetails: ${messageInput.value.trim()}` : ''}\n\n` +
                `My WhatsApp: ${phoneInput.value.trim()}`
            );

            // Simulate brief loading then redirect
            setTimeout(() => {
                submitBtn.classList.remove('is-loading');

                // Show success state
                contactForm.style.display = 'none';
                if (formSuccess) {
                    formSuccess.removeAttribute('hidden');
                }

                // Open WhatsApp after showing success
                setTimeout(() => {
                    window.open(`https://wa.me/254713324672?text=${message}`, '_blank', 'noopener,noreferrer');
                }, 800);

            }, 1200);
        });
    }

    // ─── Shake Animation Keyframes (inject if not present) ─
    if (!document.getElementById('contact-animations')) {
        const style = document.createElement('style');
        style.id = 'contact-animations';
        style.textContent = `
            @keyframes shake {
                0%, 100% { transform: translateX(0); }
                20% { transform: translateX(-6px); }
                40% { transform: translateX(6px); }
                60% { transform: translateX(-4px); }
                80% { transform: translateX(4px); }
            }
        `;
        document.head.appendChild(style);
    }

    // ─── Contact Card Click-to-Action ────────────────────
    document.querySelectorAll('.contact-card').forEach(card => {
        card.addEventListener('click', function() {
            const link = this.querySelector('a');
            if (link) {
                link.click();
            }
        });
    });

    // ─── Real-time Validation Clear ───────────────────────
    document.querySelectorAll('.form-input, .form-select, .form-textarea').forEach(input => {
        input.addEventListener('input', function() {
            this.closest('.form-group')?.classList.remove('has-error');
        });
    });

});


// ── BACK TO TOP ──────────────────────────────────────
document.addEventListener('DOMContentLoaded', function() {
    const backToTopBtn = document.getElementById('backToTop');

    if (backToTopBtn) {
        backToTopBtn.addEventListener('click', function(e) {
            e.preventDefault();

            window.scrollTo({
                top: 0,
                behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth'
            });
        });
    }
});



// ═══════════════════════════════════════════════════════
// ABOUT SECTION — Scroll Reveal & Animated Counters
// ═══════════════════════════════════════════════════════

(function() {
    'use strict';

    // ─── Scroll Reveal Observer ──────────────────────────
    const revealElements = document.querySelectorAll([
        '.about-header',
        '.about-spotlight',
        '.about-stats-row',
        '.values-section',
        '.about-cta-banner'
    ].join(','));

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');

                if (entry.target.classList.contains('about-stats-row')) {
                    animateCounters();
                }

                revealObserver.unobserve(entry.target);
            }
        });
    }, {
        root: null,
        rootMargin: '0px 0px -60px 0px',
        threshold: 0.08
    });

    revealElements.forEach(el => revealObserver.observe(el));

    // ─── Animated Number Counters ──────────────────────────
    let countersAnimated = false;

    function animateCounters() {
        if (countersAnimated) return;
        countersAnimated = true;

        const counters = document.querySelectorAll('.about-stat-number[data-count]');

        counters.forEach(counter => {
            const target = parseInt(counter.getAttribute('data-count'), 10);
            const suffix = counter.querySelector('.about-stat-suffix');
            const duration = 2000;
            const startTime = performance.now();

            function update(currentTime) {
                const elapsed = currentTime - startTime;
                const progress = Math.min(elapsed / duration, 1);
                const easeOut = 1 - Math.pow(1 - progress, 3);
                const current = Math.floor(easeOut * target);

                const suffixHTML = suffix ? suffix.outerHTML : '';
                counter.innerHTML = current + suffixHTML;

                if (progress < 1) {
                    requestAnimationFrame(update);
                } else {
                    counter.innerHTML = target + suffixHTML;
                }
            }

            requestAnimationFrame(update);
        });
    }

})();
