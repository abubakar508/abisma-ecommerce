import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Header from './Components/Header'
import Shop from './Pages/Shop'
import ShirtModel from './Pages/ShirtModel'
import Login from './Pages/login'
import Register from './Pages/Register'
import Wishlist from './Pages/Wishlist'
import Blog from './Pages/Blog'
import Footer from './Components/Footer'
import ForgotPass from './Pages/ForgotPass'
import BlogDetail from './Pages/BlogDetail'
import AccDisplay from './Pages/MyAccount/AccDisplay'
import ProductDetail from './Pages/ProductDetail'
import NotFound from './Pages/NotFound'
import TermsConditions from './Pages/TermsConditions'
import ManageAcc from './Pages/MyAccount/ManageAcc'
import MyProfile from './Pages/MyAccount/MyProfile'
import EditProfile from './Pages/MyAccount/EditProfile'
import AddressBook from './Pages/MyAccount/AddressBook'
import EditAddress from './Pages/MyAccount/EditAddress'
import AddAddress from './Pages/MyAccount/AddAddress'
import MyOrders from './Pages/MyAccount/MyOrders'
import OrderDetails from './Pages/MyAccount/OrderDetails'
import PaymentOptions from './Pages/MyAccount/PaymentOptions'
import Returns from './Pages/MyAccount/Returns'
import Ad from './Components/Ad'
import Women from './Pages/Women'
import ShopList from './Pages/ShopList'
import CheckOut from './Pages/CheckOut'
import Cart from './Pages/Cart'

function App() {
  return (
    <div>
      <Router>
        <Navbar/>
        <Header/>
        <Ad />
        <Routes>
          <Route path='/' element={<Shop/>}/>
          <Route path='/ShirtModel' element={<ShirtModel/>}/>
          <Route path='/Login' element={<Login/>}/>
          <Route path='/Register' element={<Register/>}/>
          <Route  path='/Wishlist' element={<Wishlist/>}/>
          <Route path='/Blog' element={<Blog/>} />
          <Route path='/ForgotPass' element={<ForgotPass/>} />
          <Route path='/BlogDetail' element={<BlogDetail/>} />
          <Route path='/AccDisplay' element={<AccDisplay/>} />
          <Route path='/ProductDetail' element={<ProductDetail/>} />
          <Route path='/NotFound' element={<NotFound/>} />
          <Route path='/TermsConditions' element={<TermsConditions/>} />
          <Route path='/ManageAcc' element={<ManageAcc/>} />
          <Route path='/MyProfile' element={<MyProfile/>} />
          <Route path='/EditProfile' element={<EditProfile/>} />
          <Route path='/AddressBook' element={<AddressBook/>} />
          <Route path='/EditAddress' element={<EditAddress/>} />
          <Route path='/AddAddress' element={<AddAddress/>} />
          <Route path='/MyOrders' element={<MyOrders/>} />
          <Route path='/OrderDetails' element={<OrderDetails/>} />
          <Route path='/PaymentOptions' element={<PaymentOptions />} />
          <Route path='/Returns' element={<Returns />} />
          <Route path='/Women' element={<Women />} />
          <Route path='/ShopList' element={<ShopList />} />
          <Route path='/CheckOut' element={<CheckOut />} />
          <Route path='/Cart' element={<Cart />} />
        </Routes> 
        <Footer/>
      </Router>
    </div>
  )
}

export default App