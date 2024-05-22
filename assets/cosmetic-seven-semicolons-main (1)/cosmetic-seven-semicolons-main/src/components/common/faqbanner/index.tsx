import React from "react"
import Image from "next/image"
import Styles from "./banner.module.css"
import Button from "../Button"
import { BannerPropsType, FAQPageBanner } from "@/utils/types"

const Faqbanner = ({ data }: FAQPageBanner) => {
  return (
    <section className="bg-white">
      {/* <div className="bg-white text-black flex flex-wrap md:flex-nowrap justify-center md:p-8 xl:p-3"> */}
      <div className="bg-white text-black grid grid-cols-1 md:grid-cols-2 justify-center ">
        <div className="lg:pt-20">
          <div className="relative aspect-[6/5] w-1/2">
            <Image
              // className="absolute z-20 h-32 min-w-44 md:h-28 md:w-60 lg:h-36 lg:w-80 xl:h-44 xl:w-96"
              className="-rotate-5"
              // src="/images/about-title.webp"
              src={data.faqimage}
              alt="Image"
              fill
            />
            {/* <h1>{data.aboutus}</h1> */}
          </div>

          {/* <h2 className="page-header-title font-Inter font-light text-4xl md:text-4xl lg:text-5xl xl:text-5xl -translate-y-9">
              We, are Brancy
            </h2> */}
          <h2 className="page-header-title font-Inter font-light text-4xl md:text-4xl lg:text-5xl xl:text-5xl -translate-y-9">
            {data.heading}
          </h2>
          <hr className="border-2 border-[#ff6565] w-32 mb-9" />
          <p className="page-header-desc text-sm md:text-base xl:text-lg max-w-96  font-Inter">
            {data.description}
          </p>
        </div>
        <div className="relative aspect-[4/3] w-72 md:w-10/12 md:aspect-auto">
          <Image
            // src="/images/about1.webp"
            src={data.image}
            // width={450}
            // height={500}
            fill
            // style={{ objectFit: "cover" }}
            alt="Image"
            className=""
          />
        </div>
      </div>
    </section>
  )
}

export default Faqbanner
