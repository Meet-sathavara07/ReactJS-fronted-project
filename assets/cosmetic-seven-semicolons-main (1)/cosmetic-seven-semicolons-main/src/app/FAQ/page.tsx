import AboutUsBanner from "@/containers/AboutUsBanner"
import FAQS from "@/containers/FAQ"
import Faqbannerr from "@/containers/FAQBanner"

import { Metadata } from "next"

export const metadata: Metadata = {
  title: "FAQ",
}

type Props = {}

const page = (props: Props) => {
  return (
    <>
      <Faqbannerr />
      <FAQS />

    </>
  )
}

export default page
