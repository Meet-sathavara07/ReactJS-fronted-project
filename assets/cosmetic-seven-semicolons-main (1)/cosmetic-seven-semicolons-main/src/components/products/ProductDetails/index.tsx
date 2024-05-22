import AddToCartBtn from "../AddToCartBtn"
import Price from "@/components/Price"
import ReactMarkdown from "react-markdown"
import { PricedProduct } from "@medusajs/medusa/dist/types/pricing"
import style from "./productDetails.module.css"
// import Button from "@/components/common/Button"
import Share from "@/public/icons/share.svg"
import WishlistBtn from "@/components/common/WishlistBtn"
import { Button } from "@medusajs/ui"
import Link from "next/link"

type ProductTemplateProps = {
  product: PricedProduct
}

const ProductDetails = ({ product }: ProductTemplateProps) => {
  return (
    <div className="flex flex-col justify-between gap-4">
      <div className="flex items-center justify-between max-md:hidden ">
        <h3 className="font-bold mb-0">{product?.title}</h3>
        <Button
          as="a"
          href="/"
          variant="transparent"
          className="hover:bg-white active:bg-white focus:bg-white rounded-full"
        >
          <Share className="w-6 hover:bg-white text-black" />
        </Button>
      </div>
      <p className="font-bold max-md:hidden text-body2">{product?.subtitle}</p>
      <div className="flex gap-4 items-center">
        <Price id={product.id as string} />
        <WishlistBtn product_id={product.id!} item={product} />
      </div>
      {/* <Rating reviewCount={5} rating={3} /> */}
      <div>
        <p className="flex flex-wrap gap-2">
          <span className="font-bold">Category: </span>
          <span>{product?.categories[0].name}</span>
        </p>
        {product?.options?.map((option) => {
          return (
            <p key={option.id} className="flex flex-wrap gap-2">
              <span className="font-bold capitalize">{option?.title}: </span>
              <span className="flex flex-wrap gap-4">
                {option?.values?.map((value) => {
                  return <span key={value.id}>{value?.value}</span>
                })}
              </span>
            </p>
          )
        })}
      </div>
      <div className="flex ">
        <AddToCartBtn product={product} />
      </div>
      <div className={`${style.prose} prose`}>
        <ReactMarkdown>{product?.description}</ReactMarkdown>
      </div>
      {product.metadata &&
        Object.entries(product?.metadata)?.map(([key, value]) => (
          <span key={key} className="flex flex-wrap gap-2">
            <p className="font-bold uppercase">{key}:</p>
            <div className={`${style.prose} prose`}>
              <ReactMarkdown>{value}</ReactMarkdown>
            </div>
          </span>
        ))}
    </div>
  )
}

export default ProductDetails
