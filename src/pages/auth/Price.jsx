"use client"
import { motion, AnimatePresence } from "framer-motion"
import { Gift, Check, X } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"

const billingPeriods = [
  { id: "monthly", label: "Monthly" },
  { id: "yearly", label: "Yearly" },
  { id: "lifetime", label: "Lifetime" },
]

const pricingData = {
  monthly: {
    silver: { price: 19, listings: 3, images: 3, amenities: 3, features: 3 },
    gold: { price: 39, listings: 5, images: 5, amenities: 5, features: 5 },
    platinum: { price: 59, listings: 10, images: 10, amenities: 10, features: 10 },
  },
  yearly: {
    silver: { price: 99, listings: 3, images: 3, amenities: 3, features: 3 },
    gold: { price: 199, listings: 5, images: 5, amenities: 5, features: 5 },
    platinum: { price: 299, listings: 10, images: 10, amenities: 10, features: 10 },
  },
  lifetime: {
    silver: { price: 499, listings: 3, images: 3, amenities: 3, features: 3 },
    gold: { price: 999, listings: 5, images: 5, amenities: 5, features: 5 },
    platinum: { price: 1499, listings: 10, images: 10, amenities: 10, features: 10 },
  },
}

const backgroundShapes = [
  { id: 1, color: "bg-purple-200", size: "w-24 h-24", position: "top-20 left-10", rotation: "rotate-12" },
  { id: 2, color: "bg-blue-200", size: "w-32 h-32", position: "top-10 right-20", rotation: "-rotate-12" },
  { id: 3, color: "bg-green-200", size: "w-20 h-20", position: "bottom-32 left-20", rotation: "rotate-45" },
  { id: 4, color: "bg-pink-200", size: "w-28 h-28", position: "bottom-20 right-10", rotation: "-rotate-45" },
]

