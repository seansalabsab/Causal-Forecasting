import React from "react";
import { motion } from "framer-motion";
import { apiData } from "../../data/apiData";

const CausalAnalysisTab = () => {
  return (
    <motion.div className="space-y-4">
      {apiData.causalFactorsData.map((factor) => (
        <div key={factor.factor} className="p-4 bg-white rounded-lg border shadow-sm">
          <div className="flex justify-between">
            <span>{factor.factor}</span>
            <span className="font-semibold">{(factor.correlation * 100).toFixed(0)}%</span>
          </div>
          <div className="w-full bg-gray-200 h-2 rounded mt-2">
            <div
              className="bg-blue-500 h-2 rounded"
              style={{ width: `${factor.correlation * 100}%` }}
            ></div>
          </div>
        </div>
      ))}
    </motion.div>
  );
};

export default CausalAnalysisTab;