
import React, { useState } from 'react';
import { Button, TextField, CircularProgress } from '@mui/material';
import { Line } from 'react-chartjs-2';
import '../styles/ReportTool.css'; 

const ReportTool = () => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [loading, setLoading] = useState(false);
  const [reportUrl, setReportUrl] = useState('');
  const [error, setError] = useState(null);

  const handleGenerateReport = async (format) => {
    if (!startDate || !endDate) {
      alert('Please select both start and end dates.');
      return;
    }

    setLoading(true);
    setError(null);
    
    try {
     
      const response = await fakeApiCall(format, startDate, endDate);
      setReportUrl(response.url);
    } catch (err) {
      setError('Failed to generate report. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const fakeApiCall = (format, start, end) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Mock URL 
        if (Math.random() > 0.2) {
          resolve({ url: `http://example.com/report.${format.toLowerCase()}` });
        } else {
          reject(new Error('Report generation failed.'));
        }
      }, 2000);
    });
  };

  const chartData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Sales',
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        backgroundColor: 'rgba(75,192,192,1)',
        borderColor: 'rgba(75,192,192,1)',
      },
    ],
  };

  return (
    <div className="report-tool">
      <h2>Generate Report</h2>
      <div className="date-range">
        <TextField
          label="Start Date"
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          label="End Date"
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </div>
      <div className="buttons">
        <Button variant="contained" color="primary" onClick={() => handleGenerateReport('PDF')} style={{marginRight:"10px"}}>
          Generate PDF
        </Button>
        <Button variant="contained" color="secondary" onClick={() => handleGenerateReport('CSV')}>
          Generate CSV
        </Button>
      </div>
      {loading && <CircularProgress />}
      {error && <p className="error">{error}</p>}
      {reportUrl && (
        <div>
          <p>Report generated successfully! Download it <a href={reportUrl} target="_blank" rel="noopener noreferrer">here</a>.</p>
        </div>
      )}
      <div className="chart-container">
        <Line data={chartData} />
      </div>
    </div>
  );
};

export default ReportTool;
