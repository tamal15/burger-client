import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import useAuth from '../../../hooks/useAuth';
import Swal from 'sweetalert2';
// import useAuth from '../../../../hooks/useAuth';
// import useAuth from '../../../Hooks/useAuth';


const UpdateShare = () => {
    const { user } = useAuth()
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        data.complete = true
        fetch(`https://burger-backend-production.up.railway.app/postShare`, {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => {
               
                if(result.modifiedCount){
                    console.log(result)
                    Swal.fire(
                        'Success Update!',
                        
                    )
                        reset()
                }
                // 
            });
    }
    return (
        
        <div className='py-5 edit-profile'>
            <Container>
                <Row>
                    <Col md={{ span: 8, offset: 2 }}>
                        <div className="login-form text-center shadow" style={{background:"#032831",borderRadius:"20px"}}>
                            <h2 className='mb-5 text-white'>Update Share Information</h2>
                            <form onSubmit={handleSubmit(onSubmit)}>

                            <input
                                  style={{fontWeight:"600",color:" #0E1621"}}
                                    className='w-75 mb-3'
                                    //  defaultValue={user.email}
                                    {...register("code", { required: true })} placeholder='Enter Code' />
                                <br />
                               
                               
                                <input
                                  style={{fontWeight:"600",color:" #0E1621"}}
                                    className='w-75 mb-3'
                                    {...register("shareName", { required: true })} placeholder='Enter Name' />
                                <br />
                                {/* <input
                                  style={{fontWeight:"600",color:" #0E1621"}}
                                    className='w-75 mb-3'
                                    {...register("mobile", { required: true })} placeholder='Enter Mobile Number' />
                                <br /> */}
                               
                                <button className='submit-all' type='submit'>Update Share</button>
                            </form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default UpdateShare;