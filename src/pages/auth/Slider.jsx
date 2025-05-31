"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  ChevronLeft,
  ChevronRight,
  Building2,
  Utensils,
  Dumbbell,
  Plane,
  Hotel,
  Scissors,
} from "lucide-react"
import { Button } from "@/components/ui/button"

const categories = [
  { id: 1, name: "Salon", icon: Scissors, count: 3, color: "bg-coral-500" },
  { id: 2, name: "Hospital", icon: Building2, count: 3, color: "bg-coral-500" },
  { id: 3, name: "Restaurant", icon: Utensils, count: 3, color: "bg-coral-500" },
  { id: 4, name: "Gymnasium", icon: Dumbbell, count: 2, color: "bg-coral-500" },
  { id: 5, name: "Travel", icon: Plane, count: 1, color: "bg-coral-500" },
  { id: 6, name: "Hotel", icon: Hotel, count: 1, color: "bg-coral-500" },
]

const backgroundShapes = [
  { id: 1, color: "bg-blue-200", size: "w-32 h-32", position: "top-20 left-10", rotation: "rotate-12" },
  { id: 2, color: "bg-green-200", size: "w-24 h-24", position: "top-32 right-20", rotation: "-rotate-12" },
  { id: 3, color: "bg-purple-200", size: "w-40 h-40", position: "top-10 right-80", rotation: "rotate-45" },
  { id: 4, color: "bg-yellow-200", size: "w-28 h-28", position: "bottom-20 left-20", rotation: "-rotate-45" },
  { id: 5, color: "bg-pink-200", size: "w-36 h-36", position: "bottom-32 right-10", rotation: "rotate-12" },
  { id: 6, color: "bg-indigo-200", size: "w-20 h-20", position: "top-1/2 left-5", rotation: "-rotate-12" },
]

export default function Component() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [itemsPerSlide, setItemsPerSlide] = useState(6)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerSlide(2)
      } else if (window.innerWidth < 1024) {
        setItemsPerSlide(4)
      } else {
        setItemsPerSlide(6)
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const totalSlides = Math.ceil(categories.length / itemsPerSlide)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides)
  }

  const getCurrentCategories = () => {
    const start = currentSlide * itemsPerSlide
    return categories.slice(start, start + itemsPerSlide)
  }

  return (
    <div className="relative min-h-[70vh] bg-gray-50 overflow-hidden">
      {/* Background Animated Shapes */}
      {backgroundShapes.map((shape) => (
        <motion.div
          key={shape.id}
          className={`absolute ${shape.size} ${shape.color} ${shape.position} ${shape.rotation} rounded-3xl opacity-30`}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: shape.id * 0.5,
          }}
        />
      ))}

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4">Most Popular Categories</h1>
        </motion.div>

        {/* Categories Grid */}
        <div className="relative max-w-6xl mx-auto">
          <motion.div
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <AnimatePresence mode="wait">
              {getCurrentCategories().map((category, index) => (
                <motion.div
                  key={`${currentSlide}-${category.id}`}
                  initial={{ opacity: 0, y: 50, scale: 0.8 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -50, scale: 0.8 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 100,
                  }}
                  whileHover={{
                    scale: 1.05,
                    y: -10,
                    transition: { duration: 0.2 },
                  }}
                  className="relative bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer group"
                >
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 bg-coral-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <category.icon className="w-8 h-8 text-[#f9725f]" />
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 text-center mb-10">{category.name}</h3>
                  <div className="absolute bottom-4 left-20 transform -translate-x-1/2 ">
                    <div className="w-8 h-8 bg-coral-100 rounded-full flex items-center justify-center ">
                      <span className="text-sm font-medium text-coral-600 bg-[#feedea] py-1 px-4">{category.count}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {totalSlides > 1 && (
            <>
              <Button
                variant="outline"
                size="icon"
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 w-12 h-12 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={prevSlide}
              >
                <ChevronLeft className="w-6 h-6" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 w-12 h-12 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={nextSlide}
              >
                <ChevronRight className="w-6 h-6" />
              </Button>
            </>
          )}
        </div>

        {totalSlides > 1 && (
          <motion.div
            className="flex justify-center mt-12 space-x-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ? "bg-coral-500 scale-125" : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </motion.div>
        )}
      </div>

      <motion.div
        className="absolute top-1/4 left-1/4 w-4 h-4 bg-coral-400 rounded-full opacity-60"
        animate={{ y: [0, -30, 0], x: [0, 20, 0] }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute top-3/4 right-1/4 w-6 h-6 bg-blue-400 rounded-full opacity-60"
        animate={{ y: [0, 25, 0], x: [0, -15, 0] }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />
    </div>
  )
}
