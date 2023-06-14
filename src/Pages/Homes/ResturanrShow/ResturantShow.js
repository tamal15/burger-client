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
import { CartContext } from '../../../contextsCard/CartContext';
import useAuth from '../../../hooks/useAuth';
// import { CartContext } from '../../../../contextsCard/CartContext';
// import useAuth from '../../../../hooks/useAuth';
// import Header from '../Shared/Header/Header';
// import Footer from '../Shared/Footer/Footer';
// import Header from '../../../Shared/Header/Header';
// import Footer from '../../../Shared/Footer/Footer';
// import '../TaterSharee/TaterSharee.css'
// import SearchBar from '../../BurgerShow/SearchBar';

const ResturantShow = () => {

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

      
      
  
   
   
   

//    


    useEffect(()=>{
        fetch('https://burger-backend-production.up.railway.app/branch')
        .then(res=>res.json())
        .then(data=>{ const sliceData = data.slice(0, 8);
  
            setModel(sliceData)})
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

       const placeholder = 'Search by  branch Name, example: dhanmondi';


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
          <Typography
                variant="h3"
                gutterBottom
                component="div"
                sx={{ fontWeight: "500", color: "#3B4757",marginBottom:"-90px" }}
              >
                <span style={{ color: "#46AADC" }}>Resturant</span> <span style={{color:"#46AADC"}}>Show</span>
              </Typography>
            {/* <Header></Header> */}
          <div className="container text-white mt-5 mb-5">
          
            <div className="row ">
                
                <div className="col">
                    <div className=" mb-8">
                    {/* <SearchBar handleOnChange={handleOnChange} placeholder={placeholder} /> */}
                       
                    </div>
                </div>
            </div>
            {/* {questions.length ? */}
            <div className="row g-4" >
                <div className="">
                    <div className="question-sidebar">
                        
                      
                            
                        
                           
                          
                        
                       
                            {/* </div> */}
                       

                       
                        
                    </div>
                </div>
                <div className="">
                    
                      

                          
      <div className="">
         <Grid
          container
          spacing={2}
          sx={{ mt: 6 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
         {model?.map((single) => (
            <Grid sx={{ py: 3 }} key={single._id} item xs={4} sm={4} md={3}>
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
                      <img height="250" width="280" style={{borderRadius:"10px"}} src={single?.branchimg}></img>
                   
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
                      <Rating
                        name="half-rating-read"
                        style={{color:"#D0425C"}}
                        defaultValue={single?.rating}
                        precision={0.5}
                        readOnly
                      />

                       
                    </Box>
                  </Grid>
                </Grid>
                <Box sx={{ display: 'flex', justifyContent: '' }}>
                
                  <NavLink
                    to={`/bookDetails/${single._id}`}
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
                    to={`/pizza`}
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

                        {/* <ReactPaginate
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
                        /> */}

                    </div>
                </div>


            </div >

            {/* : <div><h5>Loading...</h5></div>} */}



        </div >
        {/* <Footer></Footer> */}
      </div>
    </div>
    );
};

export default ResturantShow;