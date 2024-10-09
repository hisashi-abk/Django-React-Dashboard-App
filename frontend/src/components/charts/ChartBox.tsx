import * as React from 'react';

interface ChartBoxProps {
  icon1: React.ReactNode;
  title1: string;
  chart1: React.ReactNode;
  icon2: React.ReactNode;
  title2: string;
  chart2: React.ReactNode;
  icon3: React.ReactNode;
  title3: string;
  chart3: React.ReactNode;
}

export default function MyChartBox(props: ChartBoxProps): React.JSX.Element {
  const {icon1, title1, chart1, icon2, title2, chart2, icon3, title3, chart3} = props;

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* First Chart Section */}
        <div className="bg-white rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl">
          <div className="flex items-center mb-4 space-x-3">
            <div className="text-blue-600">{icon1}</div>
            <h2 className="text-lg font-semibold text-gray-800">{title1}</h2>
          </div>
          <div className="w-full h-[200px] flex items-center justify-center">
            {chart1}
          </div>
        </div>

        {/* Second Chart Section */}
        <div className="bg-white rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl">
          <div className="flex items-center mb-4 space-x-3">
            <div className="text-green-600">{icon2}</div>
            <h2 className="text-lg font-semibold text-gray-800">{title2}</h2>
          </div>
          <div className="w-full h-[200px] flex items-center justify-center">
            {chart2}
          </div>
        </div>

        {/* Third Chart Section */}
        <div className="bg-white rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl">
          <div className="flex items-center mb-4 space-x-3">
            <div className="text-purple-600">{icon3}</div>
            <h2 className="text-lg font-semibold text-gray-800">{title3}</h2>
          </div>
          <div className="w-full h-[200px] flex items-center justify-center">
            {chart3}
          </div>
        </div>
      </div>
    </div>
  );
}
