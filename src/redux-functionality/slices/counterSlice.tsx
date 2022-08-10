import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import InitialState, { UpdateCounterAction } from "../../types/redux/counter";
const initialState: InitialState = {
  value: 0
};

export const counterSlice = createSlice({
  name: UpdateCounterAction,
  initialState: initialState,
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
    setCounter: (state, action: PayloadAction<number>) => {
      state.value = action.payload;
    }
  }
});

// Action creators are generated for each case reducer function
export const {
  increment,
  decrement,
  incrementByAmount,
  setCounter
} = counterSlice.actions;
// You must export the reducer as follows for it to be able to be read by the store.
export default counterSlice.reducer;
// step by step
// step 1 : create file reducer with multi action and export 2 types (actions, reducer)
//step 2 : create store into reducer and return state.
//step 3 : import store to file app and using every here
//step 4 : using useDispatch, useSelector here component if using state of redux.
