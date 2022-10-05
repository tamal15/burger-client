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
function App() {
  return (
    <div className="App">
      <AuthProvider>
      <CartContextProvider>

      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      {/* <Route path="/makeadmin" element={<MakeAdmin />} /> */}
      <Route path="/buyerUpload" element={<BuyerUpload />} />
      <Route path="/OrderReview" element={<OrderReview />} />
      <Route path="/Orderfood" element={<OrderFood />} />
      <Route path="/bookDetails" element={<DetailsProduct />}/>
      <Route path="/pizza" element={<PizzaDetails />}/>
      <Route path="/branchname" element={<BranchName />}/>
      <Route path="/contact" element={<Contact />}/>
      <Route path="/about" element={<About />}/>


      <Route path="/dashboard" element={<Dashboard/>}>
      <Route path="/dashboard" element={<Welcome/>} />
       <Route path="/dashboard/welcome" element={<Welcome/>} />
       <Route path="/dashboard/makeadmin" element={<MakeAdmin/>} />
       <Route path="/dashboard/customer" element={<CustomerInfo/>} />
       <Route path="/dashboard/uploadProduct" element={<BuyerProduct/>} />

      </Route>
      
      </Routes>
      </BrowserRouter>

      </CartContextProvider>
      
      </AuthProvider>
     
    </div>
  );
}

export default App;
