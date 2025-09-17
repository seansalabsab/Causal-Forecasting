import React from 'react';
// Import your actual data source
import { apiData } from "../../data/apiData";
// Import components from recharts
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area,
  ScatterChart,
  Scatter,
} from 'recharts';

// --- Placeholder Data for Charts 2 & 3 ---
// Your apiData doesn't include data for these visuals.
// Replace this with your actual data for seasonal and promotional impact.
const seasonalAndPromoData = [
  { month: 'Jan', seasonalFactor: 1.2, promotionImpact: 0.1, actualDemand: 150 },
  { month: 'Feb', seasonalFactor: 1.1, promotionImpact: 0.05, actualDemand: 140 },
  { month: 'Mar', seasonalFactor: 1.3, promotionImpact: 0.2, actualDemand: 180 },
  { month: 'Apr', seasonalFactor: 1.5, promotionImpact: 0.15, actualDemand: 200 },
  { month: 'May', seasonalFactor: 1.6, promotionImpact: 0.3, actualDemand: 240 },
];

const CausalAnalysisTab = () => (
  <div className="space-y-6">
    {/* Causal Factors Impact - Connected to your apiData */}
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
      <h2 className="text-lg font-semibold text-gray-800 mb-6">Causal Factors Impact Analysis</h2>
      <ResponsiveContainer width="100%" height={300}>
        {/* This chart now uses apiData.causalFactorsData */}
        <BarChart data={apiData.causalFactorsData} layout="horizontal" margin={{ left: 30 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" domain={[0, 1]} tickFormatter={(tick) => `${tick * 100}%`} />
          <YAxis dataKey="factor" type="category" width={120} />
          <Tooltip formatter={(value) => [`${(value * 100).toFixed(1)}%`, 'Correlation']} />
          {/* The dataKey is changed from "impact" to "correlation" to match your data structure */}
          <Bar dataKey="correlation" fill="#3b82f6" barSize={30} />
        </BarChart>
      </ResponsiveContainer>
    </div>

    {/* Seasonal Patterns & Promotion Effectiveness - Using Placeholder Data */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Seasonal Impact */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <h2 className="text-lg font-semibold text-gray-800 mb-6">Seasonal Impact by Month</h2>
        <ResponsiveContainer width="100%" height={250}>
          <AreaChart data={seasonalAndPromoData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip formatter={(value) => [value.toFixed(2), 'Seasonal Factor']} />
            <Area
              type="monotone"
              dataKey="seasonalFactor"
              stroke="#f59e0b"
              fill="#fef3c7"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* Promotion Effectiveness */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <h2 className="text-lg font-semibold text-gray-800 mb-6">Promotion Effectiveness</h2>
        <ResponsiveContainer width="100%" height={250}>
          <ScatterChart data={seasonalAndPromoData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis type="number" dataKey="promotionImpact" name="Promotion Impact" />
            <YAxis type="number" dataKey="actualDemand" name="Actual Demand" />
            <Tooltip cursor={{ strokeDasharray: '3 3' }} />
            <Scatter dataKey="actualDemand" fill="#10b981" />
          </ScatterChart>
        </ResponsiveContainer>
      </div>
    </div>
  </div>
);

export default CausalAnalysisTab;