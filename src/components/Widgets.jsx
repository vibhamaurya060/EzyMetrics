import React from 'react';
import { Bar } from 'react-chartjs-2';

function Widgets({ type }) {
  // Dummy data based on the widget type
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Performance',
        data: [65, 59, 80, 81, 56, 55],
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className={`widget ${type}`}>
      <h2>{type.charAt(0).toUpperCase() + type.slice(1)} Overview</h2>
      <Bar data={data} />
    </div>
  );
}

export default Widgets;
