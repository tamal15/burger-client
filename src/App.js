import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Homes/Home/Home';
import Register from './Pages/Homes/Home/Login/Register/Register';
import Login from './Pages/Homes/Home/Login/Login/Login';
import AuthProvider from './Context/AuthProvider';
import MakeAdmin from './Pages/Dashboard/MakeAdmin/MakeAdmin';
import Dashboard from './Pages/Dashboard/Dashboard';
import Welcome from './Pages/Dashboard/Welcome/Welcome';
import BuyerUpload from './Pages/Dashboard/BuyerDashboard/BuyerUpload/BuyerUpload';
import CartContextProvider from './contextsCard/CartContext';
import OrderReview from './Pages/Homes/Home/OrderReview/OrderReview';
import OrderFood from './Pages/Homes/Home/OrderFood/OrderFood';
import DetailsProduct from './Pages/Homes/Home/DetailsProduct/DetailsProduct';
import BranchName from './Pages/Homes/Home/BranchName/BranchName';
import PizzaDetails from './Pages/Homes/Home/DetailsProduct/PizzaDetails/PizzaDetails';
import Contact from './Pages/Homes/Home/Contact/Contact';
import About from './Pages/Homes/Home/About/About';
import CustomerInfo from './Pages/Dashboard/AdminDashboard/CustomerInfo/CustomerInfo';
import BuyerProduct from './Pages/Dashboard/BuyerDashboard/BuyerProducts/BuyerProduct';
import Dot from './Pages/dot/Dot';
import BranchDetails from './Pages/Homes/Home/BranchDetails/BranchDetails';
import SingleProductDetails from './Pages/Homes/Home/BranchDetails/SingleProductDetails';
import ShowDetails from './Pages/Homes/Home/ShowDetails/ShowDetails';
import Payment from './Pages/Homes/Home/Payment/Payment';
import SuccessOrder from './Pages/Homes/Home/Payment/SuccessOrder/SuccessOrder';
import MyOrder from './Pages/Dashboard/UserDashboard/MyOrder/MyOrder';
import UserProfile from './Pages/Dashboard/UserDashboard/UserProfile/UserProfile';
import UserUpdateProfile from './Pages/Dashboard/UserDashboard/UserProfile/ProfileUpdate';
import ProfileUpdate from './Pages/Dashboard/UserDashboard/UserProfile/ProfileUpdate';
import UserFeedback from './Pages/Dashboard/UserDashboard/UserFeedback/UserFeedback';
import UploadResturant from './Pages/Dashboard/BuyerDashboard/UploadResturant/UploadResturant';
import ShowResturant from './Pages/Dashboard/BuyerDashboard/UploadResturant/ShowResturant';
import UploadProducts from './Pages/Dashboard/BuyerDashboard/UploadResturant/UploadProducts';
import OrderShow from './Pages/Dashboard/BuyerDashboard/CutomerOrder/OrderShow';
import AdminAllProductShow from './Pages/Dashboard/AdminDashboard/CustomerInfo/AdminAllProductShow/AdminAllProductShow';
import AdminProductUpdate from './Pages/Dashboard/AdminDashboard/CustomerInfo/AdminAllProductShow/AdminProductUpdate';
import UploadPizzaShow from './Pages/Dashboard/AdminDashboard/UploadPizza/UploadPizzaShow';
import PizzaUpload from './Pages/Dashboard/AdminDashboard/UploadPizza/PizzaUpload';
import BurgerShowProduct from './Pages/Homes/BurgerShow/BurgerShowProduct';
import DarkAndWhiteTheme from './Pages/Homes/Mood/DarkAndWhiteTheme';

