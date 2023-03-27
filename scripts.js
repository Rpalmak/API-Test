$(document).ready(function() { // Esperar a que el documento esté cargado completamente antes de ejecutar este código
    function searchCharacter() { // Definir una función para buscar personajes
        // Manejar el envío del formulario para buscar personajes
        $('#character-form').submit(function(event) { // Cuando el usuario envíe el formulario de búsqueda...
            event.preventDefault(); // Evita la recarga de la página

            // Obtener el nombre del personaje ingresado por el usuario
            var characterName = $('#character-name').val(); // Obtener el valor del campo de entrada de texto para el nombre del personaje
            console.log(characterName); // Mostrar el nombre del personaje en la consola del navegador

            // Hacer la solicitud a la API
            var apiUrl = 'https://api.tibiadata.com/v3/character/' + characterName; // Construir la URL para la solicitud a la API, usando el nombre del personaje ingresado por el usuario
            $.getJSON(apiUrl, function(data) { // Hacer una solicitud GET a la API y, cuando se reciba la respuesta...
                console.log(apiUrl); // Mostrar la URL de la solicitud en la consola del navegador

                // Extraer la información relevante del objeto de respuesta de la API y guardarla en un objeto separado
                var characterInfo = {
                    name: data.characters.character.name,
                    level: data.characters.character.level,
                    vocation: data.characters.character.vocation,
                    sex: data.characters.character.sex,
                    title: data.characters.character.title,
                    achievements: data.characters.achievements.length,
                    deaths: data.characters.deaths.length
                };

                // Crear los elementos HTML necesarios para mostrar la información del personaje
                var characterBox = $('<div>', {class: 'character-box'}); // Crear un div que contendrá todo el contenido relacionado con el personaje
                var characterIcon = $('<div>', {class: 'character-icon'}); // Crear un div para mostrar una imagen del personaje (en este caso no se utiliza)
                var characterDetails = $('<div>', {class: 'character-details'}); // Crear un div para mostrar los detalles del personaje (nombre, nivel, vocación, etc.)
                var nameHeading = $('<h2>', {text: characterInfo.name}); // Crear un encabezado con el nombre del personaje
                var levelParagraph = $('<p>', {class: 'level', text: 'Nivel: ' + characterInfo.level}); // Crear un párrafo con el nivel del personaje
                var vocationParagraph = $('<p>', {class: 'vocation', text: 'Vocación: ' + characterInfo.vocation}); // Crear un párrafo con la vocación del personaje
                var sexParagraph = $('<p>', {class: 'sex', text: 'Sexo: ' + characterInfo.sex}); // Crear un párrafo con el sexo del personaje
                var titleParagraph = $('<p>', {class: 'title', text: 'Título: ' + characterInfo.title}); // Crear un párrafo con el título del personaje
                var achievementsParagraph = $('<p>', {class: 'achievements', text: 'Logros: ' + characterInfo.achievements}); // Crear un párrafo con el número de logros del personaje
                var deathsParagraph = $('<p>', {class: 'deaths', text: 'Muertes: ' + characterInfo.deaths});
  
                // Agregar los elementos HTML con la información del personaje dentro del elemento con id 'character-data'
                characterDetails.append(nameHeading, levelParagraph, vocationParagraph, sexParagraph, titleParagraph, achievementsParagraph, deathsParagraph);
                characterBox.append(characterIcon, characterDetails);
                $('#character-data').html(characterBox);

        });
      });
    }
  
    $('#search-button').click(searchCharacter);
  });
  