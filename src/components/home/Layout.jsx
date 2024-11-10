import React, { useEffect, useState } from 'react'
import Search from './Search'
import ShowBooks from '../partials/ShowBooks'
import { useDispatch, useSelector } from 'react-redux';
import { loadBooks} from "../../store/actions/BookAction"
import Pageination from '../partials/Pageination';

const Layout = () => {
  const [query, setquery] = useState("");
  const { books } = useSelector((store) => store.BooksSlice || {}); // Make sure to use 'BooksSlice' here

  const dispatch = useDispatch();
  // console.log(books);

  useEffect(() =>{
    if (books.length === 0) dispatch(loadBooks("default"))
  },[])
  
  return (
    <div className="h-max w-full">
    <Search query={query} setquery={setquery} />
    <ShowBooks books={books}/>
    <Pageination/>
</div>
  )
}

export default Layout;
