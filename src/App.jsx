import './App.css'
import HomeNavbar from './nav/home-navbar';
import TitleBar from './title-bar/title-bar';
import NavBanner from './nav-banner/nav-banner';
import Items from './items/items';
import Footer from './footer/footer';
import ThankYouSection from './thank-you-section/thank-you-section';
import {Routes, Route} from 'react-router-dom';
import Product from './components/Product';
import Orders from './components/orders/Orders';
function App() {
  return (
   <div className='App'>
    <Routes>
      <Route path="/" element={<><HomeNavbar/><TitleBar/><NavBanner/><Items/><ThankYouSection/><Footer/></>}></Route>
      <Route path="/product/:id" element={<><HomeNavbar/><Product/><Items/><Footer/></>}></Route>
      <Route path="/orders" element={<><HomeNavbar/><Orders/><Items/><Footer/></>}></Route>
      <Route path="/cart" element={<><HomeNavbar/><Items/><Footer/></>}></Route>
      <Route path="/women" element={<><HomeNavbar/><Items/><Footer/></>}></Route>
      <Route path="/men" element={<><HomeNavbar/><Items/><Footer/></>}></Route>
      <Route path="/kids" element={<><HomeNavbar/><Items/><Footer/></>}></Route>
    </Routes>
   </div>
  );
}

export default App
