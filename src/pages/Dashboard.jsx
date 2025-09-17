import React, { useState } from "react";
import { Activity, Target, Zap } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import OverviewTab from "../components/dashboard/OverviewTab";
import CausalAnalysisTab from "../components/dashboard/CausalAnalysisTab";
import SimulationTab from "../components/dashboard/SimulationTab";
import Header from "../components/dashboard/Header";

// --- Animation Variants ---
const tabContentVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
};

// --- Tab Button Component ---
const TabButton = ({ id, label, icon: Icon, active, onClick }) => (
  <button
    onClick={() => onClick(id)}
    className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${
      active
        ? "bg-blue-600 text-white shadow-lg"
        : "bg-white text-gray-600 hover:bg-gray-50 border border-gray-200"
    }`}
  >
    <Icon size={18} />
    <span className="font-medium">{label}</span>
  </button>
);

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Header */}
      <Header />

      {/* Navigation Tabs (now separate bar) */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-3 flex space-x-4">
          <TabButton
            id="overview"
            label="Overview"
            icon={Activity}
            active={activeTab === "overview"}
            onClick={setActiveTab}
          />
          <TabButton
            id="causal"
            label="Causal Analysis"
            icon={Target}
            active={activeTab === "causal"}
            onClick={setActiveTab}
          />
          <TabButton
            id="simulation"
            label="Simulation"
            icon={Zap}
            active={activeTab === "simulation"}
            onClick={setActiveTab}
          />
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            variants={tabContentVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {activeTab === "overview" && <OverviewTab />}
            {activeTab === "causal" && <CausalAnalysisTab />}
            {activeTab === "simulation" && <SimulationTab />}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
};

export default Dashboard;
