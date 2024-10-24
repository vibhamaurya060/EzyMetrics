import React from 'react';
import { NavLink } from 'react-router-dom';
import { Dashboard, People, BarChart, Assessment } from '@material-ui/icons';

function Sidebar() {
  return (
    <div className="sidebar">
      <h2>EzyMetrics</h2>
      <nav>
        <ul>
          <li>
            <NavLink exact to="/" activeClassName="active">
              <Dashboard /> Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink to="/leads" activeClassName="active">
              <People /> Leads
            </NavLink>
          </li>
          <li>
            <NavLink to="/analytics" activeClassName="active">
              <BarChart /> Analytics
            </NavLink>
          </li>
          <li>
            <NavLink to="/reports" activeClassName="active">
              <Assessment /> Reports
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
