"use client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { ArrowRight } from "lucide-react"
import { motion, Variants, Variant } from "framer-motion"

export default function CrochetPlatform() {
  // Animation variants
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  }

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  }

  const floatingAnimation: Variant = {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Hero Section */}
      <section className="py-20 md:py-32 overflow-hidden">
        <div className="container mx-auto px-6">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={fadeInUp}>
              <Badge 
                variant="outline" 
                className="mb-6 border-gray-300 text-xs font-light px-3 py-1 relative overflow-hidden group"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-100 to-transparent"
                  initial={{ x: "-100%" }}
                  animate={{ x: "100%" }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity, 
                    repeatDelay: 3,
                    ease: "easeInOut"
                  }}
                />
                <span className="relative z-10">The only pattern builder you'll ever need</span>
              </Badge>
            </motion.div>

            <motion.h1 
              className="text-4xl md:text-6xl font-extralight tracking-tight mb-6 leading-tight"
              variants={fadeInUp}
            >
              <motion.span 
                className="inline-block"
                animate={floatingAnimation}
              >
                Create, Visualize, and Share
              </motion.span>
              <br />
              <motion.span 
                className="font-light inline-block"
                animate={{
                  ...floatingAnimation,
                  transition: {
                    ...floatingAnimation.transition,
                    delay: 0.5
                  }
                }}
              >
                Crochet Patterns
              </motion.span>
            </motion.h1>

            <motion.p 
              className="text-lg md:text-xl text-gray-600 font-light mb-8 max-w-2xl mx-auto leading-relaxed"
              variants={fadeInUp}
            >
              Transform your ideas into detailed crochet patterns using natural language. 
              Visualize in 3D, collaborate with others, and share in our marketplace.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              variants={fadeInUp}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Button className="bg-black text-white hover:bg-gray-800 px-8 py-3 text-sm font-light group">
                  Start building your pattern 
                  <motion.div
                    className="ml-2"
                    animate={{ x: [0, 3, 0] }}
                    transition={{ 
                      duration: 1.5, 
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <ArrowRight className="w-4 h-4" />
                  </motion.div>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Floating Elements */}
        <motion.div
          className="absolute top-20 left-10 w-2 h-2 bg-gray-200 rounded-full opacity-60"
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
            opacity: [0.6, 0.3, 0.6]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-32 right-20 w-1 h-1 bg-gray-300 rounded-full opacity-40"
          animate={{
            y: [0, 15, 0],
            x: [0, -8, 0],
            opacity: [0.4, 0.1, 0.4]
          }}
          transition={{
            duration: 3.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </section>

      {/* CTA Section */}
      <motion.section 
        className="py-20 border-t border-gray-200"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="container mx-auto px-6 text-center">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2 
              className="text-3xl md:text-4xl font-extralight mb-6"
              variants={fadeInUp}
            >
              Ready to Transform Your <br />
              <motion.span
                className="inline-block"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                }}
                style={{
                  background: "linear-gradient(90deg, #000, #666, #000)",
                  backgroundSize: "200% 100%",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent"
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                Crochet Experience?
              </motion.span>
            </motion.h2>

            <motion.p 
              className="text-gray-600 font-light mb-8 max-w-2xl mx-auto"
              variants={fadeInUp}
            >
              Join thousands of creators who are already using le crochet to bring their visions to life.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto"
              variants={fadeInUp}
            >
              <motion.div
                whileFocus={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Input 
                  placeholder="Enter your email" 
                  className="border-gray-300 text-sm font-light focus:ring-2 focus:ring-gray-200 transition-all duration-200" 
                />
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Button className="bg-black text-white hover:bg-gray-800 px-8 text-sm font-light whitespace-nowrap relative overflow-hidden group">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                  />
                  <span className="relative z-10">Get Started Free</span>
                </Button>
              </motion.div>
            </motion.div>

            <motion.p 
              className="text-xs text-gray-500 font-light mt-4"
              variants={fadeInUp}
              animate={{
                opacity: [0.7, 1, 0.7]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              No credit card required. Start creating in minutes.
            </motion.p>
          </motion.div>
        </div>
      </motion.section>
    </div>
  )
}