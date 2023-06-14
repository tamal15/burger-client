import { useEffect, useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
// import useAuth from '../../ManyPages/hooks/useAuth';

import './Header.css'
// import NavDropdown from 'react-bootstrap/NavDropdown';
import Dropdown from 'react-bootstrap/Dropdown'
import useAuth from '../../../../../hooks/useAuth';
import CartDrawer from '../../../../../ComponentsCardDesign/CartDrawer';
// import useAuth from '../../../Hooks/useAuth';
// import CartDrawer from '../../../ComponentCart/CartDrawer';
import styled, { ThemeProvider } from "styled-components";
// import { darkTheme, GlobalStyle, GlobalTextStyle, LightTheme } from '../../../Mood/Theme';

import DarkModeIcon from '@mui/icons-material/DarkMode';
import { darkTheme, GlobalStyle, LightTheme } from '../../../Mood/Theme';
const StyledApp=styled.div`
color: ${(props)=>props.theme.color};

`;

const Header = () => {
    const { userLogOut, user, toggle, setToggle, handleClick, admin ,ad} = useAuth()

    console.log(user.photoURL)

    // const [isSticky, setSticky] = useState(false);
    // useEffect(() => {
    //     window.addEventListener("scroll", () => {
    //         if (window.scrollY > 50) {
    //             setSticky(true)
    //         } else {
    //             setSticky(false)
    //         }
    //     })
    // }, []);

    const  [theme,setTheme]=useState("dark");

    

    const themeToggler=()=>{
          theme==="dark" ? setTheme("light") : setTheme("dark");
    }

    return (

        <div className='header-area'>
            <Navbar expand="lg"  bg="red" >
                <Container>
                {/* onClick={handleClick} */}
                {/* <img width='70' height='80' src='https://i.ibb.co/zQf4dd6/E-Krishi-BD-Transparent.png'></img> */}
                    <NavLink  to="/" className='logo'><span>PizzaHUB</span></NavLink>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    {/* onClick={handleClick} */}
                        <Nav  className="ms-auto menu d-flex align-items-center">

                          
                            {/* <Nav style={{color:'white'}}> */}
                            <Dropdown>
      <Dropdown.Toggle className='drops' id="dropdown-basic">
        All Catagories
      </Dropdown.Toggle>

      <Dropdown.Menu className='drop-menu'>
        {/* start  */}

        <Dropdown>
      <Dropdown.Toggle className='drops' id="dropdown-basic">
        Products
      </Dropdown.Toggle>

      <Dropdown.Menu className='drops-menu'>
        <Dropdown.Item className='down-color' href="/burger">Burger</Dropdown.Item>
        <Dropdown.Item className='down-color' href="/allCetegory">ALL Categories</Dropdown.Item>
        <Dropdown.Item className='down-color' href="/pizzashow">Pizza</Dropdown.Item>
        <Dropdown.Item className='down-color' href="/pastaShowProduct">Pasta</Dropdown.Item>
      
       
      </Dropdown.Menu>
    </Dropdown>

        {/* end  */}
        {/* <Dropdown.Item className='down-color' href="#/action-2">Cow Feed</Dropdown.Item>
        <Dropdown.Item className='down-color' href="#/action-3">Truck</Dropdown.Item>
        <Dropdown.Item className='down-color' href="#/action-3">Fertilizer</Dropdown.Item>
        <Dropdown.Item className='down-color' href="pottery">Seed</Dropdown.Item>
        <Dropdown.Item className='down-color' href="#/action-3">Medicin</Dropdown.Item> */}
      </Dropdown.Menu>
    </Dropdown>


    {/* material drop down  */}

    <Dropdown>
      <Dropdown.Toggle className='drops' id="dropdown-basic">
        Materials
      </Dropdown.Toggle>

      <Dropdown.Menu className='drop-menu'>
      <Dropdown.Item className='down-color' href="/materialResturant">Material</Dropdown.Item>
        {/* start  */}

        <Dropdown>
     

     
    </Dropdown>

        
      </Dropdown.Menu>
    </Dropdown>


                            {/* </Nav> */}
                            <Nav.Link as={NavLink} to="/" className='menu-item'>Home</Nav.Link>
                            <Nav.Link as={NavLink} to="/Orderfood" className='menu-item'>Resturant</Nav.Link>
                            <Nav.Link as={NavLink} to="/about" className='menu-item'>About</Nav.Link>
                           
                            <Nav.Link as={NavLink} to="/contact" className='menu-item'>Contact</Nav.Link>
                            

                        
                          
                           <CartDrawer/>

                            <ThemeProvider
 theme={theme==="dark" ? LightTheme : darkTheme}
 >
 <GlobalStyle></GlobalStyle>
 {/* <GlobalTextStyle></GlobalTextStyle> */}
 <StyledApp style={{color:"black"}}>

 {/* <DarkModeIcon onClick={()=>themeToggler()}></DarkModeIcon>      */}
 <button style={{background:"#032831", color:"white",border:"1px solid #032831"}} onClick={()=>themeToggler()}><DarkModeIcon style={{fontSize:"30px"}}></DarkModeIcon></button>
 </StyledApp>

 </ThemeProvider>
                           
                            {ad? <Nav.Link as={NavLink} to="/admin-dashboard/welcome" className='menu-item'>Admin Dashboard</Nav.Link> : ""}
                        </Nav>
                         {!user.email ? <Nav.Link as={NavLink} to="/login" className='menu-item'>
                            Login
                        </Nav.Link>
                            :

                            <>
                              
                                <img onClick={() => setToggle(!toggle)} src={user.photoURL ? user.photoURL : 'https://i.ibb.co/Xsnkx3L/user.png'} alt="user" className="user-image " />
                                
                            </>
                        } 


                        {user.email && <div className={toggle ? "toggle-menu shadow-lg active" : "toggle-menu"}>
                        <Nav.Link as={NavLink} to="/dashboard/welcome" className='menu-item'>Dashboard</Nav.Link>
                            <Link style={{textDecoration:"none"}} to={'/'}><li onClick={userLogOut}>Log Out</li></Link>
                        </div>}
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};



export default Header; 