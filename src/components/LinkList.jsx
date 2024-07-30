import React from 'react'
import LinkItem from './LinkItem'
import { useDashboardStore } from '../Zustand/DashboardStore';

export default function LinkList() {
  const textList= useDashboardStore(state=>state.textList);
  const handleDeleteItem= useDashboardStore(state=>state.handleDeleteItem);
  return (
    <ul className='list my-5 w-full h-[95%] md:h-5/6 scroll-smooth snap-center overflow-y-scroll'>
        {textList.map((text,i)=>{
           return  <LinkItem text={text} key={i+text} id={i} handleDeleteItem={handleDeleteItem}/>
        })}

    </ul>
  )
}
