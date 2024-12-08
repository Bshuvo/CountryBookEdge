import React from 'react'

const Country = ({name,flagurl,Visit}) => {
  return (
    <div>
        <div className='w-32 p-4 rounded-xl bg-pink-100 flex flex-col justify-center items-center gap-2'>
        <img className='w-28 h-16' src={flagurl} alt="" />
        <h1 className='font-bold text-center'>{name}</h1>
        <button 
        onClick={()=>{
            Visit({name,flagurl})        }}
        className='font-bold py-2 px-3 bg-green-500 rounded-xl'>Visit</button>
        </div>
    </div>
  )
}

export default Country
