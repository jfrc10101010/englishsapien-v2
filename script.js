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

// Función para dibujar líneas SVG entre los nodos de tópico (¡VERSIÓN MEJORADA!)
function drawPathLines() {
    const svg = document.getElementById('path-lines');
    const learningPathContainer = document.getElementById('learning-path-container');

    if (!svg || !learningPathContainer) {
        console.warn("SVG o contenedor de la ruta no encontrados. No se pueden dibujar las líneas.");
        return;
    }

    svg.innerHTML = ''; // Limpiar líneas existentes
    const topics = document.querySelectorAll('.topic-node');

    if (topics.length < 2) return; // Necesitamos al menos dos tópicos para dibujar líneas

    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    let d = "";

    // Obtener el offset del contenedor principal para calcular posiciones relativas
    const containerRect = learningPathContainer.getBoundingClientRect();

    const topicPositions = [];
    topics.forEach(topic => {
        const rect = topic.getBoundingClientRect();
        topicPositions.push({
            x: (rect.left + rect.right) / 2 - containerRect.left,
            y: (rect.top + rect.bottom) / 2 - containerRect.top
        });
    });

    // Construir la ruta SVG para un camino con zig-zag más preciso
    if (topicPositions.length > 0) {
        d += `M ${topicPositions[0].x} ${topicPositions[0].y}`; // Mover al primer tópico

        for (let i = 1; i < topicPositions.length; i++) {
            const prevPos = topicPositions[i - 1];
            const currentPos = topicPositions[i];

            // Calcular puntos de control para una curva más suave y siguiendo el "flujo" vertical
            // Esto intenta hacer una curva más natural que vaya primero verticalmente y luego horizontalmente
            const controlPointX1 = prevPos.x;
            const controlPointY1 = prevPos.y + (currentPos.y - prevPos.y) / 2; // Control point 1 a mitad de camino vertical

            const controlPointX2 = currentPos.x;
            const controlPointY2 = prevPos.y + (currentPos.y - prevPos.y) / 2; // Control point 2 a mitad de camino vertical

            // Si los tópicos están en la misma fila (poca diferencia en Y), usamos una línea recta o una curva muy suave
            if (Math.abs(currentPos.y - prevPos.y) < 20) { // Umbral pequeño para considerar "misma fila"
                d += ` L ${currentPos.x} ${currentPos.y}`; // Linea recta
            } else {
                // Curva más pronunciada para zig-zag vertical
                d += ` C ${controlPointX1} ${controlPointY1}, ${controlPointX2} ${controlPointY2}, ${currentPos.x} ${currentPos.y}`;
            }
        }
    }

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