import React from 'react'
import './featuredprojects.css';
import featuredProjectsData from './featuredProjectsData';
import FeaturedProjectSample from './FeaturedProjectSample';

export default function FeaturedProjects() {
  function showProjects(project) {
   return ( <FeaturedProjectSample
     projectName={project.projectName}
     brandName={project.brandName}
     subBrand={project.subBrand} />)
  }
  return (
    <div className='featured-projects-container'>
     <h3><span className='small-circle'></span> FEATURED PROJECTS</h3>

      <div className='main-featured-project-list-container'>
      {featuredProjectsData.map(showProjects)}
      </div>
      
      <button className='view-project-btn'>All Projects &rArr; </button>
    </div>
  )
}
