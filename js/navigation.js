class Navigation {
    constructor() {
        this.mobileMenuBtn = document.querySelector('.mobile-menu-btn');
        this.navMenu = document.querySelector('.nav-menu');
        this.navLinks = document.querySelectorAll('.nav-link');
        
        this.init();
    }

    init() {
        this.setupMobileMenu();
        this.setupSmoothScroll();
    }

    setupMobileMenu() {
        if (this.mobileMenuBtn && this.navMenu) {
            this.mobileMenuBtn.addEventListener('click', () => {
                this.toggleMobileMenu();
            });

            this.navLinks.forEach(link => {
                link.addEventListener('click', () => {
                    this.closeMobileMenu();
                });
            });
        }
    }

    toggleMobileMenu() {
        this.navMenu.classList.toggle('active');
        this.mobileMenuBtn.textContent = this.navMenu.classList.contains('active') ? '✕' : '☰';
    }

    closeMobileMenu() {
        this.navMenu.classList.remove('active');
        this.mobileMenuBtn.textContent = '☰';
    }

    setupSmoothScroll() {
        this.navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                const href = link.getAttribute('href');
                
                if (href.startsWith('#')) {
                    e.preventDefault();
                    const target = document.querySelector(href);
                    
                    if (target) {
                        const offsetTop = target.offsetTop - 80;
                        
                        window.scrollTo({
                            top: offsetTop,
                            behavior: 'smooth'
                        });
                    }
                }
            });
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new Navigation();
});