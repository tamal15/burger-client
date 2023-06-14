import React from 'react';
import Choose from '../Choose/Choose';
import ScrollBar from '../ScrollBar/ScrollBar';
import Banner from './Banner/Banner';
import BonusPart from './BonusPart/BonusPart';
import BuyerProducts from './BuyerProducts/BuyerProducts';
import Features from './Features/Features';
import Gallery from './Gallery/Gallery';
import LastBanner from './LastBanner/LastBanner';
import Offer from './Offer/Offer';
import Partner from './Partner/Partner';
import PizzaShowHomePage from './PizzaShowHomePage/PizzaShowHomePage';
import Footer from './Shared/Footer/Footer';
import Header from './Shared/Header/Header';
import ResturantShow from '../ResturanrShow/ResturantShow';
// import Header from './Header/Header';

const Home = () => {
    return (
        <div style={{background:""}}>
            <Header></Header>
            <Banner></Banner>
            <BonusPart></BonusPart>
            <BuyerProducts></BuyerProducts>
            <PizzaShowHomePage></PizzaShowHomePage>
            <Features></Features>
            <ResturantShow></ResturantShow>
            <div className='container'>
            <Gallery></Gallery>
            </div>
            <Choose></Choose>
           <div className='mt-5'>
           <Offer></Offer>
           </div>
           <LastBanner></LastBanner>
           <Partner></Partner>
            <Footer></Footer>
            <ScrollBar></ScrollBar>
            
            
        </div>
    );
};

export default Home;