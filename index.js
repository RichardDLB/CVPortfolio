const texts = ["Richard Lopez", "Web Developer", "Lic. En Comunicación"];
let currentIndex = 0;
const textElement = document.getElementById("animatedText");

function changeText() {
    // Actualiza el contenido de texto
    textElement.textContent = texts[currentIndex];
    
    // Reinicia la animación
    textElement.style.width = '0'; // Resetea el ancho para reiniciar la animación
    textElement.style.animation = 'none';
    
    // Fuerza el recálculo de estilo para reiniciar la animación
    void textElement.offsetWidth;

    // Calcula la longitud del texto actual
    const textLength = texts[currentIndex].length;

    // Aplica la animación de escritura
    textElement.style.animation = `typing 3s steps(${textLength}, end) forwards, blink .75s step-end infinite`;

    // Mueve al siguiente texto en el array
    currentIndex = (currentIndex + 1) % texts.length;

    // Cambia el texto después de que la animación termine
    setTimeout(changeText, 4000); // 3s para la animación + 1s de pausa
}

// Inicia la secuencia de animaciones
changeText();





let currentIndexDos = 0;

function moveCarousel1(direction) {
    const container = document.querySelector('.carousel-container-estudios');
    const items = document.querySelectorAll('.carousel-item-estudios');
    const totalItems = items.length;

    currentIndexDos += direction;

    if (currentIndexDos < 0) {
        currentIndexDos = totalItems - 1;
    } else if (currentIndexDos >= totalItems) {
        currentIndexDos = 0;
    }

    container.style.transform = `translateX(-${currentIndexDos * 100}%)`;
}

let currentIndexTres = 0;

function moveCarousel2(direction) {
    const container = document.querySelector('.carousel-container-experiencia');
    const items = document.querySelectorAll('.carousel-item-experiencia');
    const totalItems = items.length;

    currentIndexTres += direction;

    if (currentIndexTres < 0) {
        currentIndexTres = totalItems - 1;
    } else if (currentIndexTres >= totalItems) {
        currentIndexTres = 0;
    }

    container.style.transform = `translateX(-${currentIndexTres * 100}%)`;
}

