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
import useAuth from "../../../../hooks/useAuth";
import Header from "../Shared/Header/Header";
import Footer from "../Shared/Footer/Footer";
import { CartContext } from "../../../../contextsCard/CartContext";
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
// import { Box } from "@mui/system";
import Backdrop from '@mui/material/Backdrop';
  
 
  
  
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
  const PastaDetails = () => {
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
   
    // const handleAddToCart = (book) => {
    //   const exists = cart.find((pd) => pd._id === book._id);
    //   let newCart = [];
    //   if (exists) {
    //     const rest = cart.filter((pd) => pd._id !== book._id);
    //     exists.quantity = exists.quantity + 1;
    //     newCart = [...rest, book];
    //   } else {
    //     book.quantity = 1;
    //     newCart = [...cart, book];
    //   }
    //   localStorage.setItem("cart", JSON.stringify(newCart));
    //   setCart(() => newCart);
    //   alert("success", "Success", "Add to Cart Successfully");
    // };


    // user buy the shisu and police verify 
    const { user } = useAuth()
    // const {admin}=useAuth()
    // const { register, handleSubmit, reset } = useForm();
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
      === 'Pasta' || models.role==='admin');
      console.log(managePost)
  
   
    return (
      <>
        <Header></Header>
        <Container>
       
       <Grid
         container
         spacing={2}
         sx={{ mt: 6 }}
         columns={{ xs: 4, sm: 8, md: 12 }}
       >
         {managePost?.map((single) => (
           <Grid sx={{ py: 3 }} key={single._id} item xs={4} sm={4} md={3}>
             <Paper
               sx={{
                 p: 1,
                 margin: "auto",
                 maxWidth: 400,
                 flexGrow: 1,
                 boxShadow: "0px 10px 22px rgb(42 135 158 / 50%)"
               }}
             >
               <Grid  container spacing={2} columns={{ xs: 4, sm: 8, md: 4 }}>
                 <Grid item xs={12} sm={12} md={12}>
                  <div className='photo'>
                   <div className='photoShops'>
                     <img height="230" width="250" style={{borderRadius:"15px"}} src={single?.img}></img>
                  
                   </div>
                  </div>
                  
                  
                 </Grid>

                 <Grid item xs={2} sm={4} md={8} pl={2} my={3}>
                   <Box style={{textAlign:"left"}}>
                     <h5 style={{fontWeight:"700"}}>Name : {single?.productName}</h5>
                     {/* <h5 style={{fontWeight:"700"}}>Name : {single?.branchid}</h5> */}

                    

                     {/* <ThumbUpIcon></ThumbUpIcon> */}
                      {/* <br></br> */}
                      {/* <h4>{single?.length}</h4> */}
                     <Typography variant="body">
                       <h5 style={{ fontWeight: 700 }}> price : TK.{single?.ProductPrice}</h5>
                       
                     </Typography>
                   
                     <Rating
                       name="half-rating-read"
                       style={{color:"#D0425C"}}
                       defaultValue={single?.rating}
                       precision={0.5}
                       readOnly
                     />

                     <br></br>

                      {/* like handler ================== */}
                     {/* <Box style={{display:"flex"}}>
                     <Typography  style={{color:"#D0425C",fontWeight:"700"}}>
                      <ThumbUpIcon className='likedesign' onClick={() => handleLike(single?._id)}></ThumbUpIcon>{single?.likes?.length}
                      </Typography>
                    
                     <Typography> <ThumbDownIcon  className='ms-3 likedesign' onClick={() => handleUnLike(single?._id)}></ThumbDownIcon></Typography>
                     </Box> */}
                  


                   {/* <Typography>LikeCount: {single?.likes?.length}</Typography> */}
                   {/* Unlike handler ================== */}
                   </Box>
                 </Grid>
               </Grid>
               <Box sx={{ display: 'flex', justifyContent: '' }}>
                 <NavLink
                   to={`/payment`}
                   style={{ textDecoration: "none",textAlign:"left" }}
                 >
                   <Button
                    className='btn-style download-btn me-3'
                    style={{textAlign:"left"}}
                   size="small">
                     Check
                   </Button>
                 </NavLink>
                 {/* <NavLink
                  //  to={`/singlepageDetails/${single.branchid}`}
                   className="details-show"
                   style={{ textDecoration: "none", marginRight: "4px" }}
                 >
                   <Button
                    className='btn-style download-btn details-show'
                    style={{padding:"5px"}}
                   size="small">
                     Details
                   </Button>
                 </NavLink> */}
{/* 
<Button className="ms-4 me-2 btn-style download-btn details-show"  style={{background:"", padding:"", fontSize:"", marginTop:""}} onClick={handleOpens}>Details</Button> */}

<Modal
aria-labelledby="transition-modal-title"
aria-describedby="transition-modal-description"
open={opens}
onClose={handleCloses}
closeAfterTransition
BackdropComponent={Backdrop}
BackdropProps={{
timeout: 500,
}}
>
<Fade in={opens}>
<Box sx={style}>
<Box>

<input
{...register("client")}
type="text"
placeholder='user'
// onChange={handleonChange}
className="p-2 m-2"
/>

<h5 style={{fontWeight:"700"}}>Name : {single?.productName}</h5>



{/* start  */}





{/* end  */}

{/* <button className="btn-style" onClick={() => handleUpdate(cart._id)}>update</button> */}
</Box>
</Box>
</Fade>
</Modal>
                 <Button
                 className='btn-style download-btn'
                   size="small"
                   // sx={ButtonStyle}
                   style={{textAlign:"left"}}
                   onClick={() => handleAddToCart(single)}
                 >
                   Add cart
                 </Button>
               </Box>
             </Paper>
           </Grid>
         ))}
       </Grid>
       <Stack spacing={2}>

         
       </Stack>

       {/* <a href='/manyProducts' className='viewmore mt-5'>View more</a> */}
     </Container>
  
        <Footer />
      </>
    );
  };
  
  export default PastaDetails;