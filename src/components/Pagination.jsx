import React from 'react'


function Pagination({increasePage, decreasePage, page}) {

 


  return (
    <div className='bg-gray-400 flex justify-center'>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-4 absolute left-7" onClick={decreasePage} >
  <path fillRule="evenodd" d="M14 8a.75.75 0 0 1-.75.75H4.56l1.22 1.22a.75.75 0 1 1-1.06 1.06l-2.5-2.5a.75.75 0 0 1 0-1.06l2.5-2.5a.75.75 0 0 1 1.06 1.06L4.56 7.25h8.69A.75.75 0 0 1 14 8Z" clipRule="evenodd" />
</svg>

<p className='text-[10px] font-bold text-center'>{page}</p>

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-4 absolute right-7 "onClick={increasePage}>
  <path fillRule="evenodd" d="M2 8c0 .414.336.75.75.75h8.69l-1.22 1.22a.75.75 0 1 0 1.06 1.06l2.5-2.5a.75.75 0 0 0 0-1.06l-2.5-2.5a.75.75 0 1 0-1.06 1.06l1.22 1.22H2.75A.75.75 0 0 0 2 8Z" clipRule="evenodd" />
</svg>

    </div>
  )
}


export default Pagination