"use client"

import { BarChart2, Brain, Calendar, Cloud, Droplet, Menu, MessageSquare, Newspaper, Send, User, X } from "lucide-react";
import { useState, useEffect } from "react";
import herovid from '../assets/herovid.mp4';
import { Link } from "react-router-dom";
import { ArrowRight } from "react-feather";
import { motion } from "framer-motion";

export default function Landing() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", message: "" });

    // Enhanced animation for form submission
    const button = e.target.querySelector('button');
    button.innerHTML = '<span class="flex items-center"><svg class="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>Sending...</span>';

    setTimeout(() => {
      button.innerHTML = '<span class="flex items-center justify-center"><svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>Sent!</span>';
      setTimeout(() => {
        button.innerHTML = '<svg class="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>Send Message';
      }, 2000);
    }, 1500);
  };

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Navigation - now with scroll effects */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg py-2' : 'bg-transparent py-4'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-9">
          <div className="flex justify-between items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center"
            >
              <span className={`font-bold text-2xl transition-colors ${scrolled ? 'text-green-600' : 'text-white'}`}>
                <span className="text-green-500">Krishi</span><span className={scrolled ? 'text-gray-800' : 'text-white'}>Sevak</span>
              </span>
            </motion.div>
            <div className="hidden md:flex items-center space-x-8">
              {['Home', 'About', 'Features', 'Contact'].map((item, index) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className={`${scrolled ? 'text-gray-700 hover:text-green-600' : 'text-white hover:text-green-400'} py-4 transition-colors text-lg font-bold`}
                >
                  {item}
                </motion.a>
              ))}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Link
                  to="/signup"
                  className="bg-green-600 text-white px-5 py-2 rounded-full hover:bg-green-700 transition-all hover:shadow-lg transform hover:-translate-y-1 duration-300 text-lg font-bold flex items-center"
                >
                  Get Started <ArrowRight className="ml-2" size={16} />
                </Link>
              </motion.div>
            </div>
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`${scrolled ? 'text-gray-700' : 'text-white'} hover:text-green-600 focus:outline-none transition-transform duration-300 ${isMenuOpen ? 'rotate-180' : 'rotate-0'}`}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu with animation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white shadow-lg rounded-b-lg"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {['Home', 'About', 'Features', 'Contact'].map((item, index) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-green-600 hover:bg-gray-50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </motion.a>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.4 }}
              >
                <Link
                  to="/signup"
                  className="block w-full mt-4 px-3 py-2 rounded-full text-base font-medium bg-green-600 text-white hover:bg-green-700 text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Sign Up
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </nav>

      {/* Hero Section - with parallax effect */}
      <section id="home" className="relative h-screen bg-white overflow-hidden flex items-center">
        {/* Video Background with parallax scroll effect */}
        <div className="absolute inset-0 z-0">
          <video
            className="w-full h-full object-cover transition-transform duration-500"
            src={herovid}
            autoPlay
            loop
            muted
            playsInline
            style={{ transform: scrolled ? 'scale(1.05)' : 'scale(1)' }}
          />
          <div className="absolute inset-0 bg-black opacity-40"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-9 relative z-10 pt-20">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-6"
            >
              <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-7xl">
                <span className="block text-white">Revolutionize Your Farm</span>
                <span className="block text-green-500">with Smart Tech</span>
              </h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="mt-3 text-base text-white sm:mt-5 sm:text-lg md:mt-5 md:text-2xl"
              >
                Harness the power of AI and data analytics to increase yields, reduce costs, and make smarter decisions for your farm.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="mt-8 sm:mt-10"
              >
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Link
                    to="/login"
                    className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 flex items-center justify-center hover:shadow-lg transform hover:-translate-y-1"
                  >
                    Login
                  </Link>
                  <Link
                    to="/signup"
                    className="bg-white hover:bg-gray-100 text-green-700 font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 flex items-center justify-center hover:shadow-lg transform hover:-translate-y-1"
                  >
                    Sign Up <ArrowRight className="ml-2" size={20} />
                  </Link>
                </div>
              </motion.div>
            </motion.div>
            <div className="hidden lg:block lg:col-span-6">
              {/* Optional place for hero image or illustration */}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="text-white flex flex-col items-center"
          >
            <p className="text-sm font-light mb-2">Scroll to explore</p>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </motion.div>
        </motion.div>
      </section>

      {/* About Us Section - with improved layout and animations */}
      <section id="about" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              <span className="inline-block pb-2 border-b-4 border-green-500">About Us</span>
            </h2>
            <p className="mt-8 max-w-3xl mx-auto text-xl text-gray-500">
              We empower farmers with real-time insights, analytics, and AI-driven solutions — transforming traditional farming into smart agriculture.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
            className="mt-10"
          >
            <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">
              {[
                {
                  icon: <Cloud className="h-8 w-8" />,
                  title: "Data-Driven Insights",
                  description: "Make informed decisions based on real-time data and analytics tailored to your farm's specific needs."
                },
                {
                  icon: <Brain className="h-8 w-8" />,
                  title: "AI-Powered Solutions",
                  description: "Leverage artificial intelligence to predict crop diseases, optimize irrigation, and maximize yields."
                },
                {
                  icon: <User className="h-8 w-8" />,
                  title: "Farmer-Centric Design",
                  description: "Built with farmers, for farmers. Our platform is intuitive, practical, and designed for the field."
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="group"
                >
                  <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl h-full">
                    <div className="p-8">
                      <div className="flex items-center justify-center h-16 w-16 rounded-full bg-green-100 text-green-600 mb-6 mx-auto group-hover:bg-green-600 group-hover:text-white transition-all duration-300">
                        {item.icon}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 text-center mb-4">{item.title}</h3>
                      <p className="text-gray-600 text-center">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section - with hover effects and staggered animations */}
      <section id="features" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              <span className="inline-block pb-2 border-b-4 border-green-500">Smart Features</span>
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
              Everything you need to manage your farm smarter, not harder.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
            className="mt-16"
          >
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  icon: <Cloud className="h-6 w-6" />,
                  title: "Real-time Weather Updates",
                  description: "Get hyperlocal weather forecasts and alerts tailored to your farm's location."
                },
                {
                  icon: <Droplet className="h-6 w-6" />,
                  title: "Soil Moisture Analytics",
                  description: "Monitor soil conditions and crop health with precision sensors and analytics."
                },
                {
                  icon: <BarChart2 className="h-6 w-6" />,
                  title: "Live Market Prices",
                  description: "Stay updated with real-time market prices to sell your produce at the best rates."
                },
                {
                  icon: <Calendar className="h-6 w-6" />,
                  title: "Farming Calendar",
                  description: "Plan your farming activities with an intelligent calendar that adapts to weather and crop cycles."
                },
                {
                  icon: <Brain className="h-6 w-6" />,
                  title: "AI Crop Disease Prediction",
                  description: "Detect and prevent crop diseases before they spread with AI-powered image recognition."
                },
                {
                  icon: <User className="h-6 w-6" />,
                  title: "Personalized Profiles",
                  description: "Customize your dashboard and settings to match your specific farming needs."
                },
                {
                  icon: <MessageSquare className="h-6 w-6" />,
                  title: "24/7 Farming Assistant",
                  description: "Get instant answers to your farming questions with our AI-powered chatbot."
                },
                {
                  icon: <Newspaper className="h-6 w-6" />,
                  title: "Live Farming News Feed",
                  description: "Stay informed with the latest agricultural news, trends, and innovations."
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="group"
                >
                  <div className="h-full bg-white overflow-hidden border border-gray-100 rounded-xl transition-all duration-300 hover:shadow-xl transform hover:-translate-y-2">
                    <div className="p-6">
                      <div className="flex items-center justify-center h-12 w-12 rounded-full bg-green-100 text-green-600 mb-5 mx-auto group-hover:bg-green-600 group-hover:text-white transition-all duration-300">
                        {feature.icon}
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 text-center mb-3">{feature.title}</h3>
                      <p className="text-sm text-gray-500 text-center">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>


      {/* Contact Us Section - Enhanced form with animations */}
      <section id="contact" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
            className="text-center"
          >
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              <span className="inline-block pb-2 border-b-4 border-green-500">Contact Us</span>
            </h2>
            <p className="mt-4 text-xl text-gray-500">Got questions? We're here to help you grow.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-12 max-w-lg mx-auto bg-white rounded-xl shadow-lg overflow-hidden"
          >
            <div className="grid grid-cols-1 md:grid-cols-3">
              <div className="bg-green-600 text-white p-8 flex flex-col justify-center md:col-span-1">
                <h3 className="text-3xl font-bold mb-4">Get In Touch</h3>
                
              </div>
              <div className="p-8 md:col-span-2">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Name
                    </label>
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
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-1">
              <h3 className="text-white text-lg font-bold">KrishiSevak</h3>
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
              &copy; {new Date().getFullYear()} KrishiSevak. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}


