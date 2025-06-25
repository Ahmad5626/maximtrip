"use client"

import { useContext, useEffect, useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Autoplay } from "swiper/modules"
import { Phone, MapPin, Clock } from "lucide-react"

// Import Swiper styles
import "swiper/css"
import "swiper/css/navigation"
import { ChevronDown, ChevronUp } from "lucide-react"
import Navbar from "@/components/navbar/Navbar"
import Footer from "@/footer/Footer"
import { AuthContext } from "@/context/index"
import { Toaster } from "sonner"
import { useParams } from "react-router-dom"
import ScrolltoTop from "@/components/ScrolltoTop"
export default function PackageDetails() {
  const { HandleSubmitEnquiry, enquiryFormdata, handleChnageEnquiryFormData, packegesData } = useContext(AuthContext);
  const {id}=useParams()
  // console.log(packegesData);
// console.log(id);


  const [activeTab, setActiveTab] = useState("overview")
  const [expandedDay, setExpandedDay] = useState(null)
 const [newdata, setnewdata] = useState({})

  const tabs = [
    { id: "overview", label: "Overview" },
    { id: "itinerary", label: "Tour Itinerary" },
    { id: "inclusions", label: "Inclusions" },
    { id: "exclusions", label: "Exclusions" },
    { id: "terms", label: "Terms & Conditions" },
  ]

  const itinerary = [
    {
      day: 1,
      title: "Arrival and all day tour at Kochi",
      description:
        "Arrive at Kochi airport/railway station. Check into hotel and explore the historic Fort Kochi area, Chinese fishing nets, and local markets. Evening at leisure.",
    },
    {
      day: 2,
      title: "Arrival and all day tour at Munnar",
      description:
        "After breakfast, drive to Munnar (130 km, 4 hours). Check into hotel. Visit tea plantations, Mattupetty Dam, and Echo Point. Evening free for shopping.",
    },
    {
      day: 3,
      title: "Departure",
      description:
        "After breakfast, check out from hotel. Visit Eravikulam National Park if time permits. Drive back to Kochi for departure.",
    },
  ]

  // const handleChnageEnquiryFormData = (field, value) => {
  //   setFormData((prev) => ({ ...prev, [field]: value }))
  // }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  const toggleDay = (dayNumber) => {
    setExpandedDay(expandedDay === dayNumber ? null : dayNumber)
  }


  const packages = [
    {
      id: 2,

      image: "./imgs/packeges-1.png",
    },
    {

      image: "./imgs/packeges-1.png",
    },
    {
      id: 3,

      image: "./imgs/packeges-1.png",
    },
    {
      id: 4,

      image: "./imgs/packeges-1.png",
    },
    {
      id: 5,

      image: "./imgs/packeges-1.png",
    },
    {
      id: 6,

      image: "./imgs/packeges-1.png",
    },
  ]

