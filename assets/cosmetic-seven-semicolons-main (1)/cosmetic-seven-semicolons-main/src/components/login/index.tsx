import React from "react"

import { useForm } from "react-hook-form"
import { LoginVideoType } from "@/utils/types"
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

const BrancyLogin = ({ data }: LoginVideoType) => {
  return (
    <div className="items-center justify-center sm:overflow-hidden ">
      <div className="px-container grid md:grid-cols-2 content-center gap-4 md:gap-0 max-sm:flex-col w-full mx-auto ">
        <div className=" relative row-start-1 col-start-1 z-0 col-span-1 overflow-hidden opacity-25 md:opacity-100  rounded-lg  my-2 h-[98vh]">
          <video
            autoPlay
            loop
            muted
            className="object-cover h-[100%]  rounded-3xl"
            style={{ objectFit: "cover" }}
            src={data.image}
          // type="video/mp4"
          >
            Your browser does not support the video tag.
          </video>
        </div>
        <div className=" z-2 relative row-start-1 col-start-1 md:col-start-2 flex h-[98vh]  justify-center   w-full  gap-4 md:gap-16  ">
          <form className=" w-full flex flex-col items-center justify-center px-2 md:px-0 sm:w-4/5 lg:w-4/5 2xl:w-2/3  ">
            <p className="text-4xl pb-10 text-gray-800  mb-6 text-center font-sans">
              Login
            </p>
            <input
              type="email"
              placeholder="Username or Email Address"
              className="w-full mb-10 border-b-2 rounded border-[#ff6565] py-2 px-4 placeholder-slate-400 "
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full mb-10 border-b-2 rounded border-[#ff6565] py-2 px-4 placeholder-slate-400 focus:border-[#ff6565] focus:outline-none"
            />
            <p className="mb-10 w-full text-sm text-center ">
              Your personal data will be used to support your experience
              throughout this website, to manage access to your account, and for
              other purposes described in our privacy policy.
            </p>

            <Button className="mb-5 items-center" variant="colered">
              LOGIN
            </Button>
            <p className="text-sm text-gray-700 text-center">
              Do not have an account?
              <Link href={data.link} className="text-rose-400">
                Register
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}
export default BrancyLogin
