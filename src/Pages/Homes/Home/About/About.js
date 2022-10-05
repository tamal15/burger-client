import React from 'react';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';
// import Footer from '../../../Shared/Footer/Footer';
// import Header from '../../../Shared/Header/Header';
import './About.css'
const About = () => {
    return (
      <div>
        <Header></Header>
          <div className='container'>
            <div className='row'>
                <div className='col-lg-6'>
                <h5 className='aboutus '>  Sarong Website. A website that allows people to buy and sell physical goods, services, and digital products over the internet rather than at a brick-and-mortar location. Through an e-commerce website, a business can process orders, accept payments, manage shipping and logistics, and provide customer service.</h5>
                </div>
                <div className='col-lg-6'>
                <img height="200" className='aboutimg'
      src="https://img.freepik.com/premium-photo/penne-pasta-tomato-sauce-with-meat-tomatoes-decorated-with-pea-sprouts-dark-table_2829-3411.jpg?w=2000"
      alt="First slide"
    />
                </div>

            </div>
            
        </div>
        <Footer></Footer>
      </div>
    );
};

export default About;