import React from 'react'
import NavBar from '../NavBar'
import Header from './Header'
import MainFirstVideo from './MainFirstVideo'
import SlidingTexts from './SlidingTexts'
import SectionAfterSlidingText from './SectionAfterSlidingText'
import FeaturedProjects from './FeaturedProjects'
import TeamObjective from './TeamObjective'
import WhoWeWorkwith from './WhoWeWorkwith'

export default function FirstPage() {
  return (
    <>
      <div>
        <NavBar />
        <Header />
        <MainFirstVideo />
        <SlidingTexts />
        <SectionAfterSlidingText />
        <FeaturedProjects />
        <TeamObjective />
        <WhoWeWorkwith />
      </div>
      </>
  )
}
