import React from "react";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = process.env.REACT_APP_LINK;

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
