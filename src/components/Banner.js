import React, { useEffect } from "react";
import styled from "styled-components";
import img from '../assets/slider-img.png'
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
const Banner=()=>{
    const banner= [{id:1,name:'banner1',url:img,description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"},
    {id:2,name:'banner2',url:img,description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"},
    {id:3,name:'banner3',url:img,description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"}]
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true, 
        autoplaySpeed: 2000,
        arrows:true,
        arrows:false
    };
    return(
        <BannerWrapper>
          <div className="bannerWrapper">
            <Slider {...settings} className="bannerContainer">
                        <div className="bannerContent">
                        <div>
                        <h1>smart watches</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                            <button>Buy Now</button>
                        </div>
                        </div>
                        <div className="bannerImage">
                        <img src={img}/>
                        </div>
                        <div className="bannerContent">
                        <div>
                        <h1>smart watches</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                            <button>Buy Now</button>
                        </div>
                        </div>
                        <div className="bannerImage">
                        <img src={img}/>
                        </div>
            </Slider>
           <div className="circleWrapper">
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
           </div>
          </div>
        </BannerWrapper>
    )
}
export default Banner
const BannerWrapper=styled.div`
  max-width:100%;
  height:auto;
  padding-left:30px;
  .bannerWrapper{
    max-width:100%;
    height:100%;
    background-color: #3b4a6b;
    border-bottom-left-radius:150px;
    .circleWrapper{
        max-width:50%;
        height:10%;
        margin: auto;
        padding-bottom:15px;
        display:flex;
        justify-content:center;
        align-items:center;
    }
  }
  .bannerContainer{
    max-width:1200px;
    height:85%;
    overflow:hidden;
    padding-bottom:20px;
    background-color: #3b4a6b;
    border-bottom-left-radius:150px;
    display:flex;
    flex-wrap:nowrap;
    flex-direction: row;
    justify-content:space-between;
    align-items:center;
    padding-top:10px;
    .bannerContent{
        flex:.5;
        height:100%;
        border-bottom-left-radius:150px;
        display:flex;
        justify-content:center;
        align-items:center;
        text-align:start;
        padding:0 10px;
        color:white;
        h1{
            text-transform: capitalize;
        }
        button{
            padding:10px 30px;
            cursor:pointer;
            background-color:#e5c511;
            border:none;
            outline:none;
            color:white;
            border-radius:5px;
            margin-top:10px
        }
        button:hover{
            background-color:yellow;
            color:black;
        }
    };
    .bannerImage{
        flex:.5;
        height:100%;
        img{
            width:100%;
            height:100%;
            object-fit:contain;
        }
    }
  }
` 