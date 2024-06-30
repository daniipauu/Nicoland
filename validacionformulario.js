// VARIABLES
let nombre = document.getElementById("from_name");
let email = document.getElementById("user_email");
let telefono = document.getElementById("user_cel");
let mensaje = document.getElementById("message");
let alerta = document.getElementById("alertValidaciones");
let isValid;
let btn = document.getElementById("btn");
let form = document.getElementById("form");
const btnCorreo = document.getElementById('button');

/* ----------- FUNCIONES PARA VALIDACION DE DATOS EN LOS INPUTS ----------- */

// VALIDACIONES NOMBRE
function validacionNombre() {
    let re = RegExp(/([^\s\d]\s?){3,40}/);
    if (!re.test(nombre.value)) {
        alerta.innerHTML += `The <strong>Name</strong> is not correct.<br>`;
        alerta.style.display = "block";
        nombre.style.border = "solid red medium";
        return false
    }
    return true
};

// VALIDACIONES EMAIL
function validacionEmail() {
    let re = RegExp(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/);
    if (!re.test(email.value)) {
        alerta.innerHTML += `The <strong>Email</strong> is wrong.<br>`;
        alerta.style.display = "block";
        email.style.border = "solid red medium";
        return false
    }
    return true
};

// VALIDACIONES TELEFONO
function validacionTelefono() {
    let re = RegExp(/^(?!.*(\d)\1{4})[2-9]\d{9}$/);
    if (!re.test(telefono.value)) {
        alerta.innerHTML += `The <strong>Phone Number</strong> is not correct.<br>`;
        alerta.style.display = "block";
        telefono.style.border = "solid red medium";
        isValid = false;
        return false
    }
    return true
}
// Eliminar caracteres que no son numeros
document.getElementById('user_cel').addEventListener('input', function (e) {
    const input = e.target;
    const value = input.value;
    const cleanedValue = value.replace(/[^0-9]/g, '');
    input.value = cleanedValue;
});
// Permitir solo números
document.getElementById('user_cel').addEventListener('keypress', function (e) {
    if (!/[0-9]/.test(e.key)) {
        e.preventDefault();
    }
});

// VALIDACIONES CARACTERES MENSAJE
function validacionMensaje() {
    if (mensaje.value.length >= 1000) {
        alerta.innerHTML += `The <strong>Message</strong> must not exceed 1000 characters.<br>`;
        alerta.style.display = "block";
        mensaje.style.border = "solid red medium";
        isValid = false;
        return false
    } else if (mensaje.value.length < 15) {
        alerta.innerHTML += `The <strong>Message</strong> must not be less than 20 characters.<br>`;
        alerta.style.display = "block";
        mensaje.style.border = "solid red medium";
        isValid = false;
        return false
    }
    return true
};

/* ----------- EVENTOS DE LOS INPUTS Y BOTONES DE FORMULARIO ----------- */

// EVENTO BOTON
btn.addEventListener("click", function (event) {
    event.preventDefault();
    alerta.style.display = "none";
    alerta.innerHTML = "";
    nombre.style.border = "";
    email.style.border = "";
    telefono.style.border = "";
    mensaje.style.border = "";
    isValid = true;

    if (!validacionNombre()) {
        isValid = false;
    }
    if (!validacionEmail()) {
        isValid = false;
    }
    if (!validacionTelefono()) {
        isValid = false;
    }
    if (!validacionMensaje()) {
        isValid = false;
    }

    if (isValid) {
        enviarCorreo();
    }

});

// EVENTO INPUT NOMBRE
nombre.addEventListener("blur", function (event) {
    event.preventDefault();
    nombre.value = nombre.value.trim();
    limpiarAlarma()
    if (nombre.value.length > 0) {
        validacionNombre();
    }
});

// EVENTO INPUT EMAIL
email.addEventListener("blur", function (event) {
    event.preventDefault();
    email.value = email.value.trim();
    limpiarAlarma()
    if (email.value.length > 0) {
        validacionEmail();
    }
});

// EVENTO INPUT TELEFONO
telefono.addEventListener("blur", function (event) {
    event.preventDefault();
    telefono.value = telefono.value.trim();
    limpiarAlarma()
    if (telefono.value.length > 0) {
        validacionTelefono();
    }
});

// EVENTO INPUT MENSAJE
mensaje.addEventListener("blur", function (event) {
    event.preventDefault();
    mensaje.value = mensaje.value.trim();
    limpiarAlarma()
    if (mensaje.value.length > 0) {
        validacionMensaje();
    }
});

/* ----------- FUNCIONES ----------- */

function mostrarAlerta(mensaje, tipo) {
    const alerta = document.getElementById('alert-container');
    const alertaDiv = document.createElement('div');
    alertaDiv.className = `alert alert-${tipo} alert-dismissible fade show`;
    alertaDiv.role = 'alert';
    alertaDiv.innerHTML = `
        ${mensaje}
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    `;
    alerta.appendChild(alertaDiv);
};

//LIMPIAR ALARMA
function limpiarAlarma() {
    alerta.style.display = "none";
    alerta.innerHTML = "";
    nombre.style.border = "";
    email.style.border = "";
    telefono.style.border = "";
    mensaje.style.border = "";
};

//ENVIO DE CORREO
function enviarCorreo() {
    btn.value = 'Enviando...';
    const serviceID = 'service_netj0yb';
    const templateID = 'template_vezfekl';

    emailjs.sendForm(serviceID, templateID, form)
        .then(() => {
            btn.value = 'Send';
            mostrarAlerta('I will contact you soon polar bear bear.', 'success');
            nombre.value = "";
            email.value = "";
            telefono.value = "";
            mensaje.value = "";
        }, (err) => {
            btn.value = 'Send';
            mostrarAlerta('Error: ' + JSON.stringify(err), 'danger');
        });
};