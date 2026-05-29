document.getElementById('upload').addEventListener('change', function(e) {
    Papa.parse(e.target.files[0], {
        header: true,
        complete: function(results) {
            processData(results.data);
        }
    });
});

function processData(data) {
    const container = document.getElementById('results');
    container.innerHTML = '';
    
    data.forEach(row => {
        if(!row.Zona) return;
        
        // CÁLCULO AUTOMÁTICO
        let densidad = parseFloat(row.Personas) / parseFloat(row.Tiempo);
        let esCaliente = densidad > 1.0;
        
        // LÓGICA DE RESOLUCIÓN (IA INTEGRADA)
        let estrategia = esCaliente 
            ? "Zona Caliente: Ubicar productos de impulso en pasillo central." 
            : "Zona Fría: Mover productos clase A (Imán) para atraer tráfico.";

        container.innerHTML += `
            <div class="col-md-4 mb-3">
                <div class="card ${esCaliente ? 'border-danger' : 'border-primary'}">
                    <div class="card-body">
                        <h5>Zona ${row.Zona}</h5>
                        <p>Densidad: ${densidad.toFixed(2)}</p>
                        <small>${estrategia}</small>
                    </div>
                </div>
            </div>`;
    });
}
