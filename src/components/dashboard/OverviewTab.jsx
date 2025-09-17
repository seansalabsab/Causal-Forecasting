import React from 'react';
// Import your actual data source
import { apiData } from "../../data/apiData";
// Import components from recharts
import {
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
// An icon library, you may need to install it: npm install lucide-react
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';

// --- Placeholder Data for New UI Elements ---
// The new visuals require more data than your original apiData provides.
// You should adapt your apiData to include these fields.

// 1. KPI data now needs a "target" to calculate the trend.
const kpiData = [
  { name: 'Forecast Accuracy', value: 92.5, unit: '%', target: 90 },
  { name: 'Inventory Turnover', value: 6.8, unit: '', target: 7 },
  { name: 'On-Time Delivery', value: 98.2, unit: '%', target: 98 },
  { name: 'Stockout Rate', value: 1.5, unit: '%', target: 2 }, // Lower is better
];

// 2. This is entirely new data for the Inventory Status section.
const inventoryData = [
  { product: 'Product A', current: 1200, optimal: 1000, status: 'high' },
  { product: 'Product B', current: 450, optimal: 500, status: 'low' },
  { product: 'Product C', current: 800, optimal: 800, status: 'good' },
  { product: 'Product D', current: 50, optimal: 200, status: 'critical' },
];

// --- Reusable KPICard Component ---
const KPICard = ({ title, value, target, unit, trend }) => {
  const isPositive = trend === 'up';
  // Special case for rates where lower is better (e.g., Stockout Rate)
  const isGood = title.toLowerCase().includes('rate') ? value <= target : value >= target;

  return (
    <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex flex-col justify-between">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-sm font-medium text-gray-500">{title}</h3>
        <div className={`flex items-center text-xs font-bold ${isGood ? 'text-green-500' : 'text-red-500'}`}>
          {isGood ? <ArrowUpRight size={16} /> : <ArrowDownRight size={16} />}
        </div>
      </div>
      <p className="text-2xl font-semibold text-gray-800">
        {value}{unit}
      </p>
      <p className="text-xs text-gray-400">Target: {target}{unit}</p>
    </div>
  );
};


// --- Refactored OverviewTab Component ---
const OverviewTab = () => (
  <div className="space-y-6">
    {/* KPI Cards */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {kpiData.map((kpi, index) => (
        <KPICard
          key={index}
          title={kpi.name}
          value={kpi.value}
          target={kpi.target}
          unit={kpi.unit}
          // Determine trend based on whether the value meets the target
          trend={kpi.name.toLowerCase().includes('rate')
            ? (kpi.value <= kpi.target ? 'up' : 'down')
            : (kpi.value >= kpi.target ? 'up' : 'down')
          }
        />
      ))}
    </div>

    {/* Demand Forecast Chart */}
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
      <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-6 gap-4">
        <h2 className="text-lg font-semibold text-gray-800">Demand Forecasting Comparison</h2>
        {/* Custom Legend */}
        <div className="flex flex-wrap space-x-4">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
            <span className="text-sm text-gray-600">Actual</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
            <span className="text-sm text-gray-600">Traditional</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <span className="text-sm text-gray-600">Causal</span>
          </div>
        </div>
      </div>
      <ResponsiveContainer width="100%" height={300}>
        {/* This chart uses your apiData.demandForecastData */}
        <LineChart data={apiData.demandForecastData}>
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
          <XAxis dataKey="month" stroke="#666" />
          <YAxis stroke="#666" />
          <Tooltip />
          <Line type="monotone" dataKey="actual" name="Actual" stroke="#9ca3af" strokeWidth={2} dot={false} />
          <Line type="monotone" dataKey="predicted" name="Traditional" stroke="#3b82f6" strokeWidth={2} dot={false} />
          <Line type="monotone" dataKey="causal" name="Causal" stroke="#10b981" strokeWidth={2} dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </div>

    {/* Inventory Status */}
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
      <h2 className="text-lg font-semibold text-gray-800 mb-6">Current Inventory Status</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {inventoryData.map((item, index) => (
          <div key={index} className="p-4 border border-gray-200 rounded-lg">
            <h3 className="font-medium text-gray-800 mb-2">{item.product}</h3>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Current:</span>
                <span className="font-medium">{item.current.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Optimal:</span>
                <span>{item.optimal.toLocaleString()}</span>
              </div>
              <div className={`mt-2 text-xs font-bold px-2 py-1 rounded-full text-center ${
                  item.status === 'good' ? 'bg-green-100 text-green-800' :
                  item.status === 'low' ? 'bg-yellow-100 text-yellow-800' :
                  item.status === 'high' ? 'bg-blue-100 text-blue-800' :
                  'bg-red-100 text-red-800'
                }`}>
                {item.status.toUpperCase()}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default OverviewTab;