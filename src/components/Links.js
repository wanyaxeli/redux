import React from "react";
import { Route, Routes } from "react-router-dom";
import Cart from "../pages/Cart";
import Home from "../pages/Home";
const Links =()=>{
    return(
       <Routes>
        <Route path="/" exact element={<Home/>}/>
        <Route path="/cart" exact element ={<Cart/>}/>
       </Routes>
    )
}
export default Links