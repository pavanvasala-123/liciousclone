import { configureStore } from "@reduxjs/toolkit";
import cartReducer from '../AppStore/cartSlice'
import showCartReducer from '../AppStore/ShowCartSlice'
import filteredSlice from "./filteredSlice";

const appStore = configureStore({
   reducer:{
        cart:cartReducer,
        showCart:showCartReducer,
        filtereditems:filteredSlice
   }


})
export type RootState = ReturnType<typeof appStore.getState>
export default appStore