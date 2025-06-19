

import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Autoplay } from "swiper/modules"
import { ArrowRight } from "lucide-react"

// Import Swiper styles
import "swiper/css"
import "swiper/css/navigation"
import { use, useContext } from "react"
import { AuthContext } from "@/context"
import { Link } from "react-router-dom"

export default function PopularDestinations() {
  const {blogData}=useContext(AuthContext)
  const destinations = [
    {
      id: 1,
      title: "Places to Visit in Gulmarg",
      image: "./imgs/PopularDestinations-1.jpg",
      description: "Snow-covered paradise with skiing and gondola rides",
    },
    {
      id: 2,
      title: "Places to Visit in Sonmarg",
      image: "./imgs/PopularDestinations-2.jpg",
      description: "Meadow of gold with pristine valleys and glaciers",
    },
    {
      id: 3,
      title: "Places to Visit in Pahalgam",
      image: "./imgs/PopularDestinations-1.jpg",
      description: "Valley of shepherds with scenic rivers and mountains",
    },
    {
      id: 4,
      title: "Places to Visit in Srinagar",
      image: "./imgs/PopularDestinations-2.jpg",
      description: "City of lakes with houseboats and Mughal gardens",
    },
    {
      id: 5,
      title: "Places to Visit in Leh",
      image: "./imgs/PopularDestinations-1.jpg",
      description: "High altitude desert with monasteries and adventure",
    },
    {
      id: 6,
      title: "Places to Visit in Kargil",
      image: "./imgs/PopularDestinations-1.jpg",
      description: "Gateway to Ladakh with dramatic landscapes",
    },
  ]
  console.log(blogData);
  
  

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-4xl md:text-3xl font-bold text-gray-800 mb-2">
              <span className="text-[#ce3c3d]">Travel </span> Blogs

            </h2>
            <div className="w-20 h-1 bg-[#ce3c3d] rounded"></div>
          </div>

          {/* View All Link */}
          <div className="hidden md:block">
            <button className="flex items-center space-x-2 text-blue-500 hover:text-blue-600 font-medium transition-colors group">
             <Link to="/allblog" className="flex items-center space-x-2">
               <span>View All Blogs</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
             </Link>
            </button>
          </div>
        </div>

        {/* blogData Slider */}
        <div className="relative">
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            navigation={{
              nextEl: ".destinations-swiper-button-next",
              prevEl: ".destinations-swiper-button-prev",
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
            className="blogData-swiper"
          >
            {blogData?.map((blog) => (
              <SwiperSlide key={blog._id}>
                <Link to={`/blog/${blog._id}`}>
                  <div className="group cursor-pointer">
                  <div className="relative h-64 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform group-hover:scale-105">
                    {/* Background Image */}
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                      style={{
                        backgroundImage: `url(${blog.image})`,
                      }}
                    ></div>

                  
                    <div className="absolute inset-0 flex flex-col justify-end p-6">
                      <h3 className="text-white font-semibold text-lg leading-tight mb-2 transform translate-y-0 group-hover:-translate-y-1 transition-transform duration-300">
                        {blog.title}
                      </h3>

                      {/* Description - appears on hover */}
                      <p className="text-white/90 text-sm opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                        {blog.shotDescription}
                      </p>
                    </div>

                    {/* Hover Effect Overlay */}
                    <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons */}
          <div className="destinations-swiper-button-prev absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 z-10 bg-white shadow-lg hover:shadow-xl text-gray-700 p-3 rounded-full transition-all duration-300 cursor-pointer group">
            <svg
              className="w-6 h-6 group-hover:scale-110 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </div>

          <div className="destinations-swiper-button-next absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 z-10 bg-white shadow-lg hover:shadow-xl text-gray-700 p-3 rounded-full transition-all duration-300 cursor-pointer group">
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

        {/* Mobile View All Button */}
        <div className="md:hidden mt-8 text-center">
          <button className="inline-flex items-center space-x-2 text-blue-500 hover:text-blue-600 font-medium transition-colors group">
            <Link to="/allblog">
              <span>View All Blogs</span>
            {/* <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /> */}
            </Link>
          </button>
        </div>
      </div>
    </section>
  )
}
