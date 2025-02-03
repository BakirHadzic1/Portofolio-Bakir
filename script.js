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
    document.addEventListener("DOMContentLoaded", function () {
        const birthday = new Date('December 2, 2025 00:00:00').getTime();
    
        function updateCountdown() {
            const now = new Date().getTime();
            const diff = birthday - now;
    
            if (diff < 0) {
                document.getElementById('countdown').innerHTML = "<h2>Sretan rođendan!</h2>";
                return;
            }
    
            const days = Math.floor(diff / (1000 * 60 * 60 * 24));
            const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    
            document.getElementById('days').innerText = days;
            document.getElementById('hours').innerText = hours;
            document.getElementById('minutes').innerText = minutes;
            document.getElementById('seconds').innerText = seconds;
        }
    
        updateCountdown();
    
        setInterval(updateCountdown, 1000);
    });
    