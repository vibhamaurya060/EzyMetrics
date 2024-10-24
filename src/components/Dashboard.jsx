import React from 'react';
import Widgets from './Widgets';

function Dashboard() {
  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <div className="widgets-container">
        <Widgets type="sales" />
        <Widgets type="activity" />
        <Widgets type="performance" />
      </div>
    </div>
  );
}

export default Dashboard;
