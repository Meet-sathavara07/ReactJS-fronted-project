import {
  PropsWithChildren,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useReducer,
  useState,
} from "react"
import { useAccount } from "./account-context"
import WishListReducer, {
  wishlistInitialState,
} from "../reducers/wishlist.reducer"
import { useRegion, useRegions } from "medusa-react"
import { checkIfExist } from "../util/functions"

interface WishListContext {
  wishlist: {
    items: []
  }
  loadWishList: () => void
  addWishListItem: () => void
  checkProductInWishList: any
  toggleWishList: any
  customerLogout: () => void
}

export const WishListContext = createContext<WishListContext | null>(null)

export const WishListProvider = ({ children }: PropsWithChildren) => {
  const [wishListState, dispatchWishList] = useReducer(
    WishListReducer,
    wishlistInitialState
  )
  const { customer } = useAccount()

  const { regions } = useRegions()
  const isBrowser = typeof window !== "undefined"

  const regionId = regions?.map((region) => region?.id)[0]

  const WISHLIST_ID = "wishlist_id"

  const setWishlistItem = (wishlist) => {
    if (isBrowser) {
      localStorage.setItem(WISHLIST_ID, wishlist?.id)
    }
    dispatchWishList({ type: "LOAD_WISHLIST", payload: wishlist })
  }

  const addWishListItem = useCallback(
    async (postData: any, wishlistId: string | null) => {
      try {
        const url = `${
          process.env.NEXT_PUBLIC_MEDUSA_BACKEND_URL
        }/store/wishlist/${wishlistId || wishListState.id}/wish-item`

        const response = await fetch(url, {
          cache: "no-store",
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(postData),
        })

        const data = await response.json()

        if (!response.ok) throw new Error(data)
        dispatchWishList({
          type: "LOAD_WISHLIST",
          payload: data.wishlist,
        })
      } catch (error) {
        console.error(
          "An error occurred while adding an item to the wish list:",
          error
        )
      }
    },
    [wishListState?.id]
  )

  const deleteWishListItem = useCallback(
    async (wishlistItem: any) => {
      try {
        const url = `${process.env.NEXT_PUBLIC_MEDUSA_BACKEND_URL}/store/wishlist/${wishListState.id}/${wishlistItem}`

        const response = await fetch(url, {
          cache: "no-store",
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        })

        const data = await response.json()

        if (!response.ok) throw new Error(data)

        dispatchWishList({
          type: "LOAD_WISHLIST",
          payload: data.wishlist,
        })
      } catch (error) {
        console.error(
          "An error occurred while adding an item to the wish list:",
          error
        )
      }
    },
    [wishListState?.id]
  )

  const checkProductInWishList = (variant_id: number) => {
    const item = wishListState?.items?.find((x) => x?.product_id === variant_id)

    return item?.id
  }

  const toggleWishList = useCallback(
    (product_id: number) => {
      const itemId = checkProductInWishList(product_id)

      if (!itemId) {
        addWishListItem({
          product_id,
        })
      } else {
        deleteWishListItem(itemId)
      }
    },
    [addWishListItem, deleteWishListItem, checkProductInWishList]
  )

  const customerWishlist = useCallback(async (wishlistId, body) => {
    try {
      const wishlistOfCustomer = `${process.env.NEXT_PUBLIC_MEDUSA_BACKEND_URL}/store/wishlist/${wishlistId}`

      const res = await fetch(wishlistOfCustomer, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
        cache: "no-store",
      })
      const wishlistRes = res.json()
    } catch (error) {
      console.log(error)
    }
  }, [])

  const initializeWishlist = useCallback(async () => {
    const existingWishlistId = isBrowser
      ? localStorage.getItem(WISHLIST_ID)
      : null

    if (regionId) {
      try {
        const wishlist = `${process.env.NEXT_PUBLIC_MEDUSA_BACKEND_URL}/store/wishlist`

        const data = await fetch(wishlist, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ region_id: regionId }),
          cache: "no-store",
        })
        const response = await data.json()

        setWishlistItem(response?.wishlist)
      } catch (error) {
        console.log(error)
      }
      if (customer) {
        customerWishlist(wishListState?.id, {
          region_id: regionId,
          customer_id: customer?.id,
        })
      }
    }
    if (customer) {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_MEDUSA_BACKEND_URL}/store/wishlist/customer/${customer?.id}`,
          {
            method: "GET",
            cache: "no-store",
          }
        )

        const getCustomerWishlist = await res.json()

        const itemsWishlist = checkIfExist(
          getCustomerWishlist?.wishlist,
          wishListState
        )
        itemsWishlist.map((item) => {
          addWishListItem(
            { product_id: item.product_id },
            getCustomerWishlist?.wishlist?.id
          )
        })

        if (getCustomerWishlist) {
          setWishlistItem(getCustomerWishlist?.wishlist)
          return
        }
      } catch (e) {
        // localStorage.setItem(WISHLIST_ID, '');
      }
    }

    if (existingWishlistId && existingWishlistId !== "undefined") {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_MEDUSA_BACKEND_URL}/store/wishlist/${existingWishlistId}`,
          {
            method: "GET",
            cache: "no-store",
          }
        )

        const getWishlist = await res.json()

        if (getWishlist) {
          setWishlistItem(getWishlist?.wishlist)
          return
        }
      } catch (e) {
        localStorage.setItem(WISHLIST_ID, "")
      }
    }
  }, [regionId, customer])

  const customerLogout = useCallback(() => {
    // localStorage.clear();
    localStorage.removeItem(WISHLIST_ID)
    // localStorage.removeItem('medusa_cart_id');
  }, [])

  useEffect(() => {
    initializeWishlist()
  }, [initializeWishlist])

  const value = useMemo(
    () => ({
      wishListState,
      addWishListItem,
      toggleWishList,
      checkProductInWishList,
      deleteWishListItem,
      customerLogout,
    }),
    [
      wishListState,
      addWishListItem,
      toggleWishList,
      checkProductInWishList,
      deleteWishListItem,
      customerLogout,
    ]
  )

  return (
    <WishListContext.Provider value={value}>
      {children}
    </WishListContext.Provider>
  )
}

export const useWishList = () => useContext(WishListContext)