const PricingCard = ({ plan, data, isPopular, index, activePeriod }) => {
  const isGold = plan === "gold"

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: "easeOut",
      }}
      whileHover={{
        y: -10,
        transition: { duration: 0.3 },
      }}
      className={`relative rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 ${
        isGold ? "bg-[#f9725f] text-white" : "bg-white text-gray-900"
      }`}
    >
      {/* Popular Badge */}
      {isPopular && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.5, type: "spring" }}
          className="absolute -top-3 left-1/2 transform -translate-x-1/2"
        >
          <span className="bg-white text-[#f9725f] px-4 py-1 rounded-full text-sm font-semibold">Popular</span>
        </motion.div>
      )}

      {/* Plan Header */}
      <div className="flex items-center gap-3 mb-6">
        <div
          className={`w-12 h-12 rounded-2xl flex items-center justify-center ${
            isGold ? "bg-white/20" : "bg-coral-100"
          }`}
        >
          <Gift className={`w-6 h-6 ${isGold ? "text-white" : "text-[#f9725f]"}`} />
        </div>
        <h3 className="text-2xl font-bold capitalize">{plan}</h3>
      </div>

      {/* Price */}
      <div className="mb-6">
        <motion.div
          key={`${plan}-${activePeriod}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="flex items-baseline gap-2"
        >
          <span className="text-4xl font-bold">${data.price}</span>
          <span className={`text-lg ${isGold ? "text-white/80" : "text-gray-600"}`}>
            / {activePeriod === "yearly" ? "Yearly" : activePeriod === "monthly" ? "Monthly" : "Lifetime"}
          </span>
        </motion.div>
      </div>

      {/* What's Included */}
      <div className="mb-8">
        <h4 className={`text-lg font-semibold mb-4 ${isGold ? "text-white" : "text-gray-900"}`}>What's Included</h4>

        <div className="space-y-3">
          {/* Listings */}
          <div className="flex items-center gap-3">
            <div
              className={`w-5 h-5 rounded-full flex items-center justify-center ${
                isGold ? "bg-white/20" : "bg-green-100"
              }`}
            >
              <Check className={`w-3 h-3 ${isGold ? "text-white" : "text-green-600"}`} />
            </div>
            <span className={`text-sm ${isGold ? "text-white/90" : "text-gray-700"}`}>Listings ({data.listings})</span>
          </div>

          {/* Images Per Listing */}
          <div className="flex items-center gap-3">
            <div
              className={`w-5 h-5 rounded-full flex items-center justify-center ${
                isGold ? "bg-white/20" : "bg-green-100"
              }`}
            >
              <Check className={`w-3 h-3 ${isGold ? "text-white" : "text-green-600"}`} />
            </div>
            <span className={`text-sm ${isGold ? "text-white/90" : "text-gray-700"}`}>
              Images Per Listings ({data.images})
            </span>
          </div>

          {/* Enquiry Form */}
          <div className="flex items-center gap-3">
            {plan === "silver" ? (
              <div className="w-5 h-5 rounded-full flex items-center justify-center bg-red-100">
                <X className="w-3 h-3 text-red-600" />
              </div>
            ) : (
              <div
                className={`w-5 h-5 rounded-full flex items-center justify-center ${
                  isGold ? "bg-white/20" : "bg-green-100"
                }`}
              >
                <Check className={`w-3 h-3 ${isGold ? "text-white" : "text-green-600"}`} />
              </div>
            )}
            <span className={`text-sm ${isGold ? "text-white/90" : "text-gray-700"}`}>Enquiry Form</span>
          </div>

          {/* Video */}
          <div className="flex items-center gap-3">
            {plan === "silver" ? (
              <div className="w-5 h-5 rounded-full flex items-center justify-center bg-red-100">
                <X className="w-3 h-3 text-red-600" />
              </div>
            ) : (
              <div
                className={`w-5 h-5 rounded-full flex items-center justify-center ${
                  isGold ? "bg-white/20" : "bg-green-100"
                }`}
              >
                <Check className={`w-3 h-3 ${isGold ? "text-white" : "text-green-600"}`} />
              </div>
            )}
            <span className={`text-sm ${isGold ? "text-white/90" : "text-gray-700"}`}>Video</span>
          </div>

          {/* Amenities Per Listing */}
          <div className="flex items-center gap-3">
            <div
              className={`w-5 h-5 rounded-full flex items-center justify-center ${
                isGold ? "bg-white/20" : "bg-green-100"
              }`}
            >
              <Check className={`w-3 h-3 ${isGold ? "text-white" : "text-green-600"}`} />
            </div>
            <span className={`text-sm ${isGold ? "text-white/90" : "text-gray-700"}`}>
              Amenities Per Listing ({data.amenities})
            </span>
          </div>

          {/* Features Per Listing */}
          <div className="flex items-center gap-3">
            <div
              className={`w-5 h-5 rounded-full flex items-center justify-center ${
                isGold ? "bg-white/20" : "bg-green-100"
              }`}
            >
              <Check className={`w-3 h-3 ${isGold ? "text-white" : "text-green-600"}`} />
            </div>
            <span className={`text-sm ${isGold ? "text-white/90" : "text-gray-700"}`}>
              Features Per Listing ({data.features})
            </span>
          </div>
        </div>

        {/* Show More */}
        <button
          className={`text-sm font-medium mt-4 hover:underline ${
            isGold ? "text-white/80 hover:text-white" : "text-[#f9725f] hover:text-coral-600"
          }`}
        >
          Show More
        </button>
      </div>

      {/* Purchase Button */}
      <Button
        className={`w-full py-3 rounded-2xl font-semibold transition-all duration-300 ${
          isGold
            ? "bg-white text-[#f9725f] hover:bg-gray-100"
            : "bg-transparent border-2 border-[#f9725f] text-[#f9725f] hover:bg-[#f9725f] hover:text-white"
        }`}
        variant={isGold ? "default" : "outline"}
      >
        Purchase
      </Button>
    </motion.div>
  )
}

export default function Component() {
  const [activePeriod, setActivePeriod] = useState("yearly")

  return (
    <section className="relative py-20 bg-gray-50 overflow-hidden">
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
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: shape.id * 0.5,
          }}
        />
      ))}

      <div className="relative z-10 container mx-auto px-4">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">Most Affordable Package</h2>

          {/* Tab Navigation */}
          <div className="inline-flex bg-[#feedea] rounded-full px-10 py-2">
            {billingPeriods.map((period) => (
              <button
                key={period.id}
                onClick={() => setActivePeriod(period.id)}
                className={`px-8 py-4 rounded-full font-medium transition-all duration-300 ${
                  activePeriod === period.id
                    ? "bg-[#f9725f] text-white shadow-md"
                    : "text-coral-600 hover:text-coral-700"
                }`}
              >
                {period.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <AnimatePresence mode="wait">
            {Object.entries(pricingData[activePeriod]).map(([plan, data], index) => (
              <PricingCard
                key={`${plan}-${activePeriod}`}
                plan={plan}
                data={data}
                isPopular={plan === "gold"}
                index={index}
                activePeriod={activePeriod}
              />
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
