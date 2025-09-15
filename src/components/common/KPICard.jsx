import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp } from 'lucide-react';
import { itemVariants } from '../../animations/motionVariants';

const KPICard = ({ title, value, target, unit, trend }) => (
  <motion.div variants={itemVariants} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-lg hover:scale-105">
    <div className="flex justify-between items-start mb-4">
      <h3 className="text-sm font-medium text-gray-600">{title}</h3>
      <div className={`p-2 rounded-lg ${trend === 'up' ? 'bg-green-100' : trend === 'down' ? 'bg-red-100' : 'bg-yellow-100'}`}>
        <TrendingUp className={`w-4 h-4 ${trend === 'up' ? 'text-green-600' : trend === 'down' ? 'text-red-600 rotate-180' : 'text-yellow-600'}`} />
      </div>
    </div>
    <div className="space-y-2">
      <div className="flex items-baseline space-x-2">
        <span className="text-2xl font-bold text-gray-900">{value}</span>
        <span className="text-sm text-gray-500">{unit}</span>
      </div>
      <div className="flex items-center space-x-2">
        <span className="text-xs text-gray-500">Target: {target}{unit}</span>
        <div className={`w-2 h-2 rounded-full ${value >= target ? 'bg-green-500' : 'bg-red-500'}`}></div>
      </div>
    </div>
  </motion.div>
);

export default KPICard;
