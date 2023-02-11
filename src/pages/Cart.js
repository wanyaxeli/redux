import React ,{useEffect, useState}from "react";
import { decrementQuantity, incrementQuantity,removeItem } from "../components/Slices";
import { useDispatch } from "react-redux";
const Cart =()=>{
   const [item,setItem]=useState([])
   const [quantity,setQuantity]=useState()
   const [price,setPrice]=useState()
   const [total,setTotal]=useState()
   const dispatch = useDispatch()
   useEffect(()=>{
    let cart = JSON.parse(window.localStorage.getItem('item'))
    if (cart!==''){
       setItem( cart)
    }
   },[])
     const handlIncrement=(id)=>{
     dispatch(incrementQuantity(id))
     }
     const handledecrement=(id)=>{
        decrementQuantity(id)
     }
     function getQuantity (){
         let no = item.reduce((accu,cur)=>{
            return accu + cur.quantity
         },0)
         setQuantity(no)
     }
     console.log(item)
     function getPrice (){
      let price = item.forEach((item)=>{
        return item.price * item.quantity
      })
      setPrice (price)
      getTotal()
     }
     function getTotal(){
        let total=0
        total +=price
        setTotal(total)
     }
     const handleDelete=(id)=>{
       dispatch(removeItem(id))
       window.location.reload(true)
     }
     useEffect(()=>{
        getQuantity()
        getPrice()
        getTotal()
     },[item])
    return(
        <div className="cartWrapper">
            <div className="cartContainer">
                <h4>{quantity} products in your cart</h4>
                {item.map(item=>{
                    return(
                    <div key={item.id} className="cart">
                        <div className="cartImage">
                            <img src={item.url}/>
                        </div>
                        <div className="cartDetailsWrapper">
                            <div className="cartName">
                                <p>{item.name}</p>
                                <span onClick={()=>handleDelete(item.id)}>&times;</span>
                            </div>
                            <div className="cartBtnWrapper">
                                <div className="btnWrapper">
                                <button  onClick={()=>handledecrement(item.id)}>-</button><span>{item.quantity}</span><button onClick={()=>handlIncrement(item.id)}>+</button>
                                </div>
                                <p>price: ${price}</p>
                            </div>
                        </div>
                    </div>
                    )
                })}
            </div>
            <aside>
              <div className="innerAside">
              <div className="totalWrapper">
                 <div className="total">
                    <p>Total</p>
                    <p>$ {total}</p>
                 </div>
                 <div className="checkout">
                    <button>CheckOut</button>
                 </div>
            </div> 
              </div>
            </aside>
        </div>
    )
}
export default Cart