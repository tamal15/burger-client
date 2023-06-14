import React from 'react';
// import Navigation from '../Navigation/Navigation';
import { useForm } from "react-hook-form";
import axios from 'axios';

import './Contact.css'
import Header from '../Shared/Header/Header';
import Footer from '../Shared/Footer/Footer';
// import Footer from '../Footer/Footer';
const Contact = () => {
    const { register, handleSubmit ,reset} = useForm();
    
    const onSubmit= (data) =>{
        // console.log(data)
      
        axios.post('https://burger-backend-production.up.railway.app/contact',data)
      .then(res=>{
          console.log(res)
           if(res.data.insertedId){
              alert(' successfully Done');
              reset()
          }
      })
        //  e.preventDefault()
    }
    return (
        <div>
            <Header></Header>
<div>
<section id="contact us" class="contact-us">
      <h1>Contact US</h1>

     

     <div className="row" >
         <div className="contact-col">
             <div>
             <i class="fas fa-home"></i>
                 <span>
                     {/* <h5> House-20, Road-27, Block-A</h5> */}
                     <h5>Dhanmondi, Dhaka</h5>
                 </span>

             </div>

             <div>
              <i className="fas fa-home"></i>
              <span>
                  <h5>PIZZAHUB</h5>
              
              </span>

          </div>

             <div>
                 <i className="fas fa-envelope"></i>
                 <span>
                     {/* <h5>info@marufultamal.com</h5> */}
                     <h5>Shuvo@gmail.com</h5>
                 </span>

             </div>

             <div>
                 <i className="fa fa-phone"></i>
                 <span>
                     <h5>+8802284494933</h5>
                     {/* <p>Tuesday to sunday, 10AM TO 6PM</p> */}
                 </span>

             </div>


            
         
            
            

         </div>
         
        {/* <div class="col-lg-6 col-md-6 col-1 img">
         <img src={contact} alt="" />
        </div> */}
         <div className="contact-col">
        
           {/* start  */}
           <form onSubmit={handleSubmit(onSubmit)}>
 <input {...register("name", { required: true, maxLength: 20 })} placeholder="Name" />
 <textarea {...register("message")} placeholder="Message"/>
 <input type="email" {...register("email")} placeholder="Email" />
 <input {...register("address")} placeholder="Address"/>
 <input type="number" {...register("number")} placeholder="Phone Number"/>
 <input className="bg-dark text-white" type="submit" />
</form>



           {/* end  */}


        {/* <form action="">
         <input type="text" placeholder="enter your name" required/>
         <input type="text"  placeholder="email address" required/>
         <input type="text" placeholder="subject" required/>
         <input type="text" placeholder="message" required />
         <button type="submit" className="hero-btn red-btn">Send Message</button>
        </form> */}
    </div>

        
     </div>


     {/* form  */}

    {/* <div className="contact-col">
        <form action="">
         <input type="text" placeholder="enter your name" required/>
         <input type="text"  placeholder="email address" required/>
         <input type="text" placeholder="subject" required/>
         <input type="text" placeholder="message" required />
        </form>
    </div> */}

 </section>
</div>

 <Footer></Footer>



 
        </div>
    );
};

export default Contact;