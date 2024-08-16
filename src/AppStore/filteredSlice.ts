import { createSlice } from "@reduxjs/toolkit";
import { Bitem } from "../Components/BestSellers/BestSellers";
interface Ifitems {
    fitems:Bitem[]
}

const initialState:Ifitems = {
    fitems:[]
}

const filteredItems = createSlice({
    name:"filtereditems",
    initialState ,
    reducers:{
        fitems:(state,action)=>{
            state.fitems.push(action.payload)
        }
    }
})

export const {fitems} = filteredItems.actions
export default filteredItems.reducer