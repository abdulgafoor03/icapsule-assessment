import React from 'react'
import { useDashboardStore } from '../Zustand/DashboardStore';
import WelcomeText from './WelcomeText';
import LinkList from './LinkList';
import { formattedDate } from '../utils/date';

export default function DisplaySection() {
    const textList= useDashboardStore(state=>state.textList);
  return (
    <div className='col-span-1 row-span-2 md:col-span-2 md:row-span-1 bg-[white] dark:bg-[grey] h-3/4'>
          <div className="text-[black]  dark:text-[white] text-xl border-[black] dark:border-[white] w-28 text-center p-3 border-2">{formattedDate}</div>
        {!textList.length && <WelcomeText />}
        {textList.length > 0 && (
          <LinkList />
        )}
        
    </div>
  )
}
