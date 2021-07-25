const DATA_COUNT = 7;
const NUMBER_CFG = {count: DATA_COUNT, min: -100, max: 100};

const labels = ['1', '2', '3', '4', '5', '6'];
const data = {
  labels: labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: [1, 2,3,5,6],
      borderColor: 'red',
      backgroundColor: 'red',
      yAxisID: 'y',
    },
    {
      label: 'Dataset 2',
      data: [11,12,14,13,15,15],
      borderColor: 'blue',
      backgroundColor: 'blue',
      yAxisID: 'y1',
    }
  ]
};

const config = {
  type: 'line',
  data: data,
  options: {
    responsive: true,
    interaction: {
      mode: 'index',
      intersect: false,
    },
    stacked: false,
    plugins: {
      title: {
        display: true,
        text: 'Chart.js Line Chart - Multi Axis'
      }
    },
    scales: {
      y: {
        type: 'linear',
        display: true,
        position: 'left',
      },
      y1: {
        type: 'linear',
        display: true,
        position: 'right',

        // grid line settings
        grid: {
          drawOnChartArea: false, // only want the grid lines for one axis to show up
        },
      },
    }
  },
};