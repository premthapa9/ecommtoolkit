import { createSlice } from "@reduxjs/toolkit";

const ProdSlice = createSlice({
  name: "Prod",
  initialState: {
    prodList: [],
    totalProd: 20,
  },
  reducers: {
    getData(state, action) {
      state.prodList.push(...action.payload);
    },
  },
});

export const { getData } = ProdSlice.actions;

export default ProdSlice.reducer;
