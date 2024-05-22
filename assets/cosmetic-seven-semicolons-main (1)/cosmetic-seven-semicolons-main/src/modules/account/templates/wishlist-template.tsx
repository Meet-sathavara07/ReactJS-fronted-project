import WishlistOverview from "../components/whishlist-overview"

const WishlistTemplate = () => {
  return (
    <>
      <div className="flex flex-col gap-y-4 pb-8">
        <p className="text-heading5 font-semibold">Wishlist</p>
        <p className="text-caption1">View your wishlist</p>
      </div>
      <div>
        <WishlistOverview />
      </div>
    </>
  )
}

export default WishlistTemplate
