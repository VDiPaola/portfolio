'use client'
import { motion } from 'framer-motion'

export default function Stars() {
  return (
    <div className="fixed inset-0 w-full h-screen bg-gradient-to-b from-indigo-900 via-purple-900 to-pink-800 overflow-hidden z-[-1]">
      {/* Fireflies */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute bg-yellow-300 rounded-full w-2 h-2"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            x: Math.random() * 100 - 50,
            y: Math.random() * 100 - 50,
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: Math.random() * 5 + 5,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        />
      ))}
    </div>
  )
}