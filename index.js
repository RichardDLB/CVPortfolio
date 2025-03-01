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




// carrusel section estudios
let currentIndexEstudios = 0;

function moveCarouselEstudios(direction) {
    const containerExperiencia = document.querySelector('.carousel-container-estudios');
    const itemsExperiencia = document.querySelectorAll('.carousel-item-estudios');
    const totalitemsExperiencia = itemsExperiencia.length;

    currentIndexEstudios += direction;

    if (currentIndexEstudios < 0) {
        currentIndexEstudios = totalitemsExperiencia - 1;
    } else if (currentIndexEstudios >= totalitemsExperiencia) {
        currentIndexEstudios = 0;
    }

    containerExperiencia.style.transform = `translateX(-${currentIndexEstudios * 100}%)`;
}
moveCarouselEstudios(0); 



// carrusel section experiencia
let currentIndexExperiencia = 0;

function moveCarouselExperiencia(direction) {
    const containerExperiencia = document.querySelector('.carousel-container-experiencia');
    const itemsExperiencia = document.querySelectorAll('.carousel-item-experiencia');
    const totalitemsExperiencia = itemsExperiencia.length;

    currentIndexExperiencia += direction;

    if (currentIndexExperiencia < 0) {
        currentIndexExperiencia = totalitemsExperiencia - 1;
    } else if (currentIndexExperiencia >= totalitemsExperiencia) {
        currentIndexExperiencia = 0;
    }

    containerExperiencia.style.transform = `translateX(-${currentIndexExperiencia * 100}%)`;
}
moveCarouselExperiencia(0); 


// carrusel section proyectos
let currentIndexProyectos = 0;

function moveCarouselProyectos(direction) {
    const containerProyectos = document.querySelector('.carousel-container-proyectos');
    const itemsProyectos = document.querySelectorAll('.carousel-item-proyectos');
    const totalitemsProyectos = itemsProyectos.length;

    currentIndexProyectos += direction;

    if (currentIndexProyectos < 0) {
        currentIndexProyectos = totalitemsProyectos - 1;
    } else if (currentIndexProyectos >= totalitemsProyectos) {
        currentIndexProyectos = 0;
    }

    containerProyectos.style.transform = `translateX(-${currentIndexProyectos * 100}%)`;
}
moveCarouselProyectos(0); 

