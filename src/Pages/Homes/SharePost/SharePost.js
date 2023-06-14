import React from 'react';
import { Col, Row, Container,Form } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import useAuth from '../../../hooks/useAuth';
import Header from '../Home/Shared/Header/Header';
import Footer from '../Home/Shared/Footer/Footer';
import Swal from 'sweetalert2';
// import useAuth from '../../../../hooks/useAuth';


const SharePost = () => {
    const { user } = useAuth()
    // const {admin}=useAuth()
    const { register, handleSubmit, reset } = useForm()
    const onSubmit = data => {
        // data.userName = user.displayName
        
        // const useing=user.email
        data.buyerEmail = user.email
        data.shareName = "";
        data.status="pending"
        // data.status = 'Pending'
     

        fetch("https://burger-backend-production.up.railway.app/sharePost", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => {
                if(result.insertedId){
                    Swal.fire(
                        'Success SharePost!',
                        
                    )
                    reset()
                }
                
            });
    };

   
    return (
      <div>
        {/* <Header></Header> */}

        <div className='py-5'>
            
            <Container>
                <Row>
                    <Col md={{ span: 8, offset: 2 }}>
                        <div className="login-form text-center shadow" style={{background:"#032831",borderRadius:"20px"}}>
                            <h2 className='mb-5 text-white'>Add Your Food Share Post</h2>
                            <form onSubmit={handleSubmit(onSubmit)}>

                                <input
                                style={{fontWeight:"600",color:" #0E1621"}}
                                className='w-75 mb-3'  {...register("name", { required: true })} placeholder='Name' /> <br />

                                <input
                                type="email"
                                style={{fontWeight:"600",color:" #0E1621"}}
                                className='w-75 mb-3'  {...register("email", { required: true })} placeholder='Email' /> <br />
                                 
                                
                                
                              
                                <input
                                style={{fontWeight:"600",color:" #0E1621"}}
                                className='w-75 mb-3'  {...register("code", { required: true })} placeholder='share code' /> <br />
                                <input
                                style={{fontWeight:"600",color:" #0E1621"}}
                                className='w-75 mb-3'  {...register("item", { required: true })} placeholder='burger/pizza' /> 
                                <input
                                type="number"
                                style={{fontWeight:"600",color:" #0E1621"}}
                                className='w-75 mb-3'  {...register("ProductPrice", { required: true })} placeholder='ProductPrice' /> 

                                
                             
                              

                                {/* <input> */}
                              
                                {/* </input> */}
                                    <br></br>
                                
                                

                               

                                <button className='submit-all' type='submit'>Submit</button>
                            </form>

                        </div>
                    </Col>
                </Row>
            </Container>

        </div >

        {/* <Footer></Footer> */}
      </div>
    );
};

export default SharePost;