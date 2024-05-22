import Image from "next/image"
import React from "react"
import style from "./whychooseus.module.css"
import ServiceCard from "@/components/ServiceCard"
import { brancyservicecard } from "@/lib/constData"
import BrancyServiceCard from "@/components/brancyservicecard"
import { iteratee } from "lodash"
import Items from "@/modules/order/components/items"

type Props = {}

const WhyChooseUs = (props: Props) => {
  return (
    <section className="bg-rose-50">
      <section className=" rounded-3xl 2xl:px-2 ">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {brancyservicecard.services?.map((item) => {
            return <BrancyServiceCard key={item.id} data={item} />
          })}
          {/*== End Funfact Item ==*/}
        </div>
      </section>
    </section>
  )
}

export default WhyChooseUs

// const WhyChooseUs = (props: Props) => {
//   return (
//     <section className="pt-20">
//       <div className={style.container}>
//         <div className={style.contentWrapper}>
//           <div className={style.headingWrapper}>
//             <h3 className="text-heading4">{whyChooseUs.heading}</h3>
//             <p>{whyChooseUs.description}</p>
//           </div>
//           <div className={style.servicesWrapper}>
//             {whyChooseUs &&
//               whyChooseUs.services?.slice(0, 4).map((item) => {
//                 return <ServiceCard key={item.id} data={item} />
//               })}
//           </div>
//         </div>
//         <div className={style.imageWrapper}>
//           <div className={style.image}>
//             <Image
//               src={whyChooseUs.image}
//               alt="why choose us image"
//               fill
//               style={{ objectFit: "cover" }}
//               className="rounded-2xl z-10"
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default WhyChooseUs
