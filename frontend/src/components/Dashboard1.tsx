import React, { useState, useEffect } from 'react';
import AxiosInstance from './Axios';
import MyChartBox from './charts/ChartBox';
import MyPieChart from './charts/PieChart';
import MyDonutChart from './charts/DonutChart';
import StoreIcon from '@mui/icons-material/Store';
import WcIcon from '@mui/icons-material/Wc';
import { ChartDataPoint } from '../store/types/types';

const Dashboard1: React.FC = () => {
  const [myBrancheData, setMyBrancheData] = useState<ChartDataPoint[]>([]);
  const [myGenderData, setMyGenderData] = useState<ChartDataPoint[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const getData = async (): Promise<void> => {
    try {
      setIsLoading(true);
      setError(null);

      const [brancheResponse, genderResponse] = await Promise.all([
        AxiosInstance.get<ChartDataPoint[]>('branchedata/'),
        AxiosInstance.get<ChartDataPoint[]>('genderdata/')
      ]);

      setMyBrancheData(brancheResponse.data);
      setMyGenderData(genderResponse.data);
    } catch (err) {
      setError('Failed to fetch dashboard data');
      console.error('Error fetching data:', err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-full">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-full">
        <div className="text-red-500">{error}</div>
      </div>
    );
  }

  const totalGenderCount = myGenderData.reduce((sum, data) => sum + data.value, 0);

  return (
    <div>
      <MyChartBox
        icon1={<StoreIcon />}
        title1="Quantities per Branche"
        chart1={<MyPieChart data={myBrancheData} centerlabel={myBrancheData.reduce((sum, data) => sum + data.value, 0)} />}
        icon2={<WcIcon />}
        title2="Quantities per Gender"
        chart2={<MyDonutChart
                  data={myGenderData}
                  centerlabel={totalGenderCount}
            />
        }
        icon3={null}
        title3=""
        chart3={null}
      />
    </div>
  );
};

export default Dashboard1;
