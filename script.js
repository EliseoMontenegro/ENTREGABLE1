// Verificar si el usuario ya está logueado
document.addEventListener('DOMContentLoaded', () => {
    const user = localStorage.getItem('username');
    if (user) {
        // Si el usuario está logueado, mostrar la sección de usuario logueado
        showLoggedInSection(user);
    } else {
        // Si no está logueado, mostrar el formulario de login
        document.getElementById('login-form').style.display = 'block';
        document.getElementById('logged-in-section').style.display = 'none';
    }
});

// Función para manejar el inicio de sesión
function login(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Lógica simple de validación (puedes mejorarla)
    if (username && password) {
        // Guardar el nombre de usuario en localStorage
        localStorage.setItem('username', username);
        showLoggedInSection(username);
    } else {
        alert('Por favor ingresa usuario y contraseña');
    }
}

// Función para mostrar la sección de usuario logueado
function showLoggedInSection(username) {
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('logged-in-section').style.display = 'block';
    document.getElementById('user-name').innerText = username;
}

// Función para manejar el cierre de sesión
function logout() {
    // Eliminar el nombre de usuario del localStorage
    localStorage.removeItem('username');
    // Mostrar el formulario de login nuevamente
    document.getElementById('login-form').style.display = 'block';
    document.getElementById('logged-in-section').style.display = 'none';
}
