import React from "react";

export interface SuperMarketSale {
  id: number;
  unit_price: number;
  quantity: number;
  date: string;
  country: string;
  gender: string;
  customertype: string;
  branche: string;
  productline: string;
  payment: number;
}

export interface ChartDataPoint {
  id?: number;
  value: number;
  label: string;
  percentage?: number;
  color?: string;
}

export type ChartDataType = 'number' | 'string' | 'date';

export interface SeriesConfig {
  dateKey: string;
  label?: string;
  color?: string;
  type: 'bar' | 'line';
  valueFormatter?: (value: number) => string;
}

export interface ChartBoxProps {
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

export interface NavbarProps {
  content: React.ReactNode;
}

export interface CountryData {
  month_name: string;
  quantityNetherlands: number;
  quantityGermany: number;
  quantityFrance: number;
  [key: string]: string | number;
}
