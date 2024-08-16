import { createSlice } from "@reduxjs/toolkit"; 
export interface IshowCart{
    show:boolean
}
const initialState:IshowCart = {
    show:false
}
const toggleCart = createSlice({
    name:"showCart",
    initialState ,
    reducers:{
        showCart: (state,action) => {
            state.show = action.payload; 
          }
    }

})

export const {showCart} = toggleCart.actions 
export default toggleCart.reducer