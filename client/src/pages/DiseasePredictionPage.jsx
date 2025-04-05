"use client"

import { useState } from "react"
import TopBar from "../components/TopBar"
import BottomNav from "../components/BottomNav"
import { Camera, Upload, AlertTriangle, Check, Info } from "react-feather"
import Chatbot from "../components/Chatbot/Chatbot"

const DiseasePredictionPage = () => {
  const [activeTab, setActiveTab] = useState("scan")
  const [scanResult, setScanResult] = useState(null)
  const [selectedFile, setSelectedFile] = useState(null)

  const recentScans = [
    {
      id: 1,
      crop: "Wheat",
      date: "2 days ago",
      result: "Healthy",
      confidence: 95,
      status: "healthy",
    },
    {
      id: 2,
      crop: "Tomato",
      date: "1 week ago",
      result: "Early Blight",
      confidence: 87,
      status: "diseased",
      treatment: "Apply copper-based fungicide and remove affected leaves.",
    },
    {
      id: 3,
      crop: "Rice",
      date: "2 weeks ago",
      result: "Bacterial Leaf Blight",
      confidence: 92,
      status: "diseased",
      treatment: "Use bactericides and ensure proper field drainage.",
    },
  ]

  const commonDiseases = [
    {
      name: "Wheat Rust",
      crop: "Wheat",
      symptoms: "Orange-brown pustules on leaves and stems",
      prevention: "Use resistant varieties and fungicide applications",
      image: "/images/wheat-rust.jpg",
    },
    {
      name: "Rice Blast",
      crop: "Rice",
      symptoms: "Diamond-shaped lesions on leaves",
      prevention: "Balanced fertilization and fungicide treatment",
      image: "/images/rice-blast.jpg",
    },
    {
      name: "Tomato Late Blight",
      crop: "Tomato",
      symptoms: "Dark water-soaked spots on leaves and fruits",
      prevention: "Proper spacing, avoid overhead irrigation",
      image: "/images/tomato-blight.jpg",
    },
    {
      name: "Corn Smut",
      crop: "Corn",
      symptoms: "Galls on ears, tassels, and leaves",
      prevention: "Crop rotation and resistant varieties",
      image: "/images/corn-smut.jpg",
    },
  ]

  const handleUpload = (e) => {
    const file = e.target.files[0]
    if (file) {
      setSelectedFile(file)
      setScanResult(null)
    }
  }

  const givePrediction = async () => {
    if (!selectedFile) {
      alert("Please upload an image first.")
      return
    }

    try {
      const formData = new FormData()
      formData.append("image", selectedFile)

      const response = await fetch("http://localhost:5002/predict", {
        method: "POST",
        body: formData,
      })

      const data = await response.json()

      if (data.predicted_class) {
        setScanResult({
          crop: data.crop || "Unknown Crop",
          result: data.predicted_class,
          confidence: data.confidence * 100 || 90,
          status: data.status || "diseased",
          recommendations: data.recommendations || [
            "Consult an expert for treatment advice.",
          ],
        })
      } else {
        alert("No prediction received.")
      }
    } catch (error) {
      console.error("Prediction failed:", error)
      alert("Failed to get prediction.")
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-16">
      <TopBar title="Disease Prediction" />

      <main className="container mx-auto px-4 py-6">
        {/* Tabs */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden mb-6">
          <div className="flex border-b">
            {["scan", "history", "library"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-1 py-3 text-center font-medium ${
                  activeTab === tab
                    ? "text-green-600 border-b-2 border-green-600"
                    : "text-gray-500"
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          <div className="p-4">
            {activeTab === "scan" && (
              <div>
                {!scanResult ? (
                  <div className="text-center py-6">
                    <p className="text-gray-600 mb-6">
                      Take a photo or upload an image of your crop to identify diseases
                    </p>

                    {selectedFile && (
                      <div className="text-center mb-4">
                        <p className="text-sm text-gray-600 mb-2">Selected Image:</p>
                        <img
                          src={URL.createObjectURL(selectedFile)}
                          alt="Preview"
                          className="mx-auto max-h-48 rounded-md shadow"
                        />
                      </div>
                    )}

                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                      <button
                        onClick={givePrediction}
                        className="flex items-center justify-center gap-2 bg-purple-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-purple-700 transition-colors"
                      >
                        Predict Disease
                      </button>

                      <label className="flex items-center justify-center gap-2 bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 transition-colors cursor-pointer">
                        <Upload size={20} />
                        Upload Image
                        <input type="file" accept="image/*" className="hidden" onChange={handleUpload} />
                      </label>
                    </div>

                    <div className="mt-8 p-4 bg-blue-50 rounded-lg text-blue-800 text-sm">
                      <div className="flex items-start">
                        <Info size={18} className="mr-2 mt-0.5 flex-shrink-0" />
                        <p className="text-left">
                          For best results, take a clear photo in good lighting. Make sure the affected area is clearly
                          visible in the frame.
                        </p>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="py-2">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="font-bold text-lg">Scan Results</h3>
                      <button
                        onClick={() => {
                          setScanResult(null)
                          setSelectedFile(null)
                        }}
                        className="text-sm text-green-600 hover:text-green-700"
                      >
                        New Scan
                      </button>
                    </div>

                    <div className="bg-gray-100 rounded-lg p-4 mb-4">
                      <div className="flex items-center mb-2">
                        {scanResult.status === "healthy" ? (
                          <Check size={20} className="text-green-500 mr-2" />
                        ) : (
                          <AlertTriangle size={20} className="text-red-500 mr-2" />
                        )}
                        <h4 className="font-bold text-lg">
                          {scanResult.crop}: {scanResult.result}
                        </h4>
                      </div>

                      <div className="flex items-center mb-4">
                        <div className="text-sm text-gray-600 mr-2">Confidence:</div>
                        <div className="flex-1 h-2 bg-gray-300 rounded-full overflow-hidden">
                          <div
                            className={`h-full rounded-full ${
                              scanResult.status === "healthy" ? "bg-green-500" : "bg-red-500"
                            }`}
                            style={{ width: `${scanResult.confidence}%` }}
                          ></div>
                        </div>
                        <div className="ml-2 text-sm font-medium">{scanResult.confidence}%</div>
                      </div>

                      <div>
                        <h5 className="font-medium mb-2">Recommendations:</h5>
                        <ul className="list-disc pl-5 text-sm space-y-1">
                          {scanResult.recommendations.map((rec, index) => (
                            <li key={index}>{rec}</li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {scanResult.status === "diseased" && (
                      <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg">
                        <h5 className="font-medium text-red-800">Treatment Required</h5>
                        <p className="text-red-700 mt-1">
                          This disease requires immediate attention. Follow the recommendations above and consider
                          consulting with an agricultural expert.
                        </p>
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}

            {activeTab === "history" && (
              <div>
                <h3 className="font-medium mb-4">Recent Scans</h3>
                {recentScans.length > 0 ? (
                  <div className="space-y-4">
                    {recentScans.map((scan) => (
                      <div key={scan.id} className="border rounded-lg overflow-hidden">
                        <div className="flex items-center justify-between p-3 bg-gray-50 border-b">
                          <div className="font-medium">{scan.crop}</div>
                          <div className="text-sm text-gray-500">{scan.date}</div>
                        </div>
                        <div className="p-3">
                          <div className="flex items-center mb-2">
                            <div
                              className={`w-3 h-3 rounded-full mr-2 ${
                                scan.status === "healthy" ? "bg-green-500" : "bg-red-500"
                              }`}
                            ></div>
                            <div className="font-medium">{scan.result}</div>
                            <div className="ml-auto text-sm text-gray-600">Confidence: {scan.confidence}%</div>
                          </div>
                          {scan.status === "diseased" && (
                            <div className="mt-2 text-sm">
                              <div className="font-medium text-gray-700">Treatment:</div>
                              <p className="text-gray-600">{scan.treatment}</p>
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8 text-gray-500">No scan history available</div>
                )}
              </div>
            )}

            {activeTab === "library" && (
              <div>
                <h3 className="font-medium mb-4">Common Crop Diseases</h3>
                <div className="space-y-4">
                  {commonDiseases.map((disease, index) => (
                    <div key={index} className="border rounded-lg overflow-hidden">
                      <div className="p-3 bg-gray-50 border-b font-medium">
                        {disease.name} <span className="text-sm text-gray-500">({disease.crop})</span>
                      </div>
                      <div className="p-3">
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                          <div className="sm:col-span-2">
                            <div className="mb-2">
                              <span className="font-medium text-gray-700">Symptoms:</span>
                              <p className="text-sm text-gray-600">{disease.symptoms}</p>
                            </div>
                            <div>
                              <span className="font-medium text-gray-700">Prevention:</span>
                              <p className="text-sm text-gray-600">{disease.prevention}</p>
                            </div>
                          </div>
                          <div className="bg-gray-200 rounded-lg h-24 flex items-center justify-center">
                            <span className="text-gray-500 text-sm">Disease Image</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </main>

      <Chatbot />
      <BottomNav />
    </div>
  )
}

export default DiseasePredictionPage
