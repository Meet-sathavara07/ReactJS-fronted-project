import { Metadata } from "next"
import Link from "next/link"
import LeftArrow from "@/public/icons/left-arrow.svg"
import Image from "next/image"

export const metadata: Metadata = {
  title: "404",
  description: "Something went wrong",
}

export default function NotFound() {
  return (
    <div className="px-container bg-gray-100 min-h-[calc(100vh-64px)]  flex flex-col items-center justify-center">
      <main className="text-center">
        <Image
          src="/images/page-not-found.webp"
          alt="Image"
          width={700}
          height={600}
          className="mx-auto "
        />
        <h1 className="text-4xl mt-4">Page Not Found</h1>
        <p className="mt-2">
          Go to{" "}
          <Link href="/" className="hover:text-pink-500 text-normal underline">
            Home
          </Link>{" "}
          Page
        </p>
      </main>
    </div>
  )
}

// {/* <div className="bg-green min-h-[calc(100vh-64px)] text-white flex flex-col items-center justify-center">
//       <h1 className="text-2xl-semi text-gry-900">
//         <span className="font-bold text-yellow">404</span> Page not found
//       </h1>
//       <p className="text-small-regular text-gray-700">
//         The page you tried to access does not exist.
//       </p>
//       <Link
//         href="/"
//         className="group mt-4 text-yellow flex gap-2 items-center text-base-regular text-gray-900"
//       >
//         <span className="group-hover:-translate-x-1 duration-300">
//           <LeftArrow className="w-6 aspect-square" />
//         </span>
//         <span className="underline">Go to frontpage</span>
//       </Link>
//     </div> */}
