import React from "react";
import { motion } from "framer-motion";
import { apiData } from "../../data/apiData";

const SimulationTab = () => {
  return (
    <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {Object.entries(apiData.simulationScenarios).map(([scenario, data]) => (
        <div key={scenario} className="p-4 bg-white rounded-lg border shadow-sm">
          <h3 className="font-semibold capitalize mb-2">{scenario} Case</h3>
          <p>Demand: {data.demand}</p>
          <p>Inventory: {data.inventory}</p>
          <p>Service Level: {data.serviceLevel}</p>
        </div>
      ))}
    </motion.div>
  );
};

export default SimulationTab;