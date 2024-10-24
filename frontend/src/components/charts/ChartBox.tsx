import React from 'react';
import { ChartBoxProps } from '../../store/types/types';

const ChartBox: React.FC<ChartBoxProps> = ({
  icon1, title1, chart1,
  icon2, title2, chart2,
  icon3, title3, chart3
}) => {
  return (
    <div className="p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <div className="flex items-center gap-2 mb-6">
              <div className="text-gray-600 flex-shrink-0">
                {icon1}
              </div>
              <h2 className="text-xl font-bold tracking-tight m-0">{title1}</h2>
            </div>
            <div className="flex justify-center items-center min-h-[200px]">
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
            <div className="flex justify-center items-center min-h-[200px]">
              {chart2}
            </div>
          </div>
        </div>

        {icon3 && title3 && chart3 && (
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <div className="flex items-center gap-2 mb-6">
                <div className="text-gray-600 flex-shrink-0">
                  {icon3}
                </div>
                <h2 className="text-xl font-bold tracking-tight m-0">{title3}</h2>
              </div>
              <div className="flex justify-center items-center min-h-[200px]">
                {chart3}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ChartBox;
