import ProductOverview from "@/containers/ProductOverview"
import { getProductByHandle, getReviewByProduct } from "@/lib/data"
import { Metadata } from "next"
import { notFound } from "next/navigation"

type Props = {
  params: { handle: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const data = await getProductByHandle(params.handle)

  const product = data.products[0]

  if (!product) {
    notFound()
  }

  const newDesc = product.description?.replaceAll(/\*/gm, "")

  return {
    title: `${product.title} | Brancy`,
    description: `${newDesc}`,
    openGraph: {
      title: `${product.title} | Brancy`,
      description: `${newDesc}`,
      images: product.thumbnail ? [product.thumbnail] : [],
    },
  }
}

export default async function ProductPage({ params }: Props) {
  const { products } = await getProductByHandle(params.handle).catch((err) => {
    notFound()
  })
  const reviewData = await getReviewByProduct(products[0]?.id)

  return <ProductOverview product={products[0]} reviewData={reviewData} />
  // return <ProductTemplate product={products[0]} />
}
