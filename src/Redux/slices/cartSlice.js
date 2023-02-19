import { createSlice } from "@reduxjs/toolkit";
import { isEqual } from "lodash";

const initialState = {
    value: [],
};

export const cartSlice = createSlice({
    name: "cards",
    initialState,
    reducers: {
        addToCart(state, action) {
            if (
                isEqual(
                    [],
                    state.value.filter(
                        (obj) => obj.itemId == action.payload.itemId
                    )
                )
            ) {
                state.value.push({...action.payload, count:1})
            } else {
               state.value.find((obj)=>obj.itemId == action.payload.itemId).count +=1
            }
        },
    },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