import { useState } from 'react';
import { darkTheme, GlobalStyle, GlobalTextStyle, LightTheme } from './Pages/Homes/Mood/Theme';
import styled, { ThemeProvider } from 'styled-components';
import PizzaShowPage from './Pages/Homes/PizzaShow/PizzaShowPage';
import AllCategories from './Pages/Homes/AllCatagories/AllCategories';
import PastaShow from './Pages/Homes/PizzaShow/PastaShowPage/PastaShow';
import SharePost from './Pages/Homes/SharePost/SharePost';
import SharePostShow from './Pages/SharePostShow/SharePostShow';
import UpdateShare from './Pages/SharePostShow/UpdateShare/UpdateShare';
import PaymentShare from './Pages/SharePostShow/UpdateShare/PaymentShare/PaymentShare';
import ApprovedShareOrder from './Pages/Dashboard/AdminDashboard/ApprovedShareOrder/ApprovedShareOrder';
import UserOrderFood from './Pages/Dashboard/UserDashboard/UserOrderFood/UserOrderFood';
import ShowUserOrderFood from './Pages/Dashboard/UserDashboard/UserOrderFood/ShowUserOrderFood';
import SharePostOrders from './Pages/Dashboard/UserDashboard/MyOrder/SharePostOrders/SharePostOrders';
import PizzaDetailss from './Pages/Homes/Home/BranchDetails/PizzaDetails';
import PastaDetails from './Pages/Homes/Home/BranchDetails/PastaDetails';
import ShowMaterial from './Pages/Dashboard/BuyerDashboard/UploadResturant/ShowMaterial';
import UploadMaterial from './Pages/Dashboard/BuyerDashboard/UploadResturant/UploadMaterial';
import MaterialResturant from './Pages/Homes/Home/OrderFood/MaterialResturant/MaterialResturant';
import BurgerMaterial from './Pages/Homes/Home/OrderFood/MaterialResturant/BurgerMaterial';
import PizzaMaterial from './Pages/Homes/Home/OrderFood/MaterialResturant/PizzaMaterial';
import PastaMaterial from './Pages/Homes/Home/OrderFood/MaterialResturant/PastaMaterial';
import PizzaPastaDetails from './Pages/Homes/Home/ShowDetails/PizzaPastaDetails';
// import { darkTheme, GlobalStyle, GlobalTextStyle, LightTheme } from './Pages/Homes/Mood/Theme'
const StyledApp=styled.div`
color: ${(props)=>props.theme.textColor};
`;
function App() {
  const  [theme,setTheme]=useState("dark");

  const themeToggler=()=>{
    theme==="dark" ? setTheme("light") : setTheme("dark");
}
  return (
    <div className="App">
      <AuthProvider>
      <CartContextProvider>

      <BrowserRouter>

      <ThemeProvider
            theme={theme==="light" ? LightTheme : darkTheme}
           >
             <GlobalStyle></GlobalStyle>
             <GlobalTextStyle></GlobalTextStyle>
          {/* <StyledApp> */}
          {/* <button onClick={()=>themeToggler()}>Change Theme</button> */}
          <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      {/* <Route path="/makeadmin" element={<MakeAdmin />} /> */}
      <Route path="/theme" element={<DarkAndWhiteTheme />} />
      <Route path="/OrderReview" element={<OrderReview />} />
      <Route path="/Orderfood" element={<OrderFood />} />
      <Route path="/materialResturant" element={<MaterialResturant />} />
      <Route path="/bookDetails/:id" element={<BranchDetails />}/>
      <Route path="/pizzaDetails/:id" element={<PizzaDetailss />}/>
      <Route path="/pastaDetails/:id" element={<PastaDetails />}/>
      <Route path="/burgerMaterials/:id" element={<BurgerMaterial />}/>
      <Route path="/pizzaMaterials/:id" element={<PizzaMaterial />}/>
      <Route path="/pastaMaterials/:id" element={<PastaMaterial />}/>
      <Route path="/Detailshow/:id" element={<ShowDetails />}/>
      <Route path="/Detailshows/:id" element={<PizzaPastaDetails />}/>
      <Route path="/singlepageDetails/:branchid" element={<SingleProductDetails />}/>
      <Route path="/bookDetails" element={<DetailsProduct />}/>
      <Route path="/pizza" element={<PizzaDetails />}/>
      <Route path="/branchname" element={<BranchName />}/>
      <Route path="/payment" element={<Payment/>}/>
      <Route path="/sare" element={<SharePost/>}/>
      <Route path="success/:id" element={<SuccessOrder />} />

      <Route path="/contact" element={<Contact />}/>
      <Route path="/about" element={<About />}/>
      <Route path="/dot" element={<Dot />}/>
      <Route path="/burger" element={<BurgerShowProduct />}/>
      {/* <Route path="/pizzashow" element={<BurgerShowProduct />}/> */}
      <Route path="/pizzashow" element={<PizzaShowPage />}/>
      <Route path="/pastaShowProduct" element={<PastaShow />}/>
      <Route path="/allCetegory" element={<AllCategories />}/>
      


      <Route path="/dashboard" element={<Dashboard/>}>
      <Route path="/dashboard" element={<Welcome/>} />
       <Route path="/dashboard/welcome" element={<Welcome/>} />
       <Route path="/dashboard/makeadmin" element={<MakeAdmin/>} />
       <Route path="/dashboard/customer" element={<CustomerInfo/>} />
       <Route path="/dashboard/buyerUpload" element={<BuyerUpload />} />
       <Route path="/dashboard/uploadPizzaproduct" element={<PizzaUpload />} />
       <Route path="/dashboard/uploadProduct" element={<BuyerProduct/>} />
       <Route path="/dashboard/myorder" element={<MyOrder/>} />
       <Route path="/dashboard/userprofile" element={<UserProfile/>} />
       <Route path="/dashboard/userUpdate" element={<ProfileUpdate/>} />
       <Route path="/dashboard/shareUpdate" element={<UpdateShare/>} />
       <Route path="/dashboard/payments" element={<PaymentShare/>} />
       <Route path="/dashboard/showSharepost" element={<SharePostShow />}/>
       <Route path="/dashboard/feedback" element={<UserFeedback/>} />
       <Route path="/dashboard/addResturant" element={<UploadResturant/>} />
       <Route path="/dashboard/showResturant" element={<ShowResturant/>} />
       <Route path="/dashboard/showMaterial" element={<ShowMaterial/>} />
       <Route path="/dashboard/customerOrder" element={<OrderShow/>} />
       <Route path="/dashboard/adminShareApproved" element={<ApprovedShareOrder/>} />
       <Route path="/dashboard/userOrderFood" element={<UserOrderFood/>} />
       <Route path="/dashboard/showUserOrder" element={<ShowUserOrderFood/>} />
       <Route path="/dashboard/sharePostOrders" element={<SharePostOrders/>} />
       <Route path="/dashboard/users/update/:id" element={<AdminProductUpdate />} />
       <Route path="/dashboard/adminallshowproduct" element={<AdminAllProductShow/>} />
       <Route path="/dashboard/uploadresturantProduct" element={<UploadProducts/>} />
       <Route path="/dashboard/uploadMaterialProduct" element={<UploadMaterial/>} />
       <Route path="/dashboard/uploadPizzaShow" element={<UploadPizzaShow/>} />
       <Route path="/dashboard/sare" element={<SharePost/>} />

      </Route>
      
      </Routes>
          {/* </StyledApp> */}
           </ThemeProvider>

   
     
      </BrowserRouter>

      </CartContextProvider>
      
      </AuthProvider>
     
    </div>
  );
}

export default App;
