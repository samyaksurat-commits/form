import { createSlice } from "@reduxjs/toolkit";

const Slice = createSlice({
  name: "cart",

  initialState: {
    items: [],
    darkMode:false
  },

  reducers: {
 
    addToCart: (state, action) => {
      state.items.push(action.payload);
    },
    toggleTheme:(state)=>{
        state.darkMode=!state.darkMode;
    },
  },
});

export const { addToCart } = Slice.actions;
export const { toggleTheme } = Slice.actions;

export default Slice.reducer;