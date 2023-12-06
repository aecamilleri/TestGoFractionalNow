// sendByEmail.js
document.getElementById('sendByEmailButton').addEventListener('click', function () {
    // Obtén el contenido del wrapper en TemplateResult.html
    const contentToSend = document.getElementById('wrapper').innerHTML;

    // Realiza la solicitud al archivo PHP para enviar por correo electrónico
    fetch('send-email.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: 'htmlContent=' + encodeURIComponent(contentToSend),
    })
        .then(response => response.text())
        .then(data => {
            console.log(data);
            alert('Contenido enviado por correo electrónico correctamente.');
        })
        .catch(error => {
            console.error('Error al enviar por correo electrónico:', error);
            alert('Error al enviar por correo electrónico.');
        });
});
