"use client"
import TestimonialCard from "@/components/TestimonialCard"
import { testimonialData } from "@/lib/constData"
import PrevIcon from "@/public/icons/chevron-left.svg"
import NextIcon from "@/public/icons/chevron-right.svg"
import styles from "./testimonialCarousel.module.css"

import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import Image from "next/image"

type Props = {}

const TestimonialCarousel = (props: Props) => {
  return (
    <section className="bg-white">
      <section className="container flex flex-wrap items-center justify-center mx-auto pb-28 pt-0 sm:p-8 md:px-12 lg:px-16 xl:px-20">
        <div className="flex flex-wrap sm:flex-row items-center justify-center">
          <div className="flex flex-col items-center text-center">
            <h2 className="title font-Inter font-[roboto] text-3xl md:text-5xl pt-8 lg:text-6xl pb-5 mb-4 sm:mb-6">
              Best Cosmetics Provider
            </h2>
            <p className="text-lg min[1020px]:px-64 sm:text-base md:text-lg text-center xl:px-60">
              Your Premier Destination for Beauty Essentials Step into a realm
              of elegance and luxury with our handpicked selection of cosmetics.
              Explore our collection and experienc the difference in quality and
              Sophistication. Elevate your beauty routine with us today.
            </p>
          </div>

          <div className="mt-20 sm:mb-0 sm:mr-8">
            <Image
              // className="w-full h-full"
              src="/images/about2.webp"
              width={1000}
              height={1000}
              // fill
              alt="Image"
            />
          </div>
        </div>
      </section>

      <p className={styles.heading}>{testimonialData.heading}</p>
      <div className="relative">
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          navigation={{
            prevEl: ".testimonial-carousel-prev-btn",
            nextEl: ".testimonial-carousel-next-btn",
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Navigation, Pagination]}
          className="relative"
        >
          {testimonialData.testimonialCards.map((item) => {
            return (
              <SwiperSlide key={item.id}>
                <TestimonialCard data={item} />
              </SwiperSlide>
            )
          })}
        </Swiper>
        <button
          type="button"
          className="testimonial-carousel-prev-btn swiper-custom-navigation-btn -translate-y-[calc(40px+50%)] left-0"
        >
          <span className="sr-only">testimonial carousel previous button</span>
          <PrevIcon className={styles.btnIcon} />
        </button>
        <button
          type="button"
          className="testimonial-carousel-next-btn swiper-custom-navigation-btn -translate-y-[calc(40px+50%)] right-0"
        >
          <span className="sr-only">testimonial carousel next button</span>
          <NextIcon className={styles.btnIcon} />
        </button>
      </div>
    </section>
  )
}

export default TestimonialCarousel
