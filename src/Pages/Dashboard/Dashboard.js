import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link, NavLink, Outlet } from 'react-router-dom';
// import useFirebase from '../../../hooks/useFirebase';
import './Dashboard.css';
import { FaThLarge, FaUser, FaBookmark, FaCommentDots, FaSignOutAlt, FaTasks, FaUserShield, FaSchool } from 'react-icons/fa'


import HomeIcon from '@mui/icons-material/Home';
// import useAuth from '../../Hooks/useAuth';
// import Header from '../Shared/Header/Header';
import useAuth from '../../hooks/useAuth';
import Header from '../Homes/Home/Shared/Header/Header';
// import useAuth from '../../Hooks/useAuth';
// import Header from '../../Shared/Header/Header';
// import Footer from '../../Shared/Footer/Footer';

const Dashboard = () => {
    const { admin, userLogOut ,buyer} = useAuth()
    return (
        <div  className='dashboard' style={{background:"#0E1621"}}>
            <Header></Header>
          
            <Row>
                <Col md={3}>
                    <div className="dashboard-menu   px-5 py-4 "style={{background:"#032831"}}>
                        <div className="logo mb-4 ">
                            <h4 style={{textAlign:"left"}}><span style={{color:"#CCCCCC"}}>PizzaHUB</span> <span style={{color:"white"}}> BD</span></h4>
                        </div>
                        <ul className=''>
                            <li className=''>
                                <NavLink className="des" to={'/'} style={({ isActive }) => ({
                                    color: isActive ? "#CCCCCC" : "#CCCCCC",
                                })}><HomeIcon className='me-1' /> Home</NavLink>
                            </li>
                            <li className=''>
                                <NavLink className="des" to={`welcome`} style={({ isActive }) => ({
                                    color: isActive ? "#CCCCCC" : "#CCCCCC",
                                })}><FaThLarge className='me-1' /> Dashboard</NavLink>
                            </li>
                           
                            <li>
                                  <NavLink className="des" to={`userProfile`} style={({ isActive }) => ({
                                      color: isActive ? "#CCCCCC" : "#CCCCCC",
                                  })}><FaUser style={{textAlign:"left"}} className='me-1' /> My Profile</NavLink>
                              </li>


                            {
                                buyer &&
                               <div>
                                 
                                <li>
                                <NavLink className="des" to={`addResturant`} style={({ isActive }) => ({
                                    color: isActive ? "#CCCCCC" : "#CCCCCC",
                                })}><FaBookmark className='me-1' /> Upload Resturant</NavLink>
                            </li>
                                <li>
                                <NavLink className="des" to={`showResturant`} style={({ isActive }) => ({
                                    color: isActive ? "#CCCCCC" : "#CCCCCC",
                                })}><FaBookmark className='me-1' /> Show Resturant</NavLink>
                            </li>
                                {/* <li>
                                <NavLink className="des" to={`potterDataUpload`} style={({ isActive }) => ({
                                    color: isActive ? "#CCCCCC" : "#CCCCCC",
                                })}><FaBookmark className='me-1' /> Upload Burger</NavLink>
                            </li> */}
                                
                                <li>
                                <NavLink className="des" to={`myorder`} style={({ isActive }) => ({
                                    color: isActive ? "#CCCCCC" : "#CCCCCC",
                                })}><FaBookmark className='me-1' /> My Order</NavLink>
                            </li>
                                <li>
                                <NavLink className="des" to={`customerOrder`} style={({ isActive }) => ({
                                    color: isActive ? "#CCCCCC" : "#CCCCCC",
                                })}><FaBookmark className='me-1' /> User Order</NavLink>
                            </li>
                                <li>
                                <NavLink className="des" to={`showMaterial`} style={({ isActive }) => ({
                                    color: isActive ? "#CCCCCC" : "#CCCCCC",
                                })}><FaBookmark className='me-1' /> Show Material</NavLink>
                            </li>
                                {/* <li>
                                <NavLink className="des" to={`adminaddSyllbus`} style={({ isActive }) => ({
                                    color: isActive ? "#CCCCCC" : "#CCCCCC",
                                })}><FaBookmark className='me-1' /> Add Syllbus</NavLink>
                            </li> */}
                                {/* <li>
                                <NavLink className="des" to={`manageBook`} style={({ isActive }) => ({
                                    color: isActive ? "#CCCCCC" : "#CCCCCC",
                                })}><FaBookmark className='me-1' /> Pending Book</NavLink>
                            </li> */}
                               
                               </div>
                            }


                         {
                            admin && 
                           <div style={{textAlign:"left"}}>

    
                            
                              {/* <li>
                                  <NavLink className="des" to={`useraddQuestion`} style={({ isActive }) => ({
                                      color: isActive ? "#CCCCCC" : "#CCCCCC",
                                  })}><FaBookmark className='me-1' /> Add Questions</NavLink>
                              </li> */}

                              <li>
                                <NavLink className="des" to={`makeadmin`} style={({ isActive }) => ({
                                    color: isActive ? "#CCCCCC" : "#CCCCCC",
                                })}><FaBookmark className='me-1' /> Make Admin</NavLink>
                            </li>
                              <li>
                                  <NavLink className="des" to={`customer`} style={({ isActive }) => ({
                                      color: isActive ? "#CCCCCC" : "#CCCCCC",
                                  })}><FaBookmark className='me-1' /> Customer</NavLink>
                              </li>
                              
                             
                              <li>
                                  <NavLink className="des " to={`uploadPizzaShow`} style={({ isActive }) => ({
                                      color: isActive ? "#CCCCCC" : "#CCCCCC",
                                  })}><FaTasks className='me-1' /> Upload Pizza</NavLink>
                              </li>

                              <li>
                                <NavLink className="des" to={`uploadProduct`} style={({ isActive }) => ({
                                    color: isActive ? "#CCCCCC" : "#CCCCCC",
                                })}><FaBookmark className='me-1' /> Upload Burger</NavLink>
                            </li>
                              <li>
                                <NavLink className="des" to={`adminShareApproved`} style={({ isActive }) => ({
                                    color: isActive ? "#CCCCCC" : "#CCCCCC",
                                })}><FaBookmark className='me-1' /> ApprovedSharePost</NavLink>
                            </li>
                              <li>
                                  <NavLink className="des " to={`adminallshowproduct`} style={({ isActive }) => ({
                                      color: isActive ? "#CCCCCC" : "#CCCCCC",
                                  })}><FaTasks className='me-1' /> All Products</NavLink>
                              </li>
                              <li>
                                  <NavLink className="des " to={`customerOrder`} style={({ isActive }) => ({
                                      color: isActive ? "#CCCCCC" : "#CCCCCC",
                                  })}><FaTasks className='me-1' /> User Products</NavLink>
                              </li>
                              <li>
                                  <NavLink className="des " to={`showUserOrder`} style={({ isActive }) => ({
                                      color: isActive ? "#CCCCCC" : "#CCCCCC",
                                  })}><FaTasks className='me-1' /> User OrderFood</NavLink>
                              </li>

                           </div>
                           
                       
                            
                            
                        }

                        {
                            !admin && !buyer &&
                            <div>
                                  <li>
                                  <NavLink className="des" to={`feedback`} style={({ isActive }) => ({
                                      color: isActive ? "#CCCCCC" : "#CCCCCC",
                                  })}><FaBookmark className='me-1' /> Feedback </NavLink>
                              </li>
                                  <li>
                                  <NavLink className="des" to={`myorder`} style={({ isActive }) => ({
                                      color: isActive ? "#CCCCCC" : "#CCCCCC",
                                  })}><FaBookmark className='me-1' /> My Order</NavLink>
                              </li>
                                  <li>
                                  <NavLink className="des" to={`sare`} style={({ isActive }) => ({
                                      color: isActive ? "#CCCCCC" : "#CCCCCC",
                                  })}><FaBookmark className='me-1' /> SharePost</NavLink>
                              </li>
                                  <li>
                                  <NavLink className="des" to={`showSharepost`} style={({ isActive }) => ({
                                      color: isActive ? "#CCCCCC" : "#CCCCCC",
                                  })}><FaBookmark className='me-1' /> SharePostShow</NavLink>
                              </li>
                                  <li>
                                  <NavLink className="des" to={`userOrderFood`} style={({ isActive }) => ({
                                      color: isActive ? "#CCCCCC" : "#CCCCCC",
                                  })}><FaBookmark className='me-1' /> OrderFood</NavLink>
                              </li>
                                  <li>
                                  <NavLink className="des" to={`sharePostOrders`} style={({ isActive }) => ({
                                      color: isActive ? "#CCCCCC" : "#CCCCCC",
                                  })}><FaBookmark className='me-1' /> SharePostOrder</NavLink>
                              </li>
                            </div>
                        }

                                <li className=''>
                                  <NavLink className="des" to={'/'} style={({ isActive }) => ({
                                      color: isActive ? "white" : "white",
                                  })}><li onClick={userLogOut} className='dashboard-logOut'>
                                  <FaSignOutAlt className='me-1' /> Log Out
                              </li></NavLink>
                              </li>

                           

                           
                          
                           {/* <NavLink className="des" to={'/'}><li onClick={userLogOut} className='dashboard-logOut'>
                                <FaSignOutAlt className='me-1' /> Log in
                            </li></NavLink> */}
                           
                            
                            

                           
                            {/* </div>} */}

                           
                        </ul>
                    </div>
                </Col>
                <Col md={9} className='py-5' style={{background:""}}>
                    <Outlet />
                </Col>
            </Row>
            {/* <Footer></Footer> */}
        </div >
    );
};

export default Dashboard;