// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

// const BASE_URL = process.env.orderENV;

// export const getOrdersByUserId = async (userId) => {
//   const response = await axios.get(`${BASE_URL}?user_id=${userId}`);
//   return response.data;
// };

// const orderSlice = createSlice({
//   name: "order",
//   initialState: {
//     orders: [],
//     loading: false,
//     error: null,
//   },
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(getOrdersByUserId.pending, (state) => {
//         state.loading = true;
//       })
//       .addCase(getOrdersByUserId.fulfilled, (state, action) => {
//         state.orders = action.payload;
//         state.loading = false;
//       })
//       .addCase(getOrdersByUserId.rejected, (state, action) => {
//         state.error = action.payload;
//         state.loading = false;
//       });
//   },
// });

// export const {} = orderSlice.actions;
// export default orderSlice.reducer;
