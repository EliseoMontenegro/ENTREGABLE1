document.addEventListener("DOMContentLoaded", function() {
    // Ejemplo de animación en la sección de los badges
    const badges = document.querySelector('.badges');
    badges.style.opacity = 0;
    badges.style.transition = 'opacity 2s';
    setTimeout(() => {
        badges.style.opacity = 1;
    }, 500);
});
