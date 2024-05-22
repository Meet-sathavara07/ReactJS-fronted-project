import React from "react"
import Image from "next/image"
import Button from "@/components/common/Button"
import { HomeBlogPost } from "@/utils/types"
import Styles from "./shimmer.module.css"

const HomeBlogpost = ({ data }: HomeBlogPost) => {
  return (
    <div className="post-item flex flex-col pb-10 md:h-full gap-6 items-center">
      <div
        className={` relative w-full aspect-square rounded-xl overflow-hidden`}
      >
        <Image
          className={`object-cover rounded-xl transition-all ease-in duration-300 hover:scale-[1.1]`}
          src={data.image}
          fill
          alt="blogpostimage"
        />
      </div>
      <div className=" w-full flex flex-col gap-2 md:gap-4 lg:gap-6">
        {/* <button
          type="button"
          className="bg-[#ff6565] h-full w-1/3 leading-7 rounded-3xl"
        >
          BEAUTY
        </button> */}
        <Button variant="rare" className="self-start">
          Beauty
        </Button>

        <p className="text-xl">{data.description}</p>
        <div className="flex max-sm:flex-col text-start gap-2 md:justify-between text-sm">
          <span>
            By:
            <a
              href="#"
              className="hover:text-rose-400 text-sm hover:underline transition-all ease-in duration-100"
            >
              {data.author}
            </a>
          </span>
          <span>{data.date}</span>
        </div>
      </div>
    </div>
  )
}

export default HomeBlogpost
