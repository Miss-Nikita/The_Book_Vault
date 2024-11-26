import React, { useState } from 'react'


const Pageination = () => {

    const [page, setpage] = useState(parseInt(localStorage.getItem('pageValue')) || 1);
    console.log(page);

    const savePageValue = ()=>{
        setpage(page+1);
        localStorage.setItem('pageValue',page+1)
    }
    

  return (
    <div className='w-full py-10 flex justify-center items-center'>
        <button onClick={savePageValue} className='px-7 py-3 rounded mb-20 mt-10 bg-blue-500 font-semibold text-white'>Next</button>
    </div>
  )
}


export default Pageination
