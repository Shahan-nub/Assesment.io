"use client";

import { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { RiArrowDropUpLine } from "react-icons/ri";
import { IoLocationOutline } from "react-icons/io5";

const LOCATIONS = ["India","United Stated", "Russia", "China", "Romania","UAE", "France", "Taiwan"]
export default function Location() {
  const [dropdown, setDropdown] = useState(false);
  const onClick = () => {
    setDropdown(!dropdown);
  };

  const [country, setCountry] = useState("United States");

  return (
    <div className="flex-col basis-[20%]">
      <div className="text-[#B6BDC4] md:text-sm text-xs items-center flex ">
        <IoLocationOutline size={18}></IoLocationOutline>
        <p className="md:ml-2 ml-1">{country}</p>
        {dropdown ? (
          <RiArrowDropUpLine
            size={35}
            className={`${dropdown ? "visible" : "hidden"} cursor-pointer`}
            onClick={onClick}
          />
        ) : (
          <RiArrowDropDownLine
            size={35}
            className={`${dropdown ? "hidden" : "visible"} cursor-pointer`}
            onClick={onClick}
          ></RiArrowDropDownLine>
        )}
      </div>
      <div
        className={`${dropdown ? "visible" : "hidden"} flex flex-col  `}
      >
        {LOCATIONS.map((countryName) => {
          return (
            <p className="text-[#B6BDC4] cursor-pointer hover:text-white" onClick={() => {
              setCountry(countryName)
              onClick()
            }}>{countryName}</p>
          )
        })}
      </div>
    </div>
  );
}
