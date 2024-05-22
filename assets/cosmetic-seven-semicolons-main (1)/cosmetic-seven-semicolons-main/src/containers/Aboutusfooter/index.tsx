import Image from "next/image"
import React from "react"
import style from "./whychooseus.module.css"
import { whyChooseUs } from "@/lib/constData"
import ServiceCard from "@/components/ServiceCard"
import { aboutusfooter } from "@/lib/constData"
import AboutUsFooter from "@/components/aboutusfooter"
import { iteratee } from "lodash"
import Items from "@/modules/order/components/items"

type Props = {}

const AboutusFooter = (props: Props) => {
  return (
    <section className="bg-rose-100">
      <div className="rounded-3xl py-14">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {aboutusfooter.services?.map((item) => {
            return <AboutUsFooter key={item.id} data={item} />
          })}
          {/*== End Funfact Item ==*/}
        </div>
      </div>
    </section>
  )
}
export default AboutusFooter
