document.addEventListener("DOMContentLoaded", function() {
    // Ejemplo de animación en la sección de los badges
    const badges = document.querySelector('.badges');
    badges.style.opacity = 0;
    badges.style.transition = 'opacity 2s';
    setTimeout(() => {
        badges.style.opacity = 1;
    }, 500);
});

// Función para validar el login
function validarLogin(event) {
    event.preventDefault(); // Evita que el formulario se envíe de manera convencional

    const usuario = document.getElementById('usuario').value;
    const clave = document.getElementById('clave').value;

    if ((usuario === "71397305" && clave === "12345") || 
        (usuario === "USER713973051" && clave === "12345")) {
        document.getElementById('login-form').style.display = 'none'; // Oculta el formulario de login
        document.getElementById('contenido').style.display = 'block'; // Muestra el contenido protegido
    } else {
        alert("Usuario o contraseña incorrectos.");
    }
}

// Función para cerrar sesión
// Función para cerrar sesión
function cerrarSesion() {
    document.getElementById('contenido').style.display = 'none'; // Oculta el contenido protegido
    document.getElementById('login-form').style.display = 'block'; // Muestra el formulario de login
    document.getElementById('usuario').value = ''; // Limpia los campos de login
    document.getElementById('clave').value = '';
}

