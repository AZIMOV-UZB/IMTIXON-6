import React ,{memo}from 'react'
import  './Pro.scss'
const Pro = () => {
  return (
    <div className='pro container mx-auto px-5'>
        <div className='pro__wrapper'>

            <div className='pro__card one'>
                <p className='pro__title dark:text-black'>Everyday Fresh &
Clean with Our
Products</p>
                <p className='pro__btn'>Shop Now</p>
            </div>

            <div className='pro__card two'>
                <p className='pro__title dark:text-black'>Make your Breakfast
                Healthy and Easy</p>
                <p className='pro__btn'>Shop Now</p>
            </div>

            <div className='pro__card threr'>
                <p className='pro__title  dark:text-black'>The best Organic
                Products Online</p>
                <p className='pro__btn'>Shop Now</p>
            </div>
            
        </div>
    </div>
  )
}

export default memo(Pro)