import React, { useContext, useEffect, useState } from 'react';
// import QuestionCart from './QuestionCart';
import { NavLink } from "react-router-dom";



// import useAuth from '../../hooks/useAuth';
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
// import useAuth from '../../../Hooks/useAuth';
// import { CartContext } from '../../../Context/CartContext';
import '../PizzaShowPage.css'
// import Header from '../../../Shared/Header/Header';
// import Footer from '../../../Shared/Footer/Footer';
import ReactPaginate from 'react-paginate';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import { CircularProgress} from '@mui/material';
// import SearchBar from '../BurgerShow/SearchBar';
import Swal from 'sweetalert2';
import { CartContext } from '../../../../contextsCard/CartContext';
import useAuth from '../../../../hooks/useAuth';
import Header from '../../Home/Shared/Header/Header';
import SearchBar from '../../BurgerShow/SearchBar';
import Footer from '../../Home/Shared/Footer/Footer';
// import { CartContext } from '../../../contextsCard/CartContext';
// import useAuth from '../../../hooks/useAuth';
// import Header from '../Home/Shared/Header/Header';
// import Footer from '../Home/Shared/Footer/Footer';
// import spinner from './../../../Assets/Images/Infinity-1s-200px.svg'
const PastaShow = () => {

    const [cart, setCart] = useContext(CartContext);

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
        Swal.fire(
          'Success Product!',
          
      )
    };

    const [questions, setQuestions] = useState([]);
    const [model, setModel] = useState([]);
    const [type, setType] = useState("")
    const [searchValue,setSearchValue]= useState('')
    const [searchQuestion,setSearchQuestion]= useState('')
    const [searchYear,setSearchYear]= useState('')
    // const [searchValue, setSearchValue] = useState([]);
    const [code, setCode] = useState("")
    const [year, setYear] = useState("")
    const [page, setPage] = useState(0)
    const [pageCount, setPageCount] = useState(0)
    const size = 10;

    // console.log(questions)

    const handlePageChange = (data) => {
        setPage(data.selected);
    }

  
    const {user}=useAuth()
    const userData = { email: user.email, name: user.displayName };
   
    // checkbox er value true or false return kore

    // useEffect(() => {
    //     fetch('https://sarong-site.onrender.com/TaterSharees')
    //         .then(res => res.json())
    //         .then(data => setQuestions(data.TaterSharee))
    // }, [])

    // useEffect(() => {
    //     console.log(type, year, code)
    //     fetch('https://sarong-site.onrender.com/sharee')
    //         .then(res => res.json())
    //         .then(data => {
    //             setQuestions(data.allQuestions)
    //             setModel(data.allQuestions)
    //             // setSearchValue(data.TaterSharees)
    //             // console.log(data)

    //             const count = data.count;
    //             const pageNumber = Math.ceil(count / size)
    //             setPageCount(pageNumber)
    //         })
    // }, [type, year, code, page]);

    const fetchData = () => {
      fetch('https://burger-backend-production.up.railway.app/admiinpizza')
      .then(res => res.json())
      .then(data => {
          setQuestions(data.allData)
          setModel(data.allData)
          // setSearchValue(data.TaterSharees)
          console.log(data)

          const count = data.count;
          const pageNumber = Math.ceil(count / size)
          setPageCount(pageNumber)
      })
    }
    useEffect(() => {
      fetchData()
    }, [type, year, code, page])


    useEffect(()=>{
        fetch('https://burger-backend-production.up.railway.app/admiinpizza')
        .then(res=>res.json())
        .then(data=>setModel(data.allData))
    },[])


    // like 
    const handleLike = (id) => {
      fetch(`https://sarong-site.onrender.com/like/${id}`, {
        method: "PUT",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(userData)
      }).then(res => {
        console.log(res)
        if (res.status === 200) {
          fetchData()
          // alert("Liked");
        } else if (res.status === 400) {
          // alert("Already Liked");
        } else {
          // alert("server error");
        }
      }).catch(err => console.log(err));
  
  
    }
    const handleUnLike = (id) => {
      fetch(`https://sarong-site.onrender.com/unlike/${id}`, {
        method: "PUT",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(userData)
      }).then(res => {
  
        if (res.status === 200) {
          fetchData()
          // alert("Unlike");
        } else if (res.status === 400) {
          // alert("Already Unlike");
        } else {
          // alert("server error");
        }
      }).catch(err => console.log(err));
  
    }
  
      
    // const handleValue = (e) => {
      
    //     e.preventDefault()
    //     // const values = e.target.value;
    //     // console.log(values)
    //     // console.log(questions)
    //     const newValue = model?.filter(ques => ques?.productName?.toLocaleLowerCase()?.includes(searchValue))
        
    //     // console.log(newValue)
    //     // newValue.length === 0 && alert("warning", "Warning...", "Not Found Your Result")
    //     // console.log(newValue)
    //     setModel(newValue)
    //     // console.log(newValue)
       
      
    // }

    // const managePost = questions?.filter(models => models?.role === true);
    const managePost = model?.filter(models => models?.categories
        === 'Pasta' || models.role==='admin');
    console.log(model)
    console.log(managePost)
    

    const  handleOnChange=(e)=>{
        e.preventDefault()
        const values = e.target.value;
        const newValue = questions?.filter(ques => ques?.productName?.toLowerCase()?.includes(values.toLowerCase()))
        // console.log(values)
        newValue.length === 0 && alert("warning", "Warning...", "Not Found Your Result")
        setModel(newValue)
    }
    
 
    // alert 
    const alert = (icon, title, text) => {
      Swal.fire({
          position: 'center',
          icon: icon,
          title: title,
          text: text,
          showConfirmButton: false,
          timer: 1500
      })
  }

    const handleSubmit=() =>{
        // handleValue()
       }

       const loading =
    <Box sx={{ textAlign: 'center', padding: '100px 0' }}>
        <CircularProgress color="secondary" />
        <Typography>Loading...</Typography>
    </Box>
