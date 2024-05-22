import Link from "next/link"
import React from "react"
import Image from "next/image"
import { cartPageBanner } from "@/lib/constData"
type Props = {}

const ProdBanner = ({ data }: cartPageBanner) => {
  return (
    <div className="navigator relative">
      <div className=" max-[425]:text-md h-40 bg-orange-100 w-screen   flex justify-between items-center ">
        <div className="">
          <p className="text-lg lg:text-lg text-center lg:text-left text-black pb-3 px-container text-nowrap">
            <Link href="/" className="text-lg">
              {data.heading}
            </Link>
            / {data.heading1}
          </p>
          <h2 className="text-xl lg:text-3xl  text-center px-container lg:text-left font-semibold mb-2 text-black">
            {" "}
            {data.subheading}
          </h2>
        </div>
        <div className="relative w-1/5 px-0 h-40 invisible md:visible">
          <Image src="/images/cos.png" alt=" " fill />
        </div>
      </div>
    </div>
  )
}
export default ProdBanner
