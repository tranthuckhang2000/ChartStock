const DATA_COUNT = 7;
// Thoi gian 
const labels = [12, 19, 3, 5, 2, 3, 12, 19, 3, 5, 2, 3, 12, 19, 3, 5, 2, 3, 12, 19, 3, 5, 2, 3, 12, 19, 3, 5, 2, 3, 12, 19, 3, 5, 2, 3, 3, 5, 2, 3, 12, 19, 3, 5, 2, 3, 12, 19, 3, 5, 2, 3, 12, 19, 3, 5] 
const data = {
    labels: labels,

    datasets: [
        {
            label: 'Khối lượng giao dịch',
            data: [12, 19, 3, 5, 2, 3, 12, 19, 3, 5, 2, 3, 12, 19, 3, 5, 2, 3, 12, 19, 3, 5, 2, 3, 12, 19, 3, 5, 2, 3, 12, 19, 3, 5, 2, 3, 3, 5, 2, 3, 12, 19, 3, 5, 2, 3, 12, 19, 3, 5, 2, 3, 12, 19, 3, 5],
            backgroundColor: '#CC00FF',
            stack: 'combined',
            type: 'bar'
        },
        {
            label: 'Giá',
            data: [12, 19, 3, 5, 2, 3, 12, 19, 3, 5, 2, 3, 12, 19, 3, 5, 2, 3, 12, 19, 3, 5, 2, 3, 12, 19, 3, 5, 2, 3, 12, 19, 3, 5, 2, 3, 3, 5, 2, 3, 12, 19, 3, 5, 2, 3, 12, 19, 3, 5, 2, 3, 12, 19, 3, 5],
            backgroundColor: '#00FF00',
            borderColor: '#00FF00',
            stack: 'combined',
        
        }
    ]
};

const configMSP = {
    type: 'line',
    data: data,
    options: {
        plugins: {
            title: {
                display: true,
                text: '' // name chart
            }
        },
        scales: {
            y: {
                stacked: true
            }
        }
    },
};