import React, { useState, useEffect, useCallback, useMemo } from 'react';
import AxiosInstance from './Axios';
import MyPieChart from './charts/PieChart';
import MyDonutChart from './charts/DonutChart';
import MyStackedBarChart, { ProductBrancheData } from './charts/StackedBarChart';
import MyLineChart from './charts/LineChart';
import MyCombiChart from './charts/CombiChart';
import DraggableChartBox from './charts/DraggableChartBox';
import { ChartDataPoint, CombiChartSeries, CountryData, ChartItem } from './types/types';

// Icons
import StoreIcon from '@mui/icons-material/Store';
import WcIcon from '@mui/icons-material/Wc';
import CategoryIcon from '@mui/icons-material/Category';
import PublicIcon from '@mui/icons-material/Public';
import TimelineIcon from '@mui/icons-material/Timeline';

const Dashboard1: React.FC = () => {
  const [myBrancheData, setMyBrancheData] = useState<ChartDataPoint[]>([]);
  const [myGenderData, setMyGenderData] = useState<ChartDataPoint[]>([]);
  const [myProductBrancheData, setMyProductBrancheData] = useState<ProductBrancheData[]>([]);
  const [myCountryData, setMyCountryData] = useState<CountryData[]>([]);
  const [chartItems, setChartItems] = useState<ChartItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const stackedBarSeries = useMemo(() => [
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
  ], []); // 依存配列が空なので、一度だけ作成される

  const countrySeries = useMemo(() => [
    { dataKey: 'quantityNetherlands', label: 'Netherlands' },
    { dataKey: 'quantityGermany', label: 'Germany' },
    { dataKey: 'quantityFrance', label: 'France' },
  ], []); // 依存配列が空なので、一度だけ作成される

  const combiChartSeries = useMemo(() => [
    {
      dataKey: 'quantityBrancheA',
      label: 'Quantity BrancheA',
      type: 'bar',
    },
    {
      dataKey: 'quantityBrancheB',
      label: 'Quantity BrancheB',
      type: 'line',
    },
    {
      dataKey: 'quantityBrancheC',
      label: 'Quantity BrancheC',
      type: 'line',
    },
  ] as CombiChartSeries[], []); // 依存配列が空なので、一度だけ作成される

  const updateChartItems = useCallback(() => {
    const newChartItems: ChartItem[] = [
      {
        id: 'branche-chart',
        icon: <StoreIcon />,
        title: 'Quantities per Branche',
        chart: myBrancheData.length > 0 ? (
          <MyPieChart
            data={myBrancheData}
            centerlabel={myBrancheData.reduce((sum, data) => sum + data.value, 0)}
          />
        ) : null,
      },
      {
        id: 'gender-chart',
        icon: <WcIcon />,
        title: 'Quantities per Gender',
        chart: myGenderData.length > 0 ? (
          <MyDonutChart
            data={myGenderData}
            centerlabel={myGenderData.reduce((sum, data) => sum + data.value, 0)}
          />
        ) : null,
      },
      {
        id: 'product-branche-chart',
        icon: <CategoryIcon />,
        title: 'Quantities per Productline & Branche',
        chart: myProductBrancheData.length > 0 ? (
          <MyStackedBarChart
            dataset={myProductBrancheData}
            XlabelName='productline__name'
            series={stackedBarSeries}
          />
        ) : null,
      },
      {
        id: 'country-chart',
        icon: <PublicIcon />,
        title: 'Quantities per Month per Country',
        chart: myCountryData.length > 0 ? (
          <MyLineChart
            mydata={myCountryData}
            myxaxis='month_name'
            myseries={countrySeries}
          />
        ) : null,
      },
      {
        id: 'combi-chart',
        icon: <TimelineIcon />,
        title: 'Quantities per Product Line per Branche',
        chart: myProductBrancheData.length > 0 ? (
          <MyCombiChart
            myData={myProductBrancheData}
            myseries={combiChartSeries}
            xcolumn='productline__name'
          />
        ) : null,
      },
    ];

    setChartItems(newChartItems);
  }, [myBrancheData, myGenderData, myProductBrancheData, myCountryData, stackedBarSeries, countrySeries, combiChartSeries]);

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    if (!isLoading && !error) {
      updateChartItems();
    }
  }, [isLoading, error, updateChartItems]);

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

  const handleChartOrderChange = (newItems: ChartItem[]) => {
    setChartItems(newItems);
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-full">
        <span className="loading loading-spinner loading-lg"></span>
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

  return (
    <DraggableChartBox
      items={chartItems}
      onOrderChange={handleChartOrderChange}
    />
  );
};

export default Dashboard1;
