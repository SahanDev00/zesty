import React from 'react'
import { MdOutlineDone } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import ConfettiButton from './ConfettiButton';
import ConfettiFireworks from './ConfettiFireworks';

const Pricing = () => {
  return (
    <div className='w-full mt-10 pb-10 relative'>
        <h1 className='mt-10 bg-gradient-to-b uppercase from-gray-700 to-gray-300/80 bg-clip-text text-center text-6xl font-semibold leading-snug text-transparent dark:from-white dark:to-slate-900/10'>PRICING</h1>
        <div className='w-[60%] mx-auto grid grid-cols-3 mt-10 items-center'>
            <div className='mx-auto w-[90%] justify-center  items-center flex rounded-t-xl'>
                <div className='w-[80%] hover:scale-105 duration-300 h-full'>
                    <div className='h-[80px] border bg-black rounded-t-xl flex justify-center items-center'>
                        <h1 className='text-5xl text-white font-semibold text-center flex'>$4</h1>
                        <p className='mt-6 ml-2 text-white'>/Month</p>
                    </div>
                    <div className='flex bg-white justify-center items-center pb-1'>
                        <h1 className=' text-2xl mt-4 font-semibold'>BASIC</h1>
                    </div>
                    <div className='bg-white w-full h-full'>
                        <hr className='border'/>
                        <div className='w-full flex-col bg-white flex mx-auto space-y-2 items-center pt-5 pb-5'>
                            <p className='flex items-center'><MdOutlineDone className='mr-2 text-green-600'/>Lorem ipsum dolor sit amet.</p>
                            <p className='flex items-center'><MdOutlineDone className='mr-2 text-green-600'/>Lorem ipsum dolor sit amet.</p>
                            <p className='flex items-center'><MdOutlineDone className='mr-2 text-green-600'/>Lorem ipsum dolor sit amet.</p>
                            <p className='flex items-center'><IoMdClose className='mr-2 text-red-600'/>Lorem ipsum dolor sit amet.</p>
                            <p className='flex items-center'><IoMdClose className='mr-2 text-red-600'/>Lorem ipsum dolor sit amet.</p>
                        </div>
                    </div>
                    <ConfettiButton className='h-[60px] border w-full bg-black rounded-b-xl flex justify-center items-center relative'>
                        <button className='w-full h-full text-white flex items-center justify-center font-semibold text-xl '>BUY NOW</button>
                    </ConfettiButton>
                </div>
            </div>
            <div className='mx-auto w-[90%] h-full items-center justify-center flex rounded-t-xl'>
                <div className='w-[82%] hover:scale-105 duration-300'>
                    <div className='h-[90px] bg-white rounded-t-xl flex justify-center items-center'>
                        <h1 className='text-5xl font-semibold text-center flex'>$24</h1>
                        <p className='mt-6 ml-2'>/Month</p>
                    </div>
                    <div className='flex justify-center items-center mb-1'>
                        <h1 className='text-gray-300 text-2xl mt-4'>PREMIUM</h1>
                    </div>
                    <hr />
                    <div className='w-full flex-col flex mx-auto space-y-3 items-center text-gray-300 mt-5'>
                        <p className='flex items-center'><MdOutlineDone className='mr-2 text-green-600'/>Lorem ipsum dolor sit amet.</p>
                        <p className='flex items-center'><MdOutlineDone className='mr-2 text-green-600'/>Lorem ipsum dolor sit amet.</p>
                        <p className='flex items-center'><MdOutlineDone className='mr-2 text-green-600'/>Lorem ipsum dolor sit amet.</p>
                        <p className='flex items-center'><MdOutlineDone className='mr-2 text-green-600'/>Lorem ipsum dolor sit amet.</p>
                        <p className='flex items-center'><MdOutlineDone className='mr-2 text-green-600'/>Lorem ipsum dolor sit amet.</p>
                    </div>
                    <ConfettiFireworks />
                </div>
            </div>
            <div className='mx-auto w-[90%] justify-center  items-center flex rounded-t-xl'>
                <div className='w-[80%] hover:scale-105 duration-300 h-full'>
                    <div className='h-[80px] border bg-black rounded-t-xl flex justify-center items-center'>
                        <h1 className='text-5xl text-white font-semibold text-center flex'>$14</h1>
                        <p className='mt-6 ml-2 text-white'>/Month</p>
                    </div>
                    <div className='flex bg-white justify-center items-center pb-1'>
                        <h1 className=' text-2xl mt-4 font-semibold'>REGULAR</h1>
                    </div>
                    <div className='bg-white w-full h-full'>
                        <hr className='border'/>
                        <div className='w-full flex-col bg-white flex mx-auto space-y-2 items-center pt-5 pb-5'>
                            <p className='flex items-center'><MdOutlineDone className='mr-2 text-green-600'/>Lorem ipsum dolor sit amet.</p>
                            <p className='flex items-center'><MdOutlineDone className='mr-2 text-green-600'/>Lorem ipsum dolor sit amet.</p>
                            <p className='flex items-center'><MdOutlineDone className='mr-2 text-green-600'/>Lorem ipsum dolor sit amet.</p>
                            <p className='flex items-center'><IoMdClose className='mr-2 text-red-600'/>Lorem ipsum dolor sit amet.</p>
                            <p className='flex items-center'><MdOutlineDone className='mr-2 text-green-600'/>Lorem ipsum dolor sit amet.</p>
                        </div>
                    </div>
                    <ConfettiButton className='h-[60px] border w-full bg-black rounded-b-xl flex justify-center items-center relative'>
                        <button className='w-full h-full text-white flex items-center justify-center font-semibold text-xl '>BUY NOW</button>
                    </ConfettiButton>
                </div>
            </div>
            

        </div>
    </div>
  )
}

export default Pricing