import React from 'react'
import './footer.css'
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Footer() {
    const [ref, InView] = useInView({
        triggerOnce: false,
        threshold:0.2
      })
  return (
      <footer>
        
          <div className='footer-main-container'>
          <div className='sub-footer-container-1'>
              <motion.div ref={ref}
      initial={{ opacity: 0, y: -20 }}
  animate={InView ? {opacity: 1, y: 0 } : {}}
  exit={{ opacity: 0, x: 20 }}
                      transition={{ duration: 0.5, delay: 0.6 }}
                      className='sub_sub-footer-container-1'>
                  <li>work</li>
                  <li>studio</li>
                  <li>contact</li>
                  </motion.div>
                  
              <motion.div ref={ref}
      initial={{ opacity: 0, y: -20 }}
  animate={InView ? {opacity: 1, y: 0 } : {}}
  exit={{ opacity: 0, x: 20 }}
      transition={{ duration: 0.5, delay: 0.6 }} className='sub_sub-footer-container-2'>
                  <span>Get industry insights and creative <br /> inspiration straight to your inbox.</span>
                  <input type='text' placeholder='Email Address...'/>
              </motion.div>
          </div>

          <div className='sub-footer-container-2'>
              <img src='./64d3dd9edfb41666c35b15c6_Footer Logo.svg' alt='footerlogo' />
          </div>


          <motion.div ref={ref}
      initial={{ opacity: 0, y: -20 }}
  animate={InView ? {opacity: 1, y: 0 } : {}}
  exit={{ opacity: 0, x: 20 }}
      transition={{ duration: 0.5, delay: 0.6 }}className='sub-footer-container-3'>
              <div>
                  <p>copyright&copy;Sundown studio</p>
              </div>
                  <div className='sub_sub-footer_blah_blah'>
                      <img src='./64d3dd9edfb41666c35b15cb_Globe.svg' alt='globe' />
                      brookly,new york</div>
              <div>
                  <p>instagram</p>
              </div>
              <div>
                  <p>linkedin</p>
              </div>
              </motion.div>
              
              </div>
    </footer>
  )
}
