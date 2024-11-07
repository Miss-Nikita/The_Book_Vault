import { configureStore } from "@reduxjs/toolkit";
import BooksSlice from "./reducers/BooksSlice";


const store = configureStore({
    reducer: {
        BooksSlice
    }
})