const DATA_COUNT = 7;
const NUMBER_CFG = {count: DATA_COUNT, min: 0, max: 100};

const labels = ["01 - 2020", "01 - 2020", "02 - 2020", "03-2020", "04-2020"];



const data = {
    labels: labels,
    datasets: [{
        type: 'bar',
        label: 'Dataset 1',
        backgroundColor: 'blue',
        borderColor: 'red',
        data:[34, 54,23,12,45,12,78,12,54,76,12,65,12,65,123,756,23,65,23,53,24,23],
    }, {
        type: 'bar',
        label: 'Dataset 2',
        backgroundColor: 'red',
        borderColor: 'green',
        data:[34, 54,23,12,45,12,78,12,54,76,12,65,12,65,123,756,23,65,23,53,24,23],
    }, {
        type: 'line',
        label: 'Dataset 3',
        backgroundColor: 'yellow',
        borderColor: 'gray',
        data:[34, 54,23,12,45,12,78,12,54,76,12,65,12,65,123,756,23,65,23,53,24,23],
        fill: false,
    }]
};

const config = {
    type: 'line',
    data: data,
    options: {
        plugins: {
            title: {
                text: 'Chart.js Combo Time Scale',
                display: true
            }
        },
        scales: {
            x: {
                type: 'time',
                display: true,
                offset: true,
                time: {
                    unit: 'day'
                }
            },
        },
    },
};