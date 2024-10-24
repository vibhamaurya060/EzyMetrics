
import React, { useEffect, useRef } from 'react';
import { Line } from 'react-chartjs-2';
import '../utils/chartSetup'; 
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler
);


const Analytics = () => {
  const chartRef = useRef(null);

  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Dataset 1',
        data: [10, 20, 30, 40, 50, 60],
        borderColor: 'rgba(75,192,192,1)',
        backgroundColor: 'rgba(75,192,192,0.2)',
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Sample Chart',
      },
    },
  };

  useEffect(() => {
    const chartInstance = chartRef.current;

    return () => {
      if (chartInstance && chartInstance.chartInstance) {
        chartInstance.chartInstance.destroy();
      }
    };
  }, []);

  return (
    <div>
      <h2>Analytics Page</h2>
      <Line ref={chartRef} data={data} options={options} />
    </div>
  );
};

export default Analytics;
