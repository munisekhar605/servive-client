import './App.css'
import HomeNavbar from './nav/home-navbar';
import TitleBar from './title-bar/title-bar';
import NavBanner from './nav-banner/nav-banner';
import Items from './items/items';
import Footer from './footer/footer';
import ThankYouSection from './thank-you-section/thank-you-section';
function App() {
  return (
   <>
    <HomeNavbar/>
    <TitleBar/>
    <NavBanner/>
    <Items/>
    <ThankYouSection/>
    <Footer/>
   
   </>
  );
}

export default App
