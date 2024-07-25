function toggleMenu() {
    const button = document.querySelector('.hamburgerbtn');
    button.classList.toggle('opened');
    button.setAttribute('aria-expanded', button.classList.contains('opened'));

    const sidebar = document.querySelector('.fullsidebarcontainer');
    const nav = document.querySelector('nav');

    if (sidebar.classList.contains('visible')) {
        sidebar.classList.remove('visible');
        nav.classList.remove('background');
    } else {
        sidebar.classList.add('visible');
        nav.classList.add('background');
    }
}

function closeMenu() {
    const button = document.querySelector('.hamburgerbtn');
    const sidebar = document.querySelector('.fullsidebarcontainer');
    const nav = document.querySelector('nav');

    if (button.classList.contains('opened')) {
        button.classList.remove('opened');
        button.setAttribute('aria-expanded', 'false');
    }

    if (sidebar.classList.contains('visible')) {
        sidebar.classList.remove('visible');
    }

    if (nav.classList.contains('background')) {
        nav.classList.remove('background');
    }
}

function handleScroll() {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
}

window.addEventListener('scroll', handleScroll);

document.addEventListener('DOMContentLoaded', function () {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.sponsorinfo').forEach(item => {
        observer.observe(item);
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const accordions = document.querySelectorAll('.accordion-button');

    accordions.forEach(button => {
        button.addEventListener('click', () => {
            accordions.forEach(btn => {
                if (btn !== button) {
                    btn.classList.remove('active');
                    const content = btn.nextElementSibling;
                    content.style.maxHeight = null;
                }
            });

            button.classList.toggle('active');
            const content = button.nextElementSibling;

            if (button.classList.contains('active')) {
                content.style.maxHeight = content.scrollHeight + 'px';
            } else {
                content.style.maxHeight = null;
            }
        });
    });
});


var btn = document.querySelector('#buttontotop');

// Scroll event handler
window.addEventListener('scroll', function () {
    if (window.scrollY > 300) {
        btn.classList.add('show');
    } else {
        btn.classList.remove('show');
    }
});

// Click event handler
btn.addEventListener('click', function (e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, 200);
});