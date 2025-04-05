"use client"

import { useState } from "react"
import { Globe } from "react-feather"

const languages = [
  { code: "en", name: "English" },
  { code: "es", name: "Español" },
  { code: "fr", name: "Français" },
  { code: "hi", name: "हिन्दी" },
]

const LanguageSelector = ({ isDark = false }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0])

  const toggleDropdown = () => setIsOpen(!isOpen)

  const selectLanguage = (language) => {
    setSelectedLanguage(language)
    setIsOpen(false)
    // In a real app, you would update the app's language here
  }

  const textColor = isDark ? "text-gray-800" : "text-white"

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className={`flex items-center space-x-1 ${textColor} hover:opacity-80 transition-opacity duration-200 py-2 px-3 rounded-full`}
      >
        <Globe size={20} />
        <span>{selectedLanguage.code.toUpperCase()}</span>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-1 z-50">
          {languages.map((language) => (
            <button
              key={language.code}
              onClick={() => selectLanguage(language)}
              className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100 transition-colors duration-150"
            >
              {language.name}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export default LanguageSelector

