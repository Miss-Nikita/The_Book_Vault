import { Instance } from "../../utils/Axios";
import { load } from "../reducers/BooksSlice";


export const loadBooks = () => async (dispatch, getState) =>{
    try {
        const {date} = await Instance.get("volume?q=dragon");
        dispatch(load(date.items));
    } catch (error) {
        console.log(error);
        
    }
}