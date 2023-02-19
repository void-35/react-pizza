import { createSlice } from "@reduxjs/toolkit";
import { isEqual } from "lodash";

const initialState = {
    value: [],
    pizzaCount:0,
    totalPrice:0,
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
                state.pizzaCount++
                state.totalPrice += action.payload.price  
            } else {
               state.value.find((obj)=>obj.itemId == action.payload.itemId).count +=1
               state.pizzaCount++
               state.totalPrice += action.payload.price
            }
        },
        deleteCartObject(state, action){
            console.log(1)
            const index = state.value.findIndex((obj)=>obj.imageUrl == action.payload.imageUrl)
            state.value.splice(index, 1)
            state.pizzaCount = 0
            state.totalPrice -= action.payload.price*action.payload.count
        },
        cleanCart(state){
            console.log(1)
            state.value = []
            state.pizzaCount = 0
            state.totalPrice = 0
        },
        countIncrement(state, action){
            state.value.find((obj)=>obj.imageUrl == action.payload.imageUrl).count +=1
            state.pizzaCount++;
            state.totalPrice += action.payload.price
        },
        countDecrement(state, action){
            if(state.value.find((obj)=>obj.imageUrl == action.payload.imageUrl).count<=0){
                const index = state.value.findIndex((obj)=>obj.imageUrl == action.payload.imageUrl)
                state.value.splice(index, 1)
            }else{
                state.value.find((obj)=>obj.imageUrl == action.payload.imageUrl).count -=1
                console.log(state.value.find((obj)=>obj.imageUrl == action.payload.imageUrl).count)
                state.pizzaCount--   
                state.totalPrice -= action.payload.price             
            }
        },
    },
});

export const { addToCart, deleteCartObject, countIncrement, countDecrement, cleanCart } = cartSlice.actions;
export default cartSlice.reducer;
