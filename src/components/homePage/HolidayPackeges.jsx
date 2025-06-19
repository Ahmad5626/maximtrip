

import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Autoplay } from "swiper/modules"
import { Phone, MapPin, Clock, X, Send } from "lucide-react"

// Import Swiper styles
import "swiper/css"
import "swiper/css/navigation"
import { useContext } from "react"
import { AuthContext } from "@/context"
import { Link } from "react-router-dom"

export default function HolidayPackages() {
  const {packegesData,categoryData,HandleSubmitEnquiry,isPopupOpen,setIsPopupOpen,setPopupHeadline,popupHeadline}=useContext(AuthContext)

 const openPopup = (headline) => {
  setIsPopupOpen(true)
  setPopupHeadline(headline)
 }
  const closePopup = () => {
    setIsPopupOpen(false)
    setPopupHeadline("")
  }
  const packages = [
    {
      id: 2,
      title: "Himachal Highlights 5N/6D Shimla-Manali",
      duration: "5 Nights / 6 Days",
      location: "HIMACHAL PRADESH",
      price: "Rs.30000",
      originalPrice: "Rs.35000",
      image: "./imgs/packeges-1.png",
    },
    {
      id: 2,
      title: "Himachal Highlights 5N/6D Shimla-Manali",
      duration: "5 Nights / 6 Days",
      location: "HIMACHAL PRADESH",
      price: "Rs.30000",
      originalPrice: "Rs.35000",
      image: "./imgs/packeges-1.png",
    },
    {
      id: 3,
      title: "Timeless Himachal TOUR 4 NIGHTS 5 DAYS",
      duration: "4 Nights / 5 Days",
      location: "HIMACHAL PRADESH",
      price: "Rs.30000",
      originalPrice: "Rs.35000",
      image: "./imgs/packeges-1.png",
    },
    {
      id: 4,
      title: "Kerala Delight Backwaters to Hills",
      duration: "2 Nights / 3 Days",
      location: "Kerala",
      price: "Rs.6000",
      originalPrice: "Rs.8000",
      image: "./imgs/packeges-1.png",
    },
    {
      id: 5,
      title: "Kashmir Paradise Valley Tour",
      duration: "5 Nights / 6 Days",
      location: "JAMMU & KASHMIR",
      price: "Rs.25000",
      originalPrice: "Rs.30000",
      image: "./imgs/packeges-1.png",
    },
    {
      id: 6,
      title: "Goa Beach Holiday Special",
      duration: "3 Nights / 4 Days",
      location: "GOA",
      price: "Rs.15000",
      originalPrice: "Rs.18000",
      image: "./imgs/packeges-1.png",
    },
  ]

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-4xl md:text-3xl font-bold text-gray-800 mb-2">
            <span className="text-[#ce3c3d]">Holiday</span> Packages
          </h2>
          <div className="w-20 h-1 bg-[#ce3c3d] rounded"></div>
        </div>

        {/* Packages Slider */}
        <div className="relative">
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            navigation={{
              nextEl: ".packages-swiper-button-next",
              prevEl: ".packages-swiper-button-prev",
            }}
            autoplay={{
              delay: 5000,
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
            className="packages-swiper"
          >
            {packegesData.map((pkg) => (
              <SwiperSlide key={pkg.id}>
                
                  <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  {/* Card Image Section */}
                  <Link to={  `/packegesdetails/${pkg._id}`}>
                  <div className="relative h-60 overflow-hidden">
                    
                     
                      <div
                        className="h-full bg-cover bg-center"
                        style={{
                          backgroundImage: `url(${pkg.heroImage})`,
                        }}
                      >
                        {/* <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div> */}
                      </div>
                   
                  </div>
                  </Link>

                  {/* Card Content */}
                  <div className="p-4">
                    {/* Package Title */}
                    <h4 className="text-gray-800 font-semibold text-sm mb-0 line-clamp-2 min-h-[3.5rem]">
                      {pkg.headline}
                    </h4>

                    {/* Package Details */}
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-gray-600 text-sm">
                        <Clock className="w-4 h-4 mr-2" />
                        <span>{pkg.days}</span>
                      </div>
                      <div className="flex items-center text-gray-600 text-sm">
                        <MapPin className="w-4 h-4 mr-2" />
                        <span>{pkg.address}</span>
                      </div>
                    </div>

                    {/* Pricing */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-2">
                        <span className="text-xl font-bold text-gray-800">{pkg.price}</span>
                        {pkg.originalPrice && (
                          <span className="text-sm text-gray-500 line-through">{pkg.originalPrice}</span>
                        )}
                      </div>
                      <button className="text-gray-600 hover:text-gray-800 font-medium text-sm border border-gray-300 hover:border-gray-400 px-4 py-2 rounded-lg transition-colors">
                        View More
                      </button>
                    </div>

                    {/* Action Buttons */}
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
          <div className="packages-swiper-button-prev absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 z-10 bg-white shadow-lg hover:shadow-xl text-gray-700 p-3 rounded-full transition-all duration-300 cursor-pointer group">
            <svg
              className="w-6 h-6 group-hover:scale-110 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </div>

          <div className="packages-swiper-button-next absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 z-10 bg-white shadow-lg hover:shadow-xl text-gray-700 p-3 rounded-full transition-all duration-300 cursor-pointer group">
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

      <style jsx>{`
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  )
}
