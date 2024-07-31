import React from 'react'
import IconCloudComponent from './IconCloudComponent'

const Contact = () => {
  return (
    <div id='contact' className='w-[70%] flex justify-center mx-auto items-center mt-20 pb-10'>
        <div className='w-full h-full'>
            <h1 className='mt-5 bg-gradient-to-b uppercase mb-10 justify-center from-gray-700 to-gray-300/80 bg-clip-text flex mx-auto text-center text-5xl sm:text-6xl font-semibold leading-snug text-transparent dark:from-white dark:to-slate-900/10'>CONTACT US</h1>
            <div className='grid grid-cols-2 w-full'>
                <div className='w-full mx-auto'>
                    <h1 className='text-white font-semibold text-4xl mt-10 mb-8'>Send us a Message</h1>
                    <form className='space-y-3'>
                        <input required type="text" placeholder='Your Name...' className='pl-4 w-[90%] py-2 rounded mt-1' />
                        <input required type="email" placeholder='Your email...' className='pl-4 w-[90%] py-2 rounded mt-1' />
                        <input required type="tel" placeholder='Your Mobile Number...' className='pl-4 w-[90%] py-2 rounded mt-1' />
                        <textarea required type="text" placeholder='Your Message...' className='pl-4 w-[90%] py-2 rounded mt-1' />
                        <button type='submit' className='py-2 px-3 rounded hover:bg-white text-white block hover:text-black border font-semibold'>Send Message</button>
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