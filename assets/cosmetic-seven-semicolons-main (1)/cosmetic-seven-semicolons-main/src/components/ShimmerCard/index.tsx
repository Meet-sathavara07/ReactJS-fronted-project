import Image from "next/image"
import React, { ReactNode } from "react"
import Styles from "./shimmer.module.css"

type Props = { children: ReactNode }

const ShimmerCard = ({ children }: Props) => {
  const shimmerCardArray = React.Children.toArray(children)
  return (
    <div
      className={` ${Styles.shimmer_div} group relative shimmer-container flex flex-wrap md:flex-nowrap gap-10 aspect-w-9
     aspect-h-12 w-auto
           hover:scale justify-center items-center hover:scale-105 `}
    >
      <div
        className={`${Styles.bg_shimmer_banner} group-hover:opacity-100 `}
      ></div>
      <div className="image shine ">
        {shimmerCardArray[0]}
        {/* <div className={styles["shimmer-overlay"]} */}
      </div>
    </div>
  )
}

export default ShimmerCard
