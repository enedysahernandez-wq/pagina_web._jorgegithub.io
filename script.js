document.addEventListener("DOMContentLoaded", function () {
    const formulario = document.getElementById("form-contacto");
    const mensajeEstado = document.getElementById("mensaje-estado");

    formulario.addEventListener("submit", function (event) {
        event.preventDefault();

        const nombre = document.getElementById("nombre").value.trim();
        const motivo = document.getElementById("motivo").value;
        const correo = document.getElementById("correo").value.trim();
        const mensaje = document.getElementById("mensaje").value.trim();

        if (!nombre || !motivo || !correo || !mensaje) {
            mensajeEstado.textContent = "Por favor, completa todos los campos.";
            mensajeEstado.style.color = "red";
            return;
        }

        const patronCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!patronCorreo.test(correo)) {
            mensajeEstado.textContent = "Ingresa un correo electrónico válido.";
            mensajeEstado.style.color = "red";
            return;
        }

        mensajeEstado.textContent = "¡Formulario enviado correctamente! (Simulado)";
        mensajeEstado.style.color = "green";
        formulario.reset();
    });
});
