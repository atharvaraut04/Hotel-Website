// ========================================
// HOTEL WEBSITE - INTERACTIVE FEATURES
// ========================================

// ========== COUNTDOWN TIMER ==========
// Target opening date: October 6, 2026 (8 months from Feb 6, 2026)
const targetDate = new Date('October 6, 2026 00:00:00').getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance > 0) {
        // Calculate time remaining
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Update countdown display
        document.getElementById('days').textContent = String(days).padStart(3, '0');
        document.getElementById('hours').textContent = String(hours).padStart(2, '0');
        document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
        document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
    } else {
        // Display opening message when countdown reaches zero
        document.getElementById('countdown').innerHTML = 
            '<p style="font-size: 1.5rem; color: #00f260;">We\'re Open! 🎉</p>';
    }
}

// Initialize countdown and update every second
updateCountdown();
setInterval(updateCountdown, 1000);


// ========== CONSTRUCTION PROGRESS BAR ==========
// Update this value to reflect actual construction progress (0-100)
const TARGET_PROGRESS = 15; // Current progress: 15%

function animateProgressBar() {
    let currentProgress = 0;
    const progressFill = document.getElementById("progressFill");
    const progressPercent = document.getElementById("progressPercent");

    const progressInterval = setInterval(() => {
        if (currentProgress < TARGET_PROGRESS) {
            currentProgress++;
            progressFill.style.width = currentProgress + "%";
            progressPercent.textContent = currentProgress + "%";
        } else {
            clearInterval(progressInterval);
        }
    }, 50); // Animation speed: 50ms per increment
}

// Initialize progress bar animation
animateProgressBar();

// ========== EMAIL SIGNUP FORM ==========
const emailForm = document.getElementById('emailForm');
const emailInput = document.getElementById('emailInput');
const formMessage = document.getElementById('formMessage');

function validateEmail(email) {
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function showFormMessage(message, type) {
    formMessage.textContent = message;
    formMessage.className = `form-message ${type}`;
    
    // Auto-clear message after 5 seconds
    setTimeout(() => {
        formMessage.textContent = '';
        formMessage.className = 'form-message';
    }, 5000);
}

emailForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = emailInput.value.trim();
    
    if (validateEmail(email)) {
        // Success - email is valid
        showFormMessage('✓ Thank you! We\'ll notify you when we open.', 'success');
        emailInput.value = '';
        
        // TODO: In production, send email to backend/email service
        // Example: fetch('/api/subscribe', { method: 'POST', body: JSON.stringify({ email }) })
        console.log('Email subscribed:', email);
    } else {
        // Error - invalid email format
        showFormMessage('✗ Please enter a valid email address.', 'error');
    }
});


// ========================================
// END OF SCRIPT
// ========================================
