import React from 'react';
import { Grid, Box } from '@mui/material';
import { ChartBoxProps } from '../../store/types/types';

const MyChartBox: React.FC<ChartBoxProps> = ({
  icon1, title1, chart1,
  icon2, title2, chart2,
  icon3, title3, chart3
}) => {
  return (
    <Box sx={{ padding: '20px' }}>
      <Grid container spacing={4} sx={{ width: '100%', display: 'flex', minHeight: '200px', boxShadow: 3 }}>
        <Grid
          item xs={12} sm={12} md={6} lg={4}
          sx={{ minHeight: '200px', padding: '20px', borderRight: '1px dotted #d3d3d3' }}
        >
          <Box sx={{ marginBottom: '20px', fontWeight: 'bold', display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <Box sx={{ marginRight: '15px' }}>{icon1}</Box>
            <Box>{title1}</Box>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 'calc(100% - 60px)' }}>
            {chart1}
          </Box>
        </Grid>

        <Grid
          item xs={12} sm={12} md={6} lg={4}
          sx={{ minHeight: '200px', padding: '20px', borderRight: '1px dotted #d3d3d3' }}
        >
          <Box sx={{ marginBottom: '20px', fontWeight: 'bold', display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <Box sx={{ marginRight: '15px' }}>{icon2}</Box>
            <Box>{title2}</Box>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 'calc(100% - 60px)' }}>
            {chart2}
          </Box>
        </Grid>

        {icon3 && title3 && chart3 && (
          <Grid
            item xs={12} sm={12} md={6} lg={4}
            sx={{ minHeight: '200px', padding: '20px', borderRight: '1px dotted #d3d3d3' }}
          >
            <Box sx={{ marginBottom: '20px', fontWeight: 'bold', display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
              <Box sx={{ marginRight: '15px' }}>{icon3}</Box>
              <Box>{title3}</Box>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 'calc(100% - 60px)' }}>
              {chart3}
            </Box>
          </Grid>
        )}
      </Grid>
    </Box>
  );
}

export default MyChartBox;
