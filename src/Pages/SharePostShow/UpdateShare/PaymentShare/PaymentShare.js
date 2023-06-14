import { Grid } from '@mui/material';
import React from 'react';
import { Container } from 'react-bootstrap';
import Cart from '../../../../ComponentsCardDesign/Cart';
import SharePaymentFrom from './SharePaymentForm';

const PaymentShare = () => {
    return (
        <div>
           <h3 className='text-white'> share paymnt</h3>

           <Container>
                <Grid container spacing={{ xs: 2, md: 3 }}
                    columns={{ xs: 4, sm: 8, md: 12 }}>
                    <Grid item xs={4} sm={5} md={8} >
                        <SharePaymentFrom />
                    </Grid>

                    <Grid item xs={4} sm={3} md={4} >
                        <Cart>

                        </Cart>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default PaymentShare;