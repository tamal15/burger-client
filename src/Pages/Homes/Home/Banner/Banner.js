import React from 'react';
import { Carousel, Container } from 'react-bootstrap';
// import slider1 from '../../../images/bike-11.png'
// import slider2 from '../../../images/bike-12.png'
// import slider3 from '../../../images/bike-13.png'
import "./Banner.css"
import { Link } from 'react-router-dom';
import { Card, CardActions, CardContent, CardMedia,  Paper} from '@mui/material';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typewriter from 'typewriter-effect';
const Banner = () => {
    return (
        <div>

<Carousel className="banners">
  <Carousel.Item className="carousel-design valuesPicture">
  <section className="hero-section">
           
           <div className="container">
               <div className="row pt-5 pb-5">
                   <div className="d-flex justify-content-center align-items-center ">
                       <div>
                           <div id="home" className="row align-items-center d-flex  justify-content-start px-5 my-5 py-5">
                               <div className=" text-center my-5 py-5 ">
                                   <h1 className="text-white fw-bold  display-2">
                                       <Typewriter
                                           options={{
                                               strings: ["Pizza, Dish Of Italian Origin Consisting Of A Flattened Disk"],
                                               autoStart: true,
                                               loop: true,
                                           }}
                                       />
                                   </h1>
                               </div>

                           </div>
                       </div>
                   </div>
               </div>
           </div>

       </section>
  
  
    <Carousel.Caption className="styles">
      
    {/* <Link to='/piece'>
    <button className="banner  text-white">More Products</button>
    </Link> */}
     
    </Carousel.Caption>

    
  

   
  </Carousel.Item>
  
  {/* 2dn the item  */}
  <Carousel.Item className="carousel-design valuesPicture">
  <section className="hero-section2">
           
           <div className="container">
               <div className="row pt-5 pb-5">
                   <div className="d-flex justify-content-center align-items-center ">
                       <div>
                           <div id="home" className="row align-items-center d-flex  justify-content-start px-5 my-5 py-5">
                               <div className=" text-center my-5 py-5 ">
                                   <h1 className="text-white fw-bold  display-2">
                                       <Typewriter
                                           options={{
                                               strings: ["Pizza, Dish Of Italian Origin Consisting Of A Flattened Disk"],
                                               autoStart: true,
                                               loop: true,
                                           }}
                                       />
                                   </h1>
                               </div>

                           </div>
                       </div>
                   </div>
               </div>
           </div>

       </section>

    <Carousel.Caption>
 
    {/* <Link to='/more'>
    <button className="banner  text-white">More Products</button>
    </Link> */}
     
    </Carousel.Caption>

   
  </Carousel.Item>
  <Carousel.Item className="carousel-design valuesPicture">
  <section className="hero-section3">
           
           <div className="container">
               <div className="row pt-5 pb-5">
                   <div className="d-flex justify-content-center align-items-center ">
                       <div>
                           <div id="home" className="row align-items-center d-flex  justify-content-start px-5 my-5 py-5">
                               <div className=" text-center my-5 py-5 ">
                                   <h1 className="text-white fw-bold  display-2">
                                       <Typewriter
                                           options={{
                                               strings: ["Pizza, Dish Of Italian Origin Consisting Of A Flattened Disk"],
                                               autoStart: true,
                                               loop: true,
                                           }}
                                       />
                                   </h1>
                               </div>

                           </div>
                       </div>
                   </div>
               </div>
           </div>

       </section>
    
    <Carousel.Caption>
  
    {/* <Link  to='/more'>
    <button style={{marginTop:"-100px"}} className="banner  text-white">More Products</button>
    </Link> */}
    
    </Carousel.Caption>
   
  </Carousel.Item>
  
</Carousel>
            
        </div>
    );
};

export default Banner;