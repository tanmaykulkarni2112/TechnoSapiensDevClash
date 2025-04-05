"use client"

import { useState } from "react"
import { Map, Maximize2 } from "react-feather"

const MapPreview = () => {
  const [expanded, setExpanded] = useState(false)

  const toggleExpand = () => {
    setExpanded(!expanded)
  }

  return (
    <div
      className={`bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 ${
        expanded ? "fixed inset-0 z-50 m-0 rounded-none" : ""
      }`}
    >
      <div className="p-4">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-bold text-gray-800">Farm Map</h3>
          <button onClick={toggleExpand} className="p-1 hover:bg-gray-100 rounded-full">
            <Maximize2 size={18} className="text-gray-600" />
          </button>
        </div>

        {/* This would be a real map in a production app */}
        <div
          className={`bg-blue-50 rounded-lg flex items-center justify-center ${
            expanded ? "h-[calc(100vh-120px)]" : "h-40"
          }`}
        >
          <div className="text-center">
            <Map size={expanded ? 48 : 32} className="text-blue-400 mx-auto mb-2" />
            <p className="text-gray-600 text-sm">
              {expanded ? "This would be an interactive satellite map of your farm" : "Map preview"}
            </p>
          </div>
        </div>

        {!expanded && (
          <button
            onClick={toggleExpand}
            className="mt-3 w-full py-2 bg-blue-50 text-blue-700 rounded-lg font-medium text-sm hover:bg-blue-100 transition-colors duration-200"
          >
            Expand Map
          </button>
        )}
      </div>

      {expanded && (
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-white border-t">
          <button
            onClick={toggleExpand}
            className="w-full py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200"
          >
            Close Map
          </button>
        </div>
      )}
    </div>
  )
}

export default MapPreview

