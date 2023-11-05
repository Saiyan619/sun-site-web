import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function FeaturedProjectSample(props) {
  const [ref, InView] = useInView({
    triggerOnce: false,
    threshold:0.2
  })
  return (
    <div>
      <div className='featured-project-list-container'>
        <motion.div ref={ref}
      initial={{ opacity: 0, y: -20 }}
  animate={InView ? {opacity: 1, y: 0 } : {}}
  exit={{ opacity: 0, x: 20 }}
      transition={{ duration: 0.9, delay: 0.4 }} className='featured-project-list'>
          <div className='sub-featured-project-list-1'>
            <span className='sub-featured-project-list-1_text'>{props.projectName}</span>
          </div>

          <div className='sub-featured-project-list-2'>
            <div><span className='sub-featured-project-list-2_text_1'>{props.brandName}</span></div>
            <div><p className='sub-featured-project-list-2_text_2'>{props.subBrand}</p></div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
