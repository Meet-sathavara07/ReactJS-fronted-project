"use client"
import Spinner from "@/modules/common/icons/spinner"
import { useCustomerOrders } from "medusa-react"
import Link from "next/link"
import OrderCard from "../order-card"
import Button from "@/components/common/Button"
import { useCallback, useEffect, useState } from "react"

const OrderOverview = () => {
  const { orders, isLoading } = useCustomerOrders()
  const [visibleOrders, setVisibleOrders] = useState(3)
  const [orderList, setOrderList] = useState([])
  const [loading, setLoading] = useState(false)

  const fetchVarientIds = useCallback(() => {
    // find product varient id
    const itemVarientIds = orders?.reduce((p, c) => {
      const items = c.items.reduce((pi, ci) => {
        return [...pi, ci.variant_id]
      }, [])
      return [...p, ...items]
    }, [])

    // remove duplicate varient ids
    const ids = [...new Set(itemVarientIds)]
    return ids
  }, [orders])

  const fetchProductData = useCallback(async () => {
    const ids = fetchVarientIds()

    const fetchApis = ids.map((id) =>
      fetch(
        `${process.env.NEXT_PUBLIC_MEDUSA_BACKEND_URL}/store/variants/${id}`
      )
    )

    try {
      // Fetch data from APIs
      const res = await Promise.all(fetchApis)

      // Process JSON from responses
      let data = []
      for (const response of res) {
        if (response.ok) {
          const json = await response.json()
          data = [
            ...data,
            {
              variant_id: json.variant.id,
              handle: json.variant.product.handle,
            },
          ]
        } else {
          console.error(`Failed to fetch data. Status: ${response.status}`)
        }
      }
      return data
    } catch (error) {
      console.error("An error occurred during data fetching:", error)
      // Handle error as needed
    }
  }, [fetchVarientIds])

  const generateOrdersWithHandle = useCallback(async () => {
    setLoading(true)
    const varientHandleData = await fetchProductData()
    console.log(varientHandleData)

    const newOrderList = orders?.reduce((p, c) => {
      const newItems = c.items.reduce((pi, ci) => {
        const productHandle = varientHandleData?.find(
          (x) => x.variant_id === ci.variant_id
        )
        return [...pi, { ...ci, handle: productHandle.handle }]
      }, [])

      return [...p, { ...c, items: newItems }]
    }, [])

    // console.log(newOrderList)
    setOrderList(newOrderList)
    setLoading(false)
  }, [fetchProductData, orders])

  useEffect(() => {
    generateOrdersWithHandle()
  }, [generateOrdersWithHandle])

  const showMoreOrders = () => {
    setVisibleOrders((prevVisibleOrders) => prevVisibleOrders + 3)
  }

  if (isLoading || loading) {
    return (
      <div className="text-gray-900 w-full flex justify-center pt-12">
        <Spinner size={36} />
      </div>
    )
  }

  if (orderList?.length) {
    return (
      <div className="flex flex-col gap-8 w-full">
        {orderList.slice(0, visibleOrders).map((o) => (
          <OrderCard key={o.id} order={o} />
        ))}
        {orderList?.length > visibleOrders && (
          <button
            onClick={showMoreOrders}
            className="font-semibold text-ui-bg-interactive text-end"
          >
            Show More
          </button>
        )}
      </div>
    )
  }

  return (
    <div className="w-full flex flex-col gap-y-4">
      <p className="text-heading5">Nothing to see here</p>
      <p className="text-caption1">
        You don&apos;t have any orders yet, let us change that {":)"}
      </p>
      <div className="mt-4">
        <Link href="/products" passHref>
          <Button variant="colered" color="green" className="!">
            Continue shopping
          </Button>
        </Link>
      </div>
    </div>
  )
}

export default OrderOverview
