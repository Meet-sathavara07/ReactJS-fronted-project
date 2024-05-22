import React from "react"
import Send from "@/public/icons/send.svg"

type Props = {}

const JoinWithUs = (props: Props) => {
  return (
    <div className="flex px-container flex-col md:flex-row items-center justify-center py-1 relative mx-auto sm:flex-row rounded-full w-[80dvw] my-10">
      {/* Background Image (Unsplash Placeholder) */}
      <div className="bg-black absolute inset-0  flex items-center justify-center rounded-2xl w-full  overflow-hidden">
        <img
          src="https://res.cloudinary.com/db4e3hqfv/image/upload/v1706262337/bg1_nhdbgz.webp"
          alt="Background Image"
          className=" rounded-xl h-full object-cover w-full"
        />
      </div>

      {/* Join With Us Form */}
      <div className="text-center py-8 mb-20 z-10 scroll sm:text-left sm:mb-0 text-black w-4/5 mt-6 lg:ml-3 ">
        <h2 className="text-5xl text-slate-950 p-1 font-medium font-[roboto]">
          Join With Us
        </h2>
        <p className="text-slate-600 font-medium text-lg mt-2 mb-4 ">
          Discover a world of beauty where community thrives, <br />
          Join us for exclusive offers and insider insights.
        </p>
      </div>
      <form className="flex items-center justify-center z-10 w-full inset-0 md:w-3/4 lg:w-2/3 xl:w-1/2 mr-0 max-[430px]:-mt-10 max-[430px]:w-full">
        <div className="relative flex items-center w-5/6 max-[430px]:-mt-20">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-2 py-[6px] rounded-l-md outline-offset-0 border-solid border border-[#ff6565] text-black w-full italic font-bold"
          />
          <button
            type="submit"
            className="p-[2px]"
            style={{ marginLeft: "-12px" }}
          >
            <div className="p-[4px] rounded-md -ml-7 bg-[#ff6565] ">
              <Send className="w-6 text-white" />
            </div>
          </button>
        </div>
      </form>
    </div>
  )
}

export default JoinWithUs
