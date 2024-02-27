import React from "react";
import Image from "next/image";
import ViewButton from "../ui/ViewButton";

export default function DealsCard({
  img,
  name,
  discount,
  discount_period,
  features,
  OG_price,
}) {
  return (
    <div className="min-w-max lg:w-max min-h-max flex flex-col items-center bg-white shadow-sm hover:shadow-md transition-all duration-300 ease-in-out rounded-xl p-4 lg:mx-2 lg:my-auto my-4">
      <Image
        src={img}
        alt="img"
        className="md:my-4 lg:w-[140px] w-[80px] lg:h-[103px] h-[70px]"
        height={100}
        width={141}
      ></Image>
      <div className="lg:mt-12 mt-5 self-start flex justify-between">
        <p className="lg:text-sm sm:text-xs text-[10px] font-normal text-[#074786] min-w-max lg:w-[53px] bg-slate-100 rounded-lg lg:px-2 px-1 lg:py-1">
          {discount}% Off
        </p>

        <p className="lg:text-sm sm:text-xs text-[10px] font-normal text-[#074786] min-w-max bg-slate-100 rounded-lg lg:px-2 lg:py-1 px-1 md:mx-2 mx-[6px]">
          {discount_period}
        </p>
      </div>

      <h1 className="font-bold lg:mt-4 mt-2 lg:text-lg text-sm text-[#626E79]">
        {name}
      </h1>
      <p className="text-[#626E79] lg:text-[14px] sm:text-sm text-xs font-normal">{features}</p>
      <div className="self-start flex justify-between items-end">
        <h4 className="text-[#5C6874] lg:text-xl text-sm font-normal sm:mt-2 mt-1 ">
          ${`${OG_price - (OG_price * discount) / 100}`}
        </h4>
        <p className="text-[#9FA9B3] lg:mx-4 mx-2 text-xs">${OG_price}</p>
        <p className="text-[#EF4C5D] text-xs">({discount}% Off)</p>
      </div>
      <ViewButton name="View Deal"></ViewButton>
    </div>
  );
}
