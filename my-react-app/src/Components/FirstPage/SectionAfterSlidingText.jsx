import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import './sectionafterslidingtext.css'

export default function SectionAfterSlidingText() {
  const [ref, InView] = useInView({
    triggerOnce: false,
    threshold:0.2
  })
  return (
    <div className='after-sliding-text-container'>
      <motion.div ref={ref}
      initial={{ opacity: 0, y: -20 }}
  animate={InView ? {opacity: 1, y: 0 } : {}}
  exit={{ opacity: 0, x: 20 }}
      transition={{ duration: 0.5, delay: 0.5 }} className='after-sliding-text_text-con'>
        <span>We are a group of design-driven, goal-focused creators, producers, and designers who believe that the details make all the difference.</span>
      </motion.div>

    
      <motion.div ref={ref}
      initial={{ opacity: 0, y: -20 }}
  animate={InView ? {opacity: 1, y: 0 } : {}}
  exit={{ opacity: 0, x: 20 }}
      transition={{ duration: 0.5, delay: 0.2 }} className='after-sliding-text-container_image'>
      
        <img src='./kylian-mbappe-fifa-22-pc-games-footballer-france-3840x2463-5989.png' alt='nike' className='nike'/>
      
        
        <p>We love to create, we love to solve, we love to collaborate, and we love to turn amazing ideas into reality. We’re here to partner with you through every step of the process and know that relationships are the most important things we build.</p>
        
        </motion.div>
    </div>
  )
}


