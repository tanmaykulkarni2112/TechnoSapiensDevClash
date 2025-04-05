import { BarChart2, Droplet, TrendingUp } from "react-feather"

const AnalyticsDashboard = () => {
  // Mock data - in a real app, this would come from an API
  const analyticsData = {
    groundwater: {
      current: 65,
      previous: 72,
      status: "decreasing",
    },
    cropHealth: {
      status: "healthy",
      riskAreas: 1,
      totalAreas: 5,
    },
    marketPrices: {
      trend: "up",
      percentage: 5.2,
      crop: "Wheat",
    },
  }

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
      {/* Groundwater Prediction */}
      <div className="bg-white rounded-xl shadow-md p-4">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-medium text-gray-800">Groundwater</h3>
          <Droplet size={18} className="text-blue-500" />
        </div>

        <div className="flex items-end space-x-1 mb-2">
          <div className="text-2xl font-bold text-gray-800">{analyticsData.groundwater.current}%</div>
          <div
            className={`text-sm ${
              analyticsData.groundwater.status === "decreasing" ? "text-red-500" : "text-green-500"
            }`}
          >
            {analyticsData.groundwater.status === "decreasing" ? "↓" : "↑"}
            {Math.abs(analyticsData.groundwater.current - analyticsData.groundwater.previous)}%
          </div>
        </div>

        <div className="h-4 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-blue-500 rounded-full"
            style={{ width: `${analyticsData.groundwater.current}%` }}
          ></div>
        </div>

        <p className="mt-2 text-xs text-gray-500">Groundwater level compared to last month</p>
      </div>

      {/* Crop Health Status */}
      <div className="bg-white rounded-xl shadow-md p-4">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-medium text-gray-800">Crop Health</h3>
          <BarChart2 size={18} className="text-green-500" />
        </div>

        <div className="flex items-center mb-3">
          <div
            className={`w-3 h-3 rounded-full mr-2 ${
              analyticsData.cropHealth.status === "healthy" ? "bg-green-500" : "bg-red-500"
            }`}
          ></div>
          <div className="text-lg font-bold text-gray-800 capitalize">{analyticsData.cropHealth.status}</div>
        </div>

        <div className="flex items-center justify-between text-sm">
          <div>
            <span className="font-medium">{analyticsData.cropHealth.riskAreas}</span> areas at risk
          </div>
          <div>
            <span className="font-medium">{analyticsData.cropHealth.totalAreas}</span> total areas
          </div>
        </div>

        <p className="mt-2 text-xs text-gray-500">Based on recent satellite imagery analysis</p>
      </div>

      {/* Market Price Trends */}
      <div className="bg-white rounded-xl shadow-md p-4">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-medium text-gray-800">Market Prices</h3>
          <TrendingUp size={18} className="text-green-500" />
        </div>

        <div className="flex items-end space-x-1 mb-2">
          <div className="text-lg font-bold text-gray-800">{analyticsData.marketPrices.crop}</div>
          <div className={`text-sm ${analyticsData.marketPrices.trend === "up" ? "text-green-500" : "text-red-500"}`}>
            {analyticsData.marketPrices.trend === "up" ? "↑" : "↓"}
            {analyticsData.marketPrices.percentage}%
          </div>
        </div>

        {/* Simple line chart visualization */}
        <div className="h-10 flex items-end space-x-1">
          {[35, 42, 38, 45, 40, 48, 52].map((value, index) => (
            <div key={index} className="flex-1 bg-green-500 rounded-t" style={{ height: `${value}%` }}></div>
          ))}
        </div>

        <p className="mt-2 text-xs text-gray-500">Market price trends over the past week</p>
      </div>
    </div>
  )
}

export default AnalyticsDashboard

