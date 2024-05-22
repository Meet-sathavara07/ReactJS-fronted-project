import React from "react"
import Image from "next/image"

import Styles from "./Hbanner.module.css"
// import Button from "../Button"
import { BannerPropsType } from "@/utils/types"
import Button from "../Button"

const Hbanner = ({ data }: BannerPropsType) => {
  return (
    <div className="bg-gradient-to-r from-slate-50  to-emerald-200 w-[400rem ] flex flex-1 justify-center flex-wrap px-4 md:flex-nowrap ">
      <div className="px-container relative items-center text-left md:pl-container ">
        <div className="z-0">
          {/* <img src="text-theme.webp" alt className="w-[250px] ml-10 items-center z-0 sm:ml-56 sm:mr-56 mt-7 md:absolute md:w-[300px] md:top-24 md:-left-36 lg:[w-350px] animate-fade-left " /> */}
          <Image
            className="animate-fadeleft w-[250px] ml:10 md:ml-12 items-center z-0 sm:ml-56 sm:mr-56 mt-7 md:absolute md:w-[300px] md:top-24 lg:[w-350px] animate-fade-left"
            src={data.backgroundBannerImage1}
            width={700}
            height={700}
            alt="img"
          />
        </div>
        <div className="z-10">
          <h2 className=" text-nowrap text-[2rem] font-bold  top-32 md:pt-56 md:text-[2.5rem] lg:text-[3.5rem] animate-fadeinup">
            CLEAN FRESH
          </h2>
          <p className="text-[1.2rem] text-wrap  md:text-[1rem] lg:text-[1.5rem] md:w-[23rem] lg:w-[32rem] xl:w-[34rem] animate-fadeinup">
            Discover the transformative magic of Brancy cosmetics, designed to
            elevate your daily routine with effortless elegance.
          </p>
          <Button className="border-[0.5px] border-zinc-900  rounded-full p-3 px-10 hover:bg-[#ff6565] hover:text-white hover:border-0 mt-3 text-nowrap sm:-ml-20 absolute md:ml-1 animate-fadeinup ">
            <a className="tracking-widest">BUY NOW</a>
          </Button>
        </div>
      </div>
      {/* </div> */}
      <div className="relative ">
        <div>
          {/* <img src="slider1.webp" alt className=" mt-28 p-3 md:-translate-y-20 animate-custom  duration-2000" /> */}
          <Image
            src={data.backgroundBannerImage}
            width={900}
            height={900}
            alt="img"
            className="animate-customanimation mt-28 p-3 md:-translate-y-20 animate-custom  duration-2000"
          />
        </div>
      </div>
    </div>
  )
}

export default Hbanner
