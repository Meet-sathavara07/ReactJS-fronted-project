import ShimmerCard from "@/components/ShimmerCard"
import { shimmerData } from "@/lib/constData"
import Image from "next/image"
import React from "react"
// import styles from "./shimmer.module.css";

type Props = {}

const ShimmerContainer = (props: Props) => {
  return (
    <section>
      {/* <p className="">{shimmerData.heading}</p> */}
      <div className="flex flex-wrap md:flex-nowrap sm:flex-row gap-6 xl:pb-20 justify-center items-center ">
        {shimmerData.shimmerCardData.map((item, index) => (
          <ShimmerCard key={index}>
            <Image
              src={item.shImg}
              alt="sjb"
              className={"rounded-lg"}
              width={"600"}
              height={"800"}
            />
            {/* <p>{item.text}</p>ss
            <h2>demo</h2> */}
          </ShimmerCard>
        ))}
      </div>
    </section>
  )
}

export default ShimmerContainer
