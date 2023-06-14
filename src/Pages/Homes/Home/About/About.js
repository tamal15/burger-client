import React from 'react';
// import Footer from '../../../Shared/Footer/Footer';
// import Header from '../../../Shared/Header/Header';
import './About.css'
import { Container, Grid, Typography } from "@mui/material";
import Header from '../Shared/Header/Header';
import Footer from '../Shared/Footer/Footer';
const About = () => {
    return (
      <div>
        <Header></Header>
        <Container sx={{ my: 10 }}>
      <Grid container spacing={2}>
        <Grid
          // data-aos="fade-right"
          // data-aos-offset="300"
          // data-aos-easing="ease-in-sine"
          // data-aos-duration="3000"
          item xs={12} sm={12} md={6}>
          <Typography
            sx={{ fontStyle: "italic", fontSize: 22, color: "#3B4757" }}
            variant="body1"
            gutterBottom
          >
            The buying and selling of goods and services using the internet, when shopping online.
          </Typography>
          <Typography
            sx={{ fontWeight: "500", fontSize: 42, color: "#3B4757" }}
            variant="h4"
            gutterBottom
            component="div"
          >
           Many popular foods don't fit neatly into one   {" "}
            <span style={{ color: "#46AADC" }}>Pyramid groups: Grains (the crust), Milk (the cheese),</span>
          </Typography>
          <Typography
            sx={{ fontSize: 15, color: "#777" }}
            variant="body2"
            gutterBottom
          >


Pizza burgers are a simple burger recipe made to blend together two incredible foods into every bite. Using your favorite pizza sauce, burger patties, pepperoni, cheeses, and bread
          </Typography>


          <br />
          <Typography
            sx={{ fontSize: 15, color: "#777" }}
            variant="body2"
            gutterBottom
          >
           Not even close. Pasta is a combination of eggs and flour to make a noodle into many different shapes and sizes. Pizza is dough also but of a different type that is topped with sauce,cheese and many different types of toppings from anchovies to pineapple.
          </Typography>
        </Grid>
        <Grid
          // data-aos="fade-left"
          // data-aos-offset="300"
          // data-aos-easing="ease-in-sine"
          // data-aos-duration="3000"
          item xs={12} sm={12} md={6}>
          <img height="370px" width="450px" src="https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80" alt="" />
        </Grid>
      </Grid>

    </Container>
        <Footer></Footer>
      </div>
    ); 
};

export default About;