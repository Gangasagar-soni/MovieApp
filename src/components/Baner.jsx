import React from 'react'

function Baner() {
  return ( 
    <div className='h-[20vh] md:h-[85vh] bg-cover bg-center flex items-end' style={{backgroundImage:`url('src/components/images/image1.png')`}}>
<div className='text-white font-bold text-xl w-full text-center bg-gray-900/70 p-1'>X-Men</div>
</div>
  )
}

export default Baner