const placeholder = 'Search by Product Name, example:pasta1';
    return (
        
    <div>
        {/* <Header></Header> */}
          <div  style={{background:""}}>
            <Header></Header>
          <div className="container text-black mt-5 mb-5">
            <div className="row ">
                {/* <div className="col-md-4">
                   
                </div> */}
                <div className="col">
                    {/* <div className="search-box mb-8"> */}
                        {/* <form onSubmit={handleValue}>
                         
                            <input onBlur={handleSearch} type="text" name='search'
                            style={{fontWeight:"600"}}
                            placeholder='Example : achol  productName ' />
                           
                            <button type='submit'>Search</button>
                        </form> */}
                           <SearchBar handleOnChange={handleOnChange} placeholder={placeholder} />
                    {/* </div> */}
                </div>
            </div>
            {/* {questions.length ? */}
            <div className="row g-4" >
                <div className="col-12">
                    <div className="question-sidebar">
                        
                        <form
                            onChange={(e) => setType(e.target.value)}
                        >

                             
                            {/* <div className="form-check align-items-center">
                                <input className="form-check-input" type="checkbox" value="mid" id="flexCheckDefault" />
                                <label className="form-check-label fw-bold" for="flexCheckDefault">
                                    Mid
                                </label>
                            </div>
                            <div className="form-check align-items-center">
                                <input className="form-check-input" type="checkbox" value="final" id="flexCheckDefault" />
                                <label className="form-check-label fw-bold" for="flexCheckDefault">
                                    Final
                                </label>
                            </div> */}
                           
                        </form>

                       

                    </div>
                </div>
                <div className="">
                    
                      

                          
                            {/* <div className="row"> */}
         <Grid
          container
          spacing={2}
          sx={{ mt: 6 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          
         {

questions.length === 0 ?loading
:
         
         
         managePost?.map((single) => (
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
                <Grid  container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }}>
                  <Grid item xs={12} sm={12} md={12}>

                  <div className='photo'>
                  <div className='photoShops photoalbum'>

                  <img height="230" width="250" style={{borderRadius:"15px"}} src={single?.img}></img>

                  </div>
                  </div>
                 
                    {/* <CardMedia
                      component="img"
                      sx={{ objectFit: "cover", height: 200 }}
                      alt="complex"
                      src={single?.img}
                    /> */}
                  </Grid>
                  <Grid item xs={2} sm={4} md={8} pl={2} my={3}>
                    <Box style={{textAlign:"left"}}>
                    <h5 style={{fontWeight:"700"}}>Name : {single?.productName}</h5>

                      {/* <Typography variant="body">
                        <span style={{ fontWeight: 700 }}> লেখক: </span>{" "}
                        <span>{single?.author}</span>
                      </Typography> */}
                      {/* <br /> */}

                      <Typography variant="body">
                        <h5 style={{ fontWeight: 700 }}> price : TK.{single?.ProductPrice}</h5>
                        
                      </Typography>
                      
                      <Typography variant="body">
                        <h6 style={{ fontWeight: 700 }}> Brand :  {single?.categories} </h6>
                       
                      </Typography>
                     
                      <Rating
                        name="half-rating-read"
                        style={{color:"#D0425C"}}
                        defaultValue={single?.rating}
                        precision={0.5}
                        readOnly
                      />
                      {/* like handler ================== */}
                      <Box style={{display:"flex"}}>
                    
                      </Box>
                    </Box>
                  </Grid>
                </Grid>
               

               {/* button  */}

               <Box sx={{ display: 'flex', justifyContent: '', marginBottom:"" }}>
                  <NavLink
                    to={`/payment`}
                    style={{ textDecoration: "none",textAlign:"left" }}
                  >
                    <Button
                     className='btn-style download-btn '
                     style={{textAlign:"left"}}
                    size="small">
                      Check
                    </Button>
                  </NavLink>
                  <NavLink
                    to={`/Detailshows/${single._id}`}
                    className="details-show"
                    style={{ textDecoration: "none", marginRight: "4px" }}
                  >
                    <Button
                     className='btn-style download-btn details-show downpart'
                     style={{padding:"5px"}}
                    size="small">
                      Details
                    </Button>
                  </NavLink>
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
                            {/* </div> */}
                    
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

export default PastaShow;