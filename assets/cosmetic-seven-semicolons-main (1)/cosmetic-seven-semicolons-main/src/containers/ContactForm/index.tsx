"use client"
import React, { useState } from "react"
import { useForm } from "react-hook-form"
import Input from "../../components/common/formElements/Input"
import TextArea from "@/components/common/formElements/TextArea"
import SubmitButton from "@/components/common/formElements/SubmitButton"
import { emailRegex, nameRegex } from "@/lib/util/regex"
import style from "./contactform.module.css"
import Button from "@/components/common/Button"

type FormValues = {
  firstname: string
  lastname: string
  email: string
  message: string
}

const ContactForm: React.FC = () => {
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState<string | undefined>(undefined)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>()

  const submit = handleSubmit(async (data: FormValues) => {
    setSubmitting(true)
    setError(undefined)
    console.log(data)
    setSubmitting(false)
    reset()
  })

  return (
    <div className="bg-white p-8 pt-10 rounded-lg max-[770px]:w-full max-[450px]:w-full">
      <h1 className="text-4xl text-gray-800 font-[roboto]">Get In Touch</h1>
      <p className="text-gray-600 mt-4  font-[roboto] ">
        Connect with the branded cosmetic brand with top quality of makeup
        products.
      </p>
      <form className="mt-8">
        <div className="-mx-2 gap-3 md:gap-0 ">
          <div className="w-full px-2">
            <label htmlFor="first-name" className="sr-only">
              First Name
            </label>
            <input
              type="text"
              id="first-name"
              name="first-name"
              placeholder="First Name"
              className="w-full placeholder:text-slate-400 border-b-2 rounded border-[#ff6565] py-2 px-4 focus:outline-none"
            />
          </div>
          <div className="w-full mt-5 px-2">
            <label htmlFor="last-name" className="sr-only">
              Last Name
            </label>
            <input
              type="text"
              id="last-name"
              name="last-name"
              placeholder="Last Name"
              className="w-full border-b-2 placeholder:text-slate-400 rounded border-[#ff6565] py-2 px-4 focus:border-[#ff6565] focus:outline-none"
            />
          </div>
        </div>
        <div className="mt-5">
          <label htmlFor="email" className="sr-only">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email Address"
            className="w-full border-b-2 rounded placeholder:text-slate-400 border-[#ff6565] py-2 px-4 focus:border-[#ff6565] focus:outline-none"
          />
        </div>
        <div className="mt-5">
          <label htmlFor="message" className="sr-only">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Message"
            rows={4}
            className="w-full border-b-2 rounded placeholder:text-slate-400 border-[#ff6565] py-2 px-4 focus:border-[#ff6565] focus:outline-none"
            defaultValue={""}
          />
        </div>
        <div className="mt-5">
          {/* <button
            type="submit"
            className="bg-[#ff6565] text-white tracking-widest py-3 px-14 rounded-full uppercase hover:bg-[#364958] hover:shadow-lg"
          >
            Submit
          </button> */}
          <Button variant="colered" className="mx-auto">
            Submit
          </Button>
        </div>
      </form>
    </div>

    // <form className={style.form} onSubmit={submit}>
    //   <div className={style.formInput}>
    //     <div className={style.nameInput}>
    //       <Input
    //         label="First name"
    //         type="text"
    //         {...register("firstname", {
    //           required: {
    //             message: "first_name is required...",
    //             value: true,
    //           },
    //           maxLength: {
    //             value: 50,
    //             message: "name is too long",
    //           },
    //           minLength: {
    //             value: 2,
    //             message: "name is too short",
    //           },
    //           pattern: {
    //             value: nameRegex,
    //             message: "name should only contain alphabets ",
    //           },
    //         })}
    //         required
    //         errors={errors}
    //         autoComplete="given-name"
    //       />
    //       <Input
    //         label="Last name"
    //         type="text"
    //         {...register("lastname", {
    //           required: {
    //             message: "last_name is required...",
    //             value: true,
    //           },
    //           maxLength: {
    //             value: 50,
    //             message: "name is too long",
    //           },
    //           minLength: {
    //             value: 2,
    //             message: "name is too short",
    //           },
    //           pattern: {
    //             value: nameRegex,
    //             message: "name should only contain alphabets ",
    //           },
    //         })}
    //         required
    //         errors={errors}
    //         autoComplete="family-name"
    //       />
    //     </div>
    //     <Input
    //       label="Email"
    //       {...register("email", {
    //         required: {
    //           message: "Email is required...",
    //           value: true,
    //         },
    //         pattern: {
    //           value: emailRegex,
    //           message: "Enter valid email",
    //         },
    //       })}
    //       required
    //       errors={errors}
    //       wrapperClassName="col-span-2"
    //     />
    //     <TextArea
    //       label="Message"
    //       rows={5}
    //       wrapperClassName="col-span-2"
    //       {...register("message", {
    //         required: {
    //           message: "message is required...",
    //           value: true,
    //         },
    //       })}
    //       required
    //       errors={errors}
    //     />
    //   </div>
    //   <div>
    //     <SubmitButton
    //       variant="fill"
    //       color="green"
    //       title="send message"
    //       className="!rounded-xl"
    //       isLoading={submitting}
    //     >
    //       Send Message
    //     </SubmitButton>
    //   </div>
    //   {error && (
    //     <div className="text-rose-500 text-small-regular py-2">{error}</div>
    //   )}
    // </form>
  )
}

export default ContactForm
