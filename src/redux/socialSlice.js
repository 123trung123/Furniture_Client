// import axios from "axios";
// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// const BASE_URL = process.env.socialENV;

// export const getSocialAccountsByUserId = async (userId) => {
//   const response = await axios.get(`${BASE_URL}?user_id=${userId}`);
//   return response.data;
// };


// const socialAccountSlice = createSlice({
//     name: "socialAccount",
//     initialState: {
//       accounts: [],
//       loading: false,
//       error: null,
//     },
//     reducers: {},
//     extraReducers: (builder) => {
//       builder
//         .addCase(getSocialAccountsByUserId.pending, (state) => {
//           state.loading = true;
//         })
//         .addCase(getSocialAccountsByUserId.fulfilled, (state, action) => {
//           state.accounts = action.payload;
//           state.loading = false;
//         })
//         .addCase(getSocialAccountsByUserId.rejected, (state, action) => {
//           state.error = action.payload;
//           state.loading = false;
//         });
//     },
//   });
  
//   export const { } = socialAccountSlice.actions;
//   export default socialAccountSlice.reducer;
  