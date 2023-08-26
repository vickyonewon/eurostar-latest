import { createSlice } from "@reduxjs/toolkit";

interface CounterState{
    value: number
}
const parsedValue = 0;

const initialState: CounterState = {
  value: parsedValue,
};
const counterSlice=createSlice({
    name: 'counting',
    initialState,
    reducers: {
        increase: (state, action)=>{
            state.value+=action.payload;
        },
        decrease: (state, action)=>{
            state.value-=action.payload;
        }
    }
})
export const {increase, decrease}=counterSlice.actions;
export default counterSlice.reducer;

