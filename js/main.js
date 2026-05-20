/* ============================================
   JS principal — Site personnel M. MBAYE
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

    // Menu burger mobile
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('open');
        });
        navMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => navMenu.classList.remove('open'));
        });
    }

    // Filtre des travaux
    const filterButtons = document.querySelectorAll('.filter-btn');
    const travailCards = document.querySelectorAll('.travail-card');

    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const filter = btn.dataset.filter;

            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            travailCards.forEach(card => {
                if (filter === 'all' || card.dataset.category === filter) {
                    card.style.display = 'flex';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    // Formulaire de contact (mailto + validation)
    const contactForm = document.getElementById('contact-form');
    const formMessage = document.getElementById('form-message');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const nom = contactForm.nom.value.trim();
            const email = contactForm.email.value.trim();
            const sujet = contactForm.sujet.value.trim();
            const message = contactForm.message.value.trim();

            if (!nom || !email || !message) {
                formMessage.className = 'form-message error';
                formMessage.textContent = 'Veuillez renseigner les champs obligatoires.';
                return;
            }

            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                formMessage.className = 'form-message error';
                formMessage.textContent = 'Adresse e-mail invalide.';
                return;
            }

            const corps = `Nom : ${nom}%0D%0AEmail : ${email}%0D%0A%0D%0A${encodeURIComponent(message)}`;
            const sujetMail = encodeURIComponent(sujet || 'Demande de contact via le site');
            window.location.href = `mailto:madjyamadoumbaye23@gmail.com?subject=${sujetMail}&body=${corps}`;

            formMessage.className = 'form-message success';
            formMessage.textContent = 'Votre client de messagerie va s\'ouvrir. Merci de votre message !';
            contactForm.reset();
        });
    }

    // Mise en évidence du lien actif dans la nav
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-menu a').forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage) {
            link.classList.add('active');
        }
    });
});
