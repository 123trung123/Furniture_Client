import React from "react";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import Products from "../components/products/Products";

// const BASE_URL = process.env.REACT_APP_LINK;
const BASE_URL = "https://66a07b747053166bcabb8c62.mockapi.io/Products"
export const getList = createAsyncThunk("shop/getList",async()=>{
    const res =  await axios.get(BASE_URL)
    return res.data
})
export const getAlll = createAsyncThunk(
  "student/getAll",
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

export const deleteStudentById = createAsyncThunk(
  "student/deleteById",
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

export const saveStudent = createAsyncThunk(
  "student/save",
  async (studentData, thunkAPI) => {
    const url = `${BASE_URL}/save`;
    try {
      const response = await axios.post(url, studentData);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const editStudent = createAsyncThunk(
  "student/editProduct",
  async ({ id, student }, thunkAPI) => {
    const url = BASE_URL + `/update/${id}`;
    try {
      console.log(student);
      const response = await axios.put(url, student);
      return response.data; // Trả về dữ liệu từ phản hồi
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data); // Trả về lỗi nếu có
    }
  }
);

export const getStudentByName = createAsyncThunk(
  "student/getByName",
  async (name, thunkAPI) => {
    const url = `${BASE_URL}/get?ten=${name}`;
    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
export const getStudentByNgaySinh = createAsyncThunk(
  "student/getByNgaySinh",
  async ({ namSinh1, namsinh2 }, thunkAPI) => {
    const url = `${BASE_URL}/getbynamsinh?namSinh1=${namSinh1}&namsinh2=${namsinh2}`;
    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
export const getStudentByXepLoai = createAsyncThunk(
  "student/getByXepLoai",
  async (xepLoai, thunkAPI) => {
    const url = `${BASE_URL}/getbyxeploai?xepLoai=${xepLoai}`;
    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
export const uploadImage = createAsyncThunk(
  "student/uploadImage",
  async ({id,formData}, thunkAPI) => {
    const url = `${BASE_URL}/uploadimage/${id}`;
    try {
      const response = await axios.post(url,formData,{
        headers:{
          'Content-Type': 'multipart/form-data'
        }
      })
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
export const getImages = createAsyncThunk( "student/getImages",async (id, thunkAPI) => {
    const url = `${BASE_URL}/getimage/${id}`;
    try {
      const response = await axios.get(url)
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
export const search = createAsyncThunk(
  "student/search",
  async ({ xepLoai, ten, thanhPho, startYear, endYear }, thunkAPI) => {
    const url = `${BASE_URL}/search?xepLoai=${xepLoai}&ten=${ten}&thanhPho=${thanhPho}&startYear=${startYear}&endYear=${endYear}`;
    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
export const deleteImage = createAsyncThunk("student/deleteimage",async (id, thunkAPI) => {
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
    stuff: null,
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
      .addCase(getAlll.fulfilled, (state, action) => {
        state.students = action.payload.data.studentList;
        state.totalPages = action.payload.data.totalPages;
      })
      .addCase(deleteStudentById.fulfilled, (state, action) => {
        state.status = action.payload.status;
        state.message = action.payload.message;
        console.log(action.payload.data);
        state.students = state.students.filter(
          (student) => student.id !== action.payload.data
        );
      })
      .addCase(deleteStudentById.rejected, (state, action) => {
        state.status = action.payload.status;
        state.message = action.payload.message;
        state.error = action.payload.error;
      })
      .addCase(saveStudent.fulfilled, (state, action) => {
        state.students = [...state.students, action.payload.data];
        state.status = action.payload.status;
        state.message = action.payload.message;
      })
      .addCase(saveStudent.rejected, (state, action) => {
        state.status = action.payload.status;
        state.error = action.payload.data;
        state.message = action.payload.message;
      })
      .addCase(editStudent.fulfilled, (state, action) => {
        state.status = action.payload.status;
        state.message = action.payload.message;
        state.students = state.students.map((student) =>
          student.id === action.payload.data.id ? action.payload.data : student
        );
      })
      .addCase(editStudent.rejected, (state, action) => {
        state.status = action.payload.status;
        state.message = action.payload.message;
        state.error = action.payload.data;
      })
      .addCase(getStudentByName.fulfilled, (state, action) => {
        state.students = action.payload;
        state.status = action.payload.status;
      })
      .addCase(getStudentByNgaySinh.fulfilled, (state, action) => {
        state.students = action.payload.data;
        state.status = action.payload.status;
      })
      .addCase(getStudentByXepLoai.fulfilled, (state, action) => {
        state.students = action.payload.data;
        state.status = action.payload.status;
      })
      .addCase(getStudentByNgaySinh.rejected, (state, action) => {
        state.status = action.payload.status;
        state.error = action.payload.data;
        state.message = action.payload.message;
      })
      .addCase(getStudentByXepLoai.rejected, (state, action) => {
        state.status = action.payload.status;
        state.error = action.payload.data;
        state.message = action.payload.message;
      })
      .addCase(getAlll.rejected, (state, action) => {
        state.status = action.payload.status;
        state.error = action.payload.data;
        state.message = action.payload.message;
      })
      .addCase(search.fulfilled, (state, action) => {
        state.students = action.payload.data;
        state.status = action.payload.status;
      })
      .addCase(search.rejected, (state, action) => {
        state.status = action.payload.status;
        state.error = action.payload.data;
        state.message = action.payload.message;
      })
      .addCase(uploadImage.fulfilled, (state,action)=> {
        state.status = action.payload.status;
      })
      
      .addCase(getImages.fulfilled, (state, action) => {
        state.imagename = action.payload.data;
        state.status = action.payload.status;
        state.message = action.payload.message;
      })
      .addCase(getImages.rejected, (state, action) => {
        state.status = action.payload.status;
        state.error = action.payload.data;
        state.message = action.payload.message;
      })
      .addCase(deleteImage.fulfilled ,(state,action)=>{
        // state.status = action.payload.status;
        // state.message = action.payload.message;
        state.imagename = state.imagename.filter(
          (imagename) => imagename.id !== action.payload.data
        );
      })
      .addCase(deleteImage.rejected, (state, action) => {
        // state.status = action.payload.status;
        // state.message = action.payload.message;
        // state.error = action.payload.data;
      });
      
  },
});
export const {resetStatusAndMessage} = shopSlice.actions;
export default shopSlice.reducer;
