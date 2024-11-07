import React from "react";

const HeaderComponent = () => {
  return (
    <div className="bg-header-bg bg-cover bg-center w-full md:h-[200px] h-[150px] flex items-center">
      <div className="flex flex-col md:flex-row justify-between  w-full">
        <div className="flex flex-col px-8 md:px-20 w-full md:w-1/2">
          <p className="text-black font-bold text-sm md:text-xl flex items-center gap-2 whitespace-nowrap">
            <i className="fa-solid fa-check text-[#2ec27e]"></i>
            <span className="text-sm font-normal">Get </span>
            Yearly ALL ACCESS, now just $3.99/month
          </p>

          <p className="text-black text-base md:block hidden md:text-lg whitespace-nowrap">
            <i className="fa-solid fa-check text-[#2ec27e]"></i> $3.99/month, billed as $47/year (normal price $348)
          </p>

          <p className="text-black text-base md:block hidden md:text-lg whitespace-nowrap">
            <i className="fa-solid fa-check text-[#2ec27e]"></i> Discounted price valid forever - Renews at $47/year
          </p>

          <p className="text-black text-base md:block hidden md:text-lg whitespace-nowrap">
            <i className="fa-solid fa-check text-[#2ec27e]"></i> Access to millions of Graphics, Fonts, Classes & more
          </p>

          <p className="text-black text-base md:block hidden md:text-lg whitespace-nowrap">
            <i className="fa-solid fa-check text-[#2ec27e]"></i> Personal, Commercial and POD use of files included
          </p>
        </div>

        <div className="flex flex-col items-center w-full md:w-1/2 mt-4 md:mt-0">
          <a href=" " className="bg-purple-900 text-white px-10 md:px-[100px] rounded py-3">
            <button>Upgrade Now</button>
          </a>

          <a href=" " className="text-black mt-2">
            Cancel at any time
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeaderComponent;
