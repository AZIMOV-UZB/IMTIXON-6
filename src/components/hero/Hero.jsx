import React ,{memo}from 'react'
import "./Hero.scss"
import { IoMdPaperPlane } from "react-icons/io";

const Hero = () => {
  return (
    <div className='hero container mx-auto px-5'>
    <p className='hero__title dark:text-black'>
    Fresh Vegetables Big discount
    </p>
    <p className='hero__text dark:text-black'>Save up to 50% off on your first order</p>
    <div className='hero__bag bg-white max-w-xs h-12 mt-8 rounded-full flex items-center

 '>
    <IoMdPaperPlane className='text-black ml-4'/>
    <form action="">
<input  className='hero__inp mx-2 text-black' type="text" placeholder='Your emaill address' />
</form>
<button className='hero__btn bg-green-500	w-28 text-white rounded-full  border-0	 h-full'>Subscribe</button>
    </div>
    </div>
  )
}

export default memo(Hero)