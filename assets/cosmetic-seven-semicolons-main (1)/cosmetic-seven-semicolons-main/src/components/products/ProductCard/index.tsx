import Image from "next/image"
import Styles from "./productCard.module.css"
import AddToCartBtn from "../AddToCartBtn"
import Price from "@/components/Price"
import Link from "next/link"
import { PricedProduct } from "@medusajs/medusa/dist/types/pricing"
import React from "react"
import Button from "@/components/common/Button"
import OpenModal from "@/public/icons/open.svg"
import Wishlist from "@/public/icons/heart.svg"

// import { Button } from "@medusajs/ui"

type ProductTemplateProps = {
  product: PricedProduct
}

// export const ProductCardSkeleton = () => {
//   return (
//     <div className={`${Styles.main} select-none animate-pulse`}>
//       <div className={Styles.productWrapper}>
//         <div className={`${Styles.productImage} bg-gray/50`}></div>
//         <div className={`${Styles.content} w-full`}>
//           <p
//             className={`${Styles.productName} bg-gray/50 h-5 w-[80%] mb-2`}
//           ></p>
//           <p
//             className={`${Styles.productName} bg-gray/50 h-8 block w-[50%] mb-2`}
//           ></p>
//         </div>
//       </div>
//       <div className={Styles.btnWrapper}>
//         {/* <p className={Styles.productName}>Lorem, ipsum.</p> */}
//       </div>
//     </div>
//   )
// }

const ProductCard = ({ product }: ProductTemplateProps) => {
  console.log(product, product)

  return (
    <div className="group pb-8">
      <div className="object-cover delay-300 overflow-hidden rounded-xl">
        <div className="aspect-[5/6] w-full relative rounded-lg overflow-hidden">
          {/* <Link scroll={false} href={`/products/${product?.handle}`}> */}
          {product?.thumbnail && (
            <Image
              src={product?.thumbnail}
              alt={product?.title || "image"}
              priority
              fill
              style={{ objectFit: "cover" }}
              className="-z-10 group-hover:scale-105 duration-300"
            />
          )}
          {/* </Link> */}

          <div className="absolute bottom-4 flex justify-evenly items-center px-4 gap-4 content-center w-full z-10 lg:translate-y-[150%] group-hover:translate-y-0 duration-300">
            <Link scroll={false} href={`/products/${product?.handle}`}>
              <Button
                variant="transparent"
                // className="rounded-full hover:bg-white active:bg-white focus:bg-white h-full bg-white border-rose-500 border-2"
              >
                <OpenModal className="w-5" />
              </Button>
            </Link>
            <AddToCartBtn product={product} />
            <Button
              variant="transparent"
              // className="rounded-full hover:bg-white bg-white active:bg-white focus:bg-white border-rose-500 border-2"
            >
              <Wishlist className="w-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Additional product details or components can be added here */}
      <div className="flex justify-between py-4 ">
        <div className="flex gap-0 ">
          <Image
            src="/icons/star.svg"
            alt="rating"
            width={"14"}
            height={"14"}
            className="color-slate-100 fill-red-500 stroke-2 "
          />
          <Image
            src="/icons/star.svg"
            alt="rating"
            width={"14"}
            height={"14"}
          />
          <Image
            src="/icons/star.svg"
            alt="rating"
            width={"14"}
            height={"14"}
          />
          <Image
            src="/icons/star.svg"
            alt="rating"
            width={"14"}
            height={"14"}
          />
          <Image
            src="/icons/star.svg"
            alt="rating"
            width={"14"}
            height={"14"}
          />
        </div>
        <p className="text-xs item-center">50 Reviews</p>
      </div>
      <a href="http://" className="font-sans text-xl ">
        {product?.title}
      </a>
      <div className="flex flex-1 gap-1 pt-3 ">
        <Price id={product.id as string} />
        {/* <p className="font-sans text-xl">{item.price}</p> */}
        {/* <p className="line-through font-normal text-slate-500 text-xs pt-2">
          {item.orignalPrice}
        </p> */}
      </div>
    </div>
  )
}

export default ProductCard
