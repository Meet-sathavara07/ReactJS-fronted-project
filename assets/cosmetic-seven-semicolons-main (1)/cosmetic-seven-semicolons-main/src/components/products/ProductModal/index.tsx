import Image from "next/image"
import Button from "@/components/common/Button"
import Price from "@/components/Price"
import Share from "@/public/icons/share.svg"
import ReactMarkdown from "react-markdown"
import { PricedProduct } from "@medusajs/medusa/dist/types/pricing"
import { ProductProvider } from "@/lib/context/product-context"
import WishlistBtn from "@/components/common/WishlistBtn"
import Rating from "../Rating"
// import { Button } from "@medusajs/ui"
import AddToCartBtn from "../AddToCartBtn"

type ProductTemplateProps = {
  product: PricedProduct
}

const ProductModal = ({ product }: ProductTemplateProps) => {
  return (
    <ProductProvider product={product}>
      <div className=" grid grid-cols-1  sm:grid-cols-2 overflow-hidden rounded-md gap-8">
        <div className=" relative   aspect-[4/3] ">
          {product?.thumbnail && (
            <Image
              src={product?.thumbnail}
              alt={product?.title || "image"}
              fill
              style={{ objectFit: "cover" }}
            />
          )}
        </div>
        <div className="flex flex-col  gap-4">
          <h3 className="font-bold">{product?.title}</h3>
          <span className="line-clamp-3">
            <ReactMarkdown>{product?.description}</ReactMarkdown>
          </span>
          <div className="flex flex-col  justify-center">
            <div className="flex  mt-3">
              <input
                type="radio"
                className="form-radio h-5 w-5 text-pink-600"
                defaultChecked
              />
              <div className="ml-2 text-gray-700">
                <div>
                  15 ml bottle <strong>$250.00</strong>
                </div>
              </div>
            </div>
            <div className="flex  mt-3">
              <input
                type="radio"
                className="form-radio h-5 w-5 text-pink-600"
              />
              <div className="ml-2 text-gray-700">
                <div>
                  25 ml bottle <strong>$350.00</strong>
                </div>
                <small>extra 25%</small>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Price id={product.id as string} />
            <WishlistBtn product_id={product.id!} item={product} />
          </div>
          <Rating />

          {/* <Rating rating={data.rating} reviewCount={data.reviewCount} /> */}
          <div className="flex flex-wrap justify-between gap-5 ">
            <div className="w-60">
              <AddToCartBtn product={product} />
            </div>
            <div className="flex  md:gap-0 gap-16">
              <Button
                as="a"
                variant="transparent"
                color="green"
                href={`/products/${product?.handle}`}
                className="w-40 h-12 flex justify-center"
              >
                Details
              </Button>
              <Button
                as="a"
                href="/"
                variant="round"
                className="aspect-square px-2 py-2"
              >
                <Share className="w-6" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </ProductProvider>
  )
}

export default ProductModal
