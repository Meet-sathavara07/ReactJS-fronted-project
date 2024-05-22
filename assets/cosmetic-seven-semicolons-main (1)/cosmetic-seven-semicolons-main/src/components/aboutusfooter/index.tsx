import Image from "next/image"
import React from "react"
import { ServiceCardType } from "@/utils/types"
import style from "./servicecard.module.css"

const AboutUsFooter = ({ data }: ServiceCardType) => {
  return (
    <div className="grid md:grid-cols-1 lg:grid-cols-1 rounded-3xl bg-red-50 justify-between items-center ">
      <div className="flex flex-col">
        <div className="feature-item flex flex-col gap-3 justify-center items-start ">
          <h5 className="title flex justify-center items-center gap-4 text-xl font-medium">
            <img
              className="h-auto"
              src={data.icon}
              width={50}
              height={50}
              alt="Icon"
            />
            {data.heading}
          </h5>
          <p className="flex justify-center pl-2 text-base xl:text-lg font-normal">
            {data.serviceDescription}
          </p>
        </div>
      </div>
    </div>
  )
}

export default AboutUsFooter
