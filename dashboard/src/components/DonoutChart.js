import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

function DonoutChart({ data }) {

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Stock Distribution',
      },
    },
  };

  return (
    <div style={{ width: "400px", height: "400px", margin: "auto" }}>
      <Doughnut data={data} options={options} />
    </div>
  );
}

export default DonoutChart;