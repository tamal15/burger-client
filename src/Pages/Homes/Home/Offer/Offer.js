import React from 'react';
import { Carousel } from 'react-bootstrap';
// import slider1 from '../../../images/bike-11.png'
// import slider2 from '../../../images/bike-12.png'
// import slider3 from '../../../images/bike-13.png'
// import "./Banner.css"
import './Offer.css'
import { Link } from 'react-router-dom';


const Offer = () => {
    return (
        <div className='mb-5 mt-4'>

<Carousel className="banners">
  <Carousel.Item className="carousel-design values">
  <img
      className="d-block w-100  slide"
      src="https://www.promotionsinuae.com/wp-content/uploads/2021/08/screenshot_20210808-164353_facebook7574006443792106874-1076x640.jpg"
      alt="First slide"
    />
  
  
    <Carousel.Caption className="styles">
      
    <Link to='/piece'>
    {/* <button className="banner  text-white">More Products</button> */}
    </Link>
     
    </Carousel.Caption>
  

   
  </Carousel.Item>
  
  <Carousel.Item className="carousel-design values">
    <img
      className="d-block w-100  slide"
      src="https://bh.arabiccoupon.com/sites/default/files/styles/free/public/offers/2019-06-june-_-pizzahut-arabiccoupon-offer-deal-buy1get1free-en_0.jpg"
      alt="Second slide"
    />

    <Carousel.Caption>
 
    <Link to='/more'>
    {/* <button className="banner  text-white">More Products</button> */}
    </Link>
     
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item className="carousel-design values">
    <img
      className="d-block w-100  slide"
      src="https://www.pizzahutbd.com/attached_images/deals/23/Pan-4-All-OLO-Banner.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
  
    <Link to='/more'>
    {/* <button className="banner  text-white">More Products</button> */}
    </Link>
    
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
            
        </div>
    );
};

export default Offer;