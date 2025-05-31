"use client"

import { useState } from "react"
import { ChevronDown, Search, Globe, Menu, X } from "lucide-react"
import CategoriesSlider from "./slider"
import Component from "./List"
import HowItWork from "./howItWork"
import Count from "./Count"
import Price from "./Price"
import Footer from "./Footer"


export default function BuListioClone() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
  <>
      <div className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className="bg-white shadow-sm border-b border-gray-300">
        <div className="md:mx-30  px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-red-500 rounded-lg flex items-center justify-center">
                  <div className="w-4 h-4 bg-white rounded-sm"></div>
                </div>
                <span className="text-xl font-bold text-gray-900">BuListio</span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              <a href="#" className="text-gray-900 hover:text-orange-500 transition-colors duration-200 font-medium">
                Home
              </a>
              <div className="relative group">
                <a
                  href="#"
                  className="text-gray-700 hover:text-orange-500 transition-colors duration-200 font-medium flex items-center"
                >
                  Listings
                  <ChevronDown className="ml-1 h-4 w-4" />
                </a>
              </div>
              <a href="#" className="text-gray-700 hover:text-orange-500 transition-colors duration-200 font-medium">
                Pricing
              </a>
              <a href="#" className="text-gray-700 hover:text-orange-500 transition-colors duration-200 font-medium">
                Vendors
              </a>
              <div className="relative group">
                <a
                  href="#"
                  className="text-gray-700 hover:text-orange-500 transition-colors duration-200 font-medium flex items-center"
                >
                  Shop
                  <ChevronDown className="ml-1 h-4 w-4" />
                </a>
              </div>
              <div className="relative group">
                <a
                  href="#"
                  className="text-gray-700 hover:text-orange-500 transition-colors duration-200 font-medium flex items-center"
                >
                  Pages
                  <ChevronDown className="ml-1 h-4 w-4" />
                </a>
              </div>
              <a href="#" className="text-gray-700 hover:text-orange-500 transition-colors duration-200 font-medium">
                Contact
              </a>
            </div>

            {/* Right side buttons */}
            <div className="hidden lg:flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-gray-700">
                <Globe className="h-4 w-4" />
                <span className="text-sm font-medium">English</span>
                <ChevronDown className="h-4 w-4" />
              </div>
              <div className="flex items-center space-x-2 text-gray-700 border-orange-400 border-1 px-4 py-2 rounded-lg">
                <span className="text-sm font-medium text-orange-400">Customer</span>
                <ChevronDown className="h-4 w-4 text-orange-400" />
              </div>
              <button className="bg-gradient-to-r from-orange-400 to-red-500 text-white px-6 py-2 rounded-lg font-medium hover:from-orange-500 hover:to-red-600 transition-all duration-200 transform hover:scale-105 flex items-center space-x-2">
                <span>Vendor</span>
                <ChevronDown className="h-4 w-4" />
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-orange-500 transition-colors duration-200"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden border-t border-gray-100 py-4 animate-fadeIn">
              <div className="flex flex-col space-y-4">
                <a href="#" className="text-gray-900 hover:text-orange-500 transition-colors duration-200 font-medium">
                  Home
                </a>
                <a href="#" className="text-gray-700 hover:text-orange-500 transition-colors duration-200 font-medium">
                  Listings
                </a>
                <a href="#" className="text-gray-700 hover:text-orange-500 transition-colors duration-200 font-medium">
                  Pricing
                </a>
                <a href="#" className="text-gray-700 hover:text-orange-500 transition-colors duration-200 font-medium">
                  Vendors
                </a>
                <a href="#" className="text-gray-700 hover:text-orange-500 transition-colors duration-200 font-medium">
                  Shop
                </a>
                <a href="#" className="text-gray-700 hover:text-orange-500 transition-colors duration-200 font-medium">
                  Pages
                </a>
                <a href="#" className="text-gray-700 hover:text-orange-500 transition-colors duration-200 font-medium">
                  Contact
                </a>
                <div className="pt-4 border-t border-gray-100">
                  <button className="w-full bg-gradient-to-r from-orange-400 to-red-500 text-white px-6 py-2 rounded-lg font-medium">
                    Vendor
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-white">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-60 md:left-160 w-16 h-16 rotate-12 bg-[#ebd8d8] rounded-xl opacity-50 animate-float"></div>
          <div className="absolute top-20 left-200 w-15 h-22 rotate-20 bg-[#dceaeb] rounded-xl opacity-50 animate-float"></div>
          {/* <div className="absolute top-60 left-10 w-32 h-32 bg-green-200 rounded-sm opacity-20 animate-float"></div> */}
          <div className="absolute top-80 left-10 w-32 h-32 bg-[#fcf2e2] rounded-full opacity-50 animate-float"></div>
          <div className="absolute top-40 left-20 w-24 h-24 bg-[#ddfae1] rounded-full opacity-40 animate-float-delayed"></div>
          <div className="absolute bottom-20 left-1/4 w-20 h-20 bg-pink-200 rounded-full opacity-20 animate-float"></div>
          <div className="absolute bottom-40 left-1/3 w-16 h-16 bg-yellow-200 rounded-full opacity-20 animate-float-delayed"></div>
        </div>

        <div className=" mx-auto  ">
          <div className="flex justify-between flex-col md:flex-row md:h-[90vh]  gap-10 items-center">
            {/* Left Content */}
            <div className="space-y-8 animate-slideInLeft mx-10 px-10 md:ml-20 md:w-[50%] w-full ">
              <div className="space-y-6">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-Quicksand text-gray-900 leading-tight">
                  Are You Looking <br/>For A 
                  
                    business
                    <span className="absolute bottom-2 left-0 w-full h-3 bg-orange-200 -z-10 animate-underline"></span>
                  
                  ?
                </h1>
                <p className="text-lg text-gray-600 max-w-lg">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                  totamrem.
                </p>
              </div>

              {/* Search Form */}
           
              <div className="bg-white rounded-2xl shadow-xl p-4 border border-gray-100 animate-slideInUp">
                <div className="flex items-center gap-3 flex-col md:flex-row">
                  {/* I'm Looking for */}
                  <div className="flex items-center flex-1 min-w-0 ">
                    <div className="flex items-center px-4 py-3 bg-gray-50 rounded-l-xl border-r border-gray-200">
                      <div className="w-5 h-5 bg-orange-100 rounded mr-3 flex items-center justify-center flex-shrink-0">
                        <div className="w-2 h-2 bg-orange-500 rounded"></div>
                      </div>
                      <span className="text-gray-600 text-sm font-medium whitespace-nowrap">I'm Looking for</span>
                    </div>
                    <input
                      type="text"
                      placeholder=""
                      className="flex-1 px-4 py-3 border-0 focus:ring-0 focus:outline-none bg-white text-gray-900 min-w-0"
                    />
                  </div>

                  {/* Restaurant Dropdown */}
                  <div className="flex items-center flex-1 min-w-0 bg-white border border-gray-200 rounded-xl">
                    <div className="flex items-center px-4 py-3">
                      <div className="w-5 h-5 bg-orange-100 rounded mr-3 flex items-center justify-center flex-shrink-0">
                        <div className="grid grid-cols-2 gap-0.5 w-2.5 h-2.5">
                          <div className="w-1 h-1 bg-orange-500 rounded-sm"></div>
                          <div className="w-1 h-1 bg-orange-500 rounded-sm"></div>
                          <div className="w-1 h-1 bg-orange-500 rounded-sm"></div>
                          <div className="w-1 h-1 bg-orange-500 rounded-sm"></div>
                        </div>
                      </div>
                      <span className="text-gray-900 font-medium mr-2">Restaurant</span>
                      <ChevronDown className="h-4 w-4 text-gray-400 flex-shrink-0" />
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-center flex-1 min-w-0">
                    <div className="flex items-center px-4 py-3 bg-gray-50 rounded-l-xl border-r border-gray-200">
                      <div className="w-5 h-5 bg-orange-100 rounded mr-3 flex items-center justify-center flex-shrink-0">
                        <div className="w-2 h-2.5 bg-orange-500 rounded-full relative">
                          <div className="absolute -bottom-0.5 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-orange-500"></div>
                        </div>
                      </div>
                      <span className="text-gray-600 text-sm font-medium whitespace-nowrap">Location</span>
                    </div>
                    <input
                      type="text"
                      placeholder=""
                      className="flex-1 px-4 py-3 border-0 focus:ring-0 focus:outline-none bg-white text-gray-900 min-w-0"
                    />
                  </div>

                  {/* Filter Button */}
                  <button className="bg-gradient-to-r from-orange-400 to-red-500 text-white p-3 rounded-xl hover:from-orange-500 hover:to-red-600 transition-all duration-200 transform hover:scale-105 flex-shrink-0">
                    <div className="w-5 h-5 flex items-center justify-center">
                      <div className="transform rotate-45 w-3 h-3 border-2 border-white"></div>
                    </div>
                  </button>

                  {/* Search Button */}
                  <button className="bg-gradient-to-r from-orange-400 to-red-500 text-white px-6 py-3 rounded-xl font-semibold hover:from-orange-500 hover:to-red-600 transition-all duration-200 transform hover:scale-105 flex items-center space-x-2 flex-shrink-0">
                    <Search className="h-5 w-5" />
                  </button>
                </div>
              </div>
         
            </div>

            {/* Right Images Grid */}
            <div className="relative animate-slideInRight md:w-[50%]">
              {/* Main Hero Image */}
              <div className="relative h-screen flex items-center justify-end ">
                <img
                  src="https://php82.kreativdev.com/bulistio/demo/assets/img/hero-section/664af3245b2b4.png"
                  alt="Business Hero Section  "
                  className="w-[100%]  md:h-full object-cover rounded-2xl shadow-2xl transform  transition-transform duration-500"
                />

                {/* Floating Animation Overlay */}
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute top-4 right-4 w-3 h-3 bg-orange-400 rounded-full animate-ping"></div>
                  <div className="absolute bottom-8 left-8 w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                  <div className="absolute top-1/3 left-4 w-4 h-4 bg-green-400 rounded-full animate-bounce"></div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-br from-orange-400 to-red-500 rounded-full opacity-80 animate-float"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-80 animate-float-delayed"></div>

              {/* Glowing Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-orange-400/10 to-red-500/10 rounded-2xl blur-xl -z-10 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <CategoriesSlider/>
    <Component/>
    <HowItWork/>
    <Count/>
    <Price/>
    <Footer/>
  </>
  )
}
