import React from 'react';
import { Container, Grid, Typography, Box } from '@mui/material';

import './Choose.css'

const ChooseData = [
    {
        id: 1,
        title: 'Perfect Information',
        dis: 'Perfect information provide this website and Feedback the website view.'
    },
    {
        id: 2,
        title: 'Food Review',
        dis: 'We provide all Food Review and search the Food Name.'
    },
    {
        id: 3,
        title: 'Online  Order',
        dis: 'Customer can buy thier selected Food for them in online.'
    },
    {

        id: 4,
        title: 'Delivery',
        dis: 'We provide all Delivery Product location and good Service.'
    },
    {
        id: 5,
        title: 'Seller Business',
        dis: 'Seller create account and request to the admin and Upload the Product'
    },
    {
        id: 6,
        title: 'Schedule Purchase',
        dis: 'User or seller Schedule Purchase the product and product Review ..'
    },
]
const Choose = () => {
    return (
       <Container>
         <Box sx={{ padding: '100px 0' }}>
            <Box sx={{ textAlign: 'center', mb: 10 }}>
                <Typography variant='h6'
                    sx={{ color: '#46AADC', pb: 2, fontFamily: 'Georgia', fontStyle: 'italic' }}
                >Read on to understand our differene</Typography>
                <Typography variant='h4'
                    sx={{ fontWeight: 'bold' ,color:"#46AADC"}}
                >Why Choose PizzaHub</Typography>

            </Box>

            <Container>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                        {ChooseData.map((data, index) => (
                            <Grid item xs={12} sm={4} md={4} key={index}
                                sx={{ height: '200px' }} className={
                                    `${data.id === 1 || data.id === 3 || data.id === 5 ? "Why-ChooseUs-bg" : ""}`}

                            >
                                <Box
                                    data-aos="fade-down"
                                    data-aos-easing="linear"
                                    data-aos-duration="1500"
                                    sx={{ display: 'flex' }}>
                                    <Box>
                                        <Typography variant='h4'
                                            sx={{ color: 'rgb(70, 170, 220)', fontWeight: 'bold' }}
                                        >
                                            
                                        </Typography>
                                    </Box>
                                    <Box style={{textAlign:"left"}}>
                                        <Typography variant='h5' sx={{ color: '#46AADC', pb: 2, fontFamily: 'Georgia', fontStyle: 'italic', fontWeight: '600', textAlign: 'left', margin: '5px',fontSize:"26px" }}>
                                          <ul><li>  {data.title}</li></ul>

                                        </Typography>
                                        <Typography variant='body' style={{color:"#46AADC", fontWeight:"600",textAlign:"left",fontSize:"18px"}}>
                                       <ul>     {data.dis}</ul>



                                        </Typography>
                                    </Box>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Container>
        </Box>
       </Container>
    );
};

export default Choose;