import ProdContainer from "@/containers/ProdContainer"
import ProductsBanner from "@/containers/ProductsBanner"
import ProductsGrid from "@/containers/ProductsGrid"
import { Metadata } from "next"
import ProdBanner from "@/containers/ProdBanner"
import { productData, shopPageBanner } from "@/lib/constData"
import CategoryCart from "@/components/CartItem/CategoryCart"
import CategoryContainer from "@/containers/CategoryContainer"
export const metadata: Metadata = {
  title: "Store",
  description: "Explore all of our products.",
}

export default function ProductsPage() {
  return (
    <>
      <ProdBanner data={shopPageBanner} />
      <CategoryContainer />
      {/* <ProductsBanner /> */}
      {/* <ProdContainer /> */}
      {/* <StoreTemplate /> */}
      <ProductsGrid params={{}} />
    </>
  )
}
