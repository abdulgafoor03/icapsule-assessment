import React from "react";
import { useDashboardStore } from "../Zustand/DashboardStore";
import {data} from '../constants/constant'

export default function ToggleButton() {
  const isToggled= useDashboardStore(state=>state.isToggled);
  const handleToggle=useDashboardStore(state=>state.handleToggle);
  return (
    <div className="flex flex-row px-[15px]"> 
      <button onClick={handleToggle} className={`px-[15px] py-[8px] border-2 border-r-0 rounded-l-lg ${isToggled?'border-slate-100 text-[white] bg-[black] font-normal':'border-slate-600 text-[black] bg-[grey] font-medium'}`}>{data.light}</button>
      <button onClick={handleToggle} className={` px-[15px] py-[8px] border-2 border-l-0 rounded-r-lg ${!isToggled?'border-slate-600 text-[white] bg-[black] font-normal':'border-slate-100 text-[black] bg-[grey] font-medium'}`}>{data.dark}</button>
    </div>
  );
}
