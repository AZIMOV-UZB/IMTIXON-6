import React ,{memo}from 'react'
import "./Footer.scss"
import img from '../../assets/Header.svg'
import iphone from '../../assets/iphone.svg'
import google from '../../assets/iphone.svg'
import card from '../../assets/card.svg'
import { RiMapPin2Line } from "react-icons/ri";
import { TbHeadphonesFilled } from "react-icons/tb";
import { FaRegPaperPlane } from "react-icons/fa";
import { MdOutlineWatchLater } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import cupon from '../../assets/cupon.svg'
import bbb from '../../assets/bbb.svg'
import s from '../../assets/s.svg'
import top from '../../assets/top.svg'
import baraka from '../../assets/baraka.svg'



const Footer = () => {
  return (
    <div>
        <div className='footer__top flex container mx-auto px-5'>

<div className='footer__top__card flex '>
    <div>
        <img src={cupon} alt="foto" />
    </div>
    <div>
        <p className='footer__top__title dark:text-black'>Best prices & offers</p>
        <p className='footer__top__text dark:text-black dark:text-black'>Orders $50 or more</p>
    </div>
</div>

<div className='footer__top__card flex '>
    <div>
        <img src={baraka} alt="foto" />
    </div>
    <div>
        <p className='footer__top__title dark:text-black'>Free delivery</p>
        <p className='footer__top__text dark:text-black'>24/7 amazing services</p>
    </div>
</div>

<div className='footer__top__card flex '>
    <div>
        <img src={s} alt="foto" />
    </div>
    <div>
        <p className='footer__top__title dark:text-black'>Great daily deal</p>
        <p className='footer__top__text dark:text-black'>When you sign up</p>
    </div>
</div>


<div className='footer__top__card flex '>
    <div>
        <img src={top} alt="foto" />
    </div>
    <div>
        <p className='footer__top__title dark:text-black'>Wide assortment</p>
        <p className='footer__top__text dark:text-black'>Mega Discounts</p>
    </div>
</div>


<div className='footer__top__card flex '>
    <div>
        <img src={bbb} alt="foto" />
    </div>
    <div>
        <p className='footer__top__title dark:text-black'>Easy returns</p>
        <p className='footer__top__text dark:text-black'>Within 30 days</p>
    </div>
</div>



        </div>

    <div className='footer container mx-auto px-5'>

<div className='footer__wrapper flex'>

<div className='footer__card'>
<img src={img} alt="foto" />
<p className='footer__text mt-6 font-medium	 footer__text w-64'>Awesome grocery store website
template</p>
<div className='flex gap-3 mt-6'>
<RiMapPin2Line className='text-green-300 text-2xl'/>
<p className='w-96 font-medium	 footer__text'>Address: 5171 W Campbell Ave undefined Kent, Utah 53127 United States</p>
</div>
<div className='flex gap-3 mt-6'>
<TbHeadphonesFilled className='text-green-300	 text-2xl'/>
<p className='font-medium	footer__text'>Call Us:(+91) - 540-025-124553
</p>
</div>

<div className='flex gap-3 mt-6'>
<FaRegPaperPlane className='text-green-300	 text-2xl'/>
<p className='font-medium	 footer__text'>Email:sale@Nest.com</p>
</div>

<div className='flex gap-3 mt-6'>
<MdOutlineWatchLater className='text-green-300	 text-2xl'/>
<p className='font-medium	 footer__text'>Hours:10:00 - 18:00, Mon - Sat</p>
</div>
</div>


<div className='footer__card'>
    <p className='mt-6'>Company</p>
    <p className='footer__text font-medium mt-6'>About Us</p>
    <p className='footer__text  font-medium	 mt-6'>Delivery Information</p>
    <p className='footer__text  font-medium	 mt-6'>Privacy Policy</p>
    <p className='footer__text  font-medium	 mt-6'>Terms & Conditions</p>
    <p className='footer__text  font-medium	 mt-6'>Contact Us</p>
    <p className='footer__text  font-medium	 mt-6'>Support Center</p>
    <p className='footer__text  font-medium	 mt-6'>Careers</p>
</div>

<div className='footer__card'>
    <p className='footer__title font-bold text-2xl mt-6'>Account</p>
    <p className='footer__text   font-medium	 mt-6 '>Sign In</p>
    <p className='footer__text   font-medium	 mt-6 '>View Cart</p>
    <p className='footer__text   font-medium	 mt-6 '>My Wishlist</p>
    <p className='footer__text   font-medium	 mt-6 '>Track My Order</p>
    <p className='footer__text  font-medium	 mt-6 '>Help Ticket</p>
    <p className='footer__text   font-medium	 mt-6 '>Shipping Details</p>
    <p className='footer__text   font-medium	 mt-6 '>Compare products</p>
</div>

<div className='footer__card'>
    <p className='footer__title font-bold text-2xl mt-6'>Corporate</p>
    <p className='footer__text   font-medium	 mt-6 '>Become a Vendor</p>
    <p className='footer__text   font-medium	 mt-6 '>Affiliate Program</p>
    <p className='footer__text   font-medium	 mt-6 '>Farm Business</p>
    <p className='footer__text   font-medium	 mt-6 '>Farm Careers</p>
    <p className='footer__text   font-medium	 mt-6 '>Our Suppliers</p>
    <p className='footer__text   font-medium	 mt-6 '>Accessibility</p>
    <p className='footer__text   font-medium	 mt-6 '>Promotions</p>
</div>



<div className='footer__card'>
    <p className='footer__title font-bold text-2xl mt-6'>Popular</p>
    <p className='footer__text   font-medium	 mt-6 '>Milk & Flavoured Milk</p>
    <p className='footer__text   font-medium	 mt-6 '>Butter and Margarine</p>
    <p className='footer__text  font-medium	 mt-6 '>Eggs Substitutes</p>
    <p className='footer__text   font-medium	 mt-6 '>Marmalades</p>
    <p className='footer__text   font-medium	 mt-6 '>Sour Cream and Dips</p>
    <p className='footer__text   font-medium	 mt-6 '>Tea & Kombucha</p>
    <p className='footer__text   font-medium	 mt-6 '>Cheese</p>
</div>

<div className='footer__card'>
<p className='footer__title font-bold text-2xl mt-6'>Install App</p>
<p className=' text-xl font-medium	 my-6 '>From App Store or Google Play</p>
<div className='flex my-6S gap-2'>
    <img src={iphone} alt="foto" />
    <img src={google} alt="foto" />
</div>
<p className=' text-xl font-medium	 mt-6 '>Secured Payment Gateways</p>
<img className='mt-6' src={card} alt="foto" />

</div>

</div>
    </div>
<div className='hr bg-lime-200	'></div>

<div className='footer__bottom container mx-auto px-5 flex justify-between mb-8 '> 
    <div className='footer__b-card '>
        <p>
        © 2022, <span className='text-green-400	'>Nest</span> - HTML Ecommerce Template
        </p>
      <p> All rights reserved
        </p>
    </div>

<div className='flex gap-8'>
    <div className='flex items-center gap-4'>
    <FaPhoneVolume  className='text-4xl'/>
    <div>
<p className='text-green-400 text-3xl'>1900 - 6666</p>
<p>Working 8:00 - 22:00</p>
</div>
    </div>
    <div className='flex items-center gap-4 footer__tel'>
    <FaPhoneVolume className='text-4xl' />
    <div>
<p  className='text-green-400 text-3xl'>1900 - 8888</p>
<p>24/7 Support Center</p>
</div>
    </div>
</div>

<div className='footer__box'>
    <div className='flex items-center'>
    <p className='text-2xl font-bold'>Follow Us</p>
    <FaFacebook className='text-green-400 mx-2 text-2xl' />
    <FaTwitter  className='text-green-400 mx-2 text-2xl'/>
    <FaInstagram  className='text-green-400 mx-2 text-2xl'/>
    <FaLinkedin className='text-green-400 mx-2 text-2xl' />
    <FaYoutube  className='text-green-400 mx-2 text-2xl'/>


    </div>
    <p>Up to 15% discount on your first subscribe</p>
</div>
</div>
    </div>
  )
}

export default memo(Footer)