import { createSlice } from "@reduxjs/toolkit";

export const sortSlice = createSlice({
    name: "sort",
    initialState: {
        value: {
            sort: {
                title: "популярности (ASC)",
                sortProp: "rating",
            },
            activeIndex:false
        },
    },
    reducers: {
        onChangeSort(state, action) {
            console.log(action.payload);
            state.value.sort = action.payload;
        },
        openSort(state) {
            state.value.activeIndex = !state.value.activeIndex; 
        },
    },
});

export const { onChangeSort, openSort } = sortSlice.actions;
export default sortSlice.reducer;
