import {
    Box,
    Button,
    CardMedia,
    Container,
    Grid,
    Paper,
    InputAdornment,
    Rating,
    TextField,
    Typography,
    Stack
  } from "@mui/material";
  import React, { useContext, useEffect, useState } from "react";
//   import { Col, Row, Container,Form } from 'react-bootstrap';
  import { useParams } from "react-router-dom";
  import DateRangeIcon from "@mui/icons-material/DateRange";
  import StarIcon from "@mui/icons-material/Star";
  
  import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
  import PaidIcon from "@mui/icons-material/Paid";
  import { Row, Form,Col} from "react-bootstrap";
import { useForm } from "react-hook-form";
import { NavLink } from 'react-router-dom';
 
 
  import BorderColorIcon from "@mui/icons-material/BorderColor";
  import PublishIcon from "@mui/icons-material/Publish";
// import useAuth from "../../../../hooks/useAuth";
// import Header from "../Shared/Header/Header";
// import Footer from "../Shared/Footer/Footer";
// import { CartContext } from "../../../../contextsCard/CartContext";
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
// import { Box } from "@mui/system";
import Backdrop from '@mui/material/Backdrop';
import useAuth from "../../../../../hooks/useAuth";
import Header from "../../Shared/Header/Header";
import Footer from "../../Shared/Footer/Footer";
import { CartContext } from "../../../../../contextsCard/CartContext";
  
 
  
  
  const labels = {
    0.5: "Useless",
    1: "Useless+",
    1.5: "Poor",
    2: "Poor+",
    2.5: "Ok",
    3: "Ok+",
    3.5: "Good",
    4: "Good+",
    4.5: "Excellent",
    5: "Excellent+",
  };
  const PizzaMaterial = () => {
    const [description, setDescription] = useState("");
    const [reviews, setReviews] = useState([]);
    // const { user } = useAuth();
    const [book, setBook] = useState([]);
    // const [cart, setCart] = useContext(CartContext);
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(-1);
    const { id } = useParams();
    const [cart, setCart] = useContext(CartContext);
    const [number, setNumber] = useState(1);
    const [isFetched, setIsFetched] = useState(0);
    const [opens, setOpens] = React.useState(false);
   
    const handleOpens = () => setOpens(true); 
    
    const handleCloses = () => setOpens(false);

    
    const style = {
      position: 'absolute',
      // color="warning",
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: 400,
      bgcolor: 'white',
      border: '2px solid #000',
      boxShadow: 80,
      bsckGround:"white",
      p: 4,
    };
  
    useEffect(() => {
      fetch(`https://burger-backend-production.up.railway.app/branch/${id}`)
        .then((res) => res.json())
        .then((data) => {
            setBook(data.services)
            console.log(data.services)
        });
    }, [id]);

    const {
        register,
        reset,
        handleSubmit,
        formState: { errors },
    } = useForm();

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
   
   

    // user buy the shisu and police verify 
    const { user } = useAuth()
    
    const onSubmit = data => {
        // data.userName = user.displayName

        data.email = user.email
        data.userName=user.displayName
        data.status="pending"
     

        fetch("https://cryptic-lowlands-50640.herokuapp.com/userCollected", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => {
                if(result.insertedId){
                    alert('added successfully');
                    reset()
                }
                
            });
    };


    const iconStyle = { display: "flex", alignItems: "center" };
  
    const fetchReviews = () => {
      fetch(`/reviews`)
        .then((res) => res.json())
        .then((data) => {
          const allReviews = data?.data.data
            .filter((review) => review.review_type === "book")
            .filter((review) => review.book === id);
  
          const reviewsChunk = allReviews.slice(0, number * 2);
          setIsFetched(Math.ceil(allReviews.length / 2) === number);
          setReviews(reviewsChunk);
        });
    };
    useEffect(() => {
      fetchReviews();
    }, [number]);

    const managePost = book?.filter(models => models?.categories
      === 'PizzaMaterial' || models.role==='admin');
      console.log(managePost)
  
   
    return (
      <>
        <Header></Header>
        <Container>

            <h2 className="mt-5" style={{fontWeight:"700"}}>Pizza Material</h2>
       
       <div className="row">
         {managePost?.map((single) => (
           <div className="row mt-5" sx={{ py: 3 }} key={single._id} >
           
        
            <div className="col-lg-6">

            
                  <div className='photo'>
                   <div className='photoShops'>
                     <img height="430" width="650" style={{borderRadius:"15px"}} src={single?.img}></img>
                  
                   </div>
                  </div>
                  
                  
                 

            </div>

            <div className="col-lg-6">
           
                   <div>
                     <h2 style={{fontWeight:"700"}}>Name : {single?.productName}</h2>
                  
                   
                     <Typography variant="body">
                       {/* <h5 style={{ fontWeight: 700 }}> price : TK.{single?.ProductPrice}</h5> */}
                       
                     </Typography>
                     <Typography variant="body">
                       <h4 style={{ fontWeight: 700 }}> Description : {single?.description}</h4>
                       
                     </Typography>
                     <Typography variant="body">
                       <h5 style={{ fontWeight: 700 }}> Kelori : {single?.kelori}</h5>
                       
                     </Typography>
                     <Typography variant="body">
                       <h5 style={{ fontWeight: 700 }}> Branch : {single?.branch}</h5>
                       
                     </Typography>
                   
                     <Rating
                       name="half-rating-read"
                       style={{color:"#D0425C"}}
                       defaultValue={single?.rating}
                       precision={0.5}
                       readOnly
                     />

                     <br></br>

                      


                 
                   </div>
                
            </div>

             
           </div>
         ))}
       </div>
       <Stack spacing={2}>

         
       </Stack>

       {/* <a href='/manyProducts' className='viewmore mt-5'>View more</a> */}
     </Container>
  
        <Footer />
      </>
    );
  };
  
  export default PizzaMaterial;