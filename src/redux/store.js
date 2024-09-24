import { configureStore } from "@reduxjs/toolkit";
import shopSlice from "./shopSlice";
import cartSlice from "./cartSlice";
import authReducer from "./authSlice";
import userReducer from "./userSlice"
import socialSlice from "./socialSlice";
import roleSlice from "./roleSlice";
import orderSlice from "./orderSlice";

const store = configureStore({
  reducer: {
    cart: cartSlice,
    shop: shopSlice,
    auth: authReducer,
    user: userReducer,
    // user: userSlice,
    // social: socialSlice,
    // role: roleSlice,
    // order: orderSlice,
  },
});
export default store;
