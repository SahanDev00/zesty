import React from 'react'
import { Accordian } from './Accordian'

const AccordianComponent = () => {
  return (
    <div>
        <h1 className='mt-5 bg-gradient-to-b uppercase from-gray-700 to-gray-300/80 bg-clip-text text-center text-5xl sm:text-6xl font-semibold leading-snug text-transparent dark:from-white dark:to-slate-900/10'>FAQ</h1>
        <Accordian/>
    </div>
  )
}

export default AccordianComponent