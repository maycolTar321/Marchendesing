const ctx = document.getElementById('merchChart').getContext('2d');
new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Zona Entrada', 'Pasillo Principal', 'Zona de Cajas', 'Área Promocional'],
        datasets: [{
            label: 'Flujo de Clientes (Personas/Min)',
            data: [2.5, 4.2, 1.8, 3.5],
            backgroundColor: '#2c3e50'
        }]
    },
    options: { responsive: true, scales: { y: { beginAtZero: true } } }
});

// Registro de Service Worker para PWA
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js').then(() => console.log("App instalable lista."));
}
