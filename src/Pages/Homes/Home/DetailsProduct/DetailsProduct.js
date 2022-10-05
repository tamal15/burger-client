
  import React, { useContext, useEffect, useState } from "react";
  
  import { NavLink } from "react-router-dom";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import { useParams } from "react-router-dom";


import {
    Box,
    Button,
    CardMedia,
    Container,
    Grid,
    Pagination,
    Paper,
    Rating,
    Stack,
    Typography,
  } from "@mui/material";

// import { CartContext } from '../../../Context/CartContext';
// import './OrderFood.css'
import ReactPaginate from 'react-paginate';
import { CartContext } from '../../../../contextsCard/CartContext';
import useAuth from '../../../../hooks/useAuth';
import Header from '../Shared/Header/Header';
import Footer from '../Shared/Footer/Footer';
// import Header from '../../../Shared/Header/Header';
// import Footer from '../../../Shared/Footer/Footer';
// import '../TaterSharee/TaterSharee.css'
// import useAuth from '../../../Hooks/useAuth';

const DetailsProduct = () => {

    const [cart, setCart] = useContext(CartContext);
    const {user}=useAuth();
    // const [book, setBook] = useState({});
    const { branch } = useParams();

    const userData = { email: user.email, name: user.displayName };

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

    const [book, setBook] = useState([]);
    const [model, setModel] = useState([]);
   
    const [division,setDivision]=useState("");
    const [sizing,setsizing]=useState("");
    const [warrenty,setwarrenty]=useState("");
    const [material,setmaterial]=useState("");
    const [searchValue,setSearchValue]= useState('')
   
  
    // const [page, setPage] = useState(0)
    // const [pageCount, setPageCount] = useState(0)
    // const size = 10;

    

    // const handlePageChange = (data) => {
    //     setPage(data.selected);
    // }
    useEffect(() => {
      fetch(`http://localhost:5000/product`)
        .then((res) => res.json())
        .then((data) => setBook(data));
    }, [branch]);

      const handleLike = (id) => {
        fetch(`https://boiling-coast-70144.herokuapp.com/like/${id}`, {
          method: "PUT",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(userData)
        }).then(res => {
          console.log(res)
          if (res.status === 200) {
            // fetchData()
            alert("Liked");
          } else if (res.status === 400) {
            alert("Already Liked");
          } else {
            alert("server error");
          }
        }).catch(err => console.log(err));
    
    
      }
      const handleUnLike = (id) => {
        fetch(`https://boiling-coast-70144.herokuapp.com/unlike/${id}`, {
          method: "PUT",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(userData)
        }).then(res => {
    
          if (res.status === 200) {
            // fetchData()
            alert("Unlike");
          } else if (res.status === 400) {
            alert("Already Unlike");
          } else {
            alert("server error");
          }
        }).catch(err => console.log(err));
    
      }
    
  
   
   
   

//     useEffect(() => {
//       // console.log(department, year, semester)
//       fetch(`https://boiling-coast-70144.herokuapp.com/sharee?page=${page}&&categories=${categories}&&sizing=${sizing}&&warrenty=${warrenty}&&material=${material}&&size=${size}`)
//           .then(res => res.json())
//           .then(data => {
//               setQuestions(data.allQuestions)
//               setModel(data.allQuestions)
//               const count = data.count;
//               const pageNumber = Math.ceil(count / size)
//               setPageCount(pageNumber)
//           })
//   }, [categories, page,size,sizing,warrenty,material,size]);


    useEffect(()=>{
        fetch('http://localhost:5000/products')
        .then(res=>res.json())
        .then(data=>setModel(data.allData))
    },[])
      
    const handleValue = (e) => {
      
        e.preventDefault()
        // const values = e.target.value;
        // console.log(values)
        // console.log(questions)
        const newValue = model?.filter(ques => ques?.branch?.toLocaleLowerCase()?.includes(searchValue))
        
        // console.log(newValue)
        // newValue.length === 0 && alert("warning", "Warning...", "Not Found Your Result")
        // console.log(newValue)
        setModel(newValue)
        // console.log(newValue)
       
      
    }

    // const managePost = questions?.filter(models => models?.role === true);
    // const managePost = model?.filter(models => models?.categories
    //     === 'jamdani' || models.role==='admin');
    // // console.log(model)
    // console.log(managePost)
    

    const  handleSearch=(e)=>{
        e.preventDefault()
        const values = e.target.value;
        console.log(values)
        setSearchValue(values)
    }
    
 
    const handleSubmit=() =>{
        // handleValue()
       }
 
 
 
  
  
 
   
    return (
      <div>
        {/* <Header></Header> */}
          <div  style={{background:"black"}}>
            <Header></Header>
          <div className="container text-white mt-5 mb-5">
            <div className="row ">
                <div className="col-md-4">
                   
                </div>
                <div className="col">
                    <div className="search-box mb-8">
                        <form onSubmit={handleValue}>
                         
                            <input onBlur={handleSearch} type="text" name='search'
                            style={{fontWeight:"600"}}
                            placeholder='Branch Example : dhanmondi  ' />
                           
                            <button type='submit'>Search</button>
                        </form>
                    </div>
                </div>
            </div>
            {/* {questions.length ? */}
            <div className="row g-4" >
                <div className="col-12 col-md-2">
                    <div className="question-sidebar">
                        
                        <form
                            onChange={(e) => setDivision(e.target.value)}
                        >

                             
                         {/* {
                          model.map((models)=>( */}
                            {/* <div> */}
                           <div className='brands mt-3'>
                            <h5 style={{fontWeight:"700"}} className='text-white texts-design'>City</h5>
                           <div className="form-check align-items-center me-3">
                                <input className="form-check-input" type="checkbox" value="dhaka" id="flexCheckDefault" />
                                <label className="form-check-label fw-bold all text-white me-4" for="flexCheckDefault">
                                    Dhaka
                                </label>
                            </div>
                            <div className="form-check align-items-center me-3">
                                <input className="form-check-input" type="checkbox" value="chattogram" id="flexCheckDefault" />
                                <label className="form-check-label fw-bold all me-4 text-white" for="flexCheckDefault">
                                chattogram
                                </label>
                            </div>

                           </div>

                           </form>
                            
                        
                           
                          
                        
                       
                            {/* </div> */}
                       

                       
                        
                    </div>
                </div>
                <div className="col-12 col-md-10">
                    
                      

                          
      <div className="">
         <Grid
          container
          spacing={2}
          sx={{ mt: 6 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
         {book?.map((single) => (
            <Grid sx={{ py: 3 }} key={single._id} item xs={4} sm={4} md={4}>
              <Paper
                sx={{
                  p: 1,
                  margin: "auto",
                  maxWidth: 500,
                  flexGrow: 1,
                  boxShadow: "0px 14px 22px rgb(42 135 158 / 50%)"
                }}
              >
                <Grid  container spacing={2} columns={{ xs: 4, sm: 8, md: 4 }}>
                  <Grid item xs={12} sm={12} md={12}>
                  <div className='photo'>
                    <div className='photoShops'>
                      <img height="230" width="280" style={{borderRadius:"10px"}} src={single?.img}></img>
                   
                    </div>
                   </div>
                  </Grid>
                  <Grid item xs={2} sm={4} md={8} pl={2} my={3}>
                    <Box style={{textAlign:"left"}}>
                    <h5 style={{fontWeight:"700"}}>Name : {single?.productName}</h5>

                     

                    <Typography variant="body">
                        <h5 style={{ fontWeight: 700 }}> Price : TK.{single?.ProductPrice}</h5>
                        
                      </Typography>
                    
                     
                      <Typography variant="body">
                        <span style={{ fontWeight: 700 }}> branch : {single?.branch}</span>
                        
                      </Typography>
                      <br />
                      <Rating
                        name="half-rating-read"
                        style={{color:"#D0425C"}}
                        defaultValue={single?.rating}
                        precision={0.5}
                        readOnly
                      />

                        <Box style={{display:"flex"}}>
                      <Typography  style={{color:"#D0425C",fontWeight:"700"}}>
                       <ThumbUpIcon className='likedesign' onClick={() => handleLike(single?._id)}></ThumbUpIcon>{single?.likes?.length}
                       </Typography>
                     
                      <Typography> <ThumbDownIcon  className='ms-3 likedesign' onClick={() => handleUnLike(single?._id)}></ThumbDownIcon></Typography>
                      </Box>
                    </Box>
                  </Grid>
                </Grid>
                <Box sx={{ display: 'flex', justifyContent: '' }}>
                
                  <NavLink
                    to={`/bookDetail/${single.branch}`}
                    className=""
                    style={{ textDecoration: "none", marginRight: "" }}
                  >
                    <Button
                     className='btn-style download-btn details-show'
                     style={{padding:"5px"}}
                    size="small">
                      Details
                    </Button>
                  </NavLink>
                  <Button
                  className='btn-style download-btn ms-3'
                    size="small"
                    // sx={ButtonStyle}
                    style={{textAlign:"left"}}
                    onClick={() => handleAddToCart(single)}
                  >
                    Add Cart
                  </Button>
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
                            </div>
                    
                 </div>

                <div className="d-flex mt-5">
                    <div className='mx-auto'>

                        <ReactPaginate
                            previousLabel={'previous'}
                            nextLabel={'next'}
                            breakLabel={'...'}
                            marginPagesDisplayed={1}
                            pageRangeDisplayed={1}
                            // pageCount={pageCount}
                            // onPageChange={handlePageChange}
                            containerClassName='pagination'
                            pageClassName='page-item'
                            pageLinkClassName='page-link'
                            previousClassName='page-link'
                            nextClassName='page-link'
                            breakClassName='page-item'
                            breakLinkClassName='page-link'
                            activeClassName='active'
                        />

                    </div>
                </div>


            </div >

            {/* : <div><h5>Loading...</h5></div>} */}



        </div >
        <Footer></Footer>
      </div>
    </div>
    );
  };
  
  export default DetailsProduct;