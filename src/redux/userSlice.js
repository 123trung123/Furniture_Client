// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

// const BASE_URL = process.env.userEVN; 

// export const getUserById = createAsyncThunk("user/getUserById", async (id) => {
//   const res = await axios.get(`${BASE_URL}/users/${id}`);
//   return res.data;
// });


// const userSlice = createSlice({
//   name: "user",
//   initialState: {
//     user: {},
//     loading: false,
//     error: null,
//   },
//   reducers: {
//     setUser: (state, action) => {
//       state.user = action.payload;
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(getUserById.pending, (state) => {
//         state.loading = true;
//       })
//       .addCase(getUserById.fulfilled, (state, action) => {
//         state.user = action.payload;
//         state.loading = false;
//       })
//       .addCase(getUserById.rejected, (state, action) => {
//         state.error = action.payload;
//         state.loading = false;
//       });
//   },
// });

// export const { setUser } = userSlice.actions;
// export default userSlice.reducer;
