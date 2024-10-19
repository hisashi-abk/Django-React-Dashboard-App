import * as React from 'react';
import Box from '@mui/material/Box';
import { ResponsiveChartContainer } from '@mui/x-charts/ResponsiveChartContainer';
import { BarPlot } from '@mui/x-charts/BarChart';
import { LinePlot, MarkPlot } from '@mui/x-charts/LineChart';
import { ChartsXAxis } from '@mui/x-charts/ChartsXAxis';
import { ChartsLegend } from '@mui/x-charts/ChartsLegend';
import { ProductBrancheData, CombiChartSeries } from '../../store/types/types';

interface CombiChartProps {
  myData: ProductBrancheData[];
  myseries: CombiChartSeries[];
  xcolumn: 'productline__name';
}

const MyCombiChart: React.FC<CombiChartProps> = ({ myData, myseries, xcolumn }) => {
  return (
    <Box sx={{ width: '100%', height: '300px' }}>
      <ResponsiveChartContainer
        dataset={myData}
        series={myseries}
        xAxis={[
          {
            dataKey: xcolumn,
            scaleType: 'band',
            id: 'x-axis-id',
            tickLabelStyle: {
              angle: 20,
              textAnchor: 'start',
              fontSize: 10,
            },
          },
        ]}
      >
        <BarPlot />
        <LinePlot />
        <MarkPlot />
        <ChartsLegend />
        <ChartsXAxis position="bottom" axisId="x-axis-id" />
      </ResponsiveChartContainer>
    </Box>
  );
};

export default MyCombiChart;
