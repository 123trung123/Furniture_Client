import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// const initialState = {
//   products:[],
//   status:"start",
//   error:""
// };

const BASE_URL = "https://66a07b747053166bcabb8c62.mockapi.io/Products";

export const getList = createAsyncThunk("shop/getList", async () => {
  const res = await axios.get(BASE_URL);
  return res.data;
});

export const getAll = createAsyncThunk(
  "shop/getAll",
  async ({ currentPage, limit }, thunkAPI) => {
    const url = `${BASE_URL}/list?page=${currentPage}&size=${limit}`;
    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const deleteProductById = createAsyncThunk(
  "shop/deleteById",
  async (id, thunkAPI) => {
    const url = `${BASE_URL}/delete/${id}`;
    try {
      const response = await axios.delete(url);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const saveProduct = createAsyncThunk(
  "shop/save",
  async (productData, thunkAPI) => {
    const url = `${BASE_URL}/save`;
    try {
      const response = await axios.post(url, productData);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const editProduct = createAsyncThunk(
  "shop/editProduct",
  async ({ id, product }, thunkAPI) => {
    const url = BASE_URL + `/update/${id}`;
    try {
      console.log(product);
      const response = await axios.put(url, product);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const getProductByName = createAsyncThunk(
  "shop/getByName",
  async (name, thunkAPI) => {
    const url = `${BASE_URL}/get?name=${name}`;
    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const uploadImage = createAsyncThunk(
  "shop/uploadImage",
  async ({ id, formData }, thunkAPI) => {
    const url = `${BASE_URL}/uploadimage/${id}`;
    try {
      const response = await axios.post(url, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const getImages = createAsyncThunk(
  "shop/getImages",
  async (id, thunkAPI) => {
    const url = `${BASE_URL}/getimage/${id}`;
    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const deleteImage = createAsyncThunk(
  "shop/deleteImage",
  async (id, thunkAPI) => {
    const url = `${BASE_URL}/deleteimage/${id}`;
    try {
      const response = await axios.delete(url);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

const shopSlice = createSlice({
  name: "shop",
  initialState: {
    products: [],
    totalPages: 0,
    status: null,
    error: null,
    message: null,
    images: [],
  },
  reducers: {
    resetStatusAndMessage: (state) => {
      state.status = null;
      state.message = null;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
    .addCase(getList.pending, (state) => {
      state.status = "loading";
    })
    .addCase(getList.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.products = action.payload;
    })
    .addCase(getList.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    })
      .addCase(getAll.fulfilled, (state, action) => {
        state.products = action.payload.data.productList;
        state.totalPages = action.payload.data.totalPages;
      })
      .addCase(deleteProductById.fulfilled, (state, action) => {
        state.status = action.payload.status;
        state.message = action.payload.message;
        state.products = state.products.filter(
          (product) => product.id !== action.payload.data
        );
      })
      .addCase(saveProduct.fulfilled, (state, action) => {
        state.products = [...state.products, action.payload.data];
        state.status = action.payload.status;
        state.message = action.payload.message;
      })
      .addCase(editProduct.fulfilled, (state, action) => {
        state.status = action.payload.status;
        state.message = action.payload.message;
        state.products = state.products.map((product) =>
          product.id === action.payload.data.id ? action.payload.data : product
        );
      })
      .addCase(getProductByName.fulfilled, (state, action) => {
        state.products = action.payload;
        state.status = action.payload.status;
      })
      .addCase(uploadImage.fulfilled, (state, action) => {
        state.status = action.payload.status;
      })
      .addCase(getImages.fulfilled, (state, action) => {
        state.images = action.payload.data;
        state.status = action.payload.status;
        state.message = action.payload.message;
      })
      .addCase(deleteImage.fulfilled, (state, action) => {
        state.images = state.images.filter(
          (image) => image.id !== action.payload.data
        );
      });
  },
});

export const { resetStatusAndMessage } = shopSlice.actions;
export default shopSlice.reducer;
