import { createSlice } from "@reduxjs/toolkit";

const initialState = {value:0};

export const filterSlice = createSlice({
    name:"filterSlice",
    initialState,
    reducers:{
        onChangeFilter(state, action){
            state.value=action.payload
        }
    }
})

export const { onChangeFilter } = filterSlice.actions
export default filterSlice.reducer