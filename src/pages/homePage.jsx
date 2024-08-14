import React from 'react'
import LandingPage from '../components/LandingPage/landingpage';
import SearchBox from '../components/Searchbar/searchbar';
import { FooterCab } from '../components/Footer/bigfooter';
import FullWidthSteps from '../components/Steps/steps';

const homePage = () => {

  return (
    <div>
        <LandingPage/>
        <SearchBox/>
        <FullWidthSteps/>
    </div>
  )
}



export default homePage;