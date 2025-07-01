"use client"

import { useState } from "react"
import { Phone, Mail, MapPin } from "lucide-react"
import Footer from "@/footer/Footer"
import Navbar from "@/components/navbar/Navbar"
import { baseUrl } from "@/utils/constant"
import axios from "axios"
import { toast, Toaster } from "sonner"
export default function ContactPage() {
  const [formData, setState] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setState((prev) => ({ ...prev, [name]: value }))
  }

  // const handleSubmit = (e) => {
  //   e.preventDefault()
  //   console.log("Form submitted:", formData)
  //   // Add your form submission logic here
  // }

    const handleSend = async (e) => {
      e.preventDefault()

    try {
      const data =await fetch(`${baseUrl}/contact/send-email`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }).then((res) => { 
        if (res.ok) {
          setState({
            name: "",
            email: "",
            phone: "",
            subject: "",
            message: "",
          })
        }
        toast.success("Message sent successfully");
      })
    } catch (error) {
      console.log(error);
      
    }
  };

  return (
  <>
  <Toaster  position="top-center"/>
  <Navbar/>
      <div className="max-w-7xl mx-auto p-4 md:p-6 lg:p-8">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Contact Information */}
        <div className="lg:w-1/3">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="space-y-6">
              <div className="flex items-start">
                <Phone className="h-6 w-6 text-[#ce3c3d] mr-3 flex-shrink-0" />
                <div>
                  <h3 className="font-medium text-gray-700">Have Questions? Call Us</h3>
                  <p className="text-gray-600">9797996205</p>
                </div>
              </div>

              <div className="flex items-start">
                <Mail className="h-6 w-6 text-[#ce3c3d] mr-3 flex-shrink-0" />
                <div>
                  <h3 className="font-medium text-gray-700">Write us on</h3>
                  <p className="text-gray-600">holiday@maximtrip.in</p>
                </div>
              </div>

              <div className="flex items-start">
                <MapPin className="h-6 w-6 text-[#ce3c3d] mr-3 flex-shrink-0" />
                <div>
                  <h3 className="font-medium text-gray-700">Address</h3>
                  <p className="text-gray-600">Alluchi Bagh Sector A Near Khadi Mill Road,,Srinagar,Jammu & Kashmir,India,190008</p>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-[#ce3c3d] mt-8 mb-4">Find Us</h2>

          {/* Map Container */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
          
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.4247578663712!2d74.7972289!3d34.0586242!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e18f92f49b4379%3A0xb4d1c777e9a3ae02!2sMaximTrip!5e0!3m2!1sen!2sin!4v1751278308176!5m2!1sen!2sin"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="MaximTrip Location"
              className="w-full"
            ></iframe>
            <div className="p-3 text-sm text-gray-600">
              <div className="flex justify-between items-center">
                <div>MaximTrip</div>
                <div>View larger map</div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:w-2/3">
          <div className="bg-white rounded-lg shadow-md p-6">
            <form onSubmit={handleSend} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ce3c3d]"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.from}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ce3c3d]"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ce3c3d]"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ce3c3d]"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ce3c3d]"
                ></textarea>
              </div>

              <div className="flex justify-center">
                <button
                  type="submit"
                  className="px-6 py-2 bg-[#ce3c3d] text-white font-medium rounded-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-[#ce3c3d] focus:ring-offset-2 transition-colors"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
  </>
  )
}
