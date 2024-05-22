"use client"
import ProductCard from "@/components/products/ProductCard"
import { notFound } from "next/navigation"
import { medusaClient } from "@/lib/config"
import { ProductProvider } from "@/lib/context/product-context"
import { useProducts } from "medusa-react"

type Props = {}

const HomeProducts = (props: Props) => {
  const sales_channel = process.env.NEXT_PUBLIC_SALES_CHANNEL_ID || ""

  // const { products } = await medusaClient.products.list().catch((err) => {
  //   notFound()
  // })

  const { products } = useProducts({
    sales_channel_id: [sales_channel],
  })

  return (
    <section className="grid grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 overflow-hidden rounded-3xl gap-6">
      {products?.slice(0, 6).map((item, index) => (
        <ProductProvider product={item} key={item.id}>
          <ProductCard product={item} />
        </ProductProvider>
      ))}
    </section>
  )
}

export default HomeProducts
