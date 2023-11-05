import React from 'react'
import './teamobjective.css'
import { useState } from 'react'
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';


export default function TeamObjective() {
  const [ref, InView] = useInView({
    triggerOnce: false,
    threshold:0.2
  })
  const [selectedHeader, setSelectedHeader] = useState(0);

  // Step 3: Create a function to handle header clicks and update the selectedHeader state.
  const handleHeaderClick = (index) => {
    setSelectedHeader(index);
  };

  // Sample data for headers, text details, and image details.
  const details = [
    {
      title: "Design",
      textDetail: "Our team works with our clients to refine an idea and concept into an executable design. We create a final design that encompasses the brand narrative to bring stories to life and provide end-to-end design solutions from concept, design, and architectural drawings to 3D renderings",
      imageDetail: "./pexels-vanderlei-longo-2081128.jpg",
    },
    {
      title: "Project",
      textDetail: "Once we have a design, our production team takes the lead in bringing it to life. We manage all stages of the project, from build specifications and technical drawings to site surveys, vendor management, and 2D & 3D production. We have an extensive network of partners to meet each unique design and project need.",
      imageDetail: "./pexels-monica-griffin-13522070.jpg",
    },
    {
      title: "Execution",
      textDetail: "Once we have a design, our production team takes the lead in bringing it to life. We manage all stages of the project, from build specifications and technical drawings to site surveys, vendor management, and 2D & 3D production. We have an extensive network of partners to meet each unique design and project need.",
      imageDetail: "./pexels-maria-orlova-4913370.jpg",
    },
  ];

  return (
      <div className='TeamObjective-container'>
          <motion.div ref={ref}
      initial={{ opacity: 0, y: -20 }}
  animate={InView ? {opacity: 1, y: 0 } : {}}
  exit={{ opacity: 0, x: 20 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className='main-container'>
              <div className='header-details-container'>
      <div className="header-list">
        {details.map((header, index) => (
          <div
            key={index}
            className={`header ${selectedHeader === index ? "header_active" : ""}`}
            onClick={() => handleHeaderClick(index)}
          >
            {header.title}
          </div>
        ))}

        
      </div>
      <div className="detail">
                      {selectedHeader !== null && (
                          <motion.div
                          key={selectedHeader}
                              initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 1.5 }}
                          >
            <p>{details[selectedHeader].textDetail}</p>
          </motion.div>
        )}
                  </div>
                  </div>
          
          <div className='header-image-container'>
                  {selectedHeader !== null && (
                      <motion.div
                      key={selectedHeader}
                              initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 1.5 }}>
      <img src={details[selectedHeader].imageDetail} className='header-image' alt={`Image for Header ${selectedHeader + 1}`} />
      </motion.div>
              )}
              </div>
              </motion.div>
          </div>
  );
}
