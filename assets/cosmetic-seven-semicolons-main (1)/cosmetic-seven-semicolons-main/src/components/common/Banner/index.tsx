import React from "react"
import Image from "next/image"
import Styles from "./banner.module.css"
import Button from "../Button"
import { BannerPropsType } from "@/utils/types"

// const Banner = ({ data }: BannerPropsType) => {
//   return (
//     <section className={Styles.gridSection}>
//       <div className={Styles.contentWrapper}>
//         <div className={Styles.content}>
//           <h2 className={Styles.heading}>{data.heading}</h2>
//           {data.description && (
//             <p className={Styles.description}>&quot;{data.description}&quot;</p>
//           )}
//         </div>
//         <div className={Styles.bannerButtons}>
//           {data.actionBtn1 && (
//             <Button
//               variant="fill"
//               color="yellow"
//               as="a"
//               href={"#top-products"}
//               className="!rounded-full"
//             >
//               {data.actionBtn1}
//             </Button>
//           )}
//           {data.actionBtn2 && (
//             <Button
//               variant="outlined"
//               color="light"
//               as="a"
//               href={"/products"}
//               className="!rounded-full"
//             >
//               {data.actionBtn2}
//             </Button>
//           )}
//         </div>
//       </div>
//       {data.backgroundBannerImage && (
//         <div className={Styles.backgroundBannerImage}>
//           <Image
//             src={data.backgroundBannerImage}
//             alt={"Banner Image"}
//             fill
//             style={{ objectFit: "contain" }}
//             className="z-10"
//           />
//         </div>
//       )}
//     </section>
//   )
// }

// export default Banner

//

const Banner = ({ data }: BannerPropsType) => {
  return (
    <section className="bg-white pb-0">
      {/* <div className="bg-white text-black flex flex-wrap md:flex-nowrap justify-center md:p-8 xl:p-3"> */}
      <div className="bg-white text-black flex flex-wrap md:flex-nowrap md:flex-1 justify-center xl:gap-64 ">
        <div className="lg:pt-20">
          <div className="relative aspect-[8/4] w-full">
            <Image
              // className="absolute z-20 h-32 min-w-44 md:h-28 md:w-60 lg:h-36 lg:w-80 xl:h-44 xl:w-96"
              // className="h-32 min-w-44 md:h-28 md:w-60 lg:h-36 lg:w-80 xl:h-44 xl:w-96"
              // src="/images/about-title.webp"
              src={data.aboutusimage}
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
          <h4 className="page-header-sub-title font-Inter tracking-wider text-base md:text-lg xl:text-lg underline -translate-y-3 ">
            {data.subtitle}
          </h4>
          <p className="page-header-desc text-sm md:text-base xl:text-lg max-w-96  font-Inter">
            {data.description}
          </p>
        </div>
        <div className="relative aspect-[3/4] w-96">
          <Image
            // src="/images/about1.webp"
            src={data.image}
            // width={450}
            // height={500}
            fill
            // style={{ objectFit: "cover" }}
            alt="Image"
            className="h-auto object-fill lg:ml-50"
          />
        </div>
      </div>
    </section>
  )
}

export default Banner
