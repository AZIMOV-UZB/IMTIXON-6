import React from "react";

const Empty = ({ title, url }) => {
  return (
    <div className="text-center min-[60vh] py-16">
      <img className=" w-[200px] flex m-auto" src={url} alt="foto" />
      <p className="text-[24px] font-quicksand text-[#0009] font-[700] dark:text-white">
        {title}
      </p>
      
    </div>
  );
};

export default Empty;
