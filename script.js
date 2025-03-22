function showContent(contentId) {
    // Ocultar todos los contenidos
    var allContents = document.querySelectorAll('.hidden-content');
    allContents.forEach(function(content) {
        content.style.display = 'none';
    });

    // Mostrar el contenido correspondiente
    var contentToShow = document.getElementById(contentId);
    if (contentToShow) {
        contentToShow.style.display = 'block';
    }
}

// Mostrar contenido por defecto (Hoja de Ruta)
window.onload = function() {
    showContent('hoja-de-ruta');
}