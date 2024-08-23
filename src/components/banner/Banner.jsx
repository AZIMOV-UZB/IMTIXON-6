import React ,{memo} from 'react'
import "./Banner.scss"
import banner from '../../assets/banner.svg'
import { IoMdPaperPlane } from "react-icons/io";

const Banner = () => {
  return (
    <div className='banner container mx-auto px-5 flex flex-wrap justify-between my-8 '>
        <div>
            <p className='banner__title'>Stay home & get your daily
            needs from our shop</p>
            <div className=''>
                 <p className='hero__text dark:text-black'>Start You'r Daily Shopping with <span className='text-lime-400	'>Nest Mart</span></p>
    <div className='hero__bag bg-white max-w-xs h-12 mt-8 rounded-full flex items-center

 '>
    <IoMdPaperPlane className='text-black ml-4'/>
    <form action="">
<input  className='hero__inp mx-2 text-black' type="text" placeholder='Your emaill address' />
</form>
<button className='hero__btn bg-green-500	w-28 text-white rounded-full  border-0	 h-full'>Subscribe</button>
    </div>
            </div>
        </div>

<div className=''>
    <img src={banner} alt="foto" />
</div>
    </div>
  )
}

export default memo(Banner)