useEffect(() => {
  setnewdata(packegesData?.filter((item) => item.slug === id)[0])
})



  return (
    <>
    
      <Toaster position="top-center" />
      <Navbar />
      <div className="bg-gray-50 min-h-screen py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left Content */}
           {packegesData.filter((item) => item.slug === id).map((item) => (
              <div className="flex-1">

              {/* slider */}
              <section className=" px-4 bg-white">
                <div className="max-w-[700px]   bg-red-400 ">
                  {/* Section Header */}
                  <div className="mb-12">


                  </div>

                  {/* Packages Slider */}
                  <div className="relative">
                   <img src={item.featureImage} className='w-full h-150 object-cover rounded-2xl' ></img>

                    {/* Custom Navigation Buttons */}
                  
                    
                  </div>
                </div>

                <style jsx>{`
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
              </section>



              <div className="bg-white rounded-lg shadow-sm p-6">
                {/* Package Title */}
                <h1 className="text-2xl font-bold text-gray-800 mb-6">{item.headline}</h1>

                {/* Tabs */}
                <div className="border-b border-gray-200 mb-6">
                  <nav className="flex space-x-8 overflow-x-auto">
                    {tabs.map((tab) => (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`py-3 px-1 border-b-2 font-medium text-sm whitespace-nowrap transition-colors ${activeTab === tab.id
                            ? "border-[#ce3c3d] text-orange-600"
                            : "border-transparent text-gray-500 hover:text-gray-700"
                          }`}
                      >
                        {tab.label}
                      </button>
                    ))}
                  </nav>
                </div>

                {/* Tab Content */}
                <div className="space-y-6">
                  {activeTab === "overview" && (
                    <div>
                      <p className="text-gray-700 leading-relaxed mb-4">
                        <div className="" dangerouslySetInnerHTML={{ __html: item.overview }}></div>
                      </p>
                     
                    </div>
                  )}

                  {activeTab === "itinerary" && (
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-4">Tour Itinerary</h3>
                      <div className="space-y-3">
                        {item.itinerary?.map((item) => (
                          <div key={item.day} className="border border-gray-200 rounded">
                            <button
                              onClick={() => toggleDay(item.day)}
                              className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition-colors"
                            >
                              <div className="flex items-center space-x-3">
                                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-medium">
                                  {item.day}
                                </div>
                                <span className="font-medium text-gray-800">{item.title}</span>
                              </div>
                              {expandedDay === item.day ? (
                                <ChevronUp className="w-5 h-5 text-gray-400" />
                              ) : (
                                <ChevronDown className="w-5 h-5 text-gray-400" />
                              )}
                            </button>
                            {expandedDay === item.day && (
                              <div className="px-4 pb-4 border-t border-gray-100">
                                <p className="text-gray-600 pt-3">{item.description}</p>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {activeTab === "inclusions" && (
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-4">Inclusions</h3>
                      <ul className="space-y-2 text-gray-700">
                        
                        {item.inclusions?.map((inclusion, index) => (
                          <li className="flex items-start">
                          <span className="text-green-500 mr-2">✓</span>
                         {inclusion}
                        </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {activeTab === "exclusions" && (
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-4">Exclusions</h3>
                      <ul className="space-y-2 text-gray-700">
                       
                       {item.exclusions?.map((exclusion, index) => (
                          <li className="flex items-start">
                          <span className="text-red-500 mr-2">✗</span>
                         {exclusion}
                        </li>
                       ))}
                      </ul>
                    </div>
                  )}

                  {activeTab === "terms" && (
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-4">Terms & Conditions</h3>
                      <div className="space-y-3 text-gray-700 text-sm">
                        {item.termsAndConditions?.map((term, index) => (
                          <p key={index}>{term}</p>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
           ))}

            {/* Right Sticky Booking Form */}
            <div className="w-full lg:w-96">
              <div className="sticky top-8">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                  {/* Blue Form Header */}
                  <div className="bg-[#ce3c3d] p-4 text-white font-medium text-center">
                    {newdata?.headline}
                  </div>

                  {/* Form */}
                  <form onSubmit={HandleSubmitEnquiry} className="p-6 space-y-4">
                  <input type="hidden" name="packageName" value={newdata?.headline} />
                   <div>
                      <input
                        type="text"
                        placeholder="Destination"
                        
                        name="packageName"
                        value={newdata?.headline}
                       
                        className="hidden w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-gray-700"
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        placeholder="Destination"
                        name="distination"
                        
                        
                        className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-gray-700"
                      />
                    </div>

                    <div>
                      <input
                        type="date"
                        name="date"
                        placeholder="Date"
                        
                        className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-gray-700"
                      />
                    </div>

                    <div>
                      <select
                        name="members"
                        
                        className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-gray-700 appearance-none bg-white"
                      >
                      <option value="Select Travellers">Select Travellers</option>
                        <option value="1 Travellers">1 Travellers</option>
                        <option value="2 Travellers">2 Travellers</option>
                        <option value="3 Travellers">3 Travellers</option>
                        <option value="4 Travellers">4 Travellers</option>
                        <option value="5+ Travellers">5+ Travellers</option>
                      </select>
                    </div>

                    <div>
                      <input
                        type="text"
                        name="fullName"
                        placeholder="Full Name"
                       
                        className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-gray-700"
                      />
                    </div>

                    <div>
                      <input
                        type="tel"
                        name="mobile"
                        placeholder="Enter Mobile no."
                       
                        className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-gray-700"
                      />
                    </div>

                    <div>
                      <input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                       
                        className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-gray-700"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-[#ce3c3d] hover:bg-orange-600 text-white font-medium py-3 px-4 rounded transition-colors duration-300"
                    >
                      Send Enquiry
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
