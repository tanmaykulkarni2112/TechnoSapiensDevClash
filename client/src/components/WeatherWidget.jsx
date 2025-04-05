"use client"

import { useState } from "react"
import { Sun, Cloud, CloudRain, Wind } from "react-feather"

const WeatherWidget = () => {
  const [showForecast, setShowForecast] = useState(false)

  // Mock weather data - in a real app, this would come from an API
  const currentWeather = {
    temperature: 28,
    condition: "Sunny",
    rainChance: 10,
    windSpeed: 12,
    humidity: 65,
  }

  // Mock forecast data
  const forecast = [
    { day: "Mon", temp: 28, condition: "Sunny" },
    { day: "Tue", temp: 27, condition: "Partly Cloudy" },
    { day: "Wed", temp: 25, condition: "Cloudy" },
    { day: "Thu", temp: 24, condition: "Rain" },
    { day: "Fri", temp: 26, condition: "Partly Cloudy" },
    { day: "Sat", temp: 29, condition: "Sunny" },
    { day: "Sun", temp: 30, condition: "Sunny" },
  ]

  const getWeatherIcon = (condition) => {
    switch (condition.toLowerCase()) {
      case "sunny":
        return <Sun className="text-yellow-500" size={24} />
      case "partly cloudy":
        return <Cloud className="text-gray-400" size={24} />
      case "cloudy":
        return <Cloud className="text-gray-500" size={24} />
      case "rain":
        return <CloudRain className="text-blue-500" size={24} />
      default:
        return <Sun className="text-yellow-500" size={24} />
    }
  }

  const toggleForecast = () => {
    setShowForecast(!showForecast)
  }

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      <div className="p-4">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-bold text-gray-800">Today's Weather</h3>
          <span className="text-sm text-gray-500">Your Location</span>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center">
            {getWeatherIcon(currentWeather.condition)}
            <div className="ml-3">
              <div className="text-3xl font-bold text-gray-800">{currentWeather.temperature}°C</div>
              <div className="text-gray-600">{currentWeather.condition}</div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-x-6 gap-y-2">
            <div className="flex items-center">
              <CloudRain size={16} className="text-blue-500 mr-2" />
              <span className="text-sm text-gray-600">{currentWeather.rainChance}%</span>
            </div>
            <div className="flex items-center">
              <Wind size={16} className="text-gray-500 mr-2" />
              <span className="text-sm text-gray-600">{currentWeather.windSpeed} km/h</span>
            </div>
          </div>
        </div>

        <button
          onClick={toggleForecast}
          className="mt-4 w-full py-2 bg-green-50 text-green-700 rounded-lg font-medium text-sm hover:bg-green-100 transition-colors duration-200"
        >
          {showForecast ? "Hide" : "View"} 7-Day Forecast
        </button>
      </div>

      {showForecast && (
        <div className="bg-green-50 p-4 overflow-x-auto">
          <div className="flex space-x-4 min-w-max">
            {forecast.map((day) => (
              <div key={day.day} className="flex flex-col items-center">
                <span className="text-sm font-medium text-gray-700">{day.day}</span>
                <div className="my-2">{getWeatherIcon(day.condition)}</div>
                <span className="text-sm font-bold text-gray-800">{day.temp}°</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default WeatherWidget

