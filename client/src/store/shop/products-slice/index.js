import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isLoading: false,
  productList: [],
  productDetails: null,
};

export const fetchAllFilteredProducts = createAsyncThunk(
  "/products/fetchAllProducts",
  async () => {
   

    const result = await axios.get(
      `http://localhost:5000/api/shop/products/get`
    );

    console.log(result);

    return result?.data;
  }
);



const shoppingProductSlice = createSlice({
  name: "shoppingProducts",
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllFilteredProducts.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchAllFilteredProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.productList = action.payload.data;
      })
      .addCase(fetchAllFilteredProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.productList = [];
      })
     
  },
});

// export const { setProductDetails } = shoppingProductSlice.actions;

export default shoppingProductSlice.reducer;
