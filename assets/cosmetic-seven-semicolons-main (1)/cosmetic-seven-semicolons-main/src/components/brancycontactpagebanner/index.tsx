import React from "react"
import Image from "next/image"
import Styles from "./banner.module.css"
import { BannerPropsType } from "@/utils/types"

const BrancyContactBanner = ({ data }: BannerPropsType) => {
  return (
    <section className=" p-0 relative overflow-hidden h-screen bg-white text-blue-900">
      <video
        autoPlay
        loop
        muted
        className="absolute w-full h-full max-w-none z-0"
        style={{ objectFit: "cover" }}
        src={data.image}
        // type="video/mp4"
      >
        Your browser does not support the video tag.
      </video>
      <div className="relative z-0 p-4 md:p-8 h-full flex flex-col items-center justify-center text-8xl">
        <div className="md:container md:mx-auto md:px-4 text-center">
          <h1 className=" md:text-6xl font-bold mt-8 pt-20  font-[roboto] text-6xl">
            {data.heading}
          </h1>
          <p className="text-lg md:text-2xl  mb-5 md:p-4 md:pb-12 leading-tight max-[450px]:text-base">
            {data.description}
          </p>
        </div>
      </div>
    </section>
  )
}

export default BrancyContactBanner
