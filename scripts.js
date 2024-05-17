document.addEventListener('DOMContentLoaded', () => {
    const forms = document.querySelectorAll('form');
    forms.forEach(form => form.noValidate = true);
});

// Este código debe estar en tu archivo scripts.js

function validateLogin() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Validar el nombre de usuario
    const usernameRegex = /^[a-zA-Z0-9.]{4,10}$/;
    if (!usernameRegex.test(username)) {
        alert('El nombre de usuario debe contener solo letras, números y puntos, y tener entre 4 y 10 caracteres.');
        return false;
    }

    // Validar la contraseña
    const passwordRegex = /^[a-zA-Z0-9.]{4,10}$/;
    if (!passwordRegex.test(password)) {
        alert('La contraseña debe contener solo letras, números y puntos, y tener entre 4 y 10 caracteres.');
        return false;
    }

    // Aquí debes agregar la lógica para verificar si las credenciales son válidas.
    // Por ahora, asumiré que las credenciales son válidas para demostrar el redireccionamiento.
    // Puedes reemplazar esto con tu propia lógica de autenticación.
    const credencialesSonValidas = true;

    // Si las credenciales son válidas, redirige al usuario a la página principal (home.html)
    if (credencialesSonValidas) {
        window.location.href = "home.html"; // Redirecciona a la página principal
        return false; // Evita que el formulario se envíe
    }

    // Si las credenciales no son válidas, muestra un mensaje de error
    alert('Credenciales incorrectas. Por favor, inténtelo de nuevo.');
    return false;
}






// Este código debe estar en tu archivo scripts.js

function validateRegister() {
    const fullname = document.getElementById('fullname').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const confirm_password = document.getElementById('confirm_password').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;
    const birthdate = document.getElementById('birthdate').value;
    const gender = document.getElementById('gender').value;

    // Validar que todos los campos estén llenos
    if (!fullname || !username || !password || !confirm_password || !email || !phone || !address || !birthdate || !gender) {
        alert('Por favor, llene todos los campos.');
        return false;
    }

    // Validar que el nombre de usuario y la contraseña contengan solo letras, números y puntos
    const regex = /^[a-zA-Z0-9.]+$/;
    if (!regex.test(username) || !regex.test(password)) {
        alert('El nombre de usuario y la contraseña solo pueden contener letras, números y puntos.');
        return false;
    }

    // Validar que las contraseñas coincidan
    if (password !== confirm_password) {
        alert('Las contraseñas no coinciden.');
        return false;
    }

    // Aquí debes agregar la lógica para registrar al usuario.
    // Por ahora, asumiré que el registro es exitoso para demostrar el redireccionamiento.
    // Puedes reemplazar esto con tu propia lógica de registro.
    alert('Registro exitoso. Redirigiendo al inicio de sesión.');
    window.location.href = "login.html"; // Redirecciona al usuario al inicio de sesión
    return false; // Evita que el formulario se envíe
}




function validateAsignatura() {
    // Obtener los valores de los campos del formulario
    const codigo = document.getElementById('codigo').value;
    const nombre = document.getElementById('nombre').value;
    const carrera = document.getElementById('carrera').value;
    const periodo = document.getElementById('periodo').value;
    const sede = document.getElementById('sede').value;
    const fecha = document.getElementById('fecha').value;

    // Validar que todos los campos estén llenos
    if (!codigo || !nombre || !carrera || !periodo || !sede || !fecha) {
        alert('Por favor, llene todos los campos.');
        return false;
    }

    // Expresión regular para validar el código de la asignatura
    const codigoRegex = /^[a-zA-Z0-9]{1,6}$/;
    // Validar el código de la asignatura
    if (!codigoRegex.test(codigo)) {
        alert('El código de la asignatura debe contener solo letras y números, y tener máximo 6 caracteres.');
        return false;
    }

    // Expresión regular para validar el nombre de la asignatura
    const nombreRegex = /^[a-zA-Z\s]{1,16}$/;
    // Validar el nombre de la asignatura
    if (!nombreRegex.test(nombre)) {
        alert('El nombre de la asignatura debe contener solo letras y tener máximo 16 caracteres.');
        return false;
    }

    // Expresión regular para validar la carrera
    const carreraRegex = /^[a-zA-Z\s]{1,16}$/;
    // Validar la carrera
    if (!carreraRegex.test(carrera)) {
        alert('El nombre de la carrera debe contener solo letras y tener máximo 16 caracteres.');
        return false;
    }

    // Expresión regular para validar el periodo académico
    const periodoRegex = /^[a-zA-Z0-9\s]{1,10}$/;
    // Validar el periodo académico
    if (!periodoRegex.test(periodo)) {
        alert('El periodo académico debe contener solo letras y números, y tener máximo 10 caracteres.');
        return false;
    }

    // Expresión regular para validar la sede
    const sedeRegex = /^[a-zA-Z0-9\s]{1,20}$/;
    // Validar la sede
    if (!sedeRegex.test(sede)) {
        alert('La sede debe contener solo letras y números, y tener máximo 20 caracteres.');
        return false;
    }

    // Si todas las validaciones son exitosas, retorna true para enviar el formulario
    return true;
}






