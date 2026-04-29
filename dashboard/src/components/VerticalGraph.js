import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function VerticalGraph({data}) {


const options = {
  responsive: true,
  maintainAspectRatio: false, // ⭐ IMPORTANT
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Stock Prices',
    },
  },
};

  return (
  <div style={{ width: "100%", height: "400px" }}>
  <Bar data={data} options={options} />
</div>
  );
}

export default VerticalGraph;