
// Datos extraídos de tu Plantilla (Simulación de carga)
const datosMerchandising = [
    { zona: 1, nombre: "Entrada", personas: 48, tiempo: 30 },
    { zona: 2, nombre: "Pasillo central", personas: 65, tiempo: 30 },
    { zona: 3, nombre: "Promociones", personas: 52, tiempo: 30 },
    { zona: 4, nombre: "Lateral izquierdo", personas: 18, tiempo: 30 },
    { zona: 5, nombre: "Fondo", personas: 10, tiempo: 30 },
    { zona: 6, nombre: "Caja / Salida", personas: 40, tiempo: 30 }
];

function resolverSistema() {
    const contenedor = document.getElementById('dataOutput');
    let html = `
    <table class="table table-hover">
        <thead class="table-dark">
            <tr><th>Zona</th><th>Densidad</th><th>Estado</th><th>Estrategia Sugerida</th></tr>
        </thead>
        <tbody>`;

    datosMerchandising.forEach(d => {
        // CÁLCULO MATEMÁTICO DEL SISTEMA
        let densidad = (d.personas / (d.tiempo / 60)).toFixed(2); // Ajuste a personas/min
        let esCaliente = densidad > 1.0;
        let estrategia = esCaliente 
            ? "Zona Caliente: Optimizar producto de impulso." 
            : "Zona Fría: Aplicar 'producto imán' (Clase A).";

        html += `<tr>
            <td>${d.nombre}</td>
            <td>${densidad}</td>
            <td>${esCaliente ? "🔥 Caliente" : "❄️ Fría"}</td>
            <td>${estrategia}</td>
        </tr>`;
    });

    html += `</tbody></table>`;
    contenedor.innerHTML = html;
}

// Ejecutar al cargar la página
document.addEventListener('DOMContentLoaded', resolverSistema);
