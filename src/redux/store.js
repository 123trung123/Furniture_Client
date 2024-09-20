import { configureStore } from '@reduxjs/toolkit';
import shopSlice from './shopSlice';
import cartSlice from './cartSlice';
import userSlice from './userSlice';


const store=configureStore({
    reducer:{
        cart:cartSlice,
        shop:shopSlice,
        user:userSlice
    }
})
export default store