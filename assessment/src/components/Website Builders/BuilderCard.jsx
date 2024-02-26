"use client";

import Image from "next/image";
import { useState } from "react";
import { FaStar } from "react-icons/fa";
import { FaStarHalf } from "react-icons/fa";
import MoreDetails from "./MoreDetails";
import WhyWeLoveIt from "./WhyWeLoveIt";

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
    <div className="flex max-h-max md:min-h-[260px] shadow-sm bg-white rounded-2xl sm:flex-row flex-col justify-between items-center relative my-10 p-8">
      <Image
        src={img}
        alt="bulder1"
        className="lg:h-[100px] lg:w-[140px] lg:mr-10 sm:mr-5"
      ></Image>

      <div className="flex flex-col relative ">
        <div className="">
          <span className="font-bold">{name}</span>-{" "}
          <p className="">{description}</p>
        </div>
        <div className="mt-4">
          <span className="font-bold">Main Highlights</span>
          <br />
          <p className={`sm:ml-6 ml-3`}>{highlights}</p>
        </div>

        {/* showMore */}

        <div className={`${showMore} flex flex-col bg-[#FFF4ED] rounded-xl w-[95%] minw-max px-6 py-3 md:ml-6 mt-2 ml-3`}>
            {MORE_DETAILS.map((extra) => {
                return (  
                    <MoreDetails MoreDetailsRating={extra.rating} details={extra.type} ></MoreDetails>
                )
            })}
        </div>
        <div className={`${showMore} flex flex-col minw-max px-6 py-4 `}>
            {MORE_DETAILS.map((extra) => {
                return (  
                    <WhyWeLoveIt whyLove={extra.whyLove}></WhyWeLoveIt>
                )
            })}
        </div>
        <button
          className={`${showLess} text-[#1B88F4] self-start lg:mt-6 mt-4`}
          onClick={() => {
            setShowMore("visible")
            setShowLess("hidden")
        }}
        >
          Show more
        </button>
        <button
          className={`${showMore} text-[#1B88F4] self-start lg:mt-6 mt-4`}
          onClick={() => {
            setShowMore("hidden")
            setShowLess("visible")
        }}
        >
          Show less
        </button>



        
      </div>

      <div className=" min-w-[20%] max-w-max flex flex-col justify-between items-center">
        <div className=" w-[75%] flex flex-col sm:py-5 py-3 px-4 rounded-xl bg-[#F3F9FF]">
          <h2 className="text-[#074786] text-center sm:font-medium text-2xl">
            {rating}
          </h2>
          <p className="text-[#074786] text-center sm:mt-3 mt-2">
            {rating_name}
          </p>
          <div className="flex justify-center">{starRating}</div>
        </div>

        <button className="w-[95%] mt-8 outline-none rounded-2xl bg-[#1B88F4] text-white sm:h-[48px] h-25px hover:scale-95 hover:shadow-[0_0_9px_1px_#cecece] ">
          View
        </button>
      </div>
    </div>
  );
}
