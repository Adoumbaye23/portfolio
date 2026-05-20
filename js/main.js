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

    // Formulaire de contact (Formspree + validation)
    const contactForm = document.getElementById('contact-form');
    const formMessage = document.getElementById('form-message');

    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();

            const nom = contactForm.nom.value.trim();
            const email = contactForm.email.value.trim();
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

            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            submitBtn.disabled = true;
            submitBtn.textContent = 'Envoi en cours...';

            try {
                const response = await fetch(contactForm.action, {
                    method: 'POST',
                    body: new FormData(contactForm),
                    headers: { 'Accept': 'application/json' }
                });

                if (response.ok) {
                    formMessage.className = 'form-message success';
                    formMessage.textContent = 'Merci ! Votre message a bien été envoyé. Je vous répondrai sous 48h.';
                    contactForm.reset();
                } else {
                    const data = await response.json().catch(() => ({}));
                    formMessage.className = 'form-message error';
                    formMessage.textContent = data.errors?.map(e => e.message).join(', ') || 'Une erreur est survenue. Réessayez plus tard.';
                }
            } catch (err) {
                formMessage.className = 'form-message error';
                formMessage.textContent = 'Erreur réseau. Vérifiez votre connexion et réessayez.';
            } finally {
                submitBtn.disabled = false;
                submitBtn.textContent = originalText;
            }
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
