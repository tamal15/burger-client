import React, { useEffect, useState } from 'react';
import { FaEdit } from 'react-icons/fa';
import { Link, Navigate } from 'react-router-dom';
import './SharePostShow.css'
import { Button } from 'react-bootstrap';
import { useContext } from 'react';
import { CartContext } from '../../contextsCard/CartContext';
const SharePostShow = () => {
    const [customer,setCustomer]=useState([])
    const [cart, setCart] = useContext(CartContext);

    useEffect(()=>{
        fetch('https://burger-backend-production.up.railway.app/sharePostShow')
        .then(res=>res.json())
        .then(data=>setCustomer(data))
    },[])

    const handlePaymentGoToPages = () => {
      return Navigate('/payments');
  }

  const handleAddToCart = (product) => {

    const exists = cart.find(pd => pd._id === product._id);
    let newCart = [];
    if (exists) {
        const rest = cart.filter(pd => pd._id !== product._id);
        exists.quantity = exists.quantity + 1;
        newCart = [...rest, product];
    } else {
        product.quantity = 1;
        newCart = [...cart, product]

    }
    localStorage.setItem("productCart", JSON.stringify(newCart));
    setCart(() => newCart);
    alert('Add to Cart Successfully');
};
    return (
        <div className='container'>
            <h1>Customer <span className='pro'>Information</span></h1>
            <div className='row row-cols-1 row-cols-md-2 g-4'>
            {
                    customer.map((offers)=>(
                        <div style={{textAlign:"left"}} class="col">
                        <div style={{textAlign:"left" , background:"black", color:"white"}} class="card h-100">
                         
                          <div style={{textAlign:"left"}} class="card-body work">
                           
                            <h3 style={{textAlign:"left"}} class="card-text  names">Name: <span className="pro">{offers.name}</span></h3>
                            
                            <h3 class="card-text  names">Email: <span className='pro'>{offers.email}</span></h3>
                            <h3 class="card-text  names">Code: <span className='pro'>{offers.code}</span></h3>
                            <h3 class="card-text  names">Item: <span className='pro'>{offers.item}</span></h3>
                            <h3 class="card-text  names">ShareName: <span className='pro'>{offers.shareName}</span></h3>
                            <h3 class="card-text  names">ProductPrice: <span className='pro'>{offers.ProductPrice}</span></h3>
                            <h3 class="card-text  names">Status: <span className='pro'>{offers.status}</span></h3>
                           
                           
                            
                          </div>

                         <div  style={{display:"flex"}}>
                         <Link className='newshares ms-3' style={{textDecoration:"none", background:"red", padding:"5px 12px", borderRadius:"12px"}} to={'/dashboard/shareUpdate'}><span> <FaEdit className='edit-icon' /> Edit </span></Link>
                          

                          <Button
                  className='btn-style download-btn ms-3'
                    size="small"
                    // sx={ButtonStyle}
                    style={{textAlign:"left"}}
                    onClick={() => handleAddToCart(offers)}
                  >
                    Add cart
                  </Button>
                         </div>

                         
                        
                        </div>
                      </div>
                              
                              
                             
                           
                
                
                      
                 
                    ))
                }
            </div>
            
        </div>
    );
};

export default SharePostShow;