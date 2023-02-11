import React from "react";
import logo from '../assets/timeLogo.png'
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
const Header=()=>{
    const navigate=useNavigate()
    const handleRedirect=()=>{
        navigate('/cart')
    }
    return(
       <NavHeader>
        <section className="headerWrapper">
                <div className="headerContainer">
                    <div className="logo">
                        <img src={logo}/>
                    </div>
                    <nav>
                        <ul>
                            <li className="active">Home</li>
                            <li>Products</li>
                            <li>About us</li>
                            <li>Contact us</li>
                        </ul>
                    </nav>
                    <div className="headerIconWrapper">
                    <i className="fa fa-user" aria-hidden="true"></i>
                    <i onClick={handleRedirect} className="fa fa-shopping-cart" aria-hidden="true"></i>
                    <i className="fa fa-search" aria-hidden="true"></i>
                    </div>
                </div>
            </section>
       </NavHeader>
    )
}
export default Header
const NavHeader= styled.div`

 .headerContainer{
  display:flex;
  justify-content:space-between;
  align-items:center;
  nav{
    width:50%;
  }
  nav ul{
    display:flex;
    max-width:100%;
    height:100%;
    justify-content:space-between;
    align-items:center;
    list-style:none;
    li{
        
        cursor:pointer

    }
  }
  .headerIconWrapper .fa {
    margin-left:20px;
    cursor:pointer;
  }
 }
`