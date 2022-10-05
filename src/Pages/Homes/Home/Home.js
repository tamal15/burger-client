import React from 'react';
import Banner from './Banner/Banner';
import BonusPart from './BonusPart/BonusPart';
import BuyerProducts from './BuyerProducts/BuyerProducts';
import Offer from './Offer/Offer';
import Partner from './Partner/Partner';
import Footer from './Shared/Footer/Footer';
import Header from './Shared/Header/Header';
// import Header from './Header/Header';

const Home = () => {
    return (
        <div style={{background:"black"}}>
            <Header></Header>
            <Banner></Banner>
            <BonusPart></BonusPart>
            <BuyerProducts></BuyerProducts>
           <div className='mt-5'>
           <Offer></Offer>
           </div>
           <Partner></Partner>
            <Footer></Footer>
            
            
        </div>
    );
};

export default Home;