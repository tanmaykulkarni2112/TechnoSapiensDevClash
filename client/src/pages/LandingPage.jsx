"use client"

import { BarChart2, Brain, Calendar, Cloud, Droplet, Menu, MessageSquare, Newspaper, Send, User, X } from "lucide-react";
import { useState } from "react";
import herovid from '../assets/herovid.mp4';

export default function Landing() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log("Form submitted:", formData)
    // Reset form
    setFormData({ name: "", email: "", message: "" })
    alert("Thank you for your message! We will get back to you soon.")
  }

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <span className="text-green-600 font-bold text-xl">FarmSmart</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-700 hover:text-green-600 transition-colors">
                Home
              </a>
              <a href="#about" className="text-gray-700 hover:text-green-600 transition-colors">
                About
              </a>
              <a href="#features" className="text-gray-700 hover:text-green-600 transition-colors">
                Features
              </a>
              <a href="#contact" className="text-gray-700 hover:text-green-600 transition-colors">
                Contact
              </a>
              <button className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors">
                Sign Up
              </button>
            </div>
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-green-600 focus:outline-none"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white shadow-lg rounded-b-lg">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a
                href="#home"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-green-600 hover:bg-gray-50"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </a>
              <a
                href="#about"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-green-600 hover:bg-gray-50"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
              <a
                href="#features"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-green-600 hover:bg-gray-50"
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </a>
              <a
                href="#contact"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-green-600 hover:bg-gray-50"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
              <button className="w-full text-left px-3 py-2 rounded-md text-base font-medium bg-green-600 text-white hover:bg-green-700">
                Sign Up
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-full bg-white overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video
            className="w-full h-full object-cover"
            src={herovid}
            autoPlay
            loop
            muted
            playsInline
          />
          <div className="absolute inset-0 bg-black opacity-30"></div> {/* Optional dark overlay */}
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="pt-10 pb-12 md:pt-16 md:pb-20 lg:pt-20 lg:pb-28 text-center lg:text-left">
            <div className="lg:grid lg:grid-cols-12 lg:gap-8">
              <div className="lg:col-span-6">
                <h1 className="text-4xl tracking-tight font-extrabold text-white-900 sm:text-5xl md:text-6xl">
                  <span className="block text-white-900">Revolutionize Your Farm</span>
                  <span className="block text-green-600">with Smart Tech</span>
                </h1>
                <p className="mt-3 text-base text-white-500 sm:mt-5 sm:text-lg md:mt-5 md:text-xl">
                  Harness the power of technology to increase yields, reduce costs, and make data-driven decisions for
                  your farm.
                </p>
                <div className="mt-8 sm:mt-10">
                  <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                    Get Started
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">About Us</h2>
            <div className="mt-8 max-w-3xl mx-auto">
              <p className="text-xl text-gray-500">
                We empower farmers with real-time weather insights, farm analytics, crop health tracking, and AI-driven
                disease prediction — all in one seamless platform.
              </p>
            </div>
            <div className="mt-10">
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                <div className="pt-6">
                  <div className="bg-white rounded-lg shadow-md px-5 py-6 h-full">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white mx-auto">
                      <Cloud className="h-6 w-6" />
                    </div>
                    <h3 className="mt-5 text-lg font-medium text-gray-900 text-center">Data-Driven Insights</h3>
                    <p className="mt-2 text-base text-gray-500">
                      Make informed decisions based on real-time data and analytics tailored to your farm's needs.
                    </p>
                  </div>
                </div>
                <div className="pt-6">
                  <div className="bg-white rounded-lg shadow-md px-5 py-6 h-full">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white mx-auto">
                      <Brain className="h-6 w-6" />
                    </div>
                    <h3 className="mt-5 text-lg font-medium text-gray-900 text-center">AI-Powered Solutions</h3>
                    <p className="mt-2 text-base text-gray-500">
                      Leverage artificial intelligence to predict crop diseases, optimize irrigation, and maximize
                      yields.
                    </p>
                  </div>
                </div>
                <div className="pt-6">
                  <div className="bg-white rounded-lg shadow-md px-5 py-6 h-full">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white mx-auto">
                      <User className="h-6 w-6" />
                    </div>
                    <h3 className="mt-5 text-lg font-medium text-gray-900 text-center">Farmer-Centric Design</h3>
                    <p className="mt-2 text-base text-gray-500">
                      Built with farmers, for farmers. Our platform is intuitive, practical, and designed for the field.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Features</h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
              Everything you need to manage your farm smarter, not harder.
            </p>
          </div>

          <div className="mt-10">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              <div className="bg-white overflow-hidden shadow rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-100 text-green-600 mb-4">
                    <Cloud className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-medium text-gray-900">Real-time Weather Updates</h3>
                  <p className="mt-2 text-sm text-gray-500">
                    Get hyperlocal weather forecasts and alerts tailored to your farm's location.
                  </p>
                </div>
              </div>

              <div className="bg-white overflow-hidden shadow rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-100 text-green-600 mb-4">
                    <Droplet className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-medium text-gray-900">Soil Moisture & Crop Health Analytics</h3>
                  <p className="mt-2 text-sm text-gray-500">
                    Monitor soil conditions and crop health with precision sensors and analytics.
                  </p>
                </div>
              </div>

              <div className="bg-white overflow-hidden shadow rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-100 text-green-600 mb-4">
                    <BarChart2 className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-medium text-gray-900">Live Market Prices</h3>
                  <p className="mt-2 text-sm text-gray-500">
                    Stay updated with real-time market prices to sell your produce at the best rates.
                  </p>
                </div>
              </div>

              <div className="bg-white overflow-hidden shadow rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-100 text-green-600 mb-4">
                    <Calendar className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-medium text-gray-900">Farming Calendar & Event Manager</h3>
                  <p className="mt-2 text-sm text-gray-500">
                    Plan your farming activities with an intelligent calendar that adapts to weather and crop cycles.
                  </p>
                </div>
              </div>

              <div className="bg-white overflow-hidden shadow rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-100 text-green-600 mb-4">
                    <Brain className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-medium text-gray-900">AI Crop Disease Prediction</h3>
                  <p className="mt-2 text-sm text-gray-500">
                    Detect and prevent crop diseases before they spread with AI-powered image recognition.
                  </p>
                </div>
              </div>

              <div className="bg-white overflow-hidden shadow rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-100 text-green-600 mb-4">
                    <User className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-medium text-gray-900">Personalized Profile Management</h3>
                  <p className="mt-2 text-sm text-gray-500">
                    Customize your dashboard and settings to match your specific farming needs.
                  </p>
                </div>
              </div>

              <div className="bg-white overflow-hidden shadow rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-100 text-green-600 mb-4">
                    <MessageSquare className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-medium text-gray-900">24/7 Farming Assistant Chatbot</h3>
                  <p className="mt-2 text-sm text-gray-500">
                    Get instant answers to your farming questions with our AI-powered chatbot.
                  </p>
                </div>
              </div>

              <div className="bg-white overflow-hidden shadow rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-100 text-green-600 mb-4">
                    <Newspaper className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-medium text-gray-900">Live Farming News Feed</h3>
                  <p className="mt-2 text-sm text-gray-500">
                    Stay informed with the latest agricultural news, trends, and innovations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>





      {/* Contact Us Section */}
      <section id="contact" className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Contact Us</h2>
            <p className="mt-4 text-xl text-gray-500">Got questions? We're here to help you grow. Reach out anytime!</p>
          </div>
          <div className="mt-12 max-w-lg mx-auto">
            <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="py-3 px-4 block w-full shadow-sm focus:ring-green-500 focus:border-green-500 border-gray-300 rounded-md"
                    placeholder="Your name"
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <div className="mt-1">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="py-3 px-4 block w-full shadow-sm focus:ring-green-500 focus:border-green-500 border-gray-300 rounded-md"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <div className="mt-1">
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="py-3 px-4 block w-full shadow-sm focus:ring-green-500 focus:border-green-500 border border-gray-300 rounded-md"
                    placeholder="How can we help you?"
                    required
                  />
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                >
                  <Send className="h-5 w-5 mr-2" />
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-1">
              <h3 className="text-white text-lg font-bold">FarmSmart</h3>
              <p className="mt-2 text-gray-300 text-sm">
                Empowering farmers with smart technology for a sustainable future.
              </p>
            </div>
            <div>
              <h3 className="text-white text-sm font-semibold">Product</h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <a href="#" className="text-gray-300 hover:text-white text-sm">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white text-sm">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white text-sm">
                    Case Studies
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white text-sm">
                    Resources
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-white text-sm font-semibold">Company</h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <a href="#" className="text-gray-300 hover:text-white text-sm">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white text-sm">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white text-sm">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white text-sm">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-white text-sm font-semibold">Legal</h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <a href="#" className="text-gray-300 hover:text-white text-sm">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white text-sm">
                    Terms
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white text-sm">
                    Cookie Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-700 pt-8 md:flex md:items-center md:justify-between">
            <div className="flex space-x-6 md:order-2">
              <a href="#" className="text-gray-400 hover:text-gray-300">
                <span className="sr-only">Facebook</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-300">
                <span className="sr-only">Instagram</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-300">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
            </div>
            <p className="mt-8 text-base text-gray-400 md:mt-0 md:order-1">
              &copy; {new Date().getFullYear()} FarmSmart. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}


