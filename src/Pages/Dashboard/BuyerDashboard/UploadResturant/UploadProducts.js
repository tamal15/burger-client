import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useForm } from "react-hook-form";
// import useAuth from '../../../Hooks/useAuth';
import { Form } from 'react-bootstrap';
import useAuth from '../../../../hooks/useAuth';
import Swal from 'sweetalert2';


const UploadProducts = () => {
    const { user } = useAuth()
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        data.complete = true
        fetch(`https://burger-backend-production.up.railway.app/service`, {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => {
               
                if(result.modifiedCount){
                    console.log(result)
                    Swal.fire(
                        'Success Upload!',
                        
                    )
                        reset()
                }
                // 
            });
    }
    return (
        
       <div>
          {/* <Header></Header> */}
         <div className='py-5 edit-profile'>
          
            <Container>
                <Row>
                    <Col md={{ span: 8, offset: 2 }}>
                        <div className="login-form text-center shadow" style={{background:"#032831",borderRadius:"20px"}}>
                            <h2 className='mb-5 text-white'>Upload product</h2>
                            <form onSubmit={handleSubmit(onSubmit)}>

<input
style={{fontWeight:"600",color:" #0E1621"}}
className='w-75 mb-3'  {...register("id", { required: true })} placeholder='id' /> <br />
<input
style={{fontWeight:"600",color:" #0E1621"}}
className='w-75 mb-3'  {...register("productName", { required: true })} placeholder='Product Name' /> <br />
                                <input
                                style={{fontWeight:"600",color:" #0E1621"}}
                                className='w-75 mb-3'  {...register("BranchName", { required: true })} placeholder='Branch Name' /> <br />

<input
type="number"
style={{fontWeight:"600",color:" #0E1621"}}
className='w-75 mb-3'  {...register("ProductPrice", { required: true })} placeholder='Product Price' /> <br />
 
 <input
 style={{fontWeight:"600",color:" #0E1621"}}
 className='w-75 mb-3' {...register("img", { required: true })} placeholder="img url"/>
 
 
 <Form.Group as={Col} controlId="formGridRating"        style={{marginLeft:"104px",marginRight:"104px", borderRadius:"15px",color:"black"}}>
                                        
                                        <select
                                        style={{borderRadius:"30px"}}
                                            required
                                            className="form-control shadow-none"
                                            placeholder='select'
                                            {...register("categories")}
                                        >
                                           <option>Select categories</option>
                                            <option value="Pizza">Pizza</option>
                                            <option value="Burger">Burger</option>
                                            <option value="Pasta">Pasta</option>
                                            
                                           
                                          
                                        </select>
                                    </Form.Group><br />


{/* <input
style={{fontWeight:"600",color:" #0E1621"}}
className='w-75 mb-3'  {...register("shop", { required: true })} placeholder='Shop Name' /> <br /> */}
<input
style={{fontWeight:"600",color:" #0E1621"}}
className='w-75 mb-3'  {...register("description", { required: true })} placeholder='Description' /> 
<input
style={{fontWeight:"600",color:" #0E1621"}}
className='w-75 mb-3'  {...register("kelori", { required: true })} placeholder='kelori example : 1 gm' /> 
   <Form.Group as={Col} controlId="formGridRating"        style={{marginLeft:"104px",marginRight:"104px", borderRadius:"15px",color:"black"}}>
                                        
                                        <select
                                        style={{borderRadius:"30px"}}
                                            required
                                            className="form-control shadow-none"
                                            placeholder='select'
                                            {...register("division")}
                                        >
                                           <option>Select Division</option>
                                            <option value="Dhaka">Dhaka</option>
                                            <option value="Chattogram">Chattogram</option>
                                            
                                           
                                          
                                        </select>
                                    </Form.Group><br />

                                    <Form.Group as={Col} controlId="formGridRating"        style={{marginLeft:"104px",marginRight:"104px", borderRadius:"15px",color:"black"}}>
                                        
                                        <select
                                        style={{borderRadius:"30px"}}
                                            required
                                            className="form-control shadow-none"
                                            placeholder='select'
                                            {...register("branch")}
                                        >
                                           <option>Select Branch</option>
                                            <option value="Dhanmondi">Dhanmondi</option>
                                            <option value="Mohammadpur">Mohammadpur</option>
                                            <option value="Mirpur">Mirpur</option>
                                            <option value="Ghulsan">Ghulsan</option>
                                            <option value="Badda">Badda</option>
                                            <option value="Gulisthan">Gulisthan</option>
                                           
                                          
                                        </select>
                                    </Form.Group><br />
                                    


{/* <input
style={{fontWeight:"600",color:" #0E1621"}}
className='w-75 mb-3'  {...register("likes")} placeholder='likes' /> */}

{/* <input> */}
<Form.Group as={Col} controlId="formGridRating"        style={{marginLeft:"84px",marginRight:"84px", borderRadius:"15px",color:"white"}}>
        <Form.Label>
            Give Us A Rating (1 is the wrost , 5 is the best)
        </Form.Label>
        <select
        style={{borderRadius:"30px"}}
            required
            className="form-control shadow-none"
            {...register("rating")}
        >
            <option>Select Rating</option>
            <option value="1">1</option>
            <option value="1.5">1.5</option>
            <option value="2">2</option>
            <option value="2.5">2.5</option>
            <option value="3">3</option>
            <option value="3.5">3.5</option>
            <option value="4">4</option>
            <option value="4.5">4.5</option>
            <option value="5">5</option>
        </select>
    </Form.Group>
{/* </input> */}
    <br></br>





<button className='submit-all' type='submit'>Submit</button>
</form>
                        </div>
                    </Col>
                </Row>
            </Container>
            
        </div>
        {/* <Footer></Footer> */}
       </div>
    );
};

export default UploadProducts;