"use client"

import AnalyticsDashboard from "../components/AnalyticsDashboard";
import BottomNav from "../components/BottomNav";
import Chatbot from "../components/Chatbot/Chatbot";
import MapPreview from "../components/MapPreview";
import TipOfTheDay from "../components/TipOfTheDay";
import TopBar from "../components/TopBar";
import WeatherWidget from "../components/WeatherWidget";
import { useAuth } from "../context/AuthContext";


const HomePage = () => {
  const { currentUser } = useAuth();

  

  return (
    <div className="min-h-screen bg-gray-50 pb-16">
      <TopBar title="Home" />
      

      <main className="container mx-auto px-4 py-6">
         {/* Greeting */}
         <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-800">
            Hello, Farmer {currentUser?.name?.split(" ")[0] || "Friend"} 👋
          </h2>
          <p className="text-gray-600">Here's your farm overview for today</p>
        </div>

        {/* Weather Widget */}
        <div className="mb-6">
          <WeatherWidget />
        </div>

        {/* Map Preview */}
        <div className="mb-6">
          <MapPreview />
        </div>

        {/* Analytics Dashboard */}
        <div className="mb-6">
          <h3 className="font-bold text-gray-800 mb-3">Farm Analytics</h3>
          <AnalyticsDashboard />
        </div>

        {/* Tip of the Day */}
        <div className="mb-6">
          <TipOfTheDay />
        </div>
      </main>
       {/* chatbot-p */}
      <Chatbot />
      
      <BottomNav />
    </div>
  );
};

export default HomePage;
