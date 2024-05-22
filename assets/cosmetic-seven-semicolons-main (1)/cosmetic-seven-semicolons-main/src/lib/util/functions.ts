import { CalculatedVariant } from "@/types/medusa"
import { PricedProduct } from "@medusajs/medusa/dist/types/pricing"
import { getURL } from "next/dist/shared/lib/utils"
// import { mixPannel, queryString, urlGlobalParams } from "../constants"
import { StoreGetProductsParams } from "@medusajs/medusa"

export const findCheapestVariant = (product: PricedProduct) => {
  const variants = product.variants as unknown as CalculatedVariant[]

  let cheapestVariant = undefined

  if (variants?.length > 0) {
    cheapestVariant = variants.reduce((acc, curr) => {
      if (acc.calculated_price > curr.calculated_price) {
        return curr
      }
      return acc
    }, variants[0])
    return cheapestVariant
  }
}
export const noProductFound = (
  categoryList: string[],
  products: PricedProduct[]
) => {
  let noProductFound: string[] = []
  categoryList?.map((category) => {
    products?.filter((product) => {
      if (product?.categories?.find((x) => x?.id === category) === undefined) {
        if (!noProductFound.includes(product.id)) {
          noProductFound?.push(product.id)
        }
      }
    })
  })
  return noProductFound
}
export function truncateString(string: string, limit?: number) {
  if (!limit) limit = 10
  if (string && string.length > limit) {
    return string.substring(0, limit) + "..."
  } else {
    return string
  }
}
function paramsToObject(entries) {
  const result = {}
  for (const [key, value] of entries) {
    if (key === "category_id") {
      if (value.split(",").length) {
        result[key] = value.split(",")
      }
    } else {
      result[key] = value
    }
  }
  return result
}
// export const getParams = () => {
//   try {
//     const entries = urlGlobalParams.entries();
//     const keys = urlGlobalParams.keys();
//     let objectParams = paramsToObject(entries);
//     for (const key of keys) {
//       if (key === 'category_id') {
//         if (objectParams[key].length === 1 && !objectParams[key][0].trim()) {
//           urlGlobalParams.delete(key);
//           objectParams['category_id'] = [];
//         }
//       }
//       if (key === 'tags') {
//         if (objectParams[key].length === 1 && !objectParams[key][0].trim()) {
//           urlGlobalParams.delete(key);
//           objectParams['tags'] = [];
//         }
//       }
//     }
//     return objectParams;
//   } catch (error) {
//     console.log(error);
//   }
// };
// export const mixPannelNavigation = (
//   to: string,
//   from: Record<string, any> | string,
//   message: string,
//   options?: Record<string, any>,
// ) => {
//   mixPannel.triggerEvent('navigation', {
//     to,
//     from,
//     message,
//     ...options,
//   });
// };

// export const productCardClicked = (
//   cartItem: PricedProduct,
//   path: string,
//   options?: Record<string, any>,
// ) => {
//   try {
//     mixPannel.triggerEvent('view_item', {
//       path,
//       to: { handle: cartItem.handle, id: cartItem.id, ...options?.to },
//       ...options,
//     });
//   } catch (error) {
//     console.log('ERROR:::::::productCardClicked', error);
//   }
// };
// export function queryStringToObject(queryObj?: any) {
//   const entries = queryObj ? queryObj.entries() : urlGlobalParams.entries();
//   const response = paramsToObject(entries);
//   return response;
// }

export const getProductsFromWishlist = (
  wishlist: any[],
  flattenProductVariants: any[]
) => {
  let productArr = []

  for (let i = 0; i < wishlist?.length; i++) {
    const wishlistElement = wishlist[i]
    const item = flattenProductVariants?.find((product) =>
      product?.variants?.find((x) => x?.id === wishlistElement?.variant_id)
    )
    productArr.push(item)
  }
  return productArr
}

export function checkIfExist(loginObject, wishlistObj) {
  // return wishlist
  const wishlist = loginObject.items
  const prev = wishlistObj.items
  const filterSort = [...wishlist, ...prev]?.filter((x) => x?.id)
  let temp = []
  for (let id = 0; id < filterSort.length; id++) {
    const e = filterSort[id]
    if (!temp.find((x) => x.id === e.id)) {
      temp.push(e)
    }
  }
  return temp
}

export const addRecentlyViewedItem = (item: object) => {
  // localStorage.setItem('RecentView', JSON.stringify([2, 2, 2, 2]));
  let itemList
  if (!!localStorage.getItem("RecentView")) {
    itemList = JSON.parse(localStorage.getItem("RecentView"))
  } else {
    itemList = []
  }

  let alreadyExist = false

  for (let index = 0; index < itemList.length; index++) {
    const element = itemList[index]
    // console.log("element /************************************** " , element.item.id);
    // console.log("item /************************************** " , item.item.id);

    if (element === item.item.id) {
      alreadyExist = true
      break
    }
  }

  if (!alreadyExist) {
    console.log("not existing")

    itemList?.unshift(item.item.id)
  } else {
    itemList = itemList?.filter((x) => x !== item.item.id)
    itemList?.unshift(item.item.id)
  }

  itemList = itemList.slice(0, 5)
  localStorage.setItem("RecentView", JSON.stringify(itemList))
}
export function hasDatePassedFromOrderDate(orderDateString: string) {
  const orderDate = new Date(orderDateString)
  const newDate = new Date(orderDate.setDate(orderDate.getDate() + 7))
  const todayDate = new Date()
  const newDateString = newDate.toISOString()
  const todayDateString = todayDate.toISOString()
  return newDateString < todayDateString
}
