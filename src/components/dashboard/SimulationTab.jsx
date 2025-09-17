import React, { useState } from 'react';
// Import your actual data source
import { apiData } from "../../data/apiData";
// Import components from recharts for the graph
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';
// An icon for the button, you might need to install 'lucide-react'
// npm install lucide-react
import { Play } from 'lucide-react';

// --- Enhanced Scenario Data Structure ---
// The new visuals require more detail than your original apiData.
// This structure is needed for the comparison chart and risk assessment.
// You should adapt your apiData to fit this structure.
const simulationScenarios = {
  baseline: { name: 'Baseline', demand: 100, cost: 100, efficiency: 85 },
  promotion: { name: 'High Promotion', demand: 130, cost: 115, efficiency: 82 },
  seasonal: { name: 'Seasonal Peak', demand: 150, cost: 105, efficiency: 78 },
  disruption: { name: 'Supply Disruption', demand: 70, cost: 140, efficiency: 60 },
};


const SimulationTab = () => {
  const [selectedScenario, setSelectedScenario] = useState('baseline');
  const [simulationRunning, setSimulationRunning] = useState(false);

  // A function to mimic running a simulation
  const runSimulation = () => {
    setSimulationRunning(true);
    setTimeout(() => {
      setSimulationRunning(false);
    }, 2000); // Simulate a 2-second process
  };

  return (
    <div className="space-y-6">
      {/* Main Simulation Panel */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        {/* Header with Title and Run Button */}
        <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-6 gap-4">
          <h2 className="text-lg font-semibold text-gray-800">Scenario Simulation</h2>
          <button
            onClick={runSimulation}
            disabled={simulationRunning}
            className={`flex items-center justify-center space-x-2 px-4 py-2 rounded-lg font-medium transition-colors ${
              simulationRunning
                ? 'bg-gray-400 text-white cursor-not-allowed'
                : 'bg-green-600 text-white hover:bg-green-700'
            }`}
          >
            <Play size={18} />
            <span>{simulationRunning ? 'Running...' : 'Run Simulation'}</span>
          </button>
        </div>

        {/* Scenario Selection Buttons */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {Object.entries(simulationScenarios).map(([key, scenario]) => (
            <button
              key={key}
              onClick={() => setSelectedScenario(key)}
              className={`p-4 rounded-lg border-2 text-left transition-all ${
                selectedScenario === key
                  ? 'border-blue-500 bg-blue-50 shadow-md'
                  : 'border-gray-200 bg-white hover:border-gray-300'
              }`}
            >
              <h3 className="font-medium text-gray-800 mb-2">{scenario.name}</h3>
              <div className="space-y-1 text-sm text-gray-600">
                <div>Demand: {scenario.demand}%</div>
                <div>Cost: {scenario.cost}%</div>
                <div>Efficiency: {scenario.efficiency}%</div>
              </div>
            </button>
          ))}
        </div>

        {/* Loading Indicator */}
        {simulationRunning && (
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
            <div className="flex items-center space-x-3">
              <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600"></div>
              <span className="text-blue-800 font-medium">
                Simulating {simulationScenarios[selectedScenario].name} scenario...
              </span>
            </div>
          </div>
        )}

        {/* Simulation Results */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-4 border-t">
          <div>
            <h3 className="font-medium text-gray-800 mb-4">Impact Comparison</h3>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={[
                  { metric: 'Demand', Baseline: 100, Scenario: simulationScenarios[selectedScenario].demand },
                  { metric: 'Cost', Baseline: 100, Scenario: simulationScenarios[selectedScenario].cost },
                  { metric: 'Efficiency', Baseline: 85, Scenario: simulationScenarios[selectedScenario].efficiency }
                ]}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="metric" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="Baseline" fill="#9ca3af" />
                <Bar dataKey="Scenario" fill="#3b82f6" />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div>
            <h3 className="font-medium text-gray-800 mb-4">Risk Assessment</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                <span className="text-sm text-gray-600">Stockout Risk</span>
                <span className={`px-2 py-1 rounded text-xs font-medium ${
                    selectedScenario === 'disruption' ? 'bg-red-100 text-red-800' :
                    selectedScenario === 'promotion' || selectedScenario === 'seasonal' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-green-100 text-green-800'
                  }`}>
                  { selectedScenario === 'disruption' ? 'High' :
                    selectedScenario === 'promotion' || selectedScenario === 'seasonal' ? 'Medium' : 'Low'}
                </span>
              </div>
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                <span className="text-sm text-gray-600">Cost Variance</span>
                 <span className={`px-2 py-1 rounded text-xs font-medium ${
                    simulationScenarios[selectedScenario].cost >= 140 ? 'bg-red-100 text-red-800' :
                    simulationScenarios[selectedScenario].cost > 100 ? 'bg-yellow-100 text-yellow-800' :
                    'bg-green-100 text-green-800'
                  }`}>
                   {simulationScenarios[selectedScenario].cost >= 140 ? 'High' :
                    simulationScenarios[selectedScenario].cost > 100 ? 'Medium' : 'Low'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SimulationTab;