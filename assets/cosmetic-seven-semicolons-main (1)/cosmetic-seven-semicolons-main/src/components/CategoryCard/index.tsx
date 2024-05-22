// import React, { ReactNode } from "react"

// type Props = { children: ReactNode; className?: string; value?: string }

// const CategoryCard = ({ children, value }: Props) => {
//   console.log("value:", value)
//   const categoryArray = React.Children.toArray(children)

//   const cardStyle = {
//     backgroundColor: value || "transparent",
//   }

//   return (
//     <div
//     style={cardStyle}
//       className={`relative group transition-transform transform-gpu rounded-xl hover:rotate-y-full hover:shadow-2xl
//     aspect-w-3 aspect-h-4 w-auto lg:w-full h-52 md:h-60 lg:h-60  flex space-x-4 flex-col justify-center items-center ${
//       value ? value : ""
//     }`}
//     >
//       <div className="rounded flip-container hover:animate-bounce ">
//         {categoryArray[0]}
//         <div className="flipper">
//           {/* <img
//               className="block justify-center xl:w-16 w-16"
//               src="https://template.hasthemes.com/brancy/brancy/assets/images/shop/category/1.webp"
//               alt="Image Alt Text"
//             /> */}
//         </div>
//       </div>
//       <div className="badge absolute xl:right-0 right-2 top-3 mr-3 mt-auto bg-red-400 text-white text-center rounded-full  px-4 py-0 xl:-translate-x-2 flex justify-center transform sm:-rotate-0 lg:rotate-0 xl:-rotate-90 xl:-top-3 ">
//         <span>{categoryArray[1]}</span>
//       </div>
//       <hr className="mx-auto  h-0.5 w-7 bg-red-400 xl:mt-9 mt-5 mb-2 "></hr>
//       <div className="flex justify-center items-center font-mt-1 text-black -mb-4  ">
//         {categoryArray[2]}
//       </div>
//     </div>
//   )
// }

// export default CategoryCard

// CategoryCard.jsx

import { Console } from "console"
import React, { ReactNode } from "react"

const cardColors = {
  green: "bg-[#DCFFD2]",
  yellow: "bg-[#FFEDB4]",
  purple: "bg-[#DFE4FF]",
  Skin: "bg-[#FFEACC]",
  pink: "bg-[#FFDAE0]",
  Syellow: "bg-[#FFF3DA]",
}

type Props = { children: ReactNode; value?: string }

const CategoryCard = ({ children, value }: Props) => {
  const categoryArray = React.Children.toArray(children)
  // console.log(value)
  return (
    <div
      className={`relative group transition-transform transform-gpu rounded-xl hover:rotate-y-full hover:shadow-2xl aspect-w-3 aspect-h-4 w-auto lg:w-full h-52 md:h-60 lg:h-60  flex space-x-4 flex-col justify-center items-center ${cardColors[value]}`}
    >
      <div className="rounded flip-container group-hover:scale-x-[-1] transition-transform duration-500">
        {categoryArray[0]}
        <div className="flipper"></div>
      </div>
      <div className="badge absolute xl:right-0 right-2 top-3 mr-3 mt-auto bg-red-400 text-white text-center rounded-full  px-0 py-0 xl:-translate-x-2 flex justify-center transform sm:-rotate-0 lg:rotate-0 xl:-rotate-90 xl:-top-3">
        <span>{categoryArray[1]}</span>
      </div>
      <hr className="mx-auto h-0.5 w-7 bg-rose-600 xl:mt-9 mt-5 mb-2"></hr>
      <div className="flex justify-center items-center font-mt-1 text-black -mb-4">
        {categoryArray[2]}
      </div>
    </div>
  )
}

export default CategoryCard
