
import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const Home = () => {
  return (
    <div>
      <h2>Dashboard</h2>
      <Card style={{ margin: '10px' }}>
        <CardContent>
          <Typography variant="h5">Widget 1</Typography>
          <Typography>Content for Widget 1...</Typography>
        </CardContent>
      </Card>
      <Card style={{ margin: '10px' }}>
        <CardContent>
          <Typography variant="h5">Widget 2</Typography>
          <Typography>Content for Widget 2...</Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default Home;
