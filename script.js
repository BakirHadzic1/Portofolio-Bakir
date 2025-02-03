document.addEventListener('DOMContentLoaded', () => {
    const loadingText = document.getElementById('loading-text');
    const logoText = window.innerWidth <= 480 ? 'Bakir Hadžić' : 'Ja sam Bakir Hadžić';
    let index = 0;

    function typeWriter() {
        if (index < logoText.length) {
            loadingText.textContent += logoText.charAt(index);
            index++;
            setTimeout(typeWriter, 150);
        } else {
            loadingText.textContent = logoText;
        }
    }

    typeWriter();

    // Hamburger menu toggle
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');

    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('show');
    });

    // Countdown timer
    const birthday = new Date('December 2, 2025 00:00:00').getTime();

    function updateCountdown() {
        const now = new Date().getTime();
        const diff = birthday - now;

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);

        document.getElementById('days').innerHTML = days;
        document.getElementById('hours').innerHTML = hours;
        document.getElementById('minutes').innerHTML = minutes;
        document.getElementById('seconds').innerHTML = seconds;
    }

    setInterval(updateCountdown, 1000);
});
