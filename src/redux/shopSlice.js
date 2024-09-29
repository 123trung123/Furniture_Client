import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import axiosInstance from "../utils/axiosInstance";

const BASE_URL = "http://localhost:8080/api/furniture";

export const getList = createAsyncThunk("shop/getList", async (_, thunkAPI) => {
  try {
    const response = await axiosInstance.get("/api/furniture/"); 
    return response.data.data; 
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

export const getAllProducts = createAsyncThunk(
  "shop/getAllProducts",
  async ({ page, size }, thunkAPI) => {
    const url = `/api/furniture/products?page=${page}&size=${size}`;
    try {
      const response = await axiosInstance.get(url);
      return response.data.data; 
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const addProduct = createAsyncThunk(
  "shop/addProduct",
  async (productData, thunkAPI) => {
    try {
      const response = await axios.post(`${BASE_URL}/add`, productData);
      return response.data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const getProductImages = createAsyncThunk(
  "shop/getProductImages",
  async (id, thunkAPI) => {
    const url = `${BASE_URL}/images/${id}`; 
    try {
      const response = await axios.get(url);
      return response.data.data; 
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
export const getProductImagesbyName = createAsyncThunk(
  "shop/getProductImagesByName",
  async (I, thunkAPI) => {
    const url = `${BASE_URL}/getimages/${I}`;
    try {
      const response = await axios.get(url);
      console.log("Response from API:", response.data);
      return response.data.data; 
    } catch (error) {
      console.error("Error fetching images:", error.response.data);
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
// Update a product by ID
export const updateProduct = createAsyncThunk(
  "shop/updateProduct",
  async ({ id, productData }, thunkAPI) => {
    try {
      const response = await axios.put(`${BASE_URL}/update/${id}`, productData);
      return response.data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

// Delete a product by ID
export const deleteProduct = createAsyncThunk(
  "shop/deleteProduct",
  async (id, thunkAPI) => {
    try {
      const response = await axios.delete(`${BASE_URL}/delete/${id}`);
      return id; // Return the ID to remove it from the store
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

// Get product by name
export const getProductByName = createAsyncThunk(
  "shop/getProductByName",
  async (name, thunkAPI) => {
    const url = `${BASE_URL}/${name}`;
    try {
      const response = await axios.get(url);
      return response.data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

// Get products by price range
export const getProductsByPriceRange = createAsyncThunk(
  "shop/getProductsByPriceRange",
  async ({ minPrice, maxPrice }, thunkAPI) => {
    const url = `${BASE_URL}/price?minPrice=${minPrice}&maxPrice=${maxPrice}`;
    try {
      const response = await axios.get(url);
      return response.data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

// Get products by category
export const getProductsByCategory = createAsyncThunk(
  "shop/getProductsByCategory",
  async (category, thunkAPI) => {
    const url = `${BASE_URL}/category?category=${category}`;
    try {
      const response = await axios.get(url);
      return response.data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

// Search products by name and price range
export const searchProducts = createAsyncThunk(
  "shop/searchProducts",
  async ({ name, minPrice, maxPrice }, thunkAPI) => {
    const url = `${BASE_URL}/search?name=${name}&minPrice=${minPrice}&maxPrice=${maxPrice}`;
    try {
      const response = await axios.get(url);
      return response.data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

// Upload images for a product
export const uploadProductImages = createAsyncThunk(
  "shop/uploadProductImages",
  async ({ id, files }, thunkAPI) => {
    const formData = new FormData();
    files.forEach((file) => formData.append("files", file));

    const url = `${BASE_URL}/uploadimage/${id}`;
    try {
      const response = await axios.post(url, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      return response.data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

// Redux slice
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
        state.products = action.payload;
        state.status = "succeeded";
      })
      .addCase(getList.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload || action.error.message;
      })
      .addCase(getAllProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getAllProducts.fulfilled, (state, action) => {
        state.products = action.payload.productResponseList;
        state.totalPages = action.payload.totalPages;
        state.status = "succeeded";
      })
      .addCase(getAllProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(addProduct.fulfilled, (state, action) => {
        state.products.push(action.payload);
        state.message = "Product added successfully";
      })
      .addCase(updateProduct.fulfilled, (state, action) => {
        const updatedProduct = action.payload;
        state.products = state.products.map((product) =>
          product.id === updatedProduct.id ? updatedProduct : product
        );
        state.message = "Product updated successfully";
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.products = state.products.filter(
          (product) => product.id !== action.payload
        );
        state.message = "Product deleted successfully";
      })
      .addCase(uploadProductImages.fulfilled, (state, action) => {
        state.images = action.payload;
        state.message = "Images uploaded successfully";
      })
      .addCase(getProductImages.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getProductImages.fulfilled, (state, action) => {
        // Assuming images for a specific product can be stored in the product object
        const productId = action.meta.arg; // The product ID passed to the thunk
        const product = state.products.find(
          (product) => product.id === productId
        );
        if (product) {
          product.images = action.payload; // Store images in the respective product
        }
        state.status = "succeeded";
      })
      .addCase(getProductImages.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload || action.error.message;
      })
      .addCase(getProductImagesbyName.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getProductImagesbyName.fulfilled, (state, action) => {
        state.isLoading = false;
        state.productImages = action.payload; // Update the productImages with the fetched data
      })
      .addCase(getProductImagesbyName.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload; // Store the error message
      });
  },
});

export const { resetStatusAndMessage } = shopSlice.actions;
export default shopSlice.reducer;
