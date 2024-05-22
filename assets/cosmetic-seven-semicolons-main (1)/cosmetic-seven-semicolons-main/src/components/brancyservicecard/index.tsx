import Image from "next/image"
import React from "react"
import { ServiceCardType } from "@/utils/types"
import style from "./servicecard.module.css"

const BrancyServiceCard = ({ data }: ServiceCardType) => {
  return (
    <div className="flex flex-col justify-center content-center border-2 border-[#ff6565] rounded-3xl h-64 w-full">
      {/*== Start Funfact Item ==*/}
      <div className="flex flex-col justify-center content-center rounded-3xl">
        <div className="flex justify-center content-center">
          <Image
            className="h-full w-20"
            src={data.icon}
            width={110}
            height={110}
            alt="Icon"
          />
        </div>
        <hr className="border border-[#ff6565] w-60 self-center m-5" />
        <div className="flex flex-col mx-auto text-5xl">
          <h2 className="funfact-number text-center font-medium">
            {data.heading}
          </h2>
          <h6 className="funfact-title text-center text-2xl ">
            {data.serviceDescription}
          </h6>
        </div>
      </div>
      {/*== End Funfact Item ==*/}
    </div>
  )
}

export default BrancyServiceCard
