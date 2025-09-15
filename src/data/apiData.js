export const apiData = {
  demandForecastData: [
    { month: "Jan", actual: 4000, predicted: 4200, causal: 4150 },
    { month: "Feb", actual: 3000, predicted: 3200, causal: 3100 },
    { month: "Mar", actual: 5000, predicted: 4900, causal: 4800 },
    { month: "Apr", actual: 4780, predicted: 4700, causal: 4650 },
    { month: "May", actual: 5890, predicted: 6000, causal: 5900 },
    { month: "Jun", actual: 4390, predicted: 4500, causal: 4450 },
    { month: "Jul", actual: 4490, predicted: 4600, causal: 4550 },
  ],
  inventoryData: [
    { name: "Raw Materials", value: 1200 },
    { name: "Work In Progress", value: 800 },
    { name: "Finished Goods", value: 600 },
  ],
  causalFactorsData: [
    { factor: "Temperature", correlation: 0.85 },
    { factor: "Holiday Season", correlation: 0.72 },
    { factor: "Promotions", correlation: 0.65 },
    { factor: "Weekends", correlation: 0.58 },
  ],
  simulationScenarios: {
    bestCase: { demand: 6000, inventory: 1500, serviceLevel: "98%" },
    baseCase: { demand: 5000, inventory: 1200, serviceLevel: "95%" },
    worstCase: { demand: 4000, inventory: 900, serviceLevel: "90%" },
  },
  kpiData: [
    { name: "Forecast Accuracy", value: "92%", unit: "" },
    { name: "Inventory Turnover", value: 5.2, unit: "x" },
    { name: "Service Level", value: "95%", unit: "" },
    { name: "Stockout Rate", value: "2%", unit: "" },
  ],
};