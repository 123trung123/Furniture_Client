// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";
// // const initialState = {
// //   products:[],
// //   status:"start",
// //   error:""
// // };

// const BASE_URL = "https://66a07b747053166bcabb8c62.mockapi.io/Products";

// export const getList = createAsyncThunk("shop/getList", async () => {
//   const res = await axios.get(BASE_URL);
//   return res.data;
// });

// export const getAll = createAsyncThunk(
//   "shop/getAll",
//   async ({ currentPage, limit }, thunkAPI) => {
//     const url = `${BASE_URL}/list?page=${currentPage}&size=${limit}`;
//     try {
//       const response = await axios.get(url);
//       return response.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.response.data);
//     }
//   }
// );

// export const deleteProductById = createAsyncThunk(
//   "shop/deleteById",
//   async (id, thunkAPI) => {
//     const url = `${BASE_URL}/delete/${id}`;
//     try {
//       const response = await axios.delete(url);
//       return response.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.response.data);
//     }
//   }
// );

// export const saveProduct = createAsyncThunk(
//   "shop/save",
//   async (productData, thunkAPI) => {
//     const url = `${BASE_URL}/save`;
//     try {
//       const response = await axios.post(url, productData);
//       return response.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.response.data);
//     }
//   }
// );

// export const editProduct = createAsyncThunk(
//   "shop/editProduct",
//   async ({ id, product }, thunkAPI) => {
//     const url = BASE_URL + `/update/${id}`;
//     try {
//       console.log(product);
//       const response = await axios.put(url, product);
//       return response.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.response.data);
//     }
//   }
// );

// export const getProductByName = createAsyncThunk(
//   "shop/getByName",
//   async (name, thunkAPI) => {
//     const url = `${BASE_URL}/get?name=${name}`;
//     try {
//       const response = await axios.get(url);
//       return response.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.response.data);
//     }
//   }
// );

// export const uploadImage = createAsyncThunk(
//   "shop/uploadImage",
//   async ({ id, formData }, thunkAPI) => {
//     const url = `${BASE_URL}/uploadimage/${id}`;
//     try {
//       const response = await axios.post(url, formData, {
//         headers: {
//           "Content-Type": "multipart/form-data",
//         },
//       });
//       return response.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.response.data);
//     }
//   }
// );

// export const getImages = createAsyncThunk(
//   "shop/getImages",
//   async (id, thunkAPI) => {
//     const url = `${BASE_URL}/getimage/${id}`;
//     try {
//       const response = await axios.get(url);
//       return response.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.response.data);
//     }
//   }
// );

// export const deleteImage = createAsyncThunk(
//   "shop/deleteImage",
//   async (id, thunkAPI) => {
//     const url = `${BASE_URL}/deleteimage/${id}`;
//     try {
//       const response = await axios.delete(url);
//       return response.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.response.data);
//     }
//   }
// );

// const shopSlice = createSlice({
//   name: "shop",
//   initialState: {
//     products: [],
//     totalPages: 0,
//     status: null,
//     error: null,
//     message: null,
//     images: [],
//   },
//   reducers: {
//     resetStatusAndMessage: (state) => {
//       state.status = null;
//       state.message = null;
//       state.error = null;
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//     .addCase(getList.pending, (state) => {
//       state.status = "loading";
//     })
//     .addCase(getList.fulfilled, (state, action) => {
//       state.status = "succeeded";
//       state.products = action.payload;
//     })
//     .addCase(getList.rejected, (state, action) => {
//       state.status = "failed";
//       state.error = action.error.message;
//     })
//       .addCase(getAll.fulfilled, (state, action) => {
//         state.products = action.payload.data.productList;
//         state.totalPages = action.payload.data.totalPages;
//       })
//       .addCase(deleteProductById.fulfilled, (state, action) => {
//         state.status = action.payload.status;
//         state.message = action.payload.message;
//         state.products = state.products.filter(
//           (product) => product.id !== action.payload.data
//         );
//       })
//       .addCase(saveProduct.fulfilled, (state, action) => {
//         state.products = [...state.products, action.payload.data];
//         state.status = action.payload.status;
//         state.message = action.payload.message;
//       })
//       .addCase(editProduct.fulfilled, (state, action) => {
//         state.status = action.payload.status;
//         state.message = action.payload.message;
//         state.products = state.products.map((product) =>
//           product.id === action.payload.data.id ? action.payload.data : product
//         );
//       })
//       .addCase(getProductByName.fulfilled, (state, action) => {
//         state.products = action.payload;
//         state.status = action.payload.status;
//       })
//       .addCase(uploadImage.fulfilled, (state, action) => {
//         state.status = action.payload.status;
//       })
//       .addCase(getImages.fulfilled, (state, action) => {
//         state.images = action.payload.data;
//         state.status = action.payload.status;
//         state.message = action.payload.message;
//       })
//       .addCase(deleteImage.fulfilled, (state, action) => {
//         state.images = state.images.filter(
//           (image) => image.id !== action.payload.data
//         );
//       });
//   },
// });

// export const { resetStatusAndMessage } = shopSlice.actions;
// export default shopSlice.reducer;
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import axiosInstance from '../utils/axiosInstance';

const BASE_URL = "http://localhost:8080/api/furniture";

export const getList = createAsyncThunk("shop/getList", async (_, thunkAPI) => {
  try {
    const response = await axiosInstance.get("/api/furniture/"); // This will fetch all products without pagination
    return response.data.data; // Assuming response structure contains data field
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});
// export const getList = createAsyncThunk("shop/getList", async (_, thunkAPI) => {
//   try {
//     const response = await axios.get(`${BASE_URL}/`); // This will fetch all products without pagination
//     return response.data.data; // Assuming response structure contains data field
//   } catch (error) {
//     return thunkAPI.rejectWithValue(error.response.data);
//   }
// });
// Fetch all products (paginated)
export const getAllProducts = createAsyncThunk(
  "shop/getAllProducts",
  async ({ page, size }, thunkAPI) => {
    const url = `/api/furniture/products?page=${page}&size=${size}`;
    try {
      const response = await axiosInstance.get(url);
      return response.data.data; // Assuming response structure contains data field
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

// export const getAllProducts = createAsyncThunk(
//   "shop/getAllProducts",
//   async ({ page, size }, thunkAPI) => {
//     const url = `${BASE_URL}/products?page=${page}&size=${size}`;
//     try {
//       const response = await axios.get(url);
//       return response.data.data; // Assuming response structure contains data field
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.response.data);
//     }
//   }
// );
// Add a new product
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
      });
  },
});

export const { resetStatusAndMessage } = shopSlice.actions;
export default shopSlice.reducer;
