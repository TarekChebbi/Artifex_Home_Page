import React, { useEffect, useState, createContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './responsive.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/header/nav/nav';
import Footer from './components/footer/footer';
import Home from './pages/Home/index';
import About from './pages/About/index';
import NotFound from './pages/NotFound';
import HomePage from './pages/HomePage';
import axios from 'axios';

import AddArtwork from './pages/AddArtworkForm';


import Loader from './assets/images/loadpurple.gif';

import data from './data';

const MyContext = createContext();

function App() {

  const [productData, setProductData] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [isLoading, setIsloading] = useState(true);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const [isopenNavigation, setIsopenNavigation] = useState(false);

  const [isLogin, setIsLogin] = useState();
  const [isOpenFilters, setIsopenFilters] = useState(false);



  useEffect(() => {
    // getData('http://localhost:5000/productData');
    // getCartData("http://localhost:5000/cartItems");

    const is_Login = localStorage.getItem('isLogin');
    setIsLogin(is_Login);

   
      setTimeout(() => {
        setProductData(data[1]);
        setIsloading(false);
      }, 3000);


  
  }, []);

  const getData = async (url) => {
    try {
      await axios.get(url).then((response) => {
        setProductData(response.data);
        setTimeout(()=>{
          setIsloading(false);
        },2000); 
      })


      await axios.get('https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=27dad2d0abd34a22965727ce8d939077').then((response) => {
          console.log(response)
      })



    } catch (error) {
      console.log(error.message);
    }
  }



  const addToCart = async (item) => {
    item.quantity = 1;

    try {
      await axios.post("http://localhost:5000/cartItems", item).then((res) => {
        if (res !== undefined) {
          setCartItems([...cartItems, { ...item, quantity: 1 }])
        }
      })
    } catch (error) {
      console.log(error)
    }

  }

  const removeItemsFromCart = (id) => {
    const arr = cartItems.filter((obj) => obj.id !== id);
    setCartItems(arr)
  }

  const emptyCart = () => {
    setCartItems([])
  }


  const signIn = () => {
    const is_Login = localStorage.getItem('isLogin');
    setIsLogin(is_Login);
  }


  const signOut = () => {
    localStorage.removeItem('isLogin');
    setIsLogin(false);
  }


  const openFilters=()=>{
    setIsopenFilters(!isOpenFilters)
  }

  const value = {
    cartItems,
    isLogin,
    windowWidth,
    isOpenFilters,
    addToCart,
    removeItemsFromCart,
    emptyCart,
    signOut,
    signIn,
    openFilters,
    isopenNavigation,
    setIsopenNavigation
  }

  return (
    
    data.productData.length !== 0 &&
    <BrowserRouter>
      <MyContext.Provider value={value}>
        {
          isLoading===true && <div className='loader'><img src={Loader}/></div>
        }

        <Header  />
        <Routes>
          <Route exact={true} path="/" element={<Home data={data.productData} />} />
          
      
          <Route exact={true} path="/addartwork" element={<AddArtwork />} />
          <Route exact={true} path="/homepage" element={<HomePage />} />
          
          <Route exact={true} path="*" element={<NotFound />} />
        </Routes>
       <Footer/>
      </MyContext.Provider>
    </BrowserRouter>    
  );
}

export default App;

export { MyContext }
