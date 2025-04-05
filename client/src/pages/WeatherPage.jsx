"use client"

import { useState, useEffect } from "react"
import TopBar from "../components/TopBar"
import BottomNav from "../components/BottomNav"
import { Cloud, CloudRain, Sun, Wind, Droplet, Thermometer } from "react-feather"
import { weatherService } from "../services/weatherService"

const WeatherPage = () => {
  const [activeTab, setActiveTab] = useState("forecast")
  const [currentWeather, setCurrentWeather] = useState(null)
  const [forecast, setForecast] = useState([])
  const [hourlyForecast, setHourlyForecast] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        navigator.geolocation.getCurrentPosition(async (position) => {
          const { latitude, longitude } = position.coords;
          const apiKey = import.meta.env.VITE_OPENWEATHER_API_KEY;

          // Fetch current weather
          const weatherData = await weatherService.getCurrentWeather(latitude, longitude, apiKey);
          setCurrentWeather({
            temperature: Math.round(weatherData.main.temp),
            feelsLike: Math.round(weatherData.main.feels_like),
            condition: weatherService.mapCondition(weatherData.weather[0]),
            rainChance: Math.round(weatherData.clouds.all),
            windSpeed: Math.round(weatherData.wind.speed * 3.6),
            humidity: weatherData.main.humidity,
            pressure: weatherData.main.pressure,
            visibility: Math.round(weatherData.visibility / 1000),
            uvIndex: 0 // OpenWeather doesn't provide UV index in basic API
          });

          // Fetch forecast
          const forecastData = await weatherService.getForecast(latitude, longitude, apiKey);
          
          // Process daily forecast
          const dailyForecasts = forecastData.list
            .filter((item, index) => index % 8 === 0) // Get one reading per day
            .slice(0, 7) // Get 7 days
            .map(item => ({
              day: new Date(item.dt * 1000).toLocaleDateString('en-US', { weekday: 'long' }),
              date: new Date(item.dt * 1000).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
              high: Math.round(item.main.temp_max),
              low: Math.round(item.main.temp_min),
              condition: weatherService.mapCondition(item.weather[0]),
              rainChance: Math.round(item.clouds.all),
              windSpeed: Math.round(item.wind.speed * 3.6),
              humidity: item.main.humidity
            }));
          setForecast(dailyForecasts);

          // Process hourly forecast (next 24 hours)
          const hourlyForecasts = forecastData.list
            .slice(0, 8) // Get next 24 hours (3-hour intervals)
            .map(item => ({
              time: new Date(item.dt * 1000).toLocaleTimeString('en-US', { hour: 'numeric' }),
              temp: Math.round(item.main.temp),
              condition: weatherService.mapCondition(item.weather[0]),
              rainChance: Math.round(item.clouds.all)
            }));
          setHourlyForecast(hourlyForecasts);

          setLoading(false);
        }, (err) => {
          setError("Please enable location services to get weather information");
          setLoading(false);
        });
      } catch (err) {
        setError("Failed to fetch weather data");
        setLoading(false);
      }
    };

    fetchWeatherData();
  }, []);

  const getWeatherIcon = (condition, size = 24) => {
    switch (condition?.toLowerCase()) {
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

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 pb-16">
        <TopBar title="Weather" />
        <main className="container mx-auto px-4 py-6">
          <div className="bg-white rounded-xl shadow-md p-8 text-center">
            <p>Loading weather data...</p>
          </div>
        </main>
        <BottomNav />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 pb-16">
        <TopBar title="Weather" />
        <main className="container mx-auto px-4 py-6">
          <div className="bg-white rounded-xl shadow-md p-8 text-center">
            <p className="text-red-500">{error}</p>
          </div>
        </main>
        <BottomNav />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-16">
      <TopBar title="Weather" />

      <main className="container mx-auto px-4 py-6">
        {/* Current Weather */}
        <div className="bg-white rounded-xl shadow-md p-5 mb-6">
          <div className="flex justify-between items-start">
            <div>
              <div className="flex items-center">
                {getWeatherIcon(currentWeather?.condition, 32)}
                <div className="ml-3">
                  <div className="text-4xl font-bold text-gray-800">{currentWeather?.temperature}°C</div>
                  <div className="text-gray-600">{currentWeather?.condition}</div>
                </div>
              </div>
              <div className="mt-4 text-sm text-gray-600">
                Feels like {currentWeather?.feelsLike}°C
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <div className="flex items-center text-gray-600">
                  <CloudRain size={16} className="mr-1" />
                  Rain
                </div>
                <div className="font-medium">{currentWeather?.rainChance}%</div>
              </div>
              <div>
                <div className="flex items-center text-gray-600">
                  <Wind size={16} className="mr-1" />
                  Wind
                </div>
                <div className="font-medium">{currentWeather?.windSpeed} km/h</div>
              </div>
              <div>
                <div className="flex items-center text-gray-600">
                  <Droplet size={16} className="mr-1" />
                  Humidity
                </div>
                <div className="font-medium">{currentWeather?.humidity}%</div>
              </div>
              <div>
                <div className="flex items-center text-gray-600">
                  <Thermometer size={16} className="mr-1" />
                  Pressure
                </div>
                <div className="font-medium">{currentWeather?.pressure} hPa</div>
              </div>
            </div>
          </div>
        </div>

        {/* Forecast Tabs */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden mb-6">
          <div className="flex border-b">
            <button
              onClick={() => setActiveTab("forecast")}
              className={`flex-1 py-3 text-sm font-medium ${
                activeTab === "forecast" ? "text-green-600 border-b-2 border-green-600" : "text-gray-500"
              }`}
            >
              7-Day Forecast
            </button>
            <button
              onClick={() => setActiveTab("hourly")}
              className={`flex-1 py-3 text-sm font-medium ${
                activeTab === "hourly" ? "text-green-600 border-b-2 border-green-600" : "text-gray-500"
              }`}
            >
              Hourly
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
          </div>
        </div>

        {/* Weather Advisory */}
        <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-4">
          <h3 className="font-bold text-blue-800 text-sm">Weather Advisory</h3>
          <p className="text-blue-700 mt-1">
            {currentWeather?.rainChance > 50 
              ? "High chance of rain. Consider adjusting your farming schedule."
              : currentWeather?.windSpeed > 20
              ? "Strong winds expected. Take necessary precautions for your crops."
              : "Weather conditions look favorable for farming activities."}
          </p>
        </div>
      </main>

      <BottomNav />
    </div>
  )
}

export default WeatherPage

