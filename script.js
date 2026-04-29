// Función para enviar pedido pre-armado por WhatsApp
function pedidoWA(producto) {
    const mensaje = encodeURIComponent(`Hola La Montaña! Me gustaría pedir un ${producto}.`);
    window.open(`https://wa.me/2622358171?text=${mensaje}`, '_blank');
}

// Manejo del formulario de contacto
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('¡Gracias Amadeo! Mensaje recibido (Simulación).');
});

// Scroll suave para los links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});