
import React from 'react';
import leads from '../data/leads';
import { Card, CardContent, Typography, Button } from '@mui/material';

const Leads = () => {
  const handleViewDetails = (lead) => {
    alert(`Viewing details for ${lead.name}`);
  };

  return (
    <div>
      <h2>Leads Management</h2>
      {leads.map((lead) => (
        <Card key={lead.id} style={{ margin: '10px' }}>
          <CardContent>
            <Typography variant="h5">{lead.name}</Typography>
            <Typography variant="subtitle1">{lead.email}</Typography>
            <Typography variant="body2">{lead.phone}</Typography>
            <Typography variant="caption">Status: {lead.status}</Typography>
            <Button onClick={() => handleViewDetails(lead)}>View Details</Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default Leads;
