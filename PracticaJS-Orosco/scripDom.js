document.addEventListener('DOMContentLoaded', () => {
    const demoRoot = document.createElement('section');

    demoRoot.id = 'demo-root';      // Asignar un id
    demoRoot.textContent = 'Sección creada dinámicamente'; // (Opcional)

    document.body.appendChild(demoRoot);  // Insertar en el DOM
});