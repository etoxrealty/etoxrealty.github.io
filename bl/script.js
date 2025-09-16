// Google Apps Script URL - Replace with your actual URL
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzMhj4_8AJmUMObtz7DK4TMq60bosceSJ5srVsbxH2Bdd64Gfl0iRQu69DvtXwXG2s7oQ/exec';

// Hero Carousel
let currentSlideIndex = 0;
const slides = document.querySelectorAll('.hero-slide');
const indicators = document.querySelectorAll('.indicator');

function showSlide(index) {
    // Hide all slides
    slides.forEach(slide => slide.classList.remove('active'));
    indicators.forEach(indicator => indicator.classList.remove('active'));
    
    // Show current slide
    slides[index].classList.add('active');
    indicators[index].classList.add('active');
}

function nextSlide() {
    currentSlideIndex = (currentSlideIndex + 1) % slides.length;
    showSlide(currentSlideIndex);
}

function currentSlide(index) {
    currentSlideIndex = index - 1;
    showSlide(currentSlideIndex);
}

// Auto-slide every 5 seconds
setInterval(nextSlide, 5000);

// Popup Functions
function openPopup() {
    document.getElementById('popupOverlay').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closePopup() {
    document.getElementById('popupOverlay').classList.remove('active');
    document.body.style.overflow = 'auto';
    // Reset form
    document.getElementById('popupForm').reset();
}

// Close popup when clicking outside
document.getElementById('popupOverlay').addEventListener('click', function(e) {
    if (e.target === this) {
        closePopup();
    }
});

// Thank You Message Functions
function showThankYou() {
    document.getElementById('thankYouMessage').classList.add('active');
    setTimeout(() => {
        document.getElementById('thankYouMessage').classList.remove('active');
    }, 3000);
}

// Form Submission
async function submitForm(formData, formElement) {
    try {
        const response = await fetch(GOOGLE_SCRIPT_URL, {
            method: 'POST',
            body: formData
        });

        if (response.ok) {
            formElement.reset();
            closePopup();
            showThankYou();
        } else {
            throw new Error('Network response was not ok');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('There was an error submitting your form. Please try again.');
    }
}

// Popup Form Handler
document.getElementById('popupForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const formData = new FormData();
    formData.append('name', document.getElementById('popupName').value);
    formData.append('contact', document.getElementById('popupContact').value);
    formData.append('purpose', document.getElementById('popupPurpose').value);
    formData.append('budget', document.getElementById('popupBudget').value);
    formData.append('message', document.getElementById('popupMessage').value);
    
    await submitForm(formData, this);
});

// Contact Form Handler
document.getElementById('contactForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const formData = new FormData();
    formData.append('name', document.getElementById('name').value);
    formData.append('contact', document.getElementById('contact').value);
    formData.append('purpose', document.getElementById('purpose').value);
    formData.append('budget', document.getElementById('budget').value);
    formData.append('message', document.getElementById('message').value);
    
    await submitForm(formData, this);
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
    });
});

// Initialize carousel on page load
document.addEventListener('DOMContentLoaded', function() {
    showSlide(0);
});
