    // Obtén los elementos de entrada y los elementos de texto
    var nameInput = document.getElementById('nameInput');
    var chargeInput = document.getElementById('chargeInput');
    var titleInput = document.getElementById('titleInput');
    var subContentInput = document.getElementById('subContentInput');
    var dynamicText = document.getElementById('dynamicText');
    var dynamicSubContent = document.getElementById('dynamicSubContent');
    var dynamicName = document.getElementById('dynamicName');
    var dynamicCharge = document.getElementById('dynamicCharge');

    // Agrega eventos de escucha a los campos de entrada
    nameInput.addEventListener('input', function () {
        // Actualiza el contenido del elemento h3 con el valor del campo de entrada
        dynamicName.textContent = nameInput.value;
    });

    // Cambia el color del texto cuando el input está seleccionado
    nameInput.addEventListener('focus', function () {
        dynamicName.style.color = '#fecb01';
    });

    // Restaura el color original cuando el input pierde el foco
    nameInput.addEventListener('blur', function () {
        dynamicName.style.color = '';
    });

    chargeInput.addEventListener('input', function () {
        // Actualiza el contenido del elemento p con el valor del campo de entrada
        dynamicCharge.textContent = chargeInput.value;
    });

    // Cambia el color del texto cuando el input está seleccionado
    chargeInput.addEventListener('focus', function () {
        dynamicCharge.style.color = '#fecb01';
    });

    // Restaura el color original cuando el input pierde el foco
    chargeInput.addEventListener('blur', function () {
        dynamicCharge.style.color = '';
    });

    titleInput.addEventListener('input', function () {
        // Actualiza el contenido del elemento h1 con el valor del campo de entrada
        dynamicText.textContent = titleInput.value;
    });

    // Cambia el color del texto cuando el input está seleccionado
    titleInput.addEventListener('focus', function () {
        dynamicText.style.color = '#fecb01';
    });

    // Restaura el color original cuando el input pierde el foco
    titleInput.addEventListener('blur', function () {
        dynamicText.style.color = '';
    });

    subContentInput.addEventListener('input', function () {
        // Actualiza el contenido del elemento p con el valor del campo de entrada
        dynamicSubContent.textContent = subContentInput.value;
    });

    // Cambia el color del texto cuando el input está seleccionado
    subContentInput.addEventListener('focus', function () {
        dynamicSubContent.style.color = '#fecb01';
    });

    // Restaura el color original cuando el input pierde el foco
    subContentInput.addEventListener('blur', function () {
        dynamicSubContent.style.color = '';
    });