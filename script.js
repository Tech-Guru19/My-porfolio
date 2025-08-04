document.addEventListener('DOMContentLoaded', function () {
    const typingText = document.getElementById('typing-text');
    const phrases = [
        'Full stack Software Engineer',
        'Learning Web Development',
        'Studying at SQI College of ICT',
        'Tech Enthusiast.'
    ];
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;
    function typeText() {
        const currentPhrase = phrases[phraseIndex];
        if (isDeleting) {
            typingText.textContent = currentPhrase.substring(0, charIndex - 1);
            charIndex--;
            typingSpeed = 50;
        } else {
            typingText.textContent = currentPhrase.substring(0, charIndex + 1);
            charIndex++;
            typingSpeed = 100;
        }
        if (!isDeleting && charIndex === currentPhrase.length) {
            isDeleting = true;
            typingSpeed = 1500; // Pause at the end
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
            typingSpeed = 500; // Pause before typing next phrase
        }
        setTimeout(typeText, typingSpeed);
    }
    typeText();
});
