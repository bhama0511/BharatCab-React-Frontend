import React from 'react'
import LandingPage from '../components/LandingPage/landingpage';
import SearchBox from '../components/Searchbar/searchbar';
import { FooterCab } from '../components/Footer/bigfooter';
import FullWidthSteps from '../components/Steps/steps';
import Navbar from '../components/Header/NavBar';


const homePage = () => {

  return (
    <div>
        <div> <Navbar/></div> 
        <LandingPage/>
        <SearchBox/>
        <FullWidthSteps/>
    </div>
  )
}



export default homePage;