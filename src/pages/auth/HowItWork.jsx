"use client"
import { motion } from "framer-motion"
import { Grid3X3, MapPin, Briefcase } from "lucide-react"
import { Button } from "@/components/ui/button"

const steps = [
  {
    id: 1,
    number: "01",
    title: "Choose A Category",
    icon: Grid3X3,
    description: "Browse through various business categories to find what you're looking for",
  },
  {
    id: 2,
    number: "02",
    title: "Select Favorite Place",
    icon: MapPin,
    description: "Pick your preferred location from the available options",
  },
  {
    id: 3,
    number: "03",
    title: "Explore Selected Place",
    icon: Briefcase,
    description: "Discover and explore your chosen business location",
  },
]

const backgroundShapes = [
  { id: 1, color: "bg-green-200", size: "w-24 h-24", position: "top-16 left-20", rotation: "rotate-12" },
  { id: 2, color: "bg-blue-200", size: "w-32 h-32", position: "top-32 right-80", rotation: "-rotate-12" },
  { id: 3, color: "bg-purple-200", size: "w-20 h-20", position: "bottom-32 left-10", rotation: "rotate-45" },
  { id: 4, color: "bg-yellow-200", size: "w-28 h-28", position: "bottom-20 right-20", rotation: "-rotate-45" },
  { id: 5, color: "bg-pink-200", size: "w-16 h-16", position: "top-1/2 right-10", rotation: "rotate-12" },
]

const StepCard = ({ step, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 0.6,
        delay: index * 0.2,
        ease: "easeOut",
      }}
      whileHover={{
        y: -10,
        transition: { duration: 0.3, ease: "easeOut" },
      }}
      className="relative bg-white rounded-2xl border border-gray-200 p-8 shadow-sm hover:shadow-lg transition-all duration-300 group "
    >
     <div className="   relative p-4">
     <div className="absolute top-0 right-0 bg-[#f7715e] w-full h-full opacity-20 duration-300 rounded-2xl">

     </div>
         {/* Large Step Number */}
      <div className="">
        <span className="text-6xl font-bold text-gray-700 group-hover:text-gray-300 transition-colors duration-300">
          {step.number}
        </span>
      </div>

      {/* Icon Container */}
      <div className="relative z-10 mb-6 mt-12">
        <div className="w-16 h-16 bg-coral-100 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
          <step.icon className="w-8 h-8 text-[#f7715e]" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-coral-600 transition-colors duration-300">
          {step.title}
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
      </div>
     </div>

      {/* Hover Effect Background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-coral-50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        initial={false}
      />
    </motion.div>
  )
}

export default function HowItWork() {
  return (
    <section className="relative py-20 bg-gray-50 overflow-hidden md:px-20 px-10">
      {/* Background Animated Shapes */}
      {backgroundShapes.map((shape) => (
        <motion.div
          key={shape.id}
          className={`absolute ${shape.size} ${shape.color} ${shape.position} ${shape.rotation} rounded-3xl opacity-40`}
          animate={{
            y: [0, -15, 0],
            rotate: [0, 5, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: shape.id * 0.8,
          }}
        />
      ))}

      <div className="relative z-10 container mx-auto px-4">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-16">
          {/* Title */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-8 lg:mb-0"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">How Bulistio Works</h2>
          </motion.div>

          {/* Explore Button */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Button
              size="lg"
              className="bg-coral-500 hover:bg-coral-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              Explore Listings
            </Button>
          </motion.div>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <StepCard key={step.id} step={step} index={index} />
          ))}
        </div>

        {/* Connecting Lines (Desktop Only) */}
        <div className="hidden lg:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl">
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.8 }}
            className="flex justify-between items-center"
          >
            <div className="w-1/3 h-px bg-gradient-to-r from-transparent via-coral-300 to-transparent"></div>
            <div className="w-1/3 h-px bg-gradient-to-r from-transparent via-coral-300 to-transparent"></div>
          </motion.div>
        </div>
      </div>

      {/* Floating Animation Elements */}
      <motion.div
        className="absolute top-1/4 left-1/3 w-3 h-3 bg-coral-400 rounded-full opacity-60"
        animate={{
          y: [0, -20, 0],
          x: [0, 15, 0],
        }}
        transition={{
          duration: 5,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/3 w-4 h-4 bg-blue-400 rounded-full opacity-60"
        animate={{
          y: [0, 20, 0],
          x: [0, -10, 0],
        }}
        transition={{
          duration: 6,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 2,
        }}
      />
    </section>
  )
}
