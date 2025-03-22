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
const modalContent = modal.querySelector('.modal-content');
const closeModal = document.querySelector('.close-modal');

// Function to open modal
function openModal() {
    // document.body.style.overflow = 'hidden';
    modal.style.display = 'flex'; // Make sure modal is visible

    requestAnimationFrame(() => {
        modal.classList.add('active');
    });

    // Delayed animation for smoother effect
    setTimeout(() => {
        modalContent.classList.add('slide-in');
    }, 10);
}

// Function to close modal
function closeModalFunc() {
    modalContent.classList.remove('slide-in'); // Reverse animation

    setTimeout(() => {
        modal.classList.remove('active');
        // document.body.style.overflow = 'auto';
    }, 300); // Wait for animation to finish
}

// Open modal on button click
consultationButton.addEventListener('click', openModal);

// Close modal on button click
closeModal.addEventListener('click', closeModalFunc);

// Close modal when clicking outside modal content
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModalFunc();
    }
});
