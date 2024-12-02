document.addEventListener('DOMContentLoaded', (event) => {
    console.log('Documento cargado y listo');

    const alertButton = document.getElementById('alertButton');
    alertButton.addEventListener('click', () => {
        alert('¡Hola! Has hecho clic en el botón.');
    });

    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();
        alert('Formulario enviado.');
        // Aquí puedes agregar lógica para manejar el envío del formulario
    });
});
