import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    books : [],
}


export const BooksSlice = createSlice({
    name: "Book",
    initialState,
    reducers :{
        load:(state,action ) =>{
            state.books = action.payload
        }
    },
})

export const {load} = BooksSlice.actions

export default BooksSlice.reducer