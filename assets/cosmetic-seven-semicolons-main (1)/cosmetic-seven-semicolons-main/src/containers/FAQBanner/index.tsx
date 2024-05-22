import React from "react"
import Image from "next/image"
import { brancyFAQPageBanner } from "@/lib/constData"
import Banner from "@/components/common/Banner"
import Faqbanner from "@/components/common/faqbanner"

const Faqbannerr = () => {
  return <Faqbanner data={brancyFAQPageBanner} />
}

export default Faqbannerr
