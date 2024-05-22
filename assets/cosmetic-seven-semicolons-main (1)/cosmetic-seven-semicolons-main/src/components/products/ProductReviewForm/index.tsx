"use client"
import TextArea from "@/components/common/formElements/TextArea"
import RatingInput from "../RatingInput"
import { useForm, SubmitHandler } from "react-hook-form"
import { useAccount } from "@/lib/context/account-context"
import { createProductReview } from "@/lib/data"
import { PricedProduct } from "@medusajs/medusa/dist/types/pricing"
import LoadingSpinner from "@/components/common/LoadingSpinner"
import Link from "next/link"
import { revalidatePath } from "next/cache"
import { useState } from "react"
import Input from "@/components/common/formElements/Input"
import Button from "@/components/common/Button"

type Inputs = {
  content: string
  title: string
  rating: number
}

type Props = {
  productDetailData: PricedProduct
  reviews: any
}

const ProductReviewForm = ({ productDetailData, reviews }: Props) => {
  const {
    control,
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<Inputs>()

  const { customer, retrievingCustomer } = useAccount()
  const [reviewList, setReviewList] = useState(reviews)

  const isReviewAdded = reviewList?.find(
    (x) => x?.customer_id === customer?.id && x.status !== "declined"
  )

  const onSubmit: SubmitHandler<Inputs> = async ({
    content,
    title,
    rating,
  }: {
    content: string
    title: string
    rating: number
  }) => {
    try {
      const data = {
        content,
        title,
        customer_id: customer?.id,
        product_id: productDetailData?.id as string,
        rating,
      }
      if (data.customer_id && data.product_id) {
        const response = await createProductReview(data)

        setReviewList((prev) => [...prev, response?.productReview])
        // setProductHandle((prev) => ({
        //   ...prev,
        //   reviews: [...prev.reviews, response?.productReview],
        // }))
      }
    } catch (error) {
      console.log("ERROR:::::", error)
    } finally {
      reset()
    }
  }

  if (retrievingCustomer) {
    return (
      <div className="h-full flex flex-col justify-center items-center gap-4">
        <LoadingSpinner />
        <span>Loading...</span>
      </div>
    )
  }

  return (
    <div>
      <h5 className="pt-8 pb-4">Leave a Review</h5>
      <RatingInput control={control} name={"rating"} />

      <>
        {customer ? (
          <>
            {isReviewAdded?.status === "pending" && (
              <p className="bg-rose-100 mt-5 border border-green p-4 rounded-xl">
                Your response is under review !!!!!
              </p>
            )}
            {isReviewAdded?.status === "approved" && (
              <div className="bg-greenLight border border-green text-green p-4 rounded-xl">
                <p>Your review has been added!!!</p>
              </div>
            )}
            {!isReviewAdded && (
              <>
                <form
                  className="flex flex-col gap-6 mt-5"
                  onSubmit={handleSubmit(onSubmit)}
                  // onSubmit={(e) => {
                  //   e.preventDefault()
                  //   handleSubmit(onSubmit)()
                  // }}
                >
                  <Input
                    label="Enter your name"
                    placeholder="Your name"
                    type="text"
                    errors={errors}
                    {...register("title", {
                      required: {
                        message: "title is required...",
                        value: true,
                      },
                      maxLength: {
                        value: 50,
                        message: "title is too long",
                      },
                      minLength: {
                        value: 2,
                        message: "title is too short",
                      },
                    })}
                    className="border-b-2 border-[#ff6565]"
                  />
                  <TextArea
                    label="Leave a message"
                    placeholder="Message"
                    rows={5}
                    errors={errors}
                    autoComplete="Description"
                    {...register("content", {
                      required: {
                        message: "Review is required...",
                        value: true,
                      },
                    })}
                    className="border-b-2 border-[#ff6565]"
                  />
                  {/* <RatingInput control={control} name={"rating"} /> */}
                  <Button
                    variant="colered"
                    type="submit"
                    disabled={isSubmitting}
                    className="flex justify-center mx-auto w-1/4"
                  >
                    <span className="sr-only">Submit review</span>
                    {/* <SendIcon /> */}
                    {isSubmitting ? <LoadingSpinner /> : "Submit"}
                  </Button>
                </form>
              </>
            )}
          </>
        ) : (
          <div className="flex flex-col gap-4 mt-5 bg-rose-100 border border-green text-green p-4 rounded-xl">
            <p>Please Login to add a review</p>
            <Link
              href={"/login"}
              scroll={false}
              className="px-3 py-2 bg-[#ff6565] text-white rounded-md w-max duration-300 hover:scale-95"
            >
              Click to Login
            </Link>
          </div>
        )}
      </>
    </div>
  )
}

export default ProductReviewForm
