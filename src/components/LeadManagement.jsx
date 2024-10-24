import React, { useState } from 'react';
import leadsData from '../data/leads';

function LeadManagement() {
  const [leads] = useState(leadsData);

  return (
    <div className="lead-management">
      <h1>Leads</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {leads.map((lead) => (
            <tr key={lead.id}>
              <td>{lead.id}</td>
              <td>{lead.name}</td>
              <td>{lead.email}</td>
              <td>{lead.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default LeadManagement;
