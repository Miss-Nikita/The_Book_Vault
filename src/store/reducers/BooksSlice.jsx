import { createSlice } from "@reduxjs/toolkit";
// import { loadBooks } from "../actions/BookAction";

const initialState = {
    books : [],
    book : null,
}


export const BooksSlice = createSlice({
    name: "Book",
    initialState,
    reducers :{
        load:(state,action ) =>{
            state.books = action.payload
        },
        loadBook: (state,action ) => {
            state.book = action.payload;
        },
    },
})

export const {load ,loadBook} = BooksSlice.actions

export default BooksSlice.reducer