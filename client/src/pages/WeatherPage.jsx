"use client"

import { useState } from "react"
import TopBar from "../components/TopBar"
import BottomNav from "../components/BottomNav"
import { Cloud, CloudRain, Sun, Wind, Droplet, Thermometer } from "react-feather"

const WeatherPage = () => {
  const [activeTab, setActiveTab] = useState("forecast")

  // Mock weather data - in a real app, this would come from an API
  const currentWeather = {
    temperature: 28,
    feelsLike: 30,
    condition: "Sunny",
    rainChance: 10,
    windSpeed: 12,
    humidity: 65,
    pressure: 1012,
    visibility: 10,
    uvIndex: 7,
  }

  // Mock forecast data
  const forecast = [
    {
      day: "Today",
      date: "Apr 5",
      high: 28,
      low: 22,
      condition: "Sunny",
      rainChance: 10,
      windSpeed: 12,
      humidity: 65,
    },
    {
      day: "Tomorrow",
      date: "Apr 6",
      high: 27,
      low: 21,
      condition: "Partly Cloudy",
      rainChance: 20,
      windSpeed: 10,
      humidity: 70,
    },
    {
      day: "Wednesday",
      date: "Apr 7",
      high: 25,
      low: 20,
      condition: "Cloudy",
      rainChance: 40,
      windSpeed: 15,
      humidity: 75,
    },
    {
      day: "Thursday",
      date: "Apr 8",
      high: 24,
      low: 19,
      condition: "Rain",
      rainChance: 80,
      windSpeed: 18,
      humidity: 85,
    },
    {
      day: "Friday",
      date: "Apr 9",
      high: 26,
      low: 20,
      condition: "Partly Cloudy",
      rainChance: 30,
      windSpeed: 14,
      humidity: 70,
    },
    {
      day: "Saturday",
      date: "Apr 10",
      high: 29,
      low: 23,
      condition: "Sunny",
      rainChance: 5,
      windSpeed: 8,
      humidity: 60,
    },
    {
      day: "Sunday",
      date: "Apr 11",
      high: 30,
      low: 24,
      condition: "Sunny",
      rainChance: 0,
      windSpeed: 6,
      humidity: 55,
    },
  ]

  // Mock hourly forecast
  const hourlyForecast = [
    { time: "Now", temp: 28, condition: "Sunny", rainChance: 10 },
    { time: "1 PM", temp: 29, condition: "Sunny", rainChance: 10 },
    { time: "2 PM", temp: 29, condition: "Sunny", rainChance: 10 },
    { time: "3 PM", temp: 28, condition: "Sunny", rainChance: 10 },
    { time: "4 PM", temp: 27, condition: "Partly Cloudy", rainChance: 15 },
    { time: "5 PM", temp: 26, condition: "Partly Cloudy", rainChance: 20 },
    { time: "6 PM", temp: 25, condition: "Partly Cloudy", rainChance: 20 },
    { time: "7 PM", temp: 24, condition: "Partly Cloudy", rainChance: 15 },
    { time: "8 PM", temp: 23, condition: "Clear", rainChance: 5 },
  ]

  // Mock rainfall data
  const rainfallData = [
    { month: "Jan", amount: 45 },
    { month: "Feb", amount: 60 },
    { month: "Mar", amount: 75 },
    { month: "Apr", amount: 90 },
    { month: "May", amount: 120 },
    { month: "Jun", amount: 150 },
    { month: "Jul", amount: 180 },
    { month: "Aug", amount: 160 },
    { month: "Sep", amount: 130 },
    { month: "Oct", amount: 100 },
    { month: "Nov", amount: 70 },
    { month: "Dec", amount: 50 },
  ]

  const getWeatherIcon = (condition, size = 24) => {
    switch (condition.toLowerCase()) {
      case "sunny":
      case "clear":
        return <Sun className="text-yellow-500" size={size} />
      case "partly cloudy":
        return <Cloud className="text-gray-400" size={size} />
      case "cloudy":
        return <Cloud className="text-gray-500" size={size} />
      case "rain":
        return <CloudRain className="text-blue-500" size={size} />
      default:
        return <Sun className="text-yellow-500" size={size} />
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-16">
      <TopBar title="Weather" />

      <main className="container mx-auto px-4 py-6">
        {/* Current Weather */}
        <div className="bg-white rounded-xl shadow-md p-5 mb-6">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-2xl font-bold text-gray-800">Your Location</h2>
              <p className="text-gray-500">Updated just now</p>
            </div>
            {getWeatherIcon(currentWeather.condition, 36)}
          </div>

          <div className="mt-4 flex items-end">
            <div className="text-5xl font-bold text-gray-800">{currentWeather.temperature}°</div>
            <div className="ml-2 text-gray-600">Feels like {currentWeather.feelsLike}°</div>
          </div>

          <div className="mt-2 text-lg text-gray-700">{currentWeather.condition}</div>

          <div className="mt-6 grid grid-cols-2 gap-4">
            <div className="flex items-center">
              <CloudRain size={18} className="text-blue-500 mr-2" />
              <div>
                <div className="text-sm text-gray-500">Chance of Rain</div>
                <div className="font-medium">{currentWeather.rainChance}%</div>
              </div>
            </div>

            <div className="flex items-center">
              <Wind size={18} className="text-gray-500 mr-2" />
              <div>
                <div className="text-sm text-gray-500">Wind Speed</div>
                <div className="font-medium">{currentWeather.windSpeed} km/h</div>
              </div>
            </div>

            <div className="flex items-center">
              <Droplet size={18} className="text-blue-500 mr-2" />
              <div>
                <div className="text-sm text-gray-500">Humidity</div>
                <div className="font-medium">{currentWeather.humidity}%</div>
              </div>
            </div>

            <div className="flex items-center">
              <Thermometer size={18} className="text-red-500 mr-2" />
              <div>
                <div className="text-sm text-gray-500">UV Index</div>
                <div className="font-medium">{currentWeather.uvIndex} (High)</div>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden mb-6">
          <div className="flex border-b">
            <button
              onClick={() => setActiveTab("forecast")}
              className={`flex-1 py-3 text-center font-medium ${
                activeTab === "forecast" ? "text-green-600 border-b-2 border-green-600" : "text-gray-500"
              }`}
            >
              7-Day Forecast
            </button>
            <button
              onClick={() => setActiveTab("hourly")}
              className={`flex-1 py-3 text-center font-medium ${
                activeTab === "hourly" ? "text-green-600 border-b-2 border-green-600" : "text-gray-500"
              }`}
            >
              Hourly
            </button>
            <button
              onClick={() => setActiveTab("rainfall")}
              className={`flex-1 py-3 text-center font-medium ${
                activeTab === "rainfall" ? "text-green-600 border-b-2 border-green-600" : "text-gray-500"
              }`}
            >
              Rainfall
            </button>
          </div>

          <div className="p-4">
            {activeTab === "forecast" && (
              <div>
                {forecast.map((day, index) => (
                  <div
                    key={index}
                    className={`flex items-center justify-between py-3 ${
                      index < forecast.length - 1 ? "border-b border-gray-100" : ""
                    }`}
                  >
                    <div className="flex items-center">
                      <div className="w-24">
                        <div className="font-medium">{day.day}</div>
                        <div className="text-xs text-gray-500">{day.date}</div>
                      </div>
                      <div className="mr-4">{getWeatherIcon(day.condition)}</div>
                      <div className="text-sm">
                        <div className="text-gray-500">Rain: {day.rainChance}%</div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="text-right">
                        <span className="font-medium">{day.high}°</span>
                        <span className="text-gray-500 ml-2">{day.low}°</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === "hourly" && (
              <div className="overflow-x-auto">
                <div className="flex space-x-4 min-w-max pb-2">
                  {hourlyForecast.map((hour, index) => (
                    <div key={index} className="flex flex-col items-center w-16">
                      <div className="text-sm font-medium">{hour.time}</div>
                      <div className="my-2">{getWeatherIcon(hour.condition)}</div>
                      <div className="text-lg font-bold">{hour.temp}°</div>
                      <div className="flex items-center mt-1">
                        <CloudRain size={12} className="text-blue-500 mr-1" />
                        <span className="text-xs">{hour.rainChance}%</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "rainfall" && (
              <div>
                <h3 className="font-medium mb-4">Annual Rainfall (mm)</h3>
                <div className="h-40 flex items-end space-x-1">
                  {rainfallData.map((month, index) => (
                    <div key={index} className="flex flex-col items-center flex-1">
                      <div
                        className="w-full bg-blue-500 rounded-t"
                        style={{ height: `${(month.amount / 180) * 100}%` }}
                      ></div>
                      <div className="text-xs mt-1 text-gray-600">{month.month}</div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 text-sm text-gray-600">
                  <p>Total Annual Rainfall: 1,230 mm</p>
                  <p className="mt-1">Current Month: 90 mm (30% above average)</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Weather Advisory */}
        <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-4">
          <h3 className="font-bold text-blue-800 text-sm">Weather Advisory</h3>
          <p className="text-blue-700 mt-1">
            Ideal conditions for planting wheat and barley in the coming week. Consider scheduling irrigation for
            Thursday due to expected rainfall.
          </p>
        </div>
      </main>

      <BottomNav />
    </div>
  )
}

export default WeatherPage

