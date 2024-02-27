"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { IoMenuOutline } from "react-icons/io5";
import { IoHomeOutline } from "react-icons/io5";
import { MdCategory } from "react-icons/md";
import { MdWeb } from "react-icons/md";
import { MdOutlineLocalOffer } from "react-icons/md";
import { IoMdClose } from "react-icons/io";


const Navbar = () => {
  const [open, setOpen] = React.useState(false);
  const onClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <div className="2xl:px-20 lg:flex lg:justify-center min-w-screen max-w-[120rem] lg:px-6 lg:py-4 hidden z-10 bg bg-[#212731]">
        <div className="2xl:justify-start 2xl:gap-24 2xl:pr-24 2xl:max-w-full 2xl:w-full top-0 w-3/6 min-w-[800px] max-w-[900px] flex g-8 justify-between items-baseline text-sm  ">
          <input
            type="search"
            name="search"
            className="px-2 py-1 rounded-lg outline-none text-blue-950 h-8"
            placeholder="&#128269;"
          />
          <Link
            href="/"
            className={`flex justify-center text-white  gap-2 hover:scale-105 ${
              usePathname() === "/"
                ? "border-2 border-color-3 pr-8 pl-8 pt-2 pb-2 shadow-[0_0_1rem_0px_#4485c7] rounded-lg bg-color-4 bg-opacity-25 text-transparent backdrop-blur-sm"
                : ""
            }`}
          >
            Home
          </Link>

          <Link
            href="/categories"
            className={`flex 2xl:ml-auto justify-center text-white  gap-2 hover:scale-105 ${
              usePathname() === "/categories"
                ? "border-2 border-color-3 pr-8 shadow-[0_0_1rem_0px_#4485c7] pl-8 pt-2 pb-2 rounded-lg bg-color-4 bg-opacity-25 text-transparent backdrop-blur-sm"
                : ""
            }`}
          >
            Categories
          </Link>
          <Link
            href="/websitebuilders"
            className={`flex justify-center text-white  gap-2 hover:scale-105 ${
              usePathname() === "/websitebuilders"
                ? "border-2 border-color-3 pr-8 pl-8 shadow-[0_0_1rem_0px_#4485c7] pt-2 pb-2 rounded-lg bg-color-4 bg-opacity-25 text-transparent backdrop-blur-sm"
                : ""
            }`}
          >
            Website Builders
          </Link>
          <Link
            href="/deals"
            className={`flex justify-center text-white  gap-2 hover:scale-105 ${
              usePathname() === "/deals"
                ? "border-2 border-color-3 pr-8 pl-8 pt-2 pb-2 shadow-[0_0_1rem_0px_#4485c7] rounded-lg bg-color-4 bg-opacity-25 text-transparent backdrop-blur-sm"
                : ""
            }`}
          >
            Today's Deals
          </Link>
        </div>
      </div>
      <div className="flex justify-between p-6  w-screen lg:hidden ">
        <IoMenuOutline onClick={onClick} />
      </div>
      <div
        className={`fixed top-0 left-0 w-3/5 h-full z-10  lg:hidden bg-[gray] bg-opacity-25 text-transparent backdrop-blur-lg border-white border-opacity-25 border transform duration-300 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="absolute top-0 right-0 z-30 text-slate-600 m-4">
        <IoMdClose 
          onClick={onClick}
          className="h-[40px] w-[40px]"
        /></div>

        <div className="mt-40 ">
          <div className="my-4 border-t border-[#939393] mr-6 ml-6"></div>

          <Link
            href="/"
            onClick={onClick}
            className="flex items-center text-slate-600 gap-2 px-4 py-2 mr-6 ml-6 rounded hover:bg-color-3"
          >
            <IoHomeOutline />
            Home
          </Link>
          <div className="my-4 border-t border-[#939393] mr-6 ml-6"></div>
          <Link
            href="/"
            onClick={onClick}

            className="flex items-center  text-slate-600  gap-2 px-4 py-2 mr-6 ml-6 hover:bg-color-3"
          >
            <MdCategory />
            Categories
          </Link>
          <div className="my-4 border-t border-[#939393] mr-6 ml-6"></div>
          <Link
            href="/"
            onClick={onClick}
            className="flex  text-slate-600 items-center  gap-2 px-4 py-2 mr-6 ml-6  hover:bg-color-3"
          >
            < MdWeb />

            Website Builders
          </Link>
          <div className="my-4 border-t border-[#939393] mr-6 ml-6"></div>
          <Link
            href="/"
            onClick={onClick}
            className="flex  text-slate-600 items-center gap-2 px-4 py-2 mr-6 ml-6 hover:bg-color-3"
          >
            < MdOutlineLocalOffer />
            Today's Deals
          </Link>
          <div className="my-4 border-t border-[#939393] mr-6 ml-6"></div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
