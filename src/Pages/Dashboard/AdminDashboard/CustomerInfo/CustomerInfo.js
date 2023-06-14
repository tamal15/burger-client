import React, { useEffect, useState } from 'react';

const CustomerInfo = () => {
    const [customer,setCustomer]=useState([])

    useEffect(()=>{
        fetch('https://burger-backend-production.up.railway.app/contact')
        .then(res=>res.json())
        .then(data=>setCustomer(data))
    },[])
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
                            <h3 class="card-text  names">Message: <span className='pro'>{offers.message}</span></h3>
                            <h3 class="card-text  names">Email: <span className='pro'>{offers.email}</span></h3>
                            <h3 class="card-text  names">Address: <span className='pro'>{offers.address}</span></h3>
                            <h3 class="card-text  names">Number: <span className='pro'>{offers.number}</span></h3>
                           
                           
                            
                          </div>
                        
                        </div>
                      </div>
                              
                              
                             
                           
                
                
                      
                 
                    ))
                }
            </div>
            
        </div>
    );
};

export default CustomerInfo;