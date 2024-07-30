import React from 'react'
import ToggleButton from './ToggleButton';

export default function Header() {
 
  return (
    <div className='bg-slate-50 border-b-2 border-[grey] dark:bg-[grey] dark:border-[white]'>
    <div className="flex flex-row px-[15px] items-center justify-between ">
    <div className="m-5 text-xl text-[black] bg-[white] dark:text-[white] dark:bg-[grey]">
        Personal Dashboard
    </div>
    <div className="m-5 text-xl flex flex-row justify-end w-2/6  ">
        <ToggleButton/>
    </div>
    
    </div>
</div>
  )
}
