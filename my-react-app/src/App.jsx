
import React from 'react'
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import FirstPage from './Components/FirstPage/FirstPage.jsx'
// import SecondPage from './Components/secondpage/SecondPage.jsx';
// import Thirdpage from './Components/ThirdPage/Thirdpage.jsx';
import './Components/FirstPage/header.css'


import './App.css'
import Footer from './Components/FirstPage/Footer.jsx'



function App() {

  return (
   
    <>
      <div className='App'>
      <FirstPage />
          <Footer />

    </div>
      </>
              
  )
}

export default App