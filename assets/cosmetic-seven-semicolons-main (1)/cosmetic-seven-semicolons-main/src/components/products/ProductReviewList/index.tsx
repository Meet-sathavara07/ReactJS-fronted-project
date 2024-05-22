"use client"
import ProductReviewCard from "../ProductReviewCard"
import { useState } from "react"

type Props = {
  reviewData: {
    productReview: any
  }
}

const ProductReviewList = ({ reviewData }: Props) => {
  const [reviews, setReviews] = useState(reviewData.productReview)
  const [visibleReviews, setVisibleReviews] = useState(5)

  const showMoreReviews = () => {
    setVisibleReviews((prevVisibleReviews) => prevVisibleReviews + 5)
  }

  return (
    <div className="flex flex-col gap-4">
      <h5 className="pt-8">Reviews</h5>
      {reviewData && reviewData.productReview?.length ? (
        <>
          {reviews
            ?.sort(
              (a, b) =>
                new Date(b.created_at).getTime() -
                new Date(a.created_at).getTime()
            )
            .slice(0, visibleReviews)
            .filter((item) => item.title && item.content)
            .filter((item) => item.status === "approved")
            .map((review, index) => (
              <ProductReviewCard key={index} data={review} />
            ))}
          {reviews?.length > visibleReviews && (
            <button
              onClick={showMoreReviews}
              className="text-blue-500 self-end"
            >
              Show More...
            </button>
          )}
        </>
      ) : (
        <>
          <div className="bg-rose-100 border  border-red font-medium  p-4 rounded-xl">
            <p>No Any Reviews</p>
            <p>Be a first person to review...</p>
          </div>
        </>
      )}
    </div>
  )
}

export default ProductReviewList
