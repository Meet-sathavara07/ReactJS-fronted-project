"use client"
import { useProductActions } from "@/lib/context/product-context"
import useProductPrice from "@/lib/hooks/use-product-price"
import { useMemo } from "react"

type Props = {
  id: string
}

const Price = ({ id }: Props) => {
  const { variant } = useProductActions()

  const price = useProductPrice({
    id: id,
    variantId: variant?.id,
  })

  const selectedPrice = useMemo(() => {
    const { variantPrice, cheapestPrice } = price

    return variantPrice || cheapestPrice || null
  }, [price])

  return (
    <p className="text-black text-heading6">
      {selectedPrice?.calculated_price || "--"}
      {selectedPrice?.calculated_price !== selectedPrice?.original_price && (
        <p>{selectedPrice?.original_price || "--"}</p>
      )}
    </p>
  )
}

export default Price
