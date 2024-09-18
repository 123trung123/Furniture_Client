import React from "react";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// const BASE_URL = process.env.REACT_APP_LINK;
const BASE_URL = "https://66a07b747053166bcabb8c62.mockapi.io/Products"
export const getList = createAsyncThunk("shop/getList",async()=>{
    const res =  await axios.get(BASE_URL)
    return res.data
})
const shopSlice = createSlice({
  name: "shop",
  initialState: {
    item: [],
    totalPages: 0,
    status: null,
    error: null,
    message: null,
    stuff: null,
  },
  reducers: {
    resetStatusAndMessage: (state) => {
      state.status = null;
      state.message = null;
      state.error = null;
    },
  },
});
export const {} = shopSlice.actions;
export default shopSlice.reducer;
