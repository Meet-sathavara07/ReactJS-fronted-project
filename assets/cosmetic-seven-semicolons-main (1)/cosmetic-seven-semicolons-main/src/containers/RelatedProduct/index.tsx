"use client"
import "swiper/css"
import style from "./relatedproduct.module.css"
import { memo } from "react"
import { useProducts } from "medusa-react"
import { PricedProduct } from "@medusajs/medusa/dist/types/pricing"
import { ProductProvider } from "@/lib/context/product-context"
import ProductCard from "@/components/products/ProductCard"
import PrevIcon from "@/public/icons/chevron-left.svg"
import NextIcon from "@/public/icons/chevron-right.svg"

import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination } from "swiper/modules"
import "swiper/css/navigation"
import "swiper/css/pagination"
import { products } from "@/lib/constData"

type Props = {
  productDetailData: PricedProduct
}
const sales_channel = process.env.NEXT_PUBLIC_SALES_CHANNEL_ID || ""

const RelatedProduct = ({ productDetailData }: Props) => {
  const { products: productList } = useProducts({
    limit: 10,
    sales_channel_id: [sales_channel],
    category_id: productDetailData?.categories?.map((x) => x.id),
    expand: "categories,variants",
  })

  const product = productList?.filter((x) => x.id !== productDetailData?.id)

  return (
    <div className={style.section}>
      <h4 className={`font-[roboto]  pt-10 text-5xl ${style.title}`}>
        Related Products
      </h4>
      {product && product?.length > 2 ? (
        <div className="relative">
          <Swiper
            slidesPerView={1}
            spaceBetween={20}
            breakpoints={{
              425: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 4,
                slidesOffsetBefore: 140,
              },
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Navigation, Pagination]}
            navigation={{
              prevEl: ".related-products-carousel-prev-btn",
              nextEl: ".related-products-carousel-next-btn",
            }}
          >
            {product?.map((item) => {
              return (
                <SwiperSlide key={item.id} className="pb-12">
                  <ProductProvider product={item}>
                    <ProductCard product={item} />
                  </ProductProvider>
                </SwiperSlide>
              )
            })}
          </Swiper>
          <button
            type="button"
            className="related-products-carousel-prev-btn swiper-custom-navigation-btn -translate-y-[calc(40px+50%)] left-5"
          >
            <span className="sr-only">
              related products carousel previous button
            </span>
            <PrevIcon className="w-6 aspect-square" />
          </button>
          <button
            type="button"
            className="related-products-carousel-next-btn swiper-custom-navigation-btn -translate-y-[calc(40px+50%)] right-5"
          >
            <span className="sr-only">
              related products carousel next button
            </span>
            <NextIcon className="w-6 aspect-square" />
          </button>
        </div>
      ) : (
        <section className="text-center py-0">No Related Product Found</section>
      )}
    </div>
  )
}

export default memo(RelatedProduct)
