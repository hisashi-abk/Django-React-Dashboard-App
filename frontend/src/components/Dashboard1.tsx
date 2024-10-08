import { useState, useEffect } from "react";
import axiosInstance from "./Axios";
import type { SuperMarketSale } from "../store/types/types";

const Dashboard1 = () => {
  const [salesData, setSalesData] = useState<SuperMarketSale[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchSalesData = async () => {
    try {
      setIsLoading(true);
      const response = await axiosInstance.get<SuperMarketSale[]>("/supermarketsales/");
      setSalesData(response.data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'データ取得に失敗しました');
      console.error('Error fetching sales data', err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchSalesData();
  }, []);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-blue-500"></div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
        <strong className="font-bold">エラー:</strong>
        <span className="block sm:inline">{error}</span>
      </div>
    )
  }


  return (
    <div className="bg-base-100 rounded-lg p-6 shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Dashboard 1</h2>
      <p className="text-base-content">
        This is the Dashboard 1 page
      </p>
    </div>
  )
}

export default Dashboard1;
