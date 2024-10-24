const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
const spendData = [12000, 15000, 18000, 16000, 20000, 23000, 25000];
const roaData = [1.2, 1.4, 1.5, 1.3, 1.6, 1.8, 1.7];

const ctx = document.getElementById('billpunChart').getContext('2d');
const billpunChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: labels,
        datasets: [
            {
                label: 'Spend ($)',
                data: spendData,
                backgroundColor: 'rgba(54, 162, 235, 0.5)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 2,
                type: 'bar',
                yAxisID: 'y',
            },
            {
                label: 'ROA',
                data: roaData,
                borderColor: 'rgba(255, 99, 132, 1)',
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderWidth: 2,
                type: 'line',
                yAxisID: 'y1',
            }
        ]
    },
    options: {
        scales: {
            y: {
                type: 'linear',
                position: 'left',
                title: {
                    display: true,
                    text: 'Spend ($)',
                },
                ticks: {
                    callback: function (value) {
                        return '$' + value.toLocaleString();
                    }
                },
            },
            y1: {
                type: 'linear',
                position: 'right',
                title: {
                    display: true,
                    text: 'ROA',
                },
                ticks: {
                    callback: function (value) {
                        return value + 'x';
                    }
                },
                grid: {
                    drawOnChartArea: false,
                },
            }
        },
        plugins: {
            legend: {
                display: true,
                position: 'top',
            }
        },
        responsive: true,
        maintainAspectRatio: false,
    }
});
