"use client";

import Image from "next/image";
import { useState } from "react";
import { FaStar } from "react-icons/fa";
import { FaStarHalf } from "react-icons/fa";
import MoreDetails from "./MoreDetails";
import WhyWeLoveIt from "./WhyWeLoveIt";
import ViewButton from "../ui/ViewButton";

const MORE_DETAILS = [
  {
    type: "building responsive",
    rating: 9.9,
    whyLove:"Documentation",
  },
  {
    type: "cool",
    rating: 8.9,
    whyLove:"Easy use",

  },
  {
    type: "docs",
    rating: 8.9,
    whyLove:"Out of the box",

  },
];

export default function BuilderCard({
  img,
  name,
  description,
  highlights,
  rating,
  rating_name,
  stars,
}) {
  const [showMore, setShowMore] = useState("hidden");
    const[showLess,setShowLess]= useState("visible")

  let starRating = [];
  for (let i = 1; i <= stars; i++) {
    starRating.push(<FaStar key={i.toString()} color="gold"></FaStar>);
  }
  return (
    <div className="flex max-h-max lg:min-h-[240px]  shadow-sm hover:shadow-md transition-all duration-300 ease-in-out bg-white rounded-2xl flex-row justify-between items-center relative my-10 lg:p-8 p-4">
      <Image
        src={img}
        alt="bulder1"
        className="lg:h-[100px] lg:w-[140px]  sm:h-[70px] sm:w-[90px]  lg:mr-10 sm:mr-5"
      ></Image>

      <div className="flex flex-col relative ">
        <div className="">
          <span className="font-bold lg:text-base text-sm">{name}</span>
          <p className="lg:text-base sm:text-sm text-xs">{description}</p>
        </div>
        <div className="mt-4">
          <span className="font-bold lg:text-base text-sm">Main Highlights</span>
          <br />
          <p className={`sm:ml-6 ml-3 sm:text-sm text-xs`}>{highlights}</p>
        </div>

        {/* showMore */}

        <div className={`${showMore} flex flex-col bg-[#FFF4ED] rounded-xl w-[95%] minw-max lg:px-6 lg:py-3 sm:px-4 sm:py-2 p-2 md:ml-6 mt-2 sm:ml-3 ml-2`}>
            {MORE_DETAILS.map((extra) => {
                return (  
                    <MoreDetails MoreDetailsRating={extra.rating} details={extra.type} ></MoreDetails>
                )
            })}
        </div>
        <div className={`${showMore} flex flex-col minw-max lg:px-6 lg:py-4 px-4 py-2 `}>
            {MORE_DETAILS.map((extra) => {
                return (  
                    <WhyWeLoveIt whyLove={extra.whyLove}></WhyWeLoveIt>
                )
            })}
        </div>
        <button
          className={`${showLess} text-[#1B88F4] text-xs lg:text-base self-start lg:mt-6 mt-4`}
          onClick={() => {
            setShowMore("visible")
            setShowLess("hidden")
        }}
        >
          Show more
        </button>
        <button
          className={`${showMore} text-[#1B88F4] text-xs lg:text-base self-start lg:mt-6 mt-4`}
          onClick={() => {
            setShowMore("hidden")
            setShowLess("visible")
        }}
        >
          Show less
        </button>



        
      </div>

      <div className="lg:ml-3 sm:ml ml-1  sm:w-[19%]  flex flex-col justify-between items-center">
        <div className=" min-w-max  w-full flex flex-col sm:py-5 sm:px-4 px-[10px] py-3 rounded-xl bg-[#F3F9FF]">
          <h2 className="text-[#074786] text-center sm:font-medium lg:text-2xl sm:text-lg text-base ">
            {rating}
          </h2>
          <p className="text-[#074786] text-center lg:text-base sm:text-sm text-xs sm:mt-3 mt-2">
            {rating_name}
          </p>
          <div className="flex justify-center">{starRating}</div>
        </div>

        <ViewButton name="View"></ViewButton>
      </div>
    </div>
  );
}
