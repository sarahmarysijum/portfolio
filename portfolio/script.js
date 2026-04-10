document.addEventListener("DOMContentLoaded", () => {
    // Select the cards to animate on scroll
    const cards = document.querySelectorAll('.card, .canva-card-wrapper, .list-block, .software-card, .experience-card');
    
    // Intersection Observer for fade-in & slide-up animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                // unobserve element after animating once
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    });

    // Set initial state and start observing
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(40px)';
        // add slight stagger effect
        card.style.transition = `all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275) ${index * 0.1}s`;
        observer.observe(card);
    });

    // --- Tab / Gallery Logic ---
    const btnCanva = document.getElementById('btn-canva');
    const btnFigma = document.getElementById('btn-figma');
    const galleryCanva = document.getElementById('gallery-canva');
    const galleryFigma = document.getElementById('gallery-figma');

    function toggleGallery(software) {
        if (software === 'canva') {
            btnCanva.classList.add('active');
            btnFigma.classList.remove('active');
            galleryCanva.classList.remove('hidden');
            galleryFigma.classList.add('hidden');
        } else {
            btnFigma.classList.add('active');
            btnCanva.classList.remove('active');
            galleryFigma.classList.remove('hidden');
            galleryCanva.classList.add('hidden');
        }
    }

    btnCanva.addEventListener('click', () => toggleGallery('canva'));
    btnFigma.addEventListener('click', () => toggleGallery('figma'));

    // Keyboard accessibility for tabs
    btnCanva.addEventListener('keydown', (e) => {
        if(e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggleGallery('canva'); }
    });
    btnFigma.addEventListener('keydown', (e) => {
        if(e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggleGallery('figma'); }
    });
});
