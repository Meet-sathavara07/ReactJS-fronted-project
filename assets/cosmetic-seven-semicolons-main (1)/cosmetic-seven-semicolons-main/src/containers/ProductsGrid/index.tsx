"use client"
import ProductCard from "@/components/products/ProductCard"
import { ProductProvider } from "@/lib/context/product-context"
import { useProducts } from "medusa-react"

const ProductsGrid = () => {
  const sales_channel = process.env.NEXT_PUBLIC_SALES_CHANNEL_ID || ""
  const { products } = useProducts({
    sales_channel_id: [sales_channel],
  })

  return (
    <section className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
      {products && !products.length && <span>No Products</span>}
      {products && products.length > 0 && (
        <>
          {products.map((product) => (
            <ProductProvider key={product.id} product={product}>
              <ProductCard product={product} />
            </ProductProvider>
          ))}
        </>
      )}
    </section>
  )
}

export default ProductsGrid

// "use client"
// import { getProductsList } from "@/lib/data"
// import usePreviews from "@/lib/hooks/use-previews"
// import getNumberOfSkeletons from "@/lib/util/get-number-of-skeletons"
// import repeat from "@/lib/util/repeat"
// import { StoreGetProductsParams } from "@medusajs/medusa"
// import ProductPreview from "@/modules/products/components/product-preview"
// import SkeletonProductPreview from "@/modules/skeletons/components/skeleton-product-preview"
// import { useCart } from "medusa-react"
// import { useEffect, useMemo } from "react"
// import { useInView } from "react-intersection-observer"
// import { useInfiniteQuery } from "@tanstack/react-query"
// import { SortOptions } from "@/modules/store/components/refinement-list/sort-products"
// import { ProductProvider } from "@/lib/context/product-context"
// import ProductCard, {
//   ProductCardSkeleton,
// } from "@/components/products/ProductCard"
// import { productData } from "@/lib/constData"
// import Image from "next/image"

// export type InfiniteProductsType = {
//   params: StoreGetProductsParams
//   sortBy?: SortOptions
// }

// const ProductsGrid = ({ params, sortBy }: InfiniteProductsType) => {
//   const { cart } = useCart()

//   const { ref, inView } = useInView()

//   const queryParams = useMemo(() => {
//     const p: StoreGetProductsParams = {}

//     if (cart?.id) {
//       p.cart_id = cart.id
//     }

//     if (cart?.region?.currency_code) {
//       p.currency_code = cart.region.currency_code
//     }

//     p.is_giftcard = false

//     return {
//       ...p,
//       ...params,
//     }
//   }, [cart?.id, cart?.region, params])

//   const { data, hasNextPage, fetchNextPage, isLoading, isFetchingNextPage } =
//     useInfiniteQuery(
//       [`infinite-products-store`, queryParams, cart],
//       ({ pageParam }) => getProductsList({ pageParam, queryParams }),
//       {
//         getNextPageParam: (lastPage) => lastPage.nextPage,
//       }
//     )

//   const previews = usePreviews({
//     pages: data?.pages,
//     region: cart?.region,
//     sortBy,
//   })

//   useEffect(() => {
//     if (inView && hasNextPage) {
//       fetchNextPage()
//     }
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [inView, hasNextPage])

//   console.log(productData)

//   return (
//     <section className="grid grid-cols-2 justify-items-center md:grid-cols-3 lg:grid-cols-4 overflow-hidden rounded-3xl  gap-6">
//       {productData.map((item, index) => (
//         <ProductCard key={index}>
//           <div className="group">
//             <div className="object-cover delay-300 overflow-hidden rounded-xl">
//               <Image
//                 src={item.pImg}
//                 alt={`product image ${index}`}
//                 width={"700"}
//                 height={"800"}
//                 className="transform origin-bottom transition-transform group-hover:scale-105 rounded-b-xl "
//               />
//               <div className="absolute justify-center bottom-20  ">
//                 <button
//                   type="submit"
//                   className="  text-white  tracking-widest bg-white p-3 border-2 border-red-500 opacity-0  rounded-full uppercase   focus:outline-none  group-hover:-translate-y-11 group-hover:visible group-hover:opacity-100 transition-all duration-200 "
//                 >
//                   <Image
//                     src="/icons/heart.svg"
//                     alt=""
//                     width={"100"}
//                     height={"100"}
//                   />
//                 </button>
//                 <button className=" bg-white tracking-widest border-2 border-red-500  rounded-full uppercase text-slate-950 p-3 px-14 focus:outline-none opacity-0  group-hover:-translate-y-11 group-hover:visible group-hover:opacity-100 transition-all duration-200">
//                   <span>add to cart</span>
//                 </button>
//                 <button
//                   type="submit"
//                   className="  text-white  tracking-widest bg-white p-3 border-2 border-red-500   rounded-full uppercase opacity-0  focus:outline-none group-hover:-translate-y-11 group-hover:visible group-hover:opacity-100 transition-all duration-200  "
//                 >
//                   <Image
//                     src="/icons/check.svg"
//                     alt=""
//                     width={"100"}
//                     height={"100"}
//                   />
//                 </button>
//               </div>
//             </div>

//             {/* Additional product details or components can be added here */}
//             <div className="flex justify-between py-4 ">
//               <div className="flex gap-0 ">
//                 <Image
//                   src="/icons/star.svg"
//                   alt="rating"
//                   width={"14"}
//                   height={"14"}
//                   className="color-slate-100 fill-red-500 stroke-2 "
//                 />
//                 <Image
//                   src="/icons/star.svg"
//                   alt="rating"
//                   width={"14"}
//                   height={"14"}
//                 />
//                 <Image
//                   src="/icons/star.svg"
//                   alt="rating"
//                   width={"14"}
//                   height={"14"}
//                 />
//                 <Image
//                   src="/icons/star.svg"
//                   alt="rating"
//                   width={"14"}
//                   height={"14"}
//                 />
//                 <Image
//                   src="/icons/star.svg"
//                   alt="rating"
//                   width={"14"}
//                   height={"14"}
//                 />
//               </div>
//               <p className="text-xs item-center">{item.reviews}</p>
//             </div>
//             <a href="http://" className="font-sans text-xl ">
//               {" "}
//               {item.title}
//             </a>
//             <div className="flex flex-1 gap-1 pt-3 ">
//               <p className="font-sans text-xl">{item.price}</p>
//               <p className="line-through font-normal text-slate-500 text-xs pt-2">
//                 {item.orignalPrice}
//               </p>
//             </div>
//           </div>
//         </ProductCard>
//       ))}
//     </section>
//   )
// }

// export default ProductsGrid

// <section>
//   <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
//     {previews.map((p) => (
//       <ProductProvider key={p.id} product={p}>
//         <ProductCard product={p} />
//       </ProductProvider>
//     ))}
//     {isLoading &&
//       !previews.length &&
//       repeat(8).map((index) => (
//         <div key={index}>
//           <ProductCardSkeleton />
//         </div>
//       ))}
//     {isFetchingNextPage &&
//       repeat(getNumberOfSkeletons(data?.pages)).map((index) => (
//         <div key={index}>
//           <ProductCardSkeleton />
//         </div>
//       ))}
//   </div>
//   <div
//     className="py-16 flex justify-center items-center text-small-regular text-gray-700"
//     ref={ref}
//   >
//     <span ref={ref}></span>
//   </div>
// </section>
