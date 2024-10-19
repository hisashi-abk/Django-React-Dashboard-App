import React from 'react';
import { Grid, Box } from '@mui/material';

interface ChartBox2Props {
  icon1: React.ReactNode;
  title1: string;
  chart1: React.ReactNode;
  icon2: React.ReactNode;
  title2: string;
  chart2: React.ReactNode;
}

const MyChartBox2: React.FC<ChartBox2Props> = ({
  icon1, title1, chart1,
  icon2, title2, chart2
}) => {
  return (
    <Box>
      <Grid container
        sx={{ width: '100%', display: 'flex', minHeight: '200px', boxShadow: 3, justifyContent: 'space-evenly', marginTop: '20px' }}
      >
        <Grid
          item xs={12} sm={12} md={6} lg={6}
          sx={{ minHeight: '200px', padding: '20px', borderRight: '1px dotted #d3d3d3' }}
        >
          <Box sx={{ marginBottom: '20px', fontWeight: 'bold', display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <Box sx={{ marginRight: '15px' }}>{icon1}</Box>
            <Box>{title1}</Box>
          </Box>

          <Box sx={{ marginBottom: '20px' }}>{chart1}</Box>
        </Grid>

        <Grid
          item xs={12} sm={12} md={6} lg={6}
          sx={{ minHeight: '200px', padding: '20px', borderRight: '1px dotted #d3d3d3' }}
        >
          <Box sx={{ marginBottom: '20px', fontWeight: 'bold', display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <Box sx={{ marginRight: '15px' }}>{icon2}</Box>
            <Box>{title2}</Box>
          </Box>

          <Box sx={{ marginBottom: '20px' }}>{chart2}</Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default MyChartBox2;
