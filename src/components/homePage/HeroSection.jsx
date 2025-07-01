

import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules"
import { MessageCircle, Phone, Send, X } from "lucide-react"

// Import Swiper styles
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/effect-fade"
import { useContext } from "react"
import { AuthContext } from "@/context"
import { Link } from "react-router-dom"

export default function HeroSection() {
  const {HandleSubmitEnquiry,isPopupOpen2,setIsPopupOpen2,setPopupHeadline,popupHeadline,packegesData}=useContext(AuthContext)

  const openPopup = (headline) => {
  setIsPopupOpen2(true)
  setPopupHeadline(headline)
 }
  const closePopup = () => {
    setIsPopupOpen2(false)
    setPopupHeadline("")
  }

  const slides = [
    {
      id: 1,
      title: "Kashmir Dream Horizons",
      duration: " 7 Days & 6 Nights",
      originalPrice: "INR 25199 ",
      currentPrice: " INR 23199 ",
      image: "./imgs/Kashmir-Dream-Horizons.png",
      alt: "Kashmir Dream Horizons",
    },
    {
      id: 2,
      title: "Kashmir Treasures of Nature Tour",
      duration: " 6 Days & 5 Nights",
      originalPrice: " INR 21799 ",
      currentPrice: "INR 19799 ",
      image: "./imgs/Kashmir-Treasures-of-Nature-Tour.png",
      alt: "Kashmir Treasures of Nature Tour",
    },
    {
      id: 3,
      title: "Kashmir Royal Experience",
      duration: " 5 Days & 4 Nights",
      originalPrice: " INR 17900  ",
      currentPrice: "INR 15900 ",
      image: "./imgs/Kashmir-Royal-Experience.png",
      alt: "Kashmir Royal Experience",
    },
    {
      id: 4,
      title: "Kerala Backwaters",
      duration: "5 Days & 4 Nights",
      originalPrice: "INR 16900",
      currentPrice: "INR 13900",
      image: "./imgs/slider-4.png",
      alt: "Kerala backwaters",
    },
  ]

  return (
   <>
     <div className="relative h-screen overflow-hidden ">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        spaceBetween={0}
        slidesPerView={1}
        navigation={{
          nextEl: ".swiper-button-next-custom",
          prevEl: ".swiper-button-prev-custom",
        }}
        pagination={{
          el: ".swiper-pagination-custom",
          clickable: true,
          bulletClass: "swiper-pagination-bullet-custom",
          bulletActiveClass: "swiper-pagination-bullet-active-custom",
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        effect="fade"
        fadeEffect={{
          crossFade: true,
        }}
        loop={true}
        className="h-full"
      >
        {packegesData.filter((item) => item.showInSlider === "Yes").map((slide) => (
          <SwiperSlide key={slide._id}>
            <div className="relative h-[95%] shadow-lg">
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage: `url(${slide.featureImage})`,
                }}
              >
                {/* Overlay */}
                <div className="absolute  w-full h-full  bg-opacity-10"></div>
              </div>

              {/* Content */}
              <div className="relative z-10 h-[90vh] md:h-[85vh] flex items-end justify-center">
                <div className="md:text-center text-white px-4 md:max-w-4xl mx-auto">
                  <h1 className="text-4xl md:text-6xl lg:text-4xl font-bold mb-4 leading-tight animate-fade-in">
                    {slide.headline}
                  </h1>
                  <p className="text-xl md:text-2xl lg:text-2xl mb-6 font-medium animate-fade-in-delay">
                    {slide.days}
                  </p>
                  <div className="mb-8 animate-fade-in-delay-2">
                    <span className="text-2xl md:text-xl font-bold mr-4">{slide.bestPrice}</span>
                    <span className="text-lg md:text-xl line-through text-gray-300">{slide.maxPrice}</span>
                  </div>
                  <button
                    className="hidden md:inline bg-[#ce3c3d] hover:bg-white text-white hover:text-[#ce3c3d] font-bold py-3 px-6 text-lg rounded-lg transition-all duration-300 transform hover:scale-105 animate-fade-in-delay-3"
                    
                    
                    onClick={() => openPopup(slide.headline)}
                  >
                    CONNECT WITH AN EXPERT
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

       {/* Popup Modal */}
      {isPopupOpen2 && (
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-[rgba(0,0,0,0.5)]  flex items-center justify-center p-2 z-50">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-xl mx-auto relative animate-in fade-in duration-200 md:px-14 px-8 py-4">
            {/* Close button */}
            <button
              onClick={closePopup}
              className="absolute -top-2 -right-2 bg-[#ce3c3d] hover:bg-orange-600 text-white rounded-full p-2 transition-colors z-10"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Popup content */}
            <div className="p-2">
              <h2 className="text-xl font-semibold text-gray-800 mb-6 text-center">Quick Enquiry</h2>

              <form  className="space-y-4" onSubmit={HandleSubmitEnquiry}>
              <input type="hidden" name="packageName" value="Home Page Enquiry" />
                {/* Full Name */}
                 <div>
                      <input
                        type="text"
                        placeholder="Destination"
                        name="distination"
                        required
                        
                        className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-gray-700"
                      />
                    </div>

              <div>
                      <input
                        type="date"
                        name="date"
                        placeholder="Date"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-gray-700"
                      />
                    </div>

                    <div>
                      <select
                        name="members"
                        required
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
                       required
                        className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-gray-700"
                      />
                    </div>

                    <div>
                      <input
                        type="tel"
                        name="mobile"
                        placeholder="Enter Mobile no."
                       required
                        className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-gray-700"
                      />
                    </div>

                    <div>
                      <input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                       required
                        className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-gray-700"
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
      <div className="swiper-button-prev-custom absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-3 rounded-full transition-all duration-300 cursor-pointer group">
        <svg
          className="w-6 h-6 group-hover:scale-110 transition-transform"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </div>

      <div className="swiper-button-next-custom absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-3 rounded-full transition-all duration-300 cursor-pointer group">
        <svg
          className="w-6 h-6 group-hover:scale-110 transition-transform"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>

      {/* Custom Pagination */}
      <div className="swiper-pagination-custom absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2"></div>

      {/* Chat Button */}
      <button
        className="hidden md:block fixed bottom-6 right-6 z-30 text-white p-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 animate-bounce-slow"
        style={{ backgroundColor: "#ce3c3d" }}
        onMouseEnter={(e) => (e.target.style.backgroundColor = "#b83334")}
        onMouseLeave={(e) => (e.target.style.backgroundColor = "#ce3c3d")}
      >
        <Link to="https://wa.me/919797996250"> 
          <MessageCircle className="w-6 h-6" />
        <span className="sr-only">Chat With Us</span>
        </Link>
      </button>

      <style jsx>{`
        .swiper-pagination-bullet-custom {
          width: 12px;
          height: 12px;
          background: rgba(255, 255, 255, 0.5);
          border-radius: 50%;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .swiper-pagination-bullet-active-custom {
          background: white;
          transform: scale(1.2);
        }
        
        .animate-fade-in {
          animation: fadeIn 1s ease-out;
        }
        
        .animate-fade-in-delay {
          animation: fadeIn 1s ease-out 0.2s both;
        }
        
        .animate-fade-in-delay-2 {
          animation: fadeIn 1s ease-out 0.4s both;
        }
        
        .animate-fade-in-delay-3 {
          animation: fadeIn 1s ease-out 0.6s both;
        }
        
        .animate-bounce-slow {
          animation: bounce 3s infinite;
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes bounce {
          0%, 20%, 53%, 80%, 100% {
            transform: translate3d(0,0,0);
          }
          40%, 43% {
            transform: translate3d(0, -5px, 0);
          }
          70% {
            transform: translate3d(0, -3px, 0);
          }
          90% {
            transform: translate3d(0, -2px, 0);
          }
        }
      `}</style>
    </div>
    <div className="md:hidden fixed bottom-0 left-1/2 transform -translate-x-1/2 z-20 w-full flex justify-around h-[40px] bg-white py-1 shadow-md ">
      <div className="call-now text-[#ce3c3d] flex items-center gap-2 text-[12px] border border-[#ce3c3d] py-2 px-4 rounded-bl-xl">
      <Phone className="w-3 h-3" />
      <a href="tel:+919797996250">Call Us</a>
      </div>
      <div className="call-now text-[white] bg-[#ce3c3d] flex items-center gap-2 text-[10px] border border-[#ce3c3d] py-2 px-4 "  onClick={() => openPopup()}>
      <Phone className="w-3 h-3" />
        Connect with export
      </div>

      <div className="call-now text-[#ce3c3d] flex items-center gap-2 text-[12px] border border-[#ce3c3d] py-2 px-4 rounded-br-xl">
      <Phone className="w-3 h-3" />
      <a href="https://wa.me/919797996250">Chat With Us</a>
      </div>
    </div>
   </>
  )
}