// Este código debe estar en tu archivo scripts.js

function validateSilabos() {
    const nombreDocumento = document.getElementById('nombre_documento').value;
    const codigoAsignatura = document.getElementById('codigo_asignatura').value;
    const nombreAsignatura = document.getElementById('nombre_asignatura').value;
    const paralelos = document.getElementById('paralelos').value;
    const periodoAcademico = document.getElementById('periodo_academico').value;
    const facultad = document.getElementById('facultad').value;
    const docenteResponsable = document.getElementById('docente_responsable').value;
    const anoLectivo = document.getElementById('ano_lectivo').value;
    const descripcion = document.getElementById('descripcion').value;

    // Validar que todos los campos estén llenos
    if (!nombreDocumento || !codigoAsignatura || !nombreAsignatura || !paralelos || !periodoAcademico || !facultad || !docenteResponsable || !anoLectivo || !descripcion) {
        alert('Por favor, llene todos los campos.');
        return false;
    }

    // Validar nombre del documento (sílabo)
    const nombreDocumentoRegex = /^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]{4,16}$/;
    if (!nombreDocumentoRegex.test(nombreDocumento)) {
        alert('El nombre del documento (sílabo) debe contener solo letras. Mínimo 4, máximo 16 caracteres.');
        return false;
    }

    // Validar código de la asignatura
    const codigoAsignaturaRegex = /^[a-zA-Z0-9-]{4,16}$/;
    if (!codigoAsignaturaRegex.test(codigoAsignatura)) {
        alert('El código de la asignatura debe contener letras, números y guion. Mínimo 4, máximo 16 caracteres.');
        return false;
    }

    // Validar nombre de la asignatura
    const nombreAsignaturaRegex = /^[a-zA-Z\s]{4,16}$/;
    if (!nombreAsignaturaRegex.test(nombreAsignatura)) {
        alert('El nombre de la asignatura debe contener solo letras. Mínimo 4, máximo 16 caracteres.');
        return false;
    }

    // Validar paralelos
    const paralelosRegex = /^[a-zA-Z\s]{4,16}$/;
    if (!paralelosRegex.test(paralelos)) {
        alert('Paralelos debe contener solo letras. Mínimo 4, máximo 16 caracteres.');
        return false;
    }

    // Validar periodo académico
    const periodoAcademicoRegex = /^[0-9]{4,16}$/;
    if (!periodoAcademicoRegex.test(periodoAcademico)) {
        alert('Período académico debe contener solo números. Mínimo 4, máximo 16 caracteres.');
        return false;
    }

    // Validar facultad
    const facultadRegex = /^[a-zA-Z\s]{4,16}$/;
    if (!facultadRegex.test(facultad)) {
        alert('Facultad debe contener solo letras. Mínimo 4, máximo 16 caracteres.');
        return false;
    }

    // Validar docente responsable
    const docenteResponsableRegex = /^[a-zA-Z\s]{4,16}$/;
    if (!docenteResponsableRegex.test(docenteResponsable)) {
        alert('Docente responsable debe contener solo letras. Mínimo 4, máximo 16 caracteres.');
        return false;
    }

    // Validar año lectivo
    const anoLectivoRegex = /^[0-9]{4,16}$/;
    if (!anoLectivoRegex.test(anoLectivo)) {
        alert('Año lectivo debe contener solo números. Mínimo 4, máximo 16 caracteres.');
        return false;
    }

    // Validar descripción
    const palabras = descripcion.split(/\s+/).filter(word => word.trim() !== '');
    if (palabras.length < 5 || palabras.length > 40) {
        alert('Descripción debe contener mínimo 5 palabras y máximo 40 palabras.');
        return false;
    }

    // Aquí debes agregar la lógica para subir el archivo (validación de formato)
    // Por ahora, asumiré que la validación del archivo es exitosa para demostrar el redireccionamiento.

    alert('Registro de sílabo exitoso. Redirigiendo...');
    // Redirecciona a la página de destino después del registro exitoso
    window.location.href = "pagina_de_destino.html";
    return false; // Evita que el formulario se envíe
}









function validateConsulta() {
    const codigo = document.getElementById('codigo').value;
    if (!codigo) {
        alert('Por favor, llene el campo.');
        return false;
    }
    return true;
}

function validateReporte() {
    const periodo = document.getElementById('periodo').value;
    if (!periodo) {
        alert('Por favor, llene el campo.');
        return false;
    }
    return true;
}
