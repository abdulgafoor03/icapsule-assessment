import React from 'react'

export default function LinkItem({text,id,handleDeleteItem}) {
  return (
    <li className='text-[black] dark:text-[white] flex flex-row w-[90%] justify-between px-5 py-2 border-2 border-[black] dark:border-[white] rounded-lg my-2'> 
        <a href={text} target='_blank' rel="noreferrer" className='text-xl capitalize break-words'>   {text}</a> 
        <button onClick={() => handleDeleteItem(id)}>❌</button>
    </li>
  )
}
