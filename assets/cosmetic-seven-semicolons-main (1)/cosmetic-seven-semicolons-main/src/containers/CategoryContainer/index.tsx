// import CategoryCard from "@/components/CategoryCard"
// import { categoryData } from "@/lib/constData"
// import Image from "next/image"
// import React from "react"

// type Props = {}

// const CategoryContainer = (value: Props) => {
//   return (
//     <section className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-8">
//       {/* <div className="flex gap-2 justify-center items-center h-screen "></div> */}

//       {/* <section className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-8"> */}
//       {categoryData.categoryCardData.map((item, index) => {
//         console.log("bgColor:", item.bgColor); // Add this line for debugging
//         return (
//           <CategoryCard key={index} value={item.bgColor}>
//             <Image
//               src={item.CImg}
//               alt="image"
//               width={70}
//               height={70}
//             />
//             <p className="{item.className}">{item.tag}</p>
//             <p>{item.title}</p>
//           </CategoryCard>
//         );
//       })}
//     </section>
//   );
// };

// export default CategoryContainer

// CategoryContainer.jsx

//

import CategoryCard from "@/components/CategoryCard"
import { categoryData } from "@/lib/constData"
import Image from "next/image"
// import React from "react"

type Props = {}

const CategoryContainer = (props: Props) => {
  return (
    <section className="grid mt-10 grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-4 sm:gap-8">
      {categoryData.categoryCardData.map((item, index) => (
        <CategoryCard key={index} value={item.color}>
          <Image src={item.CImg} alt="image" width={70} height={70} />

          <p className="bg-[#ff6565] text-lg px-5  rounded-full">{item.tag}</p>

          <p>{item.title}</p>
          <hr className="mx-auto h-0.5 w-7 bg-red-400 xl:mt-9 mt-5 mb-2"></hr>
        </CategoryCard>
      ))}
    </section>
  )
}

export default CategoryContainer
