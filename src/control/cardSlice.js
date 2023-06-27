import { createSlice } from "@reduxjs/toolkit";
import courseItems from '../courseItems';

const initialState={
    cardItems:courseItems,
    quantity:4,
    total:0
}

const cardSlice = createSlice({
  name: "card",
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cardItems = [];
    },
    removeItem: (state, action) => {
      const itemId = action.payload;
      state.cardItems = state.cardItems.filter((item) => item.id !== itemId);
    },
    increase: (state, action) => {
      const itemId = action.payload;
      const cartItem = state.cardItems.find(
        (item) => item.id === itemId
      );
      cartItem.quantity++;
    },
    decrease: (state, action) => {
      const itemId = action.payload;
      const cartItem = state.cardItems.find(
        (item) => item.id === itemId
      );
      cartItem.quantity--;
    },
    calculateTotal:(state)=>{
        let total =0;
        let quantity=0;
        state.cardItems.forEach((item)=>{
            total +=item.quantity*item.price;
            quantity+=item.quantity;
        });
        state.quantity=quantity;
        state.total=total;
    }
  },
});

export const  {clearCart,removeItem,increase,decrease,calculateTotal} =cardSlice.actions;
export default cardSlice.reducer;