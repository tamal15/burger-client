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
  

import ReactPaginate from 'react-paginate';
import useAuth from '../../../../../hooks/useAuth';

const AdminAllProductShow = () => {

 

   

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
   
    
    

    const fetchData = () => {
      fetch('https://burger-backend-production.up.railway.app/adminShowproduct')
      .then(res => res.json())
      .then(data => {
          setQuestions(data.allQuestions)
          setModel(data.allQuestions)
          // setSearchValue(data.TaterSharees)
          // console.log(data)

          const count = data.count;
          const pageNumber = Math.ceil(count / size)
          setPageCount(pageNumber)
      })
    }
    useEffect(() => {
      fetchData()
    }, [type, year, code, page])

   
    const handleDelete=(id)=>{
        const proceed=window.confirm('are you sure, you want to delete');
        fetch(`https://burger-backend-production.up.railway.app/deleteadmin/${id}`,{
            method:'DELETE'
        }).then(res=>res.json())
        .then(data=>{
            if(data.deletedCount>0){
                alert('Delete')
                const remaining=model.filter(service=>service._id !== id)
                setQuestions(remaining)
                setModel(remaining)
            }
        });
        console.log(id)
    }
  



    useEffect(()=>{
        fetch('https://burger-backend-production.up.railway.app/adminShowproduct')
        .then(res=>res.json())
        .then(data=>setModel(data.allQuestions))
    },[])
      
    const handleValue = (e) => {
      
        e.preventDefault()
        // const values = e.target.value;
        // console.log(values)
        // console.log(questions)
        const newValue = model?.filter(ques => ques?.productName?.toLocaleLowerCase()?.includes(searchValue))
        
        // console.log(newValue)
        // newValue.length === 0 && alert("warning", "Warning...", "Not Found Your Result")
        // console.log(newValue)
        setModel(newValue)
        // console.log(newValue)
       
      
    }

    
    

    const  handleSearch=(e)=>{
        e.preventDefault()
        const values = e.target.value;
        // console.log(values)
        setSearchValue(values)
    }
    
 
    const handleSubmit=() =>{
        // handleValue()
       }

    return (
        
    <div>
        {/* <Header></Header> */}
          <div  style={{background:""}}>
            {/* <Header></Header> */}
          <div className="container text-black mt-5 mb-5">
            <div className="row ">
                <div className="col-md-4">
                   
                </div>
                <div className="col">
                    <div className="search-box mb-8">
                        <form onSubmit={handleValue}>
                         
                            <input onBlur={handleSearch} type="text" name='search'
                            style={{fontWeight:"600"}}
                            placeholder='Search by Product Name, example:Burgers ' />
                           
                            <button type='submit'>Search</button>
                        </form>
                    </div>
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

                        {/* <div className='mt-3'>
                            <h5>Filter Year</h5>
                            <select onChange={(e) => setYear(e.target.value)} name="year" id="year">
                                <option value="">Select Year</option>
                                <option value="2021">2021</option>
                                <option value="2020">2020</option>
                                <option value="2019">2019</option>
                                <option value="2018">2018</option>
                                <option value="2017">2017</option>
                                <option value="2016">2016</option>
                                <option value="2015">2015</option>
                                <option value="2014">2014</option>
                                <option value="2013">2013</option>
                                <option value="2012">2012</option>
                                <option value="2011">2011</option>
                                <option value="2010">2010</option>
                            </select>
                        </div> */}
                        {/* <div className='mt-3'>
                            <h5>Semester</h5>
                            <select onChange={(e) => setCode(e.target.value)} name="code" id="code">
                                <option value="cse">Select Year</option>
                                <option value="cse123">cse123</option>
                                <option value="bba102">bba102</option>
                                <option value="3">3rd</option>
                                <option value="4">4th</option>
                                <option value="5">5th</option>
                                <option value="6">2016</option>
                                <option value="7">2015</option>
                                <option value="2014">2014</option>
                                <option value="2013">2013</option>
                                <option value="2012">2012</option>
                                <option value="2011">2011</option>
                                <option value="2010">2010</option>
                            </select>
                        </div> */}

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
                    <div className='photoShops photoalbums'>
                      <img height="230" width="350" style={{borderRadius:"15px"}} src={single?.img}></img>
                   
                    </div>
                   </div>
                  </Grid>
                  <Grid item xs={2} sm={4} md={8} pl={2} my={3}>
                    <Box style={{textAlign:"left"}}>
                    <h5 style={{fontWeight:"700"}}>Name : {single?.productName}</h5>

                     

                    <Typography variant="body">
                        <h5 style={{ fontWeight: 700 }}> price : TK.{single?.ProductPrice}</h5>
                        
                      </Typography>
                      
                      <Typography variant="body">
                        <span style={{ fontWeight: 700 }}> Brand :  {single?.categories} </span>
                        
                       
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
                <Box sx={{ display: 'flex', justifyContent: 'right' }}>
                  <NavLink
                    to={`/dashboard/users/update/${single._id}`}
                    style={{ textDecoration: "none", marginRight: "5px" }}
                  >
                    <Button
                     className='btn-style download-btn'
                    size="small">
                      Edit
                    </Button>
                  </NavLink>
                  <Button
                  className='btn-style download-btn'
                    size="small"
                    // sx={ButtonStyle}
                    onClick={()=>handleDelete(single?._id)}
                  >
                    Delete
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
        {/* <Footer></Footer> */}
      </div>
    </div>
    );
};

export default AdminAllProductShow;