const labels = document.querySelectorAll('.form-control label');

// Animación para etiquetas de entrada
labels.forEach(label => {
    label.innerHTML = label.innerText
        .split('')
        .map((letter, idx) => `<span style="transition-delay:${idx * 50}ms">${letter}</span>`)
        .join('');
});

// Agregar evento de envío al formulario
const form = document.querySelector('form');
const confirmationMessage = document.createElement('p');
confirmationMessage.textContent = '¡Mensaje enviado correctamente!';
confirmationMessage.style.display = 'none';
confirmationMessage.style.color = 'green';
form.appendChild(confirmationMessage);

form.addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar que el formulario se envíe de forma predeterminada

    // Aquí iría la lógica para enviar el formulario al servidor, pero por ahora solo mostraremos el mensaje de confirmación
    confirmationMessage.style.display = 'block';

    // Redirigir a la página principal después de un breve retraso (por ejemplo, 3 segundos)
    setTimeout(function() {
        window.location.href = 'index.html'; // Cambia 'index.html' por la URL de tu página principal
    }, 3000); // 3000 milisegundos = 3 segundos

    // También podrías hacer aquí una solicitud AJAX para enviar el formulario al servidor
});
