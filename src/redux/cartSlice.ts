import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    addProduct: (state:any, action):any => {
      state.quantity += 1;
      state.products.push(action.payload);
      
    },
    removeProduct:(state:any,action:any)=>{
      state.quantity -= 1
      state.products.pop(action.payload)
     
    }
  },
});

export const { addProduct,removeProduct } = cartSlice.actions;
export default cartSlice.reducer;
