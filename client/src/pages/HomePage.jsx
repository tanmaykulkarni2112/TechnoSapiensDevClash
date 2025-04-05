"use client"

import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import TopBar from "../components/TopBar";
import BottomNav from "../components/BottomNav";
import WeatherWidget from "../components/WeatherWidget";
import MapPreview from "../components/MapPreview";
import AnalyticsDashboard from "../components/AnalyticsDashboard";
import TipOfTheDay from "../components/TipOfTheDay";
import LanguageSelector from "../components/LanguageSelector";

const HomePage = () => {
  const { currentUser } = useAuth();

  const defaultTexts = {
    greeting: "Hello, Farmer",
    overview: "Here's your farm overview for today",
    analytics: "Farm Analytics",
  };

  const [translatedText, setTranslatedText] = useState(defaultTexts);

  return (
    <div className="min-h-screen bg-gray-50 pb-16">
      <TopBar title="Home" />
      
      <header className="p-4 flex justify-end">
        <LanguageSelector
          textKeys={Object.keys(defaultTexts).map((key) => ({ key, value: defaultTexts[key] }))}
          setTranslatedText={setTranslatedText}
        />
      </header>

      <main className="container mx-auto px-4 py-6">
        {/* Greeting */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-800">
            {translatedText.greeting} {currentUser?.name?.split(" ")[0] || "Friend"} 👋
          </h2>
          <p className="text-gray-600">{translatedText.overview}</p>
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
          <h3 className="font-bold text-gray-800 mb-3">{translatedText.analytics}</h3>
          <AnalyticsDashboard />
        </div>

        {/* Tip of the Day */}
        <div className="mb-6">
          <TipOfTheDay />
        </div>
      </main>

      <BottomNav />
    </div>
  );
};

export default HomePage;
