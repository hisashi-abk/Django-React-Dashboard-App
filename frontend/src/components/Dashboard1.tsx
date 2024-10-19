import React, { useState, useEffect } from 'react';
import AxiosInstance from './Axios';
import MyChartBox from './charts/ChartBox';
import MyPieChart from './charts/PieChart';
import MyDonutChart from './charts/DonutChart';
import StoreIcon from '@mui/icons-material/Store';
import WcIcon from '@mui/icons-material/Wc';
import CategoryIcon from '@mui/icons-material/Category';
import MyStackedBarChart, { ProductBrancheData } from './charts/StackedBarChart';
import { ChartDataPoint, CountryData } from '../store/types/types';
import MyChartBox2 from './charts/ChartBox2';
import PublicIcon from '@mui/icons-material/Public';
import MyLineChart from './charts/LineChart';


const Dashboard1: React.FC = () => {
  const [myBrancheData, setMyBrancheData] = useState<ChartDataPoint[]>([]);
  const [myGenderData, setMyGenderData] = useState<ChartDataPoint[]>([]);
  const [myProductBrancheData, setMyProductBrancheData] = useState<ProductBrancheData[]>([]);
  const [myCountryData, setMyCountryData] = useState<CountryData[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const getData = async (): Promise<void> => {
    try {
      setIsLoading(true);
      setError(null);

      const [brancheResponse, genderResponse, productbrancheResponse, countryResponse] = await Promise.all([
        AxiosInstance.get<ChartDataPoint[]>('branchedata/'),
        AxiosInstance.get<ChartDataPoint[]>('genderdata/'),
        AxiosInstance.get<ProductBrancheData[]>('productbranchedata/'),
        AxiosInstance.get<CountryData[]>('countrydata/'),
      ]);

      setMyBrancheData(brancheResponse.data);
      setMyGenderData(genderResponse.data);
      setMyProductBrancheData(productbrancheResponse.data);
      setMyCountryData(countryResponse.data);
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

  const myseries = [
      {
        dataKey: 'quantityBrancheA' as const,
        label: 'BrancheA',
        valueFormatter: (value: number | null) => value?.toString() ?? '',
      },
      {
        dataKey: 'quantityBrancheB' as const,
        label: 'BrancheB',
        valueFormatter: (value: number | null) => value?.toString() ?? '',
      },
      {
        dataKey: 'quantityBrancheC' as const,
        label: 'BrancheC',
        valueFormatter: (value: number | null) => value?.toString() ?? '',
      },
    ]

  const mycountryseries = [
    { dataKey: 'quantityNetherlands', label: 'Netherlands', type: 'line' as const },
    { dataKey: 'quantityGermany', label: 'Germany', type: 'line' as const },
    { dataKey: 'quantityFrance', label: 'France', type: 'line' as const },
  ]

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
        icon3={<CategoryIcon />}
        title3="Quantities per Productline & Branche"
        chart3={<MyStackedBarChart
                    dataset={myProductBrancheData}
                    XlabelName='productline__name'
                    series={myseries}
                  />}
      />
      <MyChartBox2
        icon1={<PublicIcon />}
        title1="Quantities per Month per Country"
        chart1={<MyLineChart
                    mydata={myCountryData}
                    myxaxis='month_name'
                    myseries={mycountryseries.map(series => ({
                      ...series,
                      type: 'line' as const,
                    }))}
                  />
                }
        icon2={null}
        title2={""}
        chart2={null}
      />
    </div>
  );
};

export default Dashboard1;
