import React from "react"
import Styles from "./shimmer.module.css"
type Props = {}

const SaleBanner = (props: Props) => {
  return (
    <div
      className={`${Styles.shimmer_div} relative image-container flex px-container py-4 pb-8 w-[100%] justify-center`}
    >
      <div className="image shine shimmer">
        <a href="#" className="banner">
          <img
            src="https://template.hasthemes.com/brancy/brancy/assets/images/shop/banner/7.webp"
            alt="Image 1"
          ></img>
          <div
            className={`${Styles.bg_shimmer_banner}  group-hover:opacity-100 banner-before`}
          />
          <div className="banner-after" />
        </a>
      </div>
    </div>
  )
}

export default SaleBanner
