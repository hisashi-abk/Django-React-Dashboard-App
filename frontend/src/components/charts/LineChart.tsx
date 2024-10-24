import React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';
import { CurveType } from '@mui/x-charts/models';
import { CountryData } from '../types/types';

interface MyLineChartProps {
  mydata: CountryData[];
  myxaxis: string;
  myseries: Array<{
    dataKey: string;
    label?: string;
    color?: string;
    curve?: CurveType;
  }>;
}

const MyLineChart: React.FC<MyLineChartProps> = ({ mydata, myxaxis, myseries }) => {
  return (
    <LineChart
      dataset={mydata}
      xAxis={[{
        dataKey: myxaxis,
        scaleType: 'point',
      }]}
      series={myseries.map(series => ({
        ...series,
        type: 'line' as const,
      }))}
      width={700}
      height={300}
    />
  );
};

export default MyLineChart;
