

import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Autoplay } from "swiper/modules"
import { ArrowRight } from "lucide-react"

// Import Swiper styles
import "swiper/css"
import "swiper/css/navigation"
import { use, useContext } from "react"
import { AuthContext } from "@/context"
import { Link } from "react-router-dom"
import Navbar from "@/components/navbar/Navbar"

export default function AllDestinations() {
  const {destinationsData}=useContext(AuthContext)
  
  console.log(destinationsData);
  
  

  return (
    <>
    <Navbar/>
        <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-4xl md:text-3xl font-bold text-gray-800 mb-2">
              <span className="text-[#ce3c3d]">Popular </span> Destinations

            </h2>
            <div className="w-20 h-1 bg-[#ce3c3d] rounded"></div>
          </div>

      
         
        </div>

        {/* destinationsData Slider */}
        <div className="flex space-x-5 space-y-5 flex-wrap ">
          
            {destinationsData?.map((blog) => (
              
                <div className="w-full md:w-[22%]">
                    <Link to={`/blog/${blog._id}`} key={blog._id}>
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
          
                </div>

                
            ))}
            
            
            
          

         
        </div>

      
      </div>
    </section>
    </>
  )
}
