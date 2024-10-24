import React, { useState, useEffect } from 'react';
import AxiosInstance from './Axios';
import MyPieChart from './charts/PieChart';
import MyDonutChart from './charts/DonutChart';
import StoreIcon from '@mui/icons-material/Store';
import WcIcon from '@mui/icons-material/Wc';
import CategoryIcon from '@mui/icons-material/Category';
import MyStackedBarChart, { ProductBrancheData } from './charts/StackedBarChart';
import { ChartDataPoint, CombiChartSeries, CountryData, ChartItem } from './types/types';
import MyChartBox2 from './charts/ChartBox2';
import PublicIcon from '@mui/icons-material/Public';
import MyLineChart from './charts/LineChart';
import MyCombiChart from './charts/CombiChart';
import DraggableChartBox from './charts/DraggableChartBox';


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

  const totalGenderCount = myGenderData.reduce((sum, data) => sum + data.value, 0);

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

  const myproductbrancheseries: CombiChartSeries[] = [
    {
      dataKey: 'quantityBrancheA' as const,
      label: 'Quantity BrancheA',
      type: 'bar' as const,
    },
    {
      dataKey: 'quantityBrancheB' as const,
      label: 'Quantity BrancheB',
      type: 'line' as const,
    },
    {
      dataKey: 'quantityBrancheC' as const,
      label: 'Quantity BrancheC',
      type: 'line' as const,
    },
  ]

  const [chartItems, setChartItems] = useState<ChartItem[]>([
    {
      id: 'branche-chart',
      icon: <StoreIcon />,
      title: 'Quantities per Branche',
      chart:<MyPieChart
        data={myBrancheData}
        centerlabel={myBrancheData.reduce((sum, data) => sum + data.value, 0)}
      />
    },
    {
      id: 'gender-chart',
      icon: <WcIcon />,
      title: 'Quantities per Gender',
      chart:<MyDonutChart
        data={myGenderData}
        centerlabel={totalGenderCount}
      />
    },
    {
      id: 'product-branche-chart',
      icon: <CategoryIcon />,
      title: 'Quantities per Productline & Branche',
      chart:<MyStackedBarChart
        dataset={myProductBrancheData}
        XlabelName='productline__name'
        series={myseries}
      />
    },
  ]);

  const handleChartOrderChange = (newItems: ChartItem[]) => {
    setChartItems(newItems);
  }

  useEffect(() => {
    getData();
  }, []);

  if (isLoading) {
    return (
      <span className="loading loading-spinner loading-sm"></span>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-full">
        <div className="text-red-500">{error}</div>
      </div>
    );
  }


  return (
    <div>
      <DraggableChartBox
        items={chartItems}
        onOrderChange={handleChartOrderChange}
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
        icon2={<PublicIcon/ >}
        title2={"Quantities per Product Line per Branche"}
        chart2={
          <MyCombiChart
            myData={myProductBrancheData}
            myseries={myproductbrancheseries}
            xcolumn='productline__name'
          />
        }
      />
    </div>
  );
};

export default Dashboard1;
