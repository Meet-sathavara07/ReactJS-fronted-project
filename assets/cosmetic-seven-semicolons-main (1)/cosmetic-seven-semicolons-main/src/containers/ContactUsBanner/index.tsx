import React from "react"
import Banner from "@/components/common/Banner"
import { brancycontactusbanner } from "@/lib/constData"
import BrancyContactBanner from "@/components/brancycontactpagebanner"

const ContactUsBanner = () => {
  // return <Banner data={contactUsPageBanner} />
  return <BrancyContactBanner data={brancycontactusbanner} />
}

export default ContactUsBanner
