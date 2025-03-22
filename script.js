function showContent(contentId) {
    document.querySelectorAll('.hidden-content').forEach(content => {
        content.classList.remove('active');
    });

    document.getElementById(contentId).classList.add('active');
}

// Mostrar la primera sección por defecto
window.onload = () => showContent('hoja-de-ruta');
