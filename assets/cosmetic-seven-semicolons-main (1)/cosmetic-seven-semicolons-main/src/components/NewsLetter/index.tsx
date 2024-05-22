"use client"
import SendIcon from "@/public/icons/send.svg"
import MailIcon from "@/public/icons/envelope-outline.svg"
import styles from "./newsLetter.module.css"
import Input from "../common/formElements/Input"
import { footerData } from "@/lib/constData"
import SubmitButton from "../common/formElements/SubmitButton"
import { emailRegex, nameRegex } from "@/lib/util/regex"
import { z } from "zod"
import { useState } from "react"
import { useForm } from "react-hook-form"

type FormValues = {
  name: string
  email: string
}

const NewsLetter: React.FC = (props: Props) => {
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
    <section>
      <div className={styles.newsLetterHeadingWrapper}>
        <MailIcon className={styles.newsLetterHeadingIcon} />
        <p className={styles.newsLetterHeading}>
          {footerData.newsLetter.heading}
        </p>
      </div>
      <form className={styles.newsLetterForm} onSubmit={submit}>
        <Input
          placeholder="Enter your name"
          type="text"
          {...register("name", {
            required: {
              message: "name is required...",
              value: true,
            },
            maxLength: {
              value: 50,
              message: "name is too long",
            },
            minLength: {
              value: 2,
              message: "name is too short",
            },
            pattern: {
              value: nameRegex,
              message: "name should only contain alphabets ",
            },
          })}
          errors={errors}
          autoComplete="given-name"
        />
        <Input
          placeholder="Enter your email"
          {...register("email", {
            required: {
              message: "Email is required...",
              value: true,
            },
            pattern: {
              value: emailRegex,
              message: "Enter valid email",
            },
          })}
          errors={errors}
        />

        <SubmitButton
          variant="fill"
          color="green"
          type="submit"
          isLoading={submitting}
        >
          <span className="sr-only">Subscribe to Newsletter button</span>
          <SendIcon className={styles.newsLetterFormIcon} />
        </SubmitButton>
        {error && (
          <div className="text-rose-500 text-small-regular py-2">{error}</div>
        )}
      </form>
    </section>
  )
}

export default NewsLetter
