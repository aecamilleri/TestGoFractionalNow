    var imageUpload = document.getElementById('imageUpload');
    var uploadedImage = document.getElementById('uploadedImage');
    var imageContainer = document.getElementById('imageContainer');

    imageUpload.addEventListener('change', function (event) {
        var file = event.target.files[0];
        if (file) {
            // Cargar la imagen seleccionada por el usuario
            var reader = new FileReader();
            reader.onload = function (e) {
                uploadedImage.src = e.target.result;
                // También puedes cambiar el texto alternativo (alt) si lo deseas
                uploadedImage.alt = 'Uploaded Image';
                // Limpiar el contenido actual del contenedor
                imageContainer.innerHTML = '';
                // Agregar la imagen cargada al contenedor
                imageContainer.appendChild(uploadedImage);
            };
            reader.readAsDataURL(file);
        }
    });