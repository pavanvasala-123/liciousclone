import { createSlice } from "@reduxjs/toolkit";
import {Icartpayload} from '../Components/BestSellers/BestSellerItem'
import { json } from "stream/consumers";
import type { PayloadAction } from '@reduxjs/toolkit'

export interface ICart extends Icartpayload {
    quantity:number
}

interface Istate {
    cart : ICart[];
    total_price:number;
    cart_quantity:number;
}

const cartItems = localStorage.getItem("cart_products")

const parse = JSON.parse(cartItems as string)

const initialState:Istate = {
    cart :localStorage.getItem("cart_products") ? parse :[],
    total_price:0,
    cart_quantity:0
}

const cartSlice = createSlice({
   name:"cart",
   initialState,
   reducers:{
        addToCart:(state,action:PayloadAction<Icartpayload>) => {
            
            const Itemindex = state.cart.findIndex((eachItem) => eachItem.id === action.payload.id)
            if(Itemindex >= 0){
                state.cart[Itemindex].quantity += 1
            }else{
                const item = { ...action.payload , quantity:1}
                state.cart.push(item) 
            }
            localStorage.setItem("cart_products",JSON.stringify(state.cart))
        },
        decreaseQunatity:(state,action:PayloadAction<Icartpayload>)=>{
            const itemIndex = state.cart.findIndex(eachItem => eachItem.id === action.payload.id)
            if(state.cart[itemIndex].quantity > 1){
                state.cart[itemIndex].quantity -= 1
                localStorage.setItem("cart_products",JSON.stringify(state.cart))
            }else if(state.cart[itemIndex].quantity === 1) {
                const remaingItems = state.cart.filter((eachItem) => eachItem.id !== action.payload.id)
                state.cart = remaingItems
                localStorage.setItem("cart_products",JSON.stringify(state.cart))
            }
        },
        removeItem:(state,action:PayloadAction<Icartpayload>) =>{
            const remaingItems = state.cart.filter((eachItem) => eachItem.id !== action.payload.id)
            console.log(remaingItems)
            state.cart = remaingItems
            localStorage.setItem("cart_products",JSON.stringify(state.cart))
        },
        
    ItemTotal:(state)=>{
        let sum = 0;
        let cart_quantity = 0;
        state.cart.forEach((eachObj) => sum += eachObj.quantity * eachObj.basePrice )
        state.total_price = sum
        state.cart_quantity = cart_quantity
        localStorage.setItem("cartItems",JSON.stringify(state.cart))
    },
    
    TotalCartItems:(state) =>{
        let count = 0;
        count = state.cart.length
        state.cart_quantity = count

    }
        
   }
})

export const {addToCart,decreaseQunatity,TotalCartItems,ItemTotal,removeItem} = cartSlice.actions
export default cartSlice.reducer