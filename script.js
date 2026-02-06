// ========== COUNTDOWN TIMER ==========
// Target date: October 6, 2026 (8 months from Feb 6, 2026)
const targetDate = new Date('October 6, 2026 00:00:00').getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance > 0) {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById('days').textContent = String(days).padStart(3, '0');
        document.getElementById('hours').textContent = String(hours).padStart(2, '0');
        document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
        document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
    } else {
        document.getElementById('countdown').innerHTML = '<p style="font-size: 1.5rem; color: #00f260;">We\'re Open! 🎉</p>';
    }
}

// Update countdown every second
setInterval(updateCountdown, 1000);
updateCountdown();

// ========== CONSTRUCTION PROGRESS ==========
// Adjust this value to reflect real construction progress (0-100)
const targetProgress = 15; // 15% completed

let progress = 0;
const progressFill = document.getElementById("progressFill");
const progressPercent = document.getElementById("progressPercent");

const progressInterval = setInterval(() => {
    if (progress < targetProgress) {
        progress++;
        progressFill.style.width = progress + "%";
        progressPercent.textContent = progress + "%";
    } else {
        clearInterval(progressInterval);
    }
}, 50);

// ========== EMAIL SIGNUP FORM ==========
const emailForm = document.getElementById('emailForm');
const emailInput = document.getElementById('emailInput');
const formMessage = document.getElementById('formMessage');

emailForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = emailInput.value;
    
    // Basic email validation
    if (email && email.includes('@')) {
        // Simulate successful signup
        formMessage.textContent = '✓ Thank you! We\'ll notify you when we open.';
        formMessage.className = 'form-message success';
        emailInput.value = '';
        
        // In production, you would send this to your backend/email service
        console.log('Email subscribed:', email);
        
        // Clear message after 5 seconds
        setTimeout(() => {
            formMessage.textContent = '';
            formMessage.className = 'form-message';
        }, 5000);
    } else {
        formMessage.textContent = '✗ Please enter a valid email address.';
        formMessage.className = 'form-message error';
    }
});
