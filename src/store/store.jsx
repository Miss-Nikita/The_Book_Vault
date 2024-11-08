import { configureStore } from "@reduxjs/toolkit";
import BooksSlice from "./reducers/BooksSlice";


export const store = configureStore({
    reducer: {
        BooksSlice
    }
})