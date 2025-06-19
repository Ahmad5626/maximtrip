"use client"

import { Facebook, Twitter, Instagram, Youtube, Star } from "lucide-react"

export default function Footer() {
  const socialLinks = [
    {
      name: "Facebook",
      icon: Facebook,
      href: "#",
      bgColor: "bg-blue-600 hover:bg-blue-700",
    },
    {
      name: "Twitter",
      icon: Twitter,
      href: "#",
      bgColor: "bg-black hover:bg-gray-800",
    },
    {
      name: "Instagram",
      icon: Instagram,
      href: "#",
      bgColor: "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600",
    },
    {
      name: "YouTube",
      icon: Youtube,
      href: "#",
      bgColor: "bg-red-600 hover:bg-red-700",
    },
  ]

  return (
    <footer className="bg-white border-t-2 border-[#ce3c3d]">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          {/* Social Media Links */}
          <div className="flex items-center space-x-4">
            <span className="text-gray-700 font-medium">Follow Us On:</span>
            <div className="flex space-x-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-white transition-all duration-300 transform hover:scale-110 ${social.bgColor}`}
                  aria-label={`Follow us on ${social.name}`}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center">
            <p className="text-gray-600 text-sm md:text-base">
              Copyright © 2021-2025 <span className="font-semibold text-gray-800">MaximTrip</span>. All Right Reserved
            </p>
          </div>

          {/* Back to Flight Button */}
          <div>
            <button
              className="flex items-center space-x-2 bg-[#ce3c3d] hover:bg-orange-600 text-white font-medium px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
              style={{ backgroundColor: "#ce3c3d" }}
              onMouseEnter={(e) => (e.target.style.backgroundColor = "#b83334")}
              onMouseLeave={(e) => (e.target.style.backgroundColor = "#ce3c3d")}
            >
              <Star className="w-4 h-4 fill-current" />
              <span>Back To Flight</span>
            </button>
          </div>
        </div>

        {/* Mobile Responsive Adjustments */}
        <div className="md:hidden mt-4 pt-4 border-t border-gray-200">
          <div className="text-center space-y-3">
            <div className="flex justify-center space-x-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-white transition-all duration-300 ${social.bgColor}`}
                  aria-label={`Follow us on ${social.name}`}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
