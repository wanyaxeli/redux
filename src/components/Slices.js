import { createSlice} from "@reduxjs/toolkit";
import w1 from '../assets/w1.png'
import w2 from '../assets/w2.png'
import w3 from '../assets/w3.png'
import w4 from '../assets/w4.png'
import w5 from '../assets/w5.png'
import w6 from '../assets/w6.png'
//  const initialState=[{items:[{id:1,name:'watch1',url:w1,stock:5,price:2000},{id:2,name:'watch2',url:w2,stock:2,price:1000},
//             {id:3,name:'watch3',url:w3,stock:35,price:400},{id:4,name:'watch4',url:w4,stock:3,price:6000},
//             {id:5,name:'watch5',url:w5,stock:4,price:1200},{id:6,name:'watch6',url:w6,stock:10,price:300}],
//             cartItems:{
//                 items:[],
//             }}]
const initialState ={
    items:[{id:1,name:'watch1',url:w1,stock:5,price:2000},{id:2,name:'watch2',url:w2,stock:2,price:1000},
            {id:3,name:'watch3',url:w3,stock:35,price:400},{id:4,name:'watch4',url:w4,stock:3,price:6000},
             {id:5,name:'watch5',url:w5,stock:4,price:1200},{id:6,name:'watch6',url:w6,stock:10,price:300}],
    cart:[]
}
export const DataSlice=createSlice({
    name:'data',
    initialState,
    reducers:{
        addtoCart:(state,action)=>{
            let item=state.items.find(item=>item.id === action.payload)
            let newCart=Object.assign({},item,{quantity:1})
           if(state.cart.includes(newCart)){
            newCart.quantity ++
           }else{
            state.cart.push(newCart)
           }
        },
        incrementQuantity:(state,action)=>{
         let item=state.cart.find(item=>item.id === action.payload)
       if(item !== undefined){
        item.quantity++
       }
    },
    decrementQuantity:(state,action)=>{
        let item =state.cart.find(i=>i.id === action.payload)
        if(item !== undefined && item.quantity >1){
            item.quantity--
        }else{
            return false
        }
    },
    removeItem:(state,action)=>{
        let newCart= state.cart.filter(item=>item.id!== action.payload)
        state.cart=newCart
    }
}})
export const { addtoCart,incrementQuantity ,decrementQuantity,removeItem} =  DataSlice.actions
