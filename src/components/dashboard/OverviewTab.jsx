import React from "react";
import { ResponsiveContainer, LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from "recharts";
import { motion } from "framer-motion";
import { apiData } from "../../data/apiData";

const OverviewTab = () => {
  return (
    <motion.div className="space-y-6">
      {/* KPI cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {apiData.kpiData.map((kpi) => (
          <div key={kpi.name} className="bg-white p-6 rounded-xl shadow-sm border">
            <h3 className="text-sm text-gray-500">{kpi.name}</h3>
            <p className="text-xl font-bold">
              {kpi.value}
              {kpi.unit}
            </p>
          </div>
        ))}
      </div>

      {/* Demand Forecast Chart */}
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={apiData.demandForecastData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="actual" stroke="#9ca3af" />
          <Line type="monotone" dataKey="predicted" stroke="#3b82f6" />
          <Line type="monotone" dataKey="causal" stroke="#10b981" />
        </LineChart>
      </ResponsiveContainer>
    </motion.div>
  );
};

export default OverviewTab;