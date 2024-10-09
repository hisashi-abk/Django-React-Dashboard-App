import * as React from 'react';
import { PieChart, Pie, Cell, Tooltip } from 'recharts';

interface PieChartData {
  id: number | string;
  value: number;
  label: string;
  percentage: number;
  color: string;
}

interface MyPieChartProps {
  myData: PieChartData[];
}

export default function MyPieChart({ myData }: MyPieChartProps): React.JSX.Element {
  // データがない場合のフォールバック
  if (!myData.length) {
    return (
      <div className="flex items-center justify-center h-full w-full">
        <div className="text-gray-400">No data available</div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-full">
      <PieChart width={400} height={200}>
        <Pie
          data={myData}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={({ percentage }) => `${percentage}%`}
          outerRadius={80}
          innerRadius={40}
          paddingAngle={5}
          dataKey="value"
        >
          {myData.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={entry.color || `hsl(${(index * 360) / myData.length}, 70%, 50%)`}
              className="transition-all duration-300 hover:opacity-80"
            />
          ))}
        </Pie>
        <Tooltip
          content={({ payload }) => {
            if (payload && payload.length) {
              const data = payload[0].payload;
              return (
                <div className="bg-white p-2 rounded-lg shadow-lg border">
                  <p className="font-semibold">{data.label}</p>
                  <p className="text-sm text-gray-600">{`${data.percentage}%`}</p>
                </div>
              );
            }
            return null;
          }}
        />
      </PieChart>
    </div>
  );
}
