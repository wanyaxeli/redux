import React,{useEffect} from "react";
import Banner from "../components/Banner";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addtoCart } from "../components/Slices";
const Home = ()=>{
    const data = useSelector(state=>state.data)
    // let Item = data.map(item=>item.items).flat()
    const dispatch = useDispatch()
    const handleCart =(id)=>{
      dispatch(addtoCart(id))
     }
    const cart = data.cart
     useEffect(()=>{
       window.localStorage.setItem('item',JSON.stringify(cart))
      },[cart])
    return(
       <>
       <Banner/>
       <div className='producWrapper'>
              {data.items.map(item=>{
                return(
                <div key={item.id} className='card'>
                    <div className='flag'>
                      <p> <i onClick={()=>handleCart(item.id)} className="fa fa-shopping-cart" aria-hidden="true"></i></p>
                    </div>
                    <div className='cardImage'>
                      <img src={item.url}/>
                    </div>
                    <div className='cardText'>
                      <p>{item.name}</p>
                      <p>prece :${item.price}</p>
                    </div>
                 </div>  
                )
              })}
      </div>
       </>
    )
}
export default Home