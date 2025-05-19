// script.js (para englishsapien-v2, ahora importando los datos)

// IMPORTANTE: Importa los datos del learning path desde el archivo learningPathData.js
import { learningPathData } from './learningPathData.js';

// Función para renderizar el camino de aprendizaje
function renderLearningPath() {
    const topicsContainer = document.querySelector('.topics-container');
    topicsContainer.innerHTML = ''; // Limpiar cualquier contenido existente

    const topicRows = {}; // Objeto para agrupar tópicos por fila

    // Organizar tópicos en filas (ejemplo: alternar 1 y 2 tópicos por fila)
    learningPathData.forEach((topic, index) => {
        let rowNumber;
        // Simple lógica para alternar filas de 1 y 2 tópicos para simular el zig-zag
        // Podrías tener una lógica más compleja basada en los niveles o una estructura predefinida
        if (index % 3 === 0) { // Fila de un solo tópico
            rowNumber = Math.floor(index / 3) * 2;
        } else { // Fila de dos tópicos
            rowNumber = Math.floor(index / 3) * 2 + 1;
        }

        if (!topicRows[rowNumber]) {
            topicRows[rowNumber] = [];
        }
        topicRows[rowNumber].push(topic);
    });

    // Renderizar las filas y sus tópicos
    Object.keys(topicRows).sort((a, b) => a - b).forEach(rowNumber => {
        const rowTopics = topicRows[rowNumber];
        const rowDiv = document.createElement('div');
        rowDiv.className = `topic-row flex justify-${rowTopics.length === 1 ? 'center' : 'around'} w-full mb-6`;

        rowTopics.forEach(topic => {
            const topicElement = document.createElement('div');
            // Asigna las clases de estado directamente al crear el elemento
            const statusClass = topic.status; // 'completed', 'active', 'locked', 'skipped'
            topicElement.className = `topic-node ${statusClass} flex flex-col items-center justify-center text-center p-2 cursor-pointer transition-all duration-300 ease-in-out`; // Añadir cursor-pointer y transiciones

            topicElement.innerHTML = `
                <span class="text-3xl mb-1">${topic.icon}</span>
                <span class="text-xs font-semibold text-gray-700 topic-name">${topic.name}</span>
            `;
            // Añadir un data-id para identificar el tópico fácilmente
            topicElement.dataset.topicId = topic.id;

            rowDiv.appendChild(topicElement);
        });
        topicsContainer.appendChild(rowDiv);
    });

    // Dibujar las líneas de conexión
    drawPathLines();
}

// Función para dibujar líneas SVG entre los nodos de tópico
function drawPathLines() {
    const svg = document.getElementById('path-lines');
    // Verificar si el SVG y el contenedor de la ruta existen antes de intentar dibujar
    if (!svg || !document.getElementById('learning-path-container')) {
        console.warn("SVG o contenedor de la ruta no encontrados. No se pueden dibujar las líneas.");
        return;
    }

    svg.innerHTML = ''; // Limpiar líneas existentes
    const topics = document.querySelectorAll('.topic-node');

    if (topics.length < 2) return; // Necesitamos al menos dos tópicos para dibujar líneas

    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    let d = "";

    // Calcular la posición central de cada tópico
    const topicPositions = Array.from(topics).map(topic => {
        const rect = topic.getBoundingClientRect();
        // Obtener la posición relativa al contenedor SVG, que es el learning-path-container
        const containerRect = svg.parentElement.getBoundingClientRect();

        return {
            x: (rect.left + rect.right) / 2 - containerRect.left,
            y: (rect.top + rect.bottom) / 2 - containerRect.top
        };
    });

    // Construir la ruta SVG
    topicPositions.forEach((pos, index) => {
        if (index === 0) {
            d += `M ${pos.x} ${pos.y}`; // Mover a la primera posición
        } else {
            // Usar curvas cúbicas para un camino más suave y orgánico
            const prevPos = topicPositions[index - 1];
            const controlPointX1 = prevPos.x + (pos.x - prevPos.x) / 3;
            const controlPointY1 = prevPos.y; // Control point 1 en la misma altura que el anterior
            const controlPointX2 = prevPos.x + (pos.x - prevPos.x) * 2 / 3;
            const controlPointY2 = pos.y; // Control point 2 en la misma altura que el actual
            d += ` C ${controlPointX1} ${controlPointY1}, ${controlPointX2} ${controlPointY2}, ${pos.x} ${pos.y}`;
        }
    });

    path.setAttribute("d", d);
    path.setAttribute("stroke", "#D1D5DB"); // Color de la línea (gris)
    path.setAttribute("stroke-width", "4"); // Grosor de la línea
    path.setAttribute("fill", "none"); // Sin relleno
    path.setAttribute("stroke-linecap", "round");
    path.setAttribute("stroke-linejoin", "round");

    svg.appendChild(path);
}

// Función para mostrar la clase ( placeholder por ahora)
function showClassScreen(topicId) {
    console.log(`Abriendo clase para el tópico: ${topicId}`);
    // Aquí es donde se mostraría la pantalla de clase
    // Por ahora, solo un mensaje de consola
    alert(`Has hecho clic en el tópico: ${topicId}. Aquí iría la pantalla de la clase.`);
}

// Inicializar la ruta de aprendizaje cuando el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', () => {
    renderLearningPath();
    // Redibujar las líneas si la ventana cambia de tamaño
    window.addEventListener('resize', drawPathLines);
});

// Añadir event listeners a los tópicos
document.addEventListener('click', (event) => {
    const topicNode = event.target.closest('.topic-node');
    if (topicNode && topicNode.dataset.topicId) {
        showClassScreen(topicNode.dataset.topicId);
    }
});