import React , {memo} from 'react'
import "./Shops.scss"
import karom from '../../assets/karom.svg'
import red from '../../assets/red.svg'
import dok from '../../assets/dok.svg'
import pacet from '../../assets/pacet.svg'
import hurmo from '../../assets/hurmo.svg'
import apple from '../../assets/apple.svg'
import choko from '../../assets/choko.svg'
import black from '../../assets/black.svg'
import band from '../../assets/band.svg'
import kivi from '../../assets/kivi.svg'
import { memo } from "react"
const Shops = () => {
  return (
    <div className='Shops container mx-auto px-5 mt-10'>
        <div className='shops__bag flex gap-5 items-center flex-wrap'>
            <div>
            <p className='shops__title text-4xl font-bold'>Featured Categories</p>
            </div>
            <div className='flex gap-4'>
                <p  className=' cursor-pointer '>Cake & Milk</p>
                <p className=' cursor-pointer'>Coffes & Teas</p>
                <p className='text-green-400 cursor-pointer'>Pet Foods</p>
                <p className=' cursor-pointer'>Vegetables</p>
            </div>
        </div>
        
        <div className='shops__wrapper '>
        <div className='shops__card text-center  py-4 border px-6 bg-[#F2FCE4] rounded-xl	  '>
                <img src={dok} alt="foto" />
                <p className='shops__text dark:text-black'>Cake & Milk</p>
                <p className='shops__item dark:text-black'>26 items</p>
            </div>

            <div className=' shops__card text-center py-4 border px-6 bg-[#FFFCEB]  rounded-xl	'>
                <img src={kivi} alt="foto" />
                <p className='shops__text dark:text-black'>Oganic Kiwi</p>
                <p className='shops__item dark:text-black'>28 items</p>
            </div>

            <div className=' shops__card text-center py-4 border px-6 bg-[#ECFFEC]  rounded-xl	'>
                <img src={hurmo} alt="foto" />
                <p className='shops__text dark:text-black'>Peach</p>
                <p className='shops__item dark:text-black'>14 items</p>
            </div> 

            <div className=' shops__card text-center py-4 border px-6 bg-[#FEEFEA]  rounded-xl	'>
                <img src={apple} alt="foto" />
                <p className='shops__text dark:text-black'>Red Apple</p>
                <p className='shops__item dark:text-black'>54 items</p>
            </div> 
  
            <div className=' shops__card text-center py-4 border px-6 bg-[#FFF3EB] rounded-xl	 '>
                <img src={choko} alt="foto" />
                <p className='shops__text dark:text-black'>Snack</p>
                <p className='shops__item dark:text-black'>56 items</p>
            </div> 
            

            <div className=' shops__card text-center py-4 border px-6 bg-[#FFF3FF] rounded-xl	 '>
                <img src={karom} alt="foto" />
                <p className='shops__text dark:text-black'>Vegetables</p>
                <p className='shops__item dark:text-black'>72 items</p>
            </div>

            
            <div className=' shops__card text-center py-4 border px-6 bg-[#FEEFEA] rounded-xl	 '>
                <img src={red} alt="foto" />
                <p className='shops__text dark:text-black'>Strawberry</p>
                <p className='shops__item dark:text-black'>36 items</p>
            </div>

            <div className=' shops__card text-center py-4 border px-6 bg-[#FFFCEB] rounded-xl	 '>
                <img src={black} alt="foto" />
                <p className='shops__text dark:text-black'>Black plum</p>
                <p className='shops__item dark:text-black'>123 items</p>
            </div> 
            

            <div className=' shops__card text-center py-4 border px-6 bg-[#FEEFEA] rounded-xl	 '>
                <img src={band} alt="foto" />
                <p className='shops__text dark:text-black'>Custard apple</p>
                <p className='shops__item dark:text-black'>34 items</p>
            </div>

       

            <div className=' shops__card text-center py-4 border px-6 bg-[#FEEFEA] rounded-xl	 '>
                <img src={pacet} alt="foto" />
                <p className='shops__text dark:text-black'>Coffe & Tea</p>
                <p className='shops__item dark:text-black'>89 items</p>
            </div>
            
          
        </div>
    </div>
  )
}

export default memo(Shops)