import { NavLink } from "react-router-dom";
import images from "../../assets/Header.svg";
const Royxar = () => {
  return (
    <div className="continer mx-auto mt-5 mb-16">
      <div className="w-[330px] sm:w-[400px] md:w-[400px] lg:w-[400px] border h-[480px] rounded-[5px] m-auto p-[15px] sm:p-[31px] md:p-[31px] lg:p-[31px] flex flex-col gap-[25.87px]">
        <div className="w-full">
          <img className="flex m-auto" src={images} alt="foto" />
        </div>
        <div className="flex flex-col text-start">
          <label className="text-[15px] text-[#323131] dark:text-white" htmlFor="">
            Email Address*
          </label>
          <input
            className="w-full border py-[10px] pl-1 rounded-[5px] outline-none text-[14px] dark:text-black"
            type="text"
            placeholder="Enter Your Email"
          />
        </div>
        <div className="flex flex-col text-start">
          <label className="text-[15px] text-[#323131] dark:text-white"  htmlFor="">
            Password*
          </label>
          <input required
            className="w-full border py-[10px] pl-1 rounded-[5px] outline-none text-[14px] dark:text-black"
            type="text"
            placeholder="Enter Your password"
          />
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-1">
            <input type="checkbox" />
            <p className="text-[15px] text-[#323131] dark:text-white">Remember Me</p>
          </div>
          <p className="text-[15px] text-[#323131] dark:text-white">Forgot Password?</p>
        </div>
        <div className="flex justify-between items-center">
          <button className="w-[80px] h-[40px] text-[14px] text-[#fff] bg-[#3BB77E] rounded-[5px]">
            Login
          </button>
          <p className="text-[16px] text-[#323131] dark:text-white">Signup?</p>
        </div>
        
          <div className="block">
        <NavLink className={""} to={"/Admin"}>
          <button className="w-full h-[40px] text-[14px] text-[#fff] bg-[#3BB77E] rounded-[5px]">
            Admin
          </button>
          </NavLink>
          </div>
      </div>
    </div>
  );
};

export default Royxar;
