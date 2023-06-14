import React, { useContext, useEffect, useState } from 'react';
// import QuestionCart from './QuestionCart';
import { NavLink } from "react-router-dom";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';



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
import { CartContext } from '../../../../../contextsCard/CartContext';
import useAuth from '../../../../../hooks/useAuth';
import Header from '../../Shared/Header/Header';
import SearchBar from '../../../BurgerShow/SearchBar';
import Footer from '../../Shared/Footer/Footer';


const MaterialResturant = () => {

    const [cart, setCart] = useContext(CartContext);
    const {user}=useAuth();

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

    const [questions, setQuestions] = useState([]);
    const [model, setModel] = useState([]);
   
    const [division,setDivision]=useState("");
    const [branch,setBranch]=useState("");
    const [sizing,setsizing]=useState("");
    const [warrenty,setwarrenty]=useState("");
    const [material,setmaterial]=useState("");
    const [searchValue,setSearchValue]= useState('')
   
  
    const [page, setPage] = useState(0)
    const [pageCount, setPageCount] = useState(0)
    const size = 10;

    

    const handlePageChange = (data) => {
        setPage(data.selected);
    }
    const fetchData = () => {
        fetch(`https://burger-backend-production.up.railway.app/branch?page=${page}&&division=${division}&&sizing=${sizing}&&warrenty=${warrenty}&&branch=${branch}&&material=${material}&&size=${size}`)
        .then(res => res.json())
        .then(data => {
            setQuestions(data.allData)
            setModel(data.allData)
            console.log(data.allData)
            const count = data.count;
            const pageNumber = Math.ceil(count / size)
            setPageCount(pageNumber)
        })
      }
      useEffect(() => {
        fetchData()
      }, [division, page,size,sizing,warrenty,material,size,branch])

      const handleLike = (id) => {
        fetch(`https://burger-backend-production.up.railway.app/like/${id}`, {
          method: "PUT",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(userData)
        }).then(res => {
          console.log(res)
          if (res.status === 200) {
            fetchData()
            alert("Liked");
          } else if (res.status === 400) {
            alert("Already Liked");
          } else {
            alert("server error");
          }
        }).catch(err => console.log(err));
    
    
      }
      const handleUnLike = (id) => {
        fetch(`https://burger-backend-production.up.railway.app/unlike/${id}`, {
          method: "PUT",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(userData)
        }).then(res => {
    
          if (res.status === 200) {
            fetchData()
            alert("Unlike");
          } else if (res.status === 400) {
            alert("Already Unlike");
          } else {
            alert("server error");
          }
        }).catch(err => console.log(err));
    
      }
    
  
   
   
   

//    


    useEffect(()=>{
        fetch('https://burger-backend-production.up.railway.app/branch')
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

   
    

    const  handleSearch=(e)=>{
        e.preventDefault()
        const values = e.target.value;
        console.log(values)
        setSearchValue(values)
    }
    
 
    const handleSubmit=() =>{
        // handleValue()
       }

       const placeholder = 'Search by  branch address, example: dhanmondi';


       const  handleOnChange=(e)=>{
        e.preventDefault()
        const values = e.target.value;
        const newValue = questions?.filter(ques => ques?.branch?.toLowerCase()?.includes(values.toLowerCase()))
        // console.log(values)
        newValue.length === 0 && alert("warning", "Warning...", "Not Found Your Result")
        setModel(newValue)
    }

    return (
        
    <div>
        {/* <Header></Header> */}
          <div className=''>
            <Header></Header>
          <div className="container text-white mt-5 mb-5">
            <div className="row ">
                
                <div className="col">
                    <div className=" mb-8">
                    <SearchBar handleOnChange={handleOnChange} placeholder={placeholder} />
                       
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
                            <h5 style={{fontWeight:"700", color:"#46AADC"}} className='text-black texts-design orderColor all checkdesign'>City</h5>
                           <div className="form-check align-items-center me-3">
                                <input className="form-check-input mt-2 checkdesign" type="checkbox" value="Dhaka" id="flexCheckDefault" />
                                <label className="form-check-label fw-bold all orderColor me-4" for="flexCheckDefault">
                                    Dhaka
                                </label>
                            </div>
                            <div className="form-check align-items-center me-3">
                                <input className="form-check-input mt-2 checkdesign" type="checkbox" value="Chattogram" id="flexCheckDefault" />
                                <label className="form-check-label fw-bold all me-4 orderColor" for="flexCheckDefault">
                                Chattogram
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
         {model?.map((single) => (
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
                      <img height="250" width="330" style={{borderRadius:"10px"}} src={single?.branchimg}></img>
                   
                    </div>
                   </div>
                  </Grid>
                  <Grid item xs={2} sm={4} md={8} pl={2} my={3}>
                    <Box style={{textAlign:"left"}}>
                    <h5 style={{fontWeight:"700"}}>Name : {single?.BranchName}</h5>
                    <h5 style={{fontWeight:"700"}}>Division : {single?.division}</h5>

                     

                  
                    
                     
                      <Typography variant="body">
                        <span style={{ fontWeight: 700 }}> Branch : {single?.branch}</span>
                        
                      </Typography>
                      <br />
                      {/* <Rating
                        name="half-rating-read"
                        style={{color:"#D0425C"}}
                        defaultValue={single?.rating}
                        precision={0.5}
                        readOnly
                      /> */}

                        <Box style={{display:"flex"}}>
                     
                      </Box>
                    </Box>
                  </Grid>
                </Grid>
                <Box sx={{ display: 'flex', justifyContent: '' }}>
                
                  <NavLink
                    to={`/burgerMaterials/${single._id}`}
                    className=""
                    style={{ textDecoration: "none", marginRight: "" }}
                  >
                    <Button
                     className='btn-style download-btn details-show'
                     style={{padding:"5px"}}
                    size="small">
                      Burger
                    </Button>
                  </NavLink>
                  <NavLink
                    to={`/pizzaMaterials/${single._id}`}
                    className=""
                    style={{ textDecoration: "none", marginRight: "" }}
                  >
                    <Button
                     className='btn-style download-btn details-show ms-3'
                     style={{padding:"5px"}}
                    size="small">
                      Pizza
                    </Button>
                  </NavLink>

                  <NavLink
                    to={`/pastaMaterials/${single._id}`}
                    className=""
                    style={{ textDecoration: "none", marginRight: "" }}
                  >
                    <Button
                     className='btn-style download-btn details-show ms-3'
                     style={{padding:"5px"}}
                    size="small">
                      Pasta
                    </Button>
                  </NavLink>
                  {/* <Button
                  className='btn-style download-btn ms-3'
                    size="small"
                    // sx={ButtonStyle}
                    style={{textAlign:"left"}}
                    onClick={() => handleAddToCart(single)}
                  >
                    Pizza
                  </Button> */}
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
                            pageCount={pageCount}
                            onPageChange={handlePageChange}
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

export default MaterialResturant;