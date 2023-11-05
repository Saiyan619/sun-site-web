import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer';
import './header.css'

export default function Header() {
  const [ref, InView] = useInView({
    triggerOnce: false,
    threshold:0.2
  })
  return (
    <div className='header-container'>
      <motion.div ref={ref}
      initial={{ opacity: 0, y: -20 }}
  animate={InView ? {opacity: 1, y: 0 } : {}}
  exit={{ opacity: 0, x: 20 }}
      transition={{ duration: 0.5, delay: 0.6 }}
        className='header-left-text-container'>
        <span className='header-left-text'>Sundown is a multi-disciplinary studio focused on creating unique, end-to-end experiences and environments.</span>
         </motion.div>
      <motion.div ref={ref}
      initial={{ opacity: 0, y: -20 }}
  animate={InView ? {opacity: 1, y: 0 } : {}}
  exit={{ opacity: 0, x: 20 }}
      transition={{ duration: 0.5, delay: 0.5 }} className='header-right-text-container'>
        <h1>SPACES THAT INSPIRE</h1>
      </motion.div>
      
      <img src='./blobanimation (1).svg' alt='blob' className='blob' />
    </div>
  )
}
