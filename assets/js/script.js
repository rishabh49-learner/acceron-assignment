// Navigation Toggle
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Consultation Modal
const consultationButton = document.querySelector('.consultation-button');
const modal = document.getElementById('consultationModal');
const closeModal = document.querySelector('.close-modal');

consultationButton.addEventListener('click', () => {
    document.body.style.overflow = 'hidden';
    modal.style.display = 'block'; // Make sure modal is visible
    requestAnimationFrame(() => {
        modal.classList.add('active');
    });
});

closeModal.addEventListener('click', () => {
    document.body.style.overflow = 'auto';
    modal.classList.remove('active');
    // Wait for animation to complete before hiding
    setTimeout(() => {
        modal.style.display = 'none';
    }, 300);
});

// Close modal when clicking outside
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal.click();
    }
});