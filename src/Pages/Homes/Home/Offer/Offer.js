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
      src="https://t3.ftcdn.net/jpg/04/32/40/84/360_F_432408488_CxZTiOV0Bx2bTkXM02ddLyCUfYECVJDX.jpg"
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
      src="https://png.pngtree.com/template/20210915/ourmid/pngtree-newcomers-first-order-discount-banner-creative-black-burger-image_666033.jpg"
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
      src="https://png.pngtree.com/png-clipart/20210829/original/pngtree-pizza-restaurant-promotion-black-banner-png-image_6685185.jpg"
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