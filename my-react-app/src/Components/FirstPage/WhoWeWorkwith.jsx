import React from 'react'

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// import { Carousel } from 'react-responsive-carousel';
// import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './whoweworkwith.css'

const settings = {
  dots: true, // Show dots for pagination
  infinite: true, // Infinite loop
  speed: 1000, // Transition speed (milliseconds)
  slidesToShow: 3, // Number of items to show at a time
  slidesToScroll: 1, // Number of items to scroll on each interaction
};

const items = [
  <div key={1}>
    <div classname = 'slide-container'>
      <div className= 'slider-image-container'>
        <img src='./64d3dd9edfb41666c35b15ff_Nike.svg' alt='nike' />
      </div>
      <div className='slider-text-container'>
        <p>
          Retained Production support across retail and events in NY, CHI, LA. Creative Design, Design Management,
          Production/Project Management, and execution
          of work from concept to installation across the Country.
        </p>
      </div>
    </div>
  </div>,
  <div key={2}>
<div classname = 'slide-container'>
      <div className= 'slider-image-container'>
        <img src='./64d3dd9edfb41666c35b1600_Converse.svg' alt='converse' />
      </div>
      <div className='slider-text-container'>
        <p>
          Retained Production support across retail and events in NY, CHI, LA. Creative Design, Design Management,
          Production/Project Management, and execution
          of work from concept to installation across the Country.
        </p>
      </div>
    </div>
    </div>,
  <div key={3}>
<div classname = 'slide-container'>
      <div className= 'slider-image-container'>
        <img src='./64d3dd9edfb41666c35b15fd_Arc’teryx.svg' alt='acteryx' />
      </div>
      <div className='slider-text-container'>
        <p>
          Retained Production support across retail and events in NY, CHI, LA. Creative Design, Design Management,
          Production/Project Management, and execution
          of work from concept to installation across the Country.
        </p>
      </div>
      </div>
        </div>,
  <div key={4}>
<div classname = 'slide-container'>
      <div className= 'slider-image-container'>
        <img src='./64d3dd9edfb41666c35b1601_MediaLink.svg' alt='medialink' />
      </div>
      <div className='slider-text-container'>
        <p>
          Retained Production support across retail and events in NY, CHI, LA. Creative Design, Design Management,
          Production/Project Management, and execution
          of work from concept to installation across the Country.
        </p>
      </div>
      </div>
        </div>,
  <div key={5}>
<div classname = 'slide-container'>
      <div className= 'slider-image-container'>
        <img src='./64d3dd9edfb41666c35b1602_AfterPay.svg' alt='afterpay' />
      </div>
      <div className='slider-text-container'>
        <p>
          Retained Production support across retail and events in NY, CHI, LA. Creative Design, Design Management,
          Production/Project Management, and execution
          of work from concept to installation across the Country.
        </p>
      </div>
      </div>
        </div>,
  <div key={6}>
<div classname = 'slide-container'>
      <div className= 'slider-image-container'>
        <img src='./64d3dd9edfb41666c35b15fe_Hunter.svg' alt='hunter' />
      </div>
      <div className='slider-text-container'>
        <p>
          Retained Production support across retail and events in NY, CHI, LA. Creative Design, Design Management,
          Production/Project Management, and execution
          of work from concept to installation across the Country.
        </p>
      </div>
      </div>
        </div>,

];

const responsiveSettings = [
  {
    breakpoint: 1024, 
    settings: {
      slidesToShow: 3, 
    },
  },
  {
    breakpoint: 768, 
    settings: {
      slidesToShow: 2,
    },
  },
  {
    breakpoint: 480, 
    settings: {
      slidesToShow: 1, 
    },
  },
];
export default function WhoWeWorkwith() {
  return (
    <div className='WhoWeWorkwith'>

      <div className='section-title'>
        <span className='small-circle'></span>
        <span>WHO WE WORKED WITH</span></div>
       <Slider {...settings} responsive={responsiveSettings}>
  {items}
</Slider>
    
    </div>
  )
}

