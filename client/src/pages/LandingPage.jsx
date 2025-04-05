import { Link } from "react-router-dom"
import LanguageSelector from "../components/LanguageSelector"

const LandingPage = () => {
  return (
    <div className="relative min-h-screen flex flex-col">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-red-900 bg-center z-0"
        // style={{
        //   backgroundImage: "url('/images/farm-sunrise.jpg')",
        //   filter: "brightness(0.7)",
        // }}
      ></div>

      {/* Content */}
      <div className="relative z-10 flex-1 flex flex-col">
        {/* Header */}
        <header className="p-4 flex justify-between items-center">
          <div className="text-white font-bold text-xl">SmartFarm</div>
          <LanguageSelector />
        </header>

        {/* Main Content */}
        <main className="flex-1 flex flex-col items-center justify-center px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Smart Farming, Smarter Future</h1>
          <p className="text-white text-lg mb-8 max-w-md">
            Revolutionize your farming with data-driven insights, weather predictions, and crop management tools.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/login"
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full text-lg transition-colors duration-300"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="bg-white hover:bg-gray-100 text-green-700 font-bold py-3 px-8 rounded-full text-lg transition-colors duration-300"
            >
              Sign Up
            </Link>
          </div>
        </main>

        {/* Footer */}
        <footer className="p-6 text-center text-white">
          <div className="flex justify-center space-x-6">
            <Link to="/about" className="hover:underline">
              About
            </Link>
            <Link to="/contact" className="hover:underline">
              Contact
            </Link>
            <Link to="/help" className="hover:underline">
              Help
            </Link>
          </div>
          <div className="mt-4">
            <p>&copy; {new Date().getFullYear()} SmartFarm. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default LandingPage

