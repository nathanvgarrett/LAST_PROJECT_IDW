// Countdown Timer
function startCountdown() {
    const eventDate = new Date('2025-12-31T00:00:00').getTime();
    const timer = document.getElementById('countdown-timer');

    function updateTimer() {
        const now = new Date().getTime();
        const distance = eventDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        timer.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;

        if (distance < 0) {
            timer.textContent = "Evento Iniciado!";
        }
    }

    updateTimer();
    setInterval(updateTimer, 1000);
}

// Slider
function initSlider() {
    const slides = document.querySelectorAll('.slide');
    const prev = document.querySelector('.prev');
    const next = document.querySelector('.next');
    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
        });
        document.querySelector('.slides').style.transform = `translateX(-${index * 100}%)`;
    }

    prev.addEventListener('click', () => {
        currentSlide = (currentSlide === 0) ? slides.length - 1 : currentSlide - 1;
        showSlide(currentSlide);
    });

    next.addEventListener('click', () => {
        currentSlide = (currentSlide === slides.length - 1) ? 0 : currentSlide + 1;
        showSlide(currentSlide);
    });

    showSlide(currentSlide);
}

// Form Validation
function validateForm() {
    const form = document.getElementById('inscription-form');
    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const peso = parseFloat(document.getElementById('peso').value);
        const altura = parseFloat(document.getElementById('altura').value);
        const imc = peso / (altura * altura);
        const imcResult = document.getElementById('imc-result');

        if (form.checkValidity()) {
            if (imc >= 17 && imc <= 35) {
                imcResult.textContent = `IMC: ${imc.toFixed(2)} - Válido`;
                imcResult.style.color = 'green';
                alert('Inscrição enviada com sucesso!');
                form.reset();
            } else {
                imcResult.textContent = `IMC: ${imc.toFixed(2)} - Fora da faixa permitida (17-35)`;
                imcResult.style.color = 'red';
            }
        } else {
            imcResult.textContent = 'Por favor, preencha todos os campos.';
            imcResult.style.color = 'red';
        }
    });
}

// Image Gallery
function initGallery() {
    const images = document.querySelectorAll('.gallery-img');
    const modal = document.getElementById('image-modal');
    const modalImg = document.getElementById('modal-img');
    const close = document.querySelector('.close');

    images.forEach(img => {
        img.addEventListener('click', () => {
            modal.style.display = 'flex';
            modalImg.src = img.src;
        });
    });

    close.addEventListener('click', () => {
        modal.style.display = 'none';
    });
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    startCountdown();
    initSlider();
    validateForm();
    initGallery();
});