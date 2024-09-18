import { configureStore } from '@reduxjs/toolkit';
import shopSlice from './shopSlice';
import cartSlice from './cartSlice';


const store=configureStore({
    reducer:{
        cart:cartSlice,
        shop:shopSlice
    }
})
export default store