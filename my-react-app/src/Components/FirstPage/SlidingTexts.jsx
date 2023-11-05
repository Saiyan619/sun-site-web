import React from 'react'
import { motion } from 'framer-motion';
import './slidingtexts.css';


export default function SlidingTexts() {
  return (
    <div className='slide-contaner'>
      
       <motion.div
         
         initial={{ x: '100%' }} // Initial position (outside the left side of the screen)
         animate={{ x: '-500%' }}   // Final position (outside the right side of the screen)
         transition={{ duration: 30, repeat: Infinity, ease: 'linear' }} // Animation configuration
        className='slide-contents'>
  
        <div className='sub-slide-contents'>
          <h2>EXPERIENCE</h2>
          <span className='circle'></span>
          <h2>CONTENTS</h2>
          <span className='circle'></span>
          <h2>ENVIRONMENTS</h2>
          <span className='circle'></span>
          <h2>EXPERIENCE</h2>
          <span className='circle'></span>
          <h2>CONTENTS</h2>
          <span className='circle'></span>
          <h2>ENVIRONMENTS</h2>
          <span className='circle'></span>
          <h2>EXPERIENCE</h2>
          <span className='circle'></span>
          <h2>CONTENTS</h2>
          <span className='circle'></span>
          <h2>ENVIRONMENTS</h2>
        </div>

  
      </motion.div>
    </div>
    //  EXPERIENCE <span></span> CONTENTS <span></span> ENVIRONMENT
    //  <span></span> EXPERIENCE <span></span> CONTENTS <span></span> ENVIRONMENT
  )
}
