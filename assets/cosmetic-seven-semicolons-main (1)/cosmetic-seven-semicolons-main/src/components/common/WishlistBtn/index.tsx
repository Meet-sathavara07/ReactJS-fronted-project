"use client"
import React, { useEffect } from "react"
import HeartIcon from "@/public/icons/heart.svg"
import Button from "@/components/common/Button"
import { useWishList } from "@/lib/context/wishlist-context"
import { useAccount } from "@/lib/context/account-context"
import { useRouter } from "next/navigation"
// import { mixPannel } from "@/lib/constants"
// import { GtagItemParams } from "@/types/mixPannelParamsTyes"

const WishlistBtn = ({
  product_id,
  item,
}: {
  product_id: string
  item?: any
}) => {
  const { toggleWishList, checkProductInWishList } = useWishList()
  const { loginView, customer, retrievingCustomer } = useAccount()
  const router = useRouter()

  if (!process.env.NEXT_PUBLIC_WISHLIST) {
    return null
  }

  return (
    <>
      <Button
        onClick={() => {
          if (!retrievingCustomer && !customer) {
            return router.push("/login?q=back", { scroll: false })
          }
          toggleWishList(product_id)
          // const wishlistItems: GtagItemParams["items"] = [
          //   {
          //     item_id: product_id,
          //   },
          // ]
          // const wishlistParams: GtagItemParams = {
          //   currency: "INR",
          //   items: wishlistItems,
          //   value: 0,
          // }
          // if (!Boolean(checkProductInWishList(product_id)))
          //   mixPannel.triggerEvent("add_to_wishlist", wishlistParams)
        }}
        variant="transparent"
        id="addtofavourites"
        aria-label="addtofavourites"
        className="text-rose-500 border-none bg-rose-500 bg-opacity-10 "
        title="btn"
      >
        <HeartIcon
          width="24"
          height="24"
          fill={!Boolean(checkProductInWishList(product_id)) ? "none" : "red"}
        />
      </Button>
    </>
  )
}

export default WishlistBtn
