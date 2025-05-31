"use client"
import { motion } from "framer-motion"
import { FileText, Building2, Users, Trophy } from "lucide-react"
import { useState, useEffect } from "react"

const achievements = [
  {
    id: 1,
    number: 499,
    suffix: "+",
    label: "Total Listing",
    icon: FileText,
  },
  {
    id: 2,
    number: 199,
    suffix: "+",
    label: "Active Members",
    icon: Building2,
  },
  {
    id: 3,
    number: 299,
    suffix: "+",
    label: "Happy Users",
    icon: Users,
  },
  {
    id: 4,
    number: 500,
    suffix: "+",
    label: "Awards Winning",
    icon: Trophy,
  },
]

const CountUpAnimation = ({ end, duration = 2000, suffix = "" }) => {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (!isVisible) return

    let startTime = null
    const animate = (currentTime) => {
      if (startTime === null) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)

      setCount(Math.floor(progress * end))

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
  }, [isVisible, end, duration])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      onViewportEnter={() => setIsVisible(true)}
      className="text-3xl md:text-3xl lg:text-4xl font-bold text-white mb-2"
    >
      {count}
      {suffix}
    </motion.div>
  )
}

const AchievementCard = ({ achievement, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 0.8,
        delay: index * 0.2,
        ease: "easeOut",
      }}
      whileHover={{
        scale: 1.05,
        transition: { duration: 0.3 },
      }}
      className="text-center group cursor-pointer"
    >
      {/* Icon */}
      <motion.div
        className="flex justify-center mb-6"
        whileHover={{ scale: 1.1, rotate: 5 }}
        transition={{ duration: 0.3 }}
      >
        <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center">
          <achievement.icon className="w-12 h-12 md:w-16 md:h-16 text-white group-hover:text-blue-300 transition-colors duration-300" />
        </div>
      </motion.div>

      {/* Number with Count Up Animation */}
      <CountUpAnimation end={achievement.number} suffix={achievement.suffix} />

      {/* Label */}
      <motion.p
        className="text-lg md:text-xl text-gray-300 font-medium group-hover:text-white transition-colors duration-300"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.2 + 0.5 }}
      >
        {achievement.label}
      </motion.p>
    </motion.div>
  )
}

export default function Count() {
  return (
    <section className="relative min-h-[50vh] bg-[url(https://php82.kreativdev.com/bulistio/demo/assets/img/6530b4b2c6984.jpg)] overflow-hidden md:px-20 px-10">
      {/* Background Image/Pattern */}
     

      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400 rounded-full opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.6, 1, 0.6],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: Math.random() * 2,
            }}
          />
        ))}

        {/* Glowing Orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-32 h-32 bg-purple-500 rounded-full opacity-20 blur-xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-blue-500 rounded-full opacity-20 blur-xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.2, 0.3],
          }}
          transition={{
            duration: 5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 py-12">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-5xl font-bold text-white mb-4">See Our Achievements</h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100px" }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"
          />
        </motion.div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8 max-w-6xl mx-auto">
          {achievements.map((achievement, index) => (
            <AchievementCard key={achievement.id} achievement={achievement} index={index} />
          ))}
        </div>

        {/* Bottom Decorative Elements */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 1 }}
          className="flex justify-center mt-20"
        >
          <div className="flex space-x-2">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="w-2 h-2 bg-blue-400 rounded-full"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: i * 0.3,
                }}
              />
            ))}
          </div>
        </motion.div>
      </div>

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/30 to-transparent pointer-events-none" />
    </section>
  )
}
