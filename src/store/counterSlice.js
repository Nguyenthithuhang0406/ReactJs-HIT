import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
}
export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    incrementCounter: (state) => {
      state.count += 1
    },
    decrementCounter: (state) => {
      state.count -= 1
    },
    multiCounter: (state, action) => {
      state.count *= action.payload;
    },
    ChiaCounter: (state, action) => {
      state.count /= action.payload;
    },
    powCounter: (state, action) => {
      state.count = Math.pow(state.count, action.payload);
    },
    squareCount: (state) => {
      state.count = Math.sqrt(state.count);
    }
  }
})

export const { incrementCounter, decrementCounter, multiCounter, ChiaCounter, powCounter, squareCount } = counterSlice.actions;
export default counterSlice.reducer;