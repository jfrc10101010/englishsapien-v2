// script.js (Versión MEJORADA FINAL para EnglishSapien v2 con estilo y líneas correctas)

// IMPORTANTE: Importa los datos del learning path desde el archivo learningPathData.js
import { learningPathData } from './learningPathData.js';

// Función para renderizar el camino de aprendizaje
function renderLearningPath() {
    const topicsContainer = document.querySelector('.topics-container');
    topicsContainer.innerHTML = ''; // Limpiar cualquier contenido existente

    // Agrupar tópicos en "filas" lógicas para el zig-zag
    const structuredTopics = [];
    let tempRow = [];
    // Lógica para alternar 1 tópico por fila y luego 2 tópicos por fila
    // Esta lógica de distribución es crucial para que las líneas se vean bien con el zig-zag.
    learningPathData.forEach((topic, index) => {
        if (index % 3 === 0) { // Un solo tópico en esta "fila" lógica (ej: tópico 1, 4, 7...)
            if (tempRow.length > 0) { // Si hay tópicos pendientes de la fila anterior (de 2)
                structuredTopics.push(tempRow);
            }
            tempRow = [topic]; // Crea una nueva fila con este tópico
            structuredTopics.push(tempRow); // Agrega la fila de 1 tópico
            tempRow = []; // Reinicia para la siguiente fila de 2
        } else { // Dos tópicos en esta "fila" lógica (ej: tópico 2, 3, 5, 6...)
            tempRow.push(topic);
            if (tempRow.length === 2) {
                structuredTopics.push(tempRow);
                tempRow = [];
            }
        }
    });
    // Añadir la última fila si quedó incompleta (ej. si el total de tópicos no es múltiplo de 3)
    if (tempRow.length > 0) {
        structuredTopics.push(tempRow);
    }

    structuredTopics.forEach((rowTopics, rowIndex) => {
        const rowDiv = document.createElement('div');
        // Añadimos justify-center o justify-around dependiendo de la cantidad de elementos en la fila
        rowDiv.className = `topic-row flex ${rowTopics.length === 1 ? 'justify-center' : 'justify-around'} w-full mb-12 relative z-10`; // mb-12 para más espacio vertical entre filas

        rowTopics.forEach(topic => {
            const topicElement = document.createElement('div');
            const statusClass = topic.status;
            
            // Aplicar clases de Tailwind para el diseño del nodo (círculo, sombra, bordes, colores)
            topicElement.className = `
                topic-node 
                ${statusClass} 
                flex flex-col items-center justify-center text-center 
                w-28 h-28 sm:w-32 sm:h-32 rounded-full shadow-lg 
                p-2 cursor-pointer transition-all duration-300 ease-in-out
                border-4
                ${statusClass === 'completed' ? 'bg-green-500 border-green-700' : ''}
                ${statusClass === 'active' ? 'bg-yellow-500 border-yellow-700' : ''}
                ${statusClass === 'locked' ? 'bg-gray-400 border-gray-600' : ''}
                ${statusClass === 'skipped' ? 'bg-red-400 border-red-600' : ''}
            `;

            // Contenido del tópico: ícono y nombre
            topicElement.innerHTML = `
                <span class="text-6xl mb-1 text-white">${topic.icon}</span> <span class="text-xs font-semibold text-gray-800 topic-name mt-1">${topic.name}</span>
            `;
            topicElement.dataset.topicId = topic.id; // Para identificar el tópico al hacer clic

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
    const learningPathContainer = document.getElementById('learning-path-container');

    if (!svg || !learningPathContainer) {
        console.warn("SVG o contenedor de la ruta no encontrados. No se pueden dibujar las líneas.");
        return;
    }

    svg.innerHTML = ''; // Limpiar líneas existentes
    // Seleccionamos los tópicos en el orden en que aparecen en el DOM
    const topics = Array.from(document.querySelectorAll('.topics-container .topic-node'));

    if (topics.length < 2) return; // Necesitamos al menos dos tópicos para dibujar líneas

    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    let d = "";

    // Obtener el offset del contenedor principal para calcular posiciones relativas
    const svgRect = svg.getBoundingClientRect();

    const topicPositions = [];
    topics.forEach(topic => {
        const rect = topic.getBoundingClientRect();
        // Calcular la posición central del tópico RELATIVA AL SVG
        topicPositions.push({
            x: (rect.left + rect.right) / 2 - svgRect.left,
            y: (rect.top + rect.bottom) / 2 - svgRect.top
        });
    });

    // Construir la ruta SVG para un camino con zig-zag más preciso
    if (topicPositions.length > 0) {
        d += `M ${topicPositions[0].x} ${topicPositions[0].y}`; // Mover al primer tópico

        for (let i = 1; i < topicPositions.length; i++) {
            const prevPos = topicPositions[i - 1];
            const currentPos = topicPositions[i];

            // Lógica de curva para el zig-zag más pronunciado y visualmente atractivo
            // Usamos una curva cúbica que primero va más vertical y luego transiciona horizontalmente
            // para simular la forma de "S" o "Z" en el camino.
            const controlPointX1 = prevPos.x;
            const controlPointY1 = prevPos.y + (currentPos.y - prevPos.y) * 0.5; // Punto de control 1: misma X que el anterior, Y a mitad de camino

            const controlPointX2 = currentPos.x;
            const controlPointY2 = prevPos.y + (currentPos.y - prevPos.y) * 0.5; // Punto de control 2: misma X que el actual, Y a mitad de camino

            d += ` C ${controlPointX1} ${controlPointY1}, ${controlPointX2} ${controlPointY2}, ${currentPos.x} ${currentPos.y}`;
        }
    }

    path.setAttribute("d", d);
    path.setAttribute("stroke", "#9C6B36"); // Color de la línea (Sepia Skin)
    path.setAttribute("stroke-width", "4"); // Grosor de la línea
    path.setAttribute("fill", "none"); // Sin relleno
    path.setAttribute("stroke-linecap", "round");
    path.setAttribute("stroke-linejoin", "round");

    svg.appendChild(path);
}

// Función para mostrar la clase ( placeholder por ahora)
function showClassScreen(topicId) {
    console.log(`Abriendo clase para el tópico: ${topicId}`);
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