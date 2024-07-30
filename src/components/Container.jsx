import React from 'react'

export default function Container({children}) {
  return (
    <div className="grid grid-cols-1 grid-rows-2 md:grid-cols-3 md:grid-rows-1 gap-4 h-[83.2vh] bg-[white]  dark:bg-[grey] p-[4%] ">{children}</div>
  )
}
