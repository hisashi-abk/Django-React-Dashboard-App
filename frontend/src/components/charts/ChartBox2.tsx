import React from 'react';

interface ChartBox2Props {
  icon1: React.ReactNode;
  title1: string;
  chart1: React.ReactNode;
  icon2: React.ReactNode;
  title2: string;
  chart2: React.ReactNode;
}

const ChartBox2: React.FC<ChartBox2Props> = ({
  icon1, title1, chart1,
  icon2, title2, chart2
}) => {
  return (
    <div className="p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <div className="flex items-center gap-2 mb-6">
              <div className="text-gray-600 flex-shrink-0">
                {icon1}
              </div>
              <h2 className="text-xl font-bold tracking-tight m-0">{title1}</h2>
            </div>
            <div className="min-h-[200px]">
              {chart1}
            </div>
          </div>
        </div>

        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <div className="flex items-center gap-2 mb-6">
              <div className="text-gray-600 flex-shrink-0">
                {icon2}
              </div>
              <h2 className="text-xl font-bold tracking-tight m-0">{title2}</h2>
            </div>
            <div className="min-h-[200px]">
              {chart2}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChartBox2;
