import React from "react"

import { useForm } from "react-hook-form"
import { LoginVideoType, RegisterVideoType } from "@/utils/types"
import Input from "../../components/common/formElements/Input"
import TextArea from "@/components/common/formElements/TextArea"
import SubmitButton from "@/components/common/formElements/SubmitButton"
import { emailRegex, nameRegex } from "@/lib/util/regex"
import style from "./contactform.module.css"
import { LoginVideo } from "@/lib/constData"
import Button from "@/components/common/Button"
import ContactForm from "@/containers/ContactForm"
import LoginDetails from "@/modules/account/components/login-details"
import Link from "next/link"

const BrancyRegister = ({ data }: RegisterVideoType) => {
  return (
    <div className=" items-center justify-center sm:overflow-hidden ">
      <div className="px-container grid md:grid-cols-2 content-center gap-4 md:gap-0 max-sm:flex-col w-full mx-auto ">
        <div className=" relative row-start-1 col-start-1 z-0 col-span-1 overflow-hidden opacity-25 md:opacity-100  rounded-lg  my-2 h-[98vh]">
          <video
            autoPlay
            loop
            muted
            className="object-cover h-[100%] rounded-3xl "
            style={{ objectFit: "cover" }}
            src={data.image}
          // type="video/mp4"
          >
            Your browser does not support the video tag.
          </video>
        </div>
        <div className=" z-2 relative row-start-1 col-start-1 md:col-start-2 flex h-[98vh]  justify-center  w-full  gap-4 md:gap-16  ">
          <form className="flex flex-col items-center w-full px-2 md:px-0 justify-center  sm:w-4/5 lg:w-4/5 2xl:w-2/3 ">
            <p className="text-4xl md:pb-6 text-gray-800  mb-6 text-center font-sans">
              Register
            </p>
            <input
              placeholder="First Name"
              className="w-full mb-10 border-b-2 placeholder-slate-400 rounded border-[#ff6565] py-2 px-4 focus:border-[#ff6565] focus:outline-none"
            />
            <input
              placeholder="Last Name"
              className="w-full mb-10 border-b-2 placeholder-slate-400 rounded border-[#ff6565] py-2 px-4 focus:border-[#ff6565] focus:outline-none"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full mb-10 border-b-2 placeholder-slate-400 rounded border-[#ff6565] py-2 px-4 focus:border-[#ff6565] focus:outline-none"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full mb-10 border-b-2 placeholder-slate-400 rounded border-[#ff6565] py-2 px-4 focus:border-[#ff6565] focus:outline-none"
            />
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full mb-10 border-b-2 placeholder-slate-400 rounded border-[#ff6565] py-2 px-4 focus:border-[#ff6565] focus:outline-none"
            />

            <Button className="mb-5 items-center" variant="colered">
              Register
            </Button>
            <p className="text-sm text-gray-700 text-center">
              Already have an account?{" "}
              <Link href={data.link} className="text-rose-400">
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}
export default BrancyRegister
