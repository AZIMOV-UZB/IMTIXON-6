import React , {memo} from 'react'
import { useFetch } from '@/hooks/useFetch'
import { useEffect } from "react";
import "./Shop.scss"
import { useParams } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { HiOutlineChevronDown } from "react-icons/hi";
import { HiOutlineChevronUp } from "react-icons/hi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaRegHeart } from "react-icons/fa";
import { AiOutlineShareAlt } from "react-icons/ai";
import {} from "number-brm";
import Banner from '../banner/Banner';
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineArrowForwardIos } from "react-icons/md";


const Shop = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
      const { id } = useParams();
      const { data } = useFetch(`/products/${id}`, {}, [id]);
      console.log(data);
      let percentageCount =
        data?.price - (data?.price * 100) / data?.discountPercentage;
  return (
        <div className="container mx-auto -scroll-mt-96 px-5 mt-[60px]">
          <div className='flex gap-5 mb-8 items-center'>
            <div className='flex gap-2 items-center'>
            <IoHomeOutline className='text-green-500	' />
            <p  className='text-green-500	'>Home</p>
            <MdOutlineArrowForwardIos className='text-xs'/>
            <p  className='text-green-500	'>product</p>
            <MdOutlineArrowForwardIos className='text-xs'/>
            <p> Seeds of Change Organic</p>

            </div>
          </div>
<div className='w-full h-[1px] bg-slate-200	 my-8'></div>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 mb-10 px-1">
        <div className="">
          <img
            className="w-[350px] h-[350px] mb-4 object-contain border rounded-xl		  "
            src={data?.images[0]}
            alt="foto"
          />
          <div className="flex">
            {data?.images?.map((item, inx) => (
              <img
                className="w-[50px] h-[50px] object-contain m-auto    cursor-pointer"
                src={item}
                key={inx}
                alt="foto"
              />
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <button className="py-[6px] rounded-[5px] border bg-[#FDE0E9] text-[#F74B81] text-[14px] font-quicksand font-[700] w-[79px]">
            Sale Off
          </button>
          <h2 className="text-[28px] md:text-[34px] lg:text-[38px] lg:w-[444px] text-start font-quicksand font-[700]">
            {data?.title}
          </h2>
          <div className="flex gap-6 items-baseline">
            <FaStar className="text-yellow-400" />
            <p className="text-[#B6B6B6] text-[14px] font-[400] dark:text-white">
              ({data?.rating}reviews)
            </p>
          </div>
          <div className="flex gap-2  items-center">
            <div className='pt-8'>
            <strong className=" text-[32px] sm:text-[42px] md:text-[48px] lg:text-[54px] text-[#3BB77E] font-[700]">
              ${data?.price}
            </strong>
            </div>
            <div className='shop__bag'>
            <p className='mt-10  text-[#FDC040] text-xl'>{data?.discountPercentage}% off</p>
            <strong className="line-through  text-[24px] text-[#B6B6B6] font-[700] ">
              ${percentageCount.brm()}
            </strong>
            </div>
          </div>
          <p className="text-start text-[#7E7E7E] text-[17px] dark:text-white">
            {data?.description}
          </p>
          <div className="flex items-center gap-3">
            <p className="text-[#7E7E7E] text-[14px] dark:text-white">width/height:</p>
            <button className="w-[41px] h-[32px] hover:bg-[#fc4a4a] hover:text-[#fff] rounded-[5px] text-[14px] text-[#7E7E7E]  dark:text-white">
              {data?.dimensions?.depth}
            </button>
            <button className="w-[41px] h-[32px] text-[#fff] hover:bg-[#ff4343] bg-[#3BB77E] hover:text-[#fff] rounded-[5px] text-[14px] text-[#7E7E7E] dark:text-white">
              {data?.dimensions?.height}
            </button>
            <button className="w-[41px] h-[32px] hover:bg-[#ff3a3a] hover:text-[#fff] rounded-[5px] text-[14px] text-[#7E7E7E] dark:text-white">
              {data?.dimensions?.width}
            </button>
          </div>
          <div className="flex gap-5 flex-wrap">
            <div className="flex gap-3 border	 w-[90px] py-[3px] rounded-[5px] items-center justify-center">
              <button>1</button>
              <div className="flex flex-col">
                <button>
                  <HiOutlineChevronUp className="text-[#3BB77E]" />
                </button>
                <button>
                  <HiOutlineChevronDown className="text-[#3BB77E]" />
                </button>
              </div>
            </div>
            <div>
              <button className="flex gap-1 items-center border w-[120px] lg:w-[159px] bg-[#3BB77E] py-[12px] justify-center font-[600] rounded-[5px]">
                <AiOutlineShoppingCart className="text-[#fff]" />
                <p className="text-[#fff]">Add to cart</p>
              </button>
            </div>
            <button className="w-[50px] border rounded-[5px] h-[50px] flex justify-center items-center ">
              <FaRegHeart className="text-[20px] flex justify-center" />
            </button>
            <button className="w-[50px] border rounded-[5px] h-[50px]  flex justify-center items-center">
              <AiOutlineShareAlt className="text-[20px] flex justify-center" />
            </button>
          </div>
        </div>
      </div>
      <div className="border rounded-[15px] p-[20px] sm:p-[38px] md:p-[48px] lg:p-[51px] flex flex-col gap-[30px]">
        <div className=" flex gap-3 overflow-x-auto scroll-none">
          <button className="lg:py-[4px] border px-[5px] lg:px-[8px] whitespace-nowrap text-[13px] sm:text-[14px] md:text-[15px] lg:text-[15px] hover:text-[#3BB77E] rounded-full">
            Description
          </button>
          <button className="lg:py-[4px] border px-[5px] lg:px-[8px] whitespace-nowrap text-[13px] sm:text-[14px] md:text-[15px] lg:text-[15px] hover:text-[#3BB77E] rounded-full">
            Additional info
          </button>
          <button className="lg:py-[4px] border px-[5px] lg:px-[8px] whitespace-nowrap text-[13px] sm:text-[14px] md:text-[15px] lg:text-[15px] hover:text-[#3BB77E] rounded-full">
            Vendor
          </button>
          <button className="lg:py-[4px] border px-[5px] lg:px-[8px] whitespace-nowrap text-[13px] sm:text-[14px] md:text-[15px] lg:text-[15px] hover:text-[#3BB77E] rounded-full">
            Reviews (3)
          </button>
        </div>
        <p className="text-[15px] text-[#7E7E7E] text-start dark:text-white">
          Uninhibited carnally hired played in whimpered dear gorilla koala
          depending and much yikes off far quetzal goodness and from for
          grimaced goodness unaccountably and meadowlark near unblushingly
          crucial scallop tightly neurotic hungrily some and dear furiously this
          apart. Spluttered narrowly yikes left moth in yikes bowed this that
          grizzly much hello on spoon-fed that alas rethought much decently
          richly and wow against the frequent fluidly at formidable acceptably
          flapped besides and much circa far over the bucolically hey precarious
          goldfinch mastodon goodness gnashed a jellyfish and one however
          because.
        </p>
        <div className="flex gap-[30px]">
          <div className="flex flex-col gap-[10px]">
            <p className="text-[13px] text-[#7E7E7E] text-start desc">
              Type Of Packing
            </p>
            <p className="text-[13px] text-[#7E7E7E] text-start desc dark:text-white">Color</p>
            <p className="text-[13px] text-[#7E7E7E] text-start desc dark:text-white">
              Quantity Per Case
            </p>
            <p className="text-[13px] text-[#7E7E7E] text-start desc dark:text-white">
              Ethyl Alcohol
            </p>
            <p className="text-[13px] text-[#7E7E7E] text-start desc dark:text-white">
              Piece In One
            </p>
          </div>
          <div className="flex flex-col gap-[10px]">
            <p className="text-[13px] text-[#7E7E7E] text-start dark:text-white">Bottle</p>
            <p className="text-[13px] text-[#7E7E7E] text-start dark:text-white">
              Green, Pink, Powder Blue, Purple
            </p>
            <p className="text-[13px] text-[#7E7E7E] text-start dark:text-white">100ml</p>
            <p className="text-[13px] text-[#7E7E7E] text-start dark:text-white">70%</p>
            <p className="text-[13px] text-[#7E7E7E] text-start dark:text-white">Carton%</p>
          </div>
        </div>
        <hr />
        <p className="text-[15px] text-[#7E7E7E] text-start dark:text-white">
          Laconic overheard dear woodchuck wow this outrageously taut beaver hey
          hello far meadowlark imitatively egregiously hugged that yikes
          minimally unanimous pouted flirtatiously as beaver beheld above
          forward energetic across this jeepers beneficently cockily less a the
          raucously that magic upheld far so the this where crud then below
          after jeez enchanting drunkenly more much wow callously irrespective
          limpet.
        </p>
        <p className="text-[24px] text-[#253D4E] font-quicksand font-[700] text-start dark:text-white">
          Packaging & Delivery
        </p>
        <hr />
        <p className="text-[15px] text-[#7E7E7E] text-start dark:text-white">
          Less lion goodness that euphemistically robin expeditiously bluebird
          smugly scratched far while thus cackled sheepishly rigid after due one
          assenting regarding censorious while occasional or this more crane
          went more as this less much amid overhung anathematic because much
          held one exuberantly sheep goodness so where rat wry well
          concomitantly.Scallop or far crud plain remarkably far by thus far
          iguana lewd precociously and and less rattlesnake contrary caustic wow
          this near alas and next and pled the yikes articulate about as less
          cackled dalmatian in much less well jeering for the thanks blindly
          sentimental whimpered less across objectively fanciful grimaced wildly
          some wow and rose jeepers outgrew lugubrious luridly irrationally
          attractively dachshund.
        </p>
        <p className="text-[24px] text-[#253D4E] font-quicksand font-[700] text-start dark:text-white">
          Suggested Use
        </p>
        <div className="flex flex-col gap-[10px]">
          <p className="text-[15px] text-[#7E7E7E] text-start dark:text-white">
            Refrigeration not necessary.
          </p>
          <p className="text-[15px] text-[#7E7E7E] text-start dark:text-white">
            Stir before serving
          </p>
        </div>
        <p className="text-[24px] text-[#253D4E] font-quicksand font-[700] text-start dark:text-white">
          Other Ingredients
        </p>
        <div className="flex flex-col gap-[10px]">
          <p className="text-[15px] text-[#7E7E7E] text-start dark:text-white">
            Organic raw pecans, organic raw cashews.
          </p>
          <p className="text-[15px] text-[#7E7E7E] text-start dark:text-white">
            This butter was produced using a LTG (Low Temperature Grinding)
            process
          </p>
          <p className="text-[15px] text-[#7E7E7E] text-start dark:text-white">
            Made in machinery that processes tree nuts but does not process
            peanuts, gluten, dairy or soy
          </p>
        </div>
        <p className="text-[24px] text-[#253D4E] font-quicksand font-[700] text-start dark:text-white">
          Warningss
        </p>
        <p className="text-[15px] text-[#7E7E7E] text-start dark:text-white">
          Oil separation occurs naturally. May contain pieces of shell.
        </p>
      </div>
  <Banner/>
      </div>
  )
}

export default memo(Shop)