$(document).ready(function() {
    // Manejar el envío del formulario para buscar personajes
    $('#character-form').submit(function(event) {
      event.preventDefault(); // Evita la recarga de la página
      
      // Obtener el nombre del personaje ingresado por el usuario
      var characterName = $('#character-name').val();
      
      // Hacer la solicitud a la API
      var apiUrl = 'https://api.example.com/v3/character/' + characterName;
      $.getJSON(apiUrl, function(data) {
        // Mostrar los datos de la respuesta en la página
        var characterData = '<h2>' + data.name + '</h2>' +
                            '<p>Vida: ' + data.health + '</p>' +
                            '<p>Mana: ' + data.mana + '</p>' +
                            '<p>Nivel: ' + data.level + '</p>';
        $('#character-data').html(characterData);
      });
    });
  });
  