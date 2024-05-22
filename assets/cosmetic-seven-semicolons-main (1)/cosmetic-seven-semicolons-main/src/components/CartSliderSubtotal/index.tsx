"use client"
import React from "react"
import Button from "../common/Button"
import { formatAmount, useCart } from "medusa-react"

type Props = {}

const CartSliderSubtotal = (props: Props) => {
  const { cart } = useCart()

  if (!cart) return null

  return (
    <div className="border-t border-gray/30 flex flex-col pt-2 gap-4">
      <div>
        <div className="flex justify-between items-center text-body2 font-semibold">
          <span>Sub Total</span>
          <span className="text-black">
            {cart &&
              cart.region &&
              formatAmount({
                amount: cart?.subtotal || 0,
                region: cart?.region,
                includeTaxes: false,
              })}
          </span>
        </div>
        <p className="text-caption2 text-gray">
          Shipping and taxes calculated at checkout.
        </p>
      </div>
      <div className="grid justify-center gap-2">
        <Button
          as="a"
          href="/checkout"
          className="w-52 flex justify-center"
          variant="colered"
          color="green"
        >
          {/* <span className="sr-only">Checkout</span> */}
          Checkout
        </Button>
        <div className="flex justify-center items-center">
          <p>
            or &nbsp;
            <a href={"/products"} className="hover:underline text-red">
              Continue Shopping
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default CartSliderSubtotal
