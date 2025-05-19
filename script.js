```javascript
// script.js (Versión MEJORADA para EnglishSapien v2 con estilo y líneas correctas)

// IMPORTANTE: Importa los datos del learning path desde el archivo learningPathData.js
import { learningPathData } from './learningPathData.js';

// Función para renderizar el camino de aprendizaje
function renderLearningPath() {
    const topicsContainer = document.querySelector('.topics-container');
    topicsContainer.innerHTML = ''; // Limpiar cualquier contenido existente

    // Agrupar tópicos en "filas" lógicas para el zig-zag
    // Queremos que el zig-zag sea evidente. Haremos que cada "fila" visual
    // alterne entre 1 y 2 tópicos.
    const structuredTopics = [];
    let tempRow = [];
    learningPathData.forEach((topic, index) => {
        tempRow.push(topic);
        if (tempRow.length === 1 && index % 2 === 0) { // Fila con 1 tópico
             // Si es el primer elemento de un par y su índice es par (0, 2, 4...)
             // Esto genera 1, 2, 1, 2...
             structuredTopics.push(tempRow);
             tempRow = [];
        } else if (tempRow.length === 2) { // Fila con 2 tópicos
            structuredTopics.push(tempRow);
            tempRow = [];
        }
    });
    // Asegurarse de añadir la última fila si no está completa
    if (tempRow.length > 0) {
        structuredTopics.push(tempRow);
    }

    structuredTopics.forEach((rowTopics, rowIndex) => {
        const rowDiv = document.createElement('div');
        // Ajustar el espaciado y justificación de la fila
        rowDiv.className = `topic-row flex ${rowTopics.length === 1 ? 'justify-center' : 'justify-around'} w-full mb-12 relative z-10`; // mb-12 para más espacio vertical

        rowTopics.forEach(topic => {
            const topicElement = document.createElement('div');
            const statusClass = topic.status; // 'completed', 'active', 'locked', 'skipped'
            
            // Aplicar clases de Tailwind para el diseño del nodo
            topicElement.className = `
                topic-node 
                ${statusClass} 
                flex flex-col items-center justify-center text-center 
                w-24 h-24 sm:w-28 sm:h-28 rounded-full shadow-lg 
                p-2 cursor-pointer transition-all duration-300 ease-in-out
                border-4
                ${statusClass === 'completed' ? 'bg-green-500 border-green-700' : ''}
                ${statusClass === 'active' ? 'bg-yellow-500 border-yellow-700' : ''}
                ${statusClass === 'locked' ? 'bg-gray-400 border-gray-600' : ''}
                ${statusClass === 'skipped' ? 'bg-red-400 border-red-600' : ''}
                
            `;

            // Aquí ajustamos el tamaño del ícono y el estilo del texto
            topicElement.innerHTML = `
                <span class="text-5xl mb-1 text-white">${topic.icon}</span> <span class="text-xs font-semibold text-gray-800 topic-name mt-1">${topic.name}</span>
            `;
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
    const learningPathContainer = document.getElementById('learning-path-container');

    if (!svg || !learningPathContainer) {
        console.warn("SVG o contenedor de la ruta no encontrados. No se pueden dibujar las líneas.");
        return;
    }

    svg.innerHTML = ''; // Limpiar líneas existentes
    const topics = document.querySelectorAll('.topics-container .topic-node');

    if (topics.length < 2) return; // Necesitamos al menos dos tópicos para dibujar líneas

    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    let d = "";

    // Obtener el offset del contenedor principal para calcular posiciones relativas
    // Necesitamos el offset del contenedor que SCROLLEA (main) si es que el SVG es hijo de ese
    // Pero si el SVG es hijo de learning-path-container, entonces la referencia es esa.
    // Asumiendo que SVG está dentro de learning-path-container
    const containerRect = learningPathContainer.getBoundingClientRect();
    // Para asegurar que las coordenadas SVG son relativas al SVG mismo:
    // Asegúrate que el SVG ocupa todo el espacio del contenedor que scrolléa y que es posicionable
    const svgRect = svg.getBoundingClientRect();


    const topicPositions = [];
    topics.forEach(topic => {
        const rect = topic.getBoundingClientRect();
        // Calcular la posición central del tópico RELATIVA AL SVG
        // Rect.left/top son absolutos a la ventana. svgRect.left/top son también absolutos.
        // Para obtener la posición relativa al SVG, restamos el offset del SVG.
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
            // Queremos que las líneas bajen verticalmente desde el punto anterior,
            // luego se curven horizontalmente y finalmente suban/bajen al punto actual.
            const controlPointX1 = prevPos.x;
            const controlPointY1 = prevPos.y + (currentPos.y - prevPos.y) * 0.7; // Va vertical casi todo el camino hacia abajo

            const controlPointX2 = currentPos.x;
            const controlPointY2 = prevPos.y + (currentPos.y - prevPos.y) * 0.3; // Viene vertical casi todo el camino hacia arriba

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
```