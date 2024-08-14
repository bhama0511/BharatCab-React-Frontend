import NavBar from './components/Header/NavBar';
//import Footer from './components/Footer/footer';
import Contact from './components/Footer/Footer';
import LandingPage from './components/LandingPage/landingpage';
import SearchBox from './components/Searchbar/searchbar';
import RideCard from './components/detailscard/details';
import {Route, Routes} from "react-router-dom";
import './App.css';
import RideDetailsPage from './pages/rideDetails';
import CarOwnerDetails from './pages/CarOwner';
import HomePage from './pages/homePage';
import PublishNewRide from './pages/PublishRide';
import { FooterCab } from './components/Footer/bigfooter';
import FooterMain from './components/Footer/Footer';
import LoginPage from './pages/Login/login';
import FullWidthSteps from './components/Steps/steps';
import ProfilePage from './pages/ProfilePage/profiilePage';
import Page1 from './Component-m/Page1';
import Page2 from './Component-m/Page2';
import Page3 from './Component-m/Page3';
import SearchResult from './pages/SearchResult';
import SearchRide from './pages/NavSearch/SearchRide';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path={"/"} element={ <HomePage/> } />
        <Route path={"/publishride"} element={<PublishNewRide/>}/>
        <Route path={"/search"} element={<SearchRide/>}/>
        <Route path={"/details"} element={<RideDetailsPage/>}/>
        <Route path={"/profile"} element={<ProfilePage/>}/>
        <Route path={"/carowner"} element={<CarOwnerDetails/>}/>
        <Route path={"/signup"} element={<Page1/>}/>
        <Route path={"/page2"} element={<Page2/>}/>
        <Route path={"/page3"} element={<Page3/>}/>
        
        
      </Routes> 
     <FooterMain/>
      
      {/* <NavBar /> 
      <LandingPage />
      <SearchBox />     
      <RideCard/> */}
    </div>
  );
}

export default App;
