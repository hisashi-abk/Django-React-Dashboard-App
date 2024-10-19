import React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';

export interface ProductBrancheData {
  productline__name: string;
  quantityBrancheA: number;
  quantityBrancheB: number;
  quantityBrancheC: number;
  [key: string]: string | number;
}

type BrancheQuantityKeys = 'quantityBrancheA' | 'quantityBrancheB' | 'quantityBrancheC';

interface StackedBarChartProps {
  dataset: ProductBrancheData[];
  XlabelName: keyof ProductBrancheData;
  series: Array<{
    dataKey: BrancheQuantityKeys;
    label?: string;
    valueFormatter?: (value: number | null) => string;
    color?: string;
  }>;
}

const COLORS = ['#00bcd4', '#2196f3', '#9c27b0'];

const MyStackedBarChart: React.FC<StackedBarChartProps> = ({
  dataset,
  XlabelName,
  series
}) => {
  const chartSeries = series.map((s, index) => ({
    dataKey: s.dataKey as string, // Cast to string to satisfy MUI X-Charts typing
    label: s.label || String(s.dataKey),
    valueFormatter: s.valueFormatter || ((value: number | null) => (value?.toString() ?? '')),
    color: s.color || COLORS[index % COLORS.length],
    stack: 'total',
    data: dataset.map(item => item[s.dataKey]),
    type: 'bar' as const
  }));

  return (
    <BarChart
      dataset={dataset}
      xAxis={[{
        scaleType: 'band',
        dataKey: XlabelName as string,
        tickLabelStyle: {
          angle: 20,
          textAnchor: 'start',
          fontSize: 10,
        },
      }]}
      series={chartSeries}
      width={400}
      height={250}
      slotProps={{
        legend: {
          direction: 'row',
          position: { vertical: 'top', horizontal: 'middle' },
          padding: 0,
        },
      }}
    />
  );
};

export default MyStackedBarChart;
