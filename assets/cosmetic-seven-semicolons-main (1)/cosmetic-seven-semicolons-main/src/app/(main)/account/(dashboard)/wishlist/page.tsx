import WishlistTemplate from "@/modules/account/templates/wishlist-template"
import { Metadata } from "next"
import { notFound } from "next/navigation"

export async function generateMetadata({
  params,
}: {
  params: { handle: string }
}): Promise<Metadata> {
  const defaultSEO: Metadata = {
    title: "Wishlist",
    description: "Overview of your wishlisted items",
    keywords: "bea you, checkout, education",
    openGraph: {
      title: "Wishlist",
      description: "Overview of your wishlisted items",
      type: "website",
    },
  }

  return {
    applicationName: "Bea You",
    themeColor: "#fff",
    generator: "Next.js",
    referrer: "origin-when-cross-origin",
    // authors: [{ name: "Nipun" }],
    colorScheme: "light",
    // creator: "Nipun",
    publisher: "Bea You",
    viewport: {
      width: "device-width",
      initialScale: 1,
      maximumScale: 1,
    },
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    appleWebApp: {
      title: "Bea You",
      statusBarStyle: "black-translucent",
    },
    manifest: "@public/manifest.ts",
    ...defaultSEO,
  }
}

export default function Wishlist() {
  const isWishlistEnabled = !!process.env.NEXT_PUBLIC_WISHLIST

  if (!isWishlistEnabled) {
    return notFound()
  }

  return <WishlistTemplate />
}
