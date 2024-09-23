// import axios from "axios";
// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// const BASE_URL = process.env.roleENV;

// export const getRoles = async () => {
//   const response = await axios.get(BASE_URL);
//   return response.data;
// };


// const roleSlice = createSlice({
//     name: "role",
//     initialState: {
//       roles: [],
//       loading: false,
//       error: null,
//     },
//     reducers: {},
//     extraReducers: (builder) => {
//       builder
//         .addCase(getRoles.pending, (state) => {
//           state.loading = true;
//         })
//         .addCase(getRoles.fulfilled, (state, action) => {
//           state.roles = action.payload;
//           state.loading = false;
//         })
//         .addCase(getRoles.rejected, (state, action) => {
//           state.error = action.payload;
//           state.loading = false;
//         });
//     },
//   });
  
//   export const { } = roleSlice.actions;
//   export default roleSlice.reducer;
  