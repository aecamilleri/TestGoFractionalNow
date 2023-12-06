document.getElementById('loadContentButton').addEventListener('click', function () {
    // Cuando se hace clic en el botón, llama a la función para cargar el contenido
    loadContent();
});

function loadContent() {
    // Obtén el contenido del wrapper en index.html
    const contentToCopy = document.getElementById('wrapper').innerHTML;

    // Utiliza fetch para obtener el contenido del archivo TemplateResult.html
    fetch('TemplateResult.html')
        .then(response => response.text())
        .then(html => {
            // Crea un contenedor temporal y carga el contenido
            const tempContainer = document.createElement('div');
            tempContainer.innerHTML = html;

            // Encuentra el wrapper en TemplateResult.html y reemplaza su contenido
            tempContainer.querySelector('#wrapper').innerHTML = contentToCopy;

            // Abre una nueva ventana con el contenido actualizado
            const newWindow = window.open();
            newWindow.document.write(tempContainer.innerHTML);
        })
        .catch(error => {
            console.error('Error al cargar el contenido:', error);
        });
}
