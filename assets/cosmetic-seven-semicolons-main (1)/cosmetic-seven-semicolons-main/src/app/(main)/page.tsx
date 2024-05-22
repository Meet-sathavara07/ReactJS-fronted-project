import CategoryCart from "@/components/CartItem/CategoryCart"
import CategoryContainer from "@/containers/CategoryContainer"
import HomeProducts from "@/containers/HomeProducts"
import JoinWithUs from "@/containers/JoinWithUs"
import ShimmerContainer from "@/containers/ShimmerContainer"
import TestimonialCarousel from "@/containers/TestimonialCarousel"
import WhyChooseUs from "@/containers/WhyChooseUs"
import custombutton from "@/components/common/Button"
import { Metadata } from "next"
import Button from "@/components/common/Button"
import WishlistBtn from "@/components/common/WishlistBtn"
import HomepageBlogpost from "@/containers/HomePageBlogpost"
import CategoryCard from "@/components/CategoryCard"
import HomeBanner from "@/containers/HomeBanner"
import ProdContainer from "@/containers/ProdContainer"
import AddToCartBtn from "@/components/products/AddToCartBtn"
import { products } from "@/lib/constData"
import Header from "@/components/common/Header"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Brancy",
  description:
    "A performant frontend ecommerce starter template with Next.js 14 and Medusa.",
}

export default async function Home() {
  return (
    <>
      <>
        <HomeBanner />
        <CategoryContainer />
        <div className="text-center p-7 text-wrap mt-11">
          <h2 className="font-[roboto] text-6xl  font-bold">Top Sale</h2>
          <p>
            Lorem ipsum dolor sit amet, <br />
            adipiscing elit ut aliquam, purus sit amet luctus venenatis
          </p>
        </div>
        <HomeProducts />
        <ShimmerContainer />
      </>

      <>
        <HomepageBlogpost />
        <JoinWithUs />

      </>
    </>
    /* <AddToCartBtn /> */
  )
}
