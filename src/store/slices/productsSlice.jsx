import { createSlice } from "@reduxjs/toolkit";

import { fetchProducts } from "../thunks/fetchProductsThunk";

const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
  },
  extraReducers(builder) {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.products = action.payload;
    });
  },
});

export default productsSlice.reducer;
