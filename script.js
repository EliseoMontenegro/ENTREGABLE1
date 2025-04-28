document.addEventListener("DOMContentLoaded", function() {
    // Mostrar u ocultar el formulario de login
    const loginLink = document.getElementById('loginLink');
    const loginContainer = document.getElementById('login');

    loginLink.addEventListener('click', function() {
        loginContainer.style.display = loginContainer.style.display === 'block' ? 'none' : 'block';
    });

    // Verificación de login
    const validUsers = {
        "71397305": "12345",
        "USER713973051": "12345"
    };

    const loginForm = document.getElementById('loginForm');
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const message = document.getElementById('loginMessage');

        if (validUsers[username] && validUsers[username] === password) {
            message.textContent = '¡Inicio de sesión exitoso!';
            message.style.color = 'green';
            // Aquí puedes redirigir a otra página o mostrar contenido adicional
        } else {
            message.textContent = 'Usuario o contraseña incorrectos';
            message.style.color = 'red';
        }
    });
});

