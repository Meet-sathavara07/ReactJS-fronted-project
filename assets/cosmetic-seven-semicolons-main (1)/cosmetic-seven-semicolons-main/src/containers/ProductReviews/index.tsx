"use client"
import ProductReviewForm from "@/components/products/ProductReviewForm"
import ProductReviewCard from "@/components/products/ProductReviewCard"
import ProductReviewList from "@/components/products/ProductReviewList"
import { PricedProduct } from "@medusajs/medusa/dist/types/pricing"
// import { productReviews } from "@/lib/constData"

type Props = {
  product: PricedProduct
  reviewData: any
}

const ProductReviews = ({ reviewData, product }: Props) => {
  if (!process.env.NEXT_PUBLIC_REVIEW) {
    return null
  }
  return (
    <section className="grid md:grid-cols-2 gap-6">
      <ProductReviewList reviewData={reviewData} />
      {reviewData && (
        <ProductReviewForm
          productDetailData={product}
          reviews={reviewData.productReview}
        />
      )}
    </section>
  )
}

{
  /* <section className="grid md:grid-cols-2 gap-6">
  <div className="flex flex-col gap-4">
    <h5 className="pt-8">Reviews</h5>
    {productReviews.map((review) => (
      <ProductReviewCard key={review.id} data={review} />
    ))}
  </div>
  <div>
    <h5 className="py-8">Leave a Review</h5>
    <ProductReviewForm />
  </div>
</section> */
}

export default ProductReviews

// const ProductReviews = ({ reviewData, product }: Props) => {
//   if (!process.env.NEXT_PUBLIC_REVIEW) {
//     return null
//   }
//   return (
//     <section className="grid md:grid-cols-2 gap-6">
//       <ProductReviewList reviewData={reviewData} />
//       {reviewData && (
//         <ProductReviewForm
//           productDetailData={product}
//           reviews={reviewData.productReview}
//         />
//       )}
//     </section>
//   )
// }
