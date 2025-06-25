

import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Autoplay } from "swiper/modules"
import { Phone ,Send,X} from "lucide-react"

// Import Swiper styles
import "swiper/css"
import "swiper/css/navigation"
import { useContext, useState } from "react"
import  { AuthContext } from "@/context"
import { Link } from "react-router-dom"
import { Toaster } from "sonner"

export default function HolidayCategory() {
  const {categoryData,HandleSubmitEnquiry,isPopupOpen,setIsPopupOpen,setPopupHeadline,popupHeadline}=useContext(AuthContext)
  


 const openPopup = (headline) => {
  setIsPopupOpen(true)
  setPopupHeadline(headline)
 }
  const closePopup = () => {
    setIsPopupOpen(false)
    setPopupHeadline("")
  }
  const handleRequestCallback = () => {
    
  }
  console.log(categoryData);
  
  const packages = [
    {
      id: 1,
      title: "Kerala Tour Packages",
      mainImage: "./imgs/cetegrory-1.png",
      thumbnails: [
        "/placeholder.svg?height=80&width=80",
        "/placeholder.svg?height=80&width=80",
        "/placeholder.svg?height=80&width=80",
      ],
      subtitle: "EXPERIENCE THE MAGIC OF KERALA'S HOUSEBOATS!",
      bgColor: "from-cyan-400 to-blue-500",
    },
    {
      id: 2,
      title: "Leh Ladakh Bike Tour Packages",
      mainImage: "./imgs/cetegrory-2.png",
      subtitle: "LEH LADAKH BIKE TOUR PACKAGES",
      bgColor: "from-orange-400 to-red-500",
      hasMotorcycle: true,
    },
    {
      id: 3,
      title: "Kashmir Honeymoon Packages",
      mainImage: "./imgs/cetegrory-3.png",
      thumbnails: ["/placeholder.svg?height=80&width=80", "/placeholder.svg?height=80&width=80"],
      subtitle: "Kashmir Honeymoon Packages",
      bgColor: "from-green-400 to-teal-500",
      logo: "maximtrip",
    },
    {
      id: 4,
      title: "Kashmir Tour Packages",
      mainImage: "./imgs/cetegrory-2.png",
      subtitle: "Kashmir Tour Packages",
      bgColor: "from-indigo-500 to-purple-600",
    },
    {
      id: 4,
      title: "Kashmir Tour Packages",
      mainImage: "./imgs/cetegrory-2.png",
      subtitle: "Kashmir Tour Packages",
      bgColor: "from-indigo-500 to-purple-600",
    },
    
  ]

  return (
  <>
  <Toaster position="top-center"/>
      <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-4xl md:text-3xl font-bold text-gray-800 mb-2">
            <span className="text-[#ce3c3d]">Holiday</span> Category
          </h2>
          <div className="w-20 h-1 bg-[#ce3c3d] rounded"></div>
        </div>

        {/* categoryData Slider */}
        <div className="relative">
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            navigation={{
              nextEl: ".holiday-swiper-button-next",
              prevEl: ".holiday-swiper-button-prev",
            }}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 24,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 24,
              },
            }}
            loop={true}
            className="holiday-categoryData-swiper"
          >
            {categoryData.map((pkg) => (
               <>
              <SwiperSlide key={pkg.id}>
               
                  <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  {/* Card Image Section */}
                <Link to={`/holiday/${pkg.Slug}`}>
                    <div className={`relative h-54 bg-gradient-to-br `}>
                    {/* Main Content */}
                    <div className="relative h-full">
                      {/* Background Image */}
                      <div
                        className="absolute inset-0 bg-no-repeat  bg-cover rounded-lg bg-red-500"
                        style={{
                          backgroundImage: `url(${pkg.image})`,
                        }}
                      ></div>

                    </div>
                  </div>
            </Link>
                  {/* Card Footer */}
                  <div className="p-4">
                    <h4 className="text-gray-800 font-semibold text-lg mb-4">{pkg.headline}</h4>

                    <div className="flex items-center space-x-2">
                      <div className="flex-shrink-0 w-8 h-8 border-2 border-[#ce3c3d] rounded-lg flex items-center justify-center">
                        <Phone className="w-5 h-5 text-[#ce3c3d]" />
                      </div>
                      <button
                        className="flex-1 bg-[#ce3c3d] hover:bg-orange-600 text-white font-semibold py-2 px-3 rounded-lg transition-colors duration-300"
                        style={{ backgroundColor: "#ce3c3d" }}
                        onMouseEnter={(e) => (e.target.style.backgroundColor = "#b83334")}
                        onMouseLeave={(e) => (e.target.style.backgroundColor = "#ce3c3d")}
                        onClick={() => openPopup(pkg.headline)}
                      >
                        Request Callback
                      </button>
                    </div>
                  </div>
                
                </div>

                
              
              </SwiperSlide>


                </>
            ))}
          </Swiper>

   {/* Popup Modal */}
      {isPopupOpen && (
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-[rgba(0,0,0,0.5)]  flex items-center justify-center p-2 z-50">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-xl mx-auto relative animate-in fade-in duration-200">
            {/* Close button */}
            <button
              onClick={closePopup}
              className="absolute -top-2 -right-2 bg-[#ce3c3d] hover:bg-orange-600 text-white rounded-full p-2 transition-colors z-10"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Popup content */}
            <div className="p-2">
              <h2 className="text-xl font-semibold text-gray-800 mb-6 text-center">{popupHeadline}</h2>

              <form  className="space-y-4" onSubmit={HandleSubmitEnquiry}>
              <input type="hidden" name="packageName" value={popupHeadline} />
                {/* Full Name */}
                <div>
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Full Name"
                   
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ce3c3d] focus:border-transparent"
                    required
                  />
                </div>

                {/* Email */}
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ce3c3d] focus:border-transparent"
                    required
                  />
                </div>

                {/* Mobile Number */}
                <div>
                  <input
                    type="tel"
                    name="mobile"
                    placeholder="Enter Mobile no."
                    
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ce3c3d] focus:border-transparent"
                    required
                  />
                </div>

                {/* Travel Date and Travellers Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="date"
                      name="date"
                      placeholder="Travel Date"
                      
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ce3c3d] focus:border-transparent"
                    />
                  </div>
                  <div>
                    <select
                      name="members"
                      
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ce3c3d] focus:border-transparent bg-white"
                    >
                      <option value="1 Travellers">1 Travellers</option>
                      <option value="2 Travellers">2 Travellers</option>
                      <option value="3 Travellers">3 Travellers</option>
                      <option value="4 Travellers">4 Travellers</option>
                      <option value="5+ Travellers">5+ Travellers</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <textarea
                    name="message"
                    placeholder="Message..."
                   
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ce3c3d] focus:border-transparent resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-[#ce3c3d] hover:bg-orange-600 text-white py-3 px-6 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  Submit Enquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
          {/* Custom Navigation Buttons */}
          <div className="holiday-swiper-button-prev absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 z-10 bg-white shadow-lg hover:shadow-xl text-gray-700 p-3 rounded-full transition-all duration-300 cursor-pointer group">
            <svg
              className="w-6 h-6 group-hover:scale-110 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </div>

          <div className="holiday-swiper-button-next absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 z-10 bg-white shadow-lg hover:shadow-xl text-gray-700 p-3 rounded-full transition-all duration-300 cursor-pointer group">
            <svg
              className="w-6 h-6 group-hover:scale-110 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  </>
  )
}
