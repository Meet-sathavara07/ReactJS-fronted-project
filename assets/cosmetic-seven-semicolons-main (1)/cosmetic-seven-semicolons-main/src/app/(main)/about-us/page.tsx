import AboutUsBanner from "@/containers/AboutUsBanner"
import AboutusFooter from "@/containers/Aboutusfooter"
import TestimonialCarousel from "@/containers/TestimonialCarousel"
import WhyChooseUs from "@/containers/WhyChooseUs"
import { Metadata } from "next"
import React from "react"

export const metadata: Metadata = {
  title: "About Us",
  description: "About our Bea Ypu",
}

const page = () => {
  return (
    <>
      <AboutUsBanner />
      <WhyChooseUs />
      <TestimonialCarousel />
      <AboutusFooter />
    </>
  )
}

export default page
