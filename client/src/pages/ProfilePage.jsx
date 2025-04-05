"use client"

import { useState } from "react"
import { useAuth } from "../context/AuthContext"
import TopBar from "../components/TopBar"
import BottomNav from "../components/BottomNav"
import { MapPin, Droplet, Bell, User, ChevronRight, Edit2 } from "react-feather"

const ProfilePage = () => {
  const { currentUser, logout } = useAuth()
  const [activeSection, setActiveSection] = useState(null)

  // Mock user data - in a real app, this would come from an API
  const userData = {
    name: currentUser?.name || "Demo Farmer",
    phone: currentUser?.phone || "123-456-7890",
    language: currentUser?.language || "en",
    location: "Farm Location, Country",
    crops: ["Wheat", "Corn", "Tomatoes"],
    farmSize: "5 hectares",
    wateringSchedule: "Every 2 days",
    notificationPreferences: {
      weather: true,
      cropHealth: true,
      marketPrices: false,
      tips: true,
    },
  }

  const handleLogout = () => {
    logout()
  }

  const toggleSection = (section) => {
    if (activeSection === section) {
      setActiveSection(null)
    } else {
      setActiveSection(section)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-16">
      <TopBar title="Profile" />

      <main className="container mx-auto px-4 py-6">
        {/* User Info */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden mb-6">
          <div className="p-6 flex items-center">
            <div className="bg-green-100 rounded-full p-4 mr-4">
              <User size={32} className="text-green-600" />
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-800">{userData.name}</h2>
              <p className="text-gray-600">{userData.phone}</p>
            </div>

            <button className="ml-auto bg-gray-100 p-2 rounded-full">
              <Edit2 size={18} className="text-gray-600" />
            </button>
          </div>

          <div className="bg-gray-50 px-6 py-3 border-t border-gray-100">
            <div className="flex items-center text-sm text-gray-600">
              <MapPin size={16} className="mr-2" />
              {userData.location}
            </div>
          </div>
        </div>

        {/* Farm Information */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden mb-6">
          <div
            className="p-4 border-b border-gray-100 flex justify-between items-center cursor-pointer"
            onClick={() => toggleSection("farmLocation")}
          >
            <div className="font-medium">Farm Location</div>
            <ChevronRight
              size={20}
              className={`text-gray-400 transition-transform ${activeSection === "farmLocation" ? "rotate-90" : ""}`}
            />
          </div>

          {activeSection === "farmLocation" && (
            <div className="p-4 bg-gray-50">
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">Current Location</label>
                <div className="bg-white border border-gray-300 rounded-lg p-3 text-gray-700">{userData.location}</div>
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">Farm Size</label>
                <div className="bg-white border border-gray-300 rounded-lg p-3 text-gray-700">{userData.farmSize}</div>
              </div>

              <button className="w-full py-2 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-colors">
                Update Location
              </button>
            </div>
          )}

          <div
            className="p-4 border-b border-gray-100 flex justify-between items-center cursor-pointer"
            onClick={() => toggleSection("cropTypes")}
          >
            <div className="font-medium">Crop Types</div>
            <ChevronRight
              size={20}
              className={`text-gray-400 transition-transform ${activeSection === "cropTypes" ? "rotate-90" : ""}`}
            />
          </div>

          {activeSection === "cropTypes" && (
            <div className="p-4 bg-gray-50">
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">Current Crops</label>
                <div className="flex flex-wrap gap-2">
                  {userData.crops.map((crop, index) => (
                    <div key={index} className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                      {crop}
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">Add New Crop</label>
                <div className="flex gap-2">
                  <select className="flex-1 border border-gray-300 rounded-lg p-2">
                    <option value="">Select a crop</option>
                    <option value="rice">Rice</option>
                    <option value="potato">Potato</option>
                    <option value="soybean">Soybean</option>
                    <option value="cotton">Cotton</option>
                  </select>
                  <button className="bg-green-600 text-white px-4 rounded-lg hover:bg-green-700">Add</button>
                </div>
              </div>
            </div>
          )}

          <div
            className="p-4 border-b border-gray-100 flex justify-between items-center cursor-pointer"
            onClick={() => toggleSection("waterUsage")}
          >
            <div className="font-medium">Water Usage Settings</div>
            <ChevronRight
              size={20}
              className={`text-gray-400 transition-transform ${activeSection === "waterUsage" ? "rotate-90" : ""}`}
            />
          </div>

          {activeSection === "waterUsage" && (
            <div className="p-4 bg-gray-50">
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">Watering Schedule</label>
                <select className="w-full border border-gray-300 rounded-lg p-2">
                  <option value="daily">Daily</option>
                  <option value="every2days" selected>
                    Every 2 days
                  </option>
                  <option value="every3days">Every 3 days</option>
                  <option value="weekly">Weekly</option>
                </select>
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">Water Source</label>
                <select className="w-full border border-gray-300 rounded-lg p-2">
                  <option value="well">Well</option>
                  <option value="river">River</option>
                  <option value="rainwater">Rainwater Collection</option>
                  <option value="municipal">Municipal Supply</option>
                </select>
              </div>

              <div className="flex items-center mb-4">
                <Droplet size={18} className="text-blue-500 mr-2" />
                <div className="text-sm text-gray-700">Estimated daily water usage: 2,500 liters</div>
              </div>

              <button className="w-full py-2 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-colors">
                Save Changes
              </button>
            </div>
          )}

          <div
            className="p-4 flex justify-between items-center cursor-pointer"
            onClick={() => toggleSection("notifications")}
          >
            <div className="font-medium">Notification Preferences</div>
            <ChevronRight
              size={20}
              className={`text-gray-400 transition-transform ${activeSection === "notifications" ? "rotate-90" : ""}`}
            />
          </div>

          {activeSection === "notifications" && (
            <div className="p-4 bg-gray-50">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <label className="flex items-center">
                    <Bell size={16} className="text-gray-600 mr-2" />
                    <span>Weather Alerts</span>
                  </label>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      className="sr-only peer"
                      checked={userData.notificationPreferences.weather}
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"></div>
                  </label>
                </div>

                <div className="flex items-center justify-between">
                  <label className="flex items-center">
                    <Bell size={16} className="text-gray-600 mr-2" />
                    <span>Crop Health Updates</span>
                  </label>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      className="sr-only peer"
                      checked={userData.notificationPreferences.cropHealth}
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"></div>
                  </label>
                </div>

                <div className="flex items-center justify-between">
                  <label className="flex items-center">
                    <Bell size={16} className="text-gray-600 mr-2" />
                    <span>Market Price Alerts</span>
                  </label>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      className="sr-only peer"
                      checked={userData.notificationPreferences.marketPrices}
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"></div>
                  </label>
                </div>

                <div className="flex items-center justify-between">
                  <label className="flex items-center">
                    <Bell size={16} className="text-gray-600 mr-2" />
                    <span>Daily Farming Tips</span>
                  </label>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" checked={userData.notificationPreferences.tips} />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"></div>
                  </label>
                </div>
              </div>

              <button className="w-full py-2 bg-green-600 text-white rounded-lg font-medium mt-4 hover:bg-green-700 transition-colors">
                Save Preferences
              </button>
            </div>
          )}
        </div>

        {/* Account Settings */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden mb-6">
          <div className="p-4 border-b border-gray-100">
            <h3 className="font-medium">Account Settings</h3>
          </div>

          <div className="divide-y divide-gray-100">
            <button className="w-full p-4 text-left hover:bg-gray-50">Change Password</button>

            <button className="w-full p-4 text-left hover:bg-gray-50">Language Settings</button>

            <button className="w-full p-4 text-left hover:bg-gray-50">Privacy Settings</button>

            <button onClick={handleLogout} className="w-full p-4 text-left text-red-600 hover:bg-red-50">
              Logout
            </button>
          </div>
        </div>
      </main>

      <BottomNav />
    </div>
  )
}

export default ProfilePage

