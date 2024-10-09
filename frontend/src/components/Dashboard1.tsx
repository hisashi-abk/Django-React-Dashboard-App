import React, { useState, useEffect } from 'react';
import AxiosInstance from './Axios';
import MyPieChart from './charts/PieChart';
import MyChartBox from './charts/ChartBox';
import StoreIcon from '@mui/icons-material/Store';

// APIから取得するデータの型定義
interface BranchData {
  id: number | string;
  value: number;
  label: string;
  percentage: number;
}

// PieChartData型に変換するための関数
const convertToPieChartData = (data: BranchData[]) => {
  // カラーパレットの定義（必要に応じて色を追加）
  const colors = [
    '#FF6384',
    '#36A2EB',
    '#FFCE56',
    '#4BC0C0',
    '#9966FF',
    '#FF9F40',
    '#7BC043',
    '#EC663C'
  ];

  return data.map((item, index) => ({
    ...item,
    color: colors[index % colors.length] // 循環的に色を割り当て
  }));
};

const Dashboard = (): React.JSX.Element => {
  // 状態の型を明示的に定義
  const [myBranchData, setMyBranchData] = useState<BranchData[]>([]);

  const getData = async (): Promise<void> => {
    try {
      const response = await AxiosInstance.get<BranchData[]>('branchedata/');
      setMyBranchData(response.data);
    } catch (error) {
      console.error('Error fetching branch data:', error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  // データを変換してPieChartに渡す
  const pieChartData = convertToPieChartData(myBranchData);

  return (
    <div className="p-4">
      <MyChartBox
        icon1={<StoreIcon className="text-blue-600 text-2xl" />}
        title1="Quantities"
        chart1={<MyPieChart myData={pieChartData} />}
        icon2={<div />}
        title2=""
        chart2={<div />}
        icon3={<div />}
        title3=""
        chart3={<div />}
      />
    </div>
  );
};

export default Dashboard;
