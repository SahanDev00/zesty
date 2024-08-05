import React from 'react'
import IconCloudComponent from './IconCloudComponent'

const Contact = () => {
  return (
    <div id='contact' className='w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] flex justify-center mx-auto items-center mt-20 pb-10 relative'>
        <div className='w-full h-full'>
            <h1 className='mt-5 bg-gradient-to-b uppercase sm:mb-10 justify-center from-gray-200 to-gray-400 bg-clip-text flex mx-auto text-center text-5xl sm:text-6xl font-semibold leading-snug text-transparent dark:from-white dark:to-slate-500/40'>CONTACT US</h1>
            <div className='md:grid md:grid-cols-2 w-full'>
                <div className='w-[90%] md:ml-0 ml-4 sm:ml-14 md:w-full mx-auto xl:mt-10'>
                    <h1 className='text-white dark:text-gray-300 font-semibold text-2xl sm:text-3xl md:text-4xl mt-10 mb-8'>Send us a Message</h1>
                    <form className='space-y-3 opacity-90'>
                        <input required type="text" placeholder='Your Name...' className='pl-4 w-full sm:w-[90%] py-2 rounded mt-1 dark:bg-transparent text-white border border-white/80' />
                        <input required type="email" placeholder='Your email...' className='pl-4 w-full sm:w-[90%] py-2 rounded mt-1 dark:bg-transparent text-white border border-white/80' />
                        <input required type="tel" placeholder='Your Mobile Number...' className='pl-4 w-full sm:w-[90%] py-2 rounded mt-1 dark:bg-transparent text-white border border-white/80' />
                        <textarea required type="text" placeholder='Your Message...' className='pl-4 w-full sm:w-[90%] py-2 rounded mt-1 dark:bg-transparent text-white border border-white/80 min-h-[40px] sm:min-h-[60px] md:min-h-[80px] lg:min-h-[100px] xl:min-h-[150px]' />
                        <button type='submit' className='py-2 px-3 rounded hover:bg-white text-white block hover:text-black border font-semibold mt-2'>Send Message</button>
                    </form>
                </div>
                <div className='flex mx-auto justify-center w-full items-center'>
                    <IconCloudComponent/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact