"use client"
import { Facebook, Linkedin, Twitter, MapPin, Phone, Mail, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Footer() {
  return (
    <footer className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            {/* Logo */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-[#f9725f] rounded-lg flex items-center justify-center">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-gray-900">BuListio</span>
            </div>

            {/* Description */}
            <p className="text-gray-600 text-sm leading-relaxed mb-8 max-w-xs">
              It is a long established fact that a reader will be distracted by the readable content of a page when
              looking at its layout.
            </p>

            {/* Social Media Icons */}
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 bg-coral-100 rounded-lg flex items-center justify-center hover:bg-coral-200 transition-colors duration-300"
              >
                <Facebook className="w-5 h-5 text-[#f9725f]" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-coral-100 rounded-lg flex items-center justify-center hover:bg-coral-200 transition-colors duration-300"
              >
                <Linkedin className="w-5 h-5 text-[#f9725f]" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-coral-100 rounded-lg flex items-center justify-center hover:bg-coral-200 transition-colors duration-300"
              >
                <Twitter className="w-5 h-5 text-[#f9725f]" />
              </a>
            </div>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-6">Useful Links</h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-gray-600 hover:text-[#f9725f] transition-colors duration-300">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-[#f9725f] transition-colors duration-300">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-[#f9725f] transition-colors duration-300">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-6">Contact Us</h3>
            <div className="space-y-4">
              {/* Address */}
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 mt-0.5">
                  <MapPin className="w-5 h-5 text-[#f9725f]" />
                </div>
                <span className="text-gray-600 text-sm">450 Young Road, New York, USA</span>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-3">
                <div className="w-5 h-5">
                  <Phone className="w-5 h-5 text-[#f9725f]" />
                </div>
                <span className="text-gray-600 text-sm">+701 - 1111 - 2222 - 333</span>
              </div>

              {/* Email */}
              <div className="flex items-center gap-3">
                <div className="w-5 h-5">
                  <Mail className="w-5 h-5 text-[#f9725f]" />
                </div>
                <span className="text-gray-600 text-sm">bulistio@example.com</span>
              </div>
            </div>
          </div>

          {/* Subscribe Us */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Subscribe Us</h3>
            <p className="text-gray-600 text-sm mb-6">Stay update with us and get offer!</p>

            {/* Email Subscription Form */}
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="Enter email"
                className="flex-1 border-gray-300 focus:border-[#f9725f] focus:ring-[#f9725f]"
              />
              <Button className="bg-[#f9725f] hover:bg-coral-600 text-white px-6 py-2 rounded-md font-medium">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-200 pt-8">
          <p className="text-center text-gray-500 text-sm">Copyright ©2024. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}
