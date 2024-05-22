import Button from "@/components/common/Button"
import Input from "@/components/common/formElements/Input"
import { medusaClient } from "@/lib/config"
import { LOGIN_VIEW, useAccount } from "@/lib/context/account-context"
import { emailRegex } from "@/lib/util/regex"
import { Spinner } from "@medusajs/icons"
import { redirect, useRouter } from "next/navigation"
import {
  AnchorHTMLAttributes,
  DetailedHTMLProps,
  useRef,
  useState,
} from "react"
import { FieldValues, useForm } from "react-hook-form"

interface SignInCredentials extends FieldValues {
  email: string
  password: string
}

const Login = ({ query }: { query: string }) => {
  const { loginView, refetchCustomer } = useAccount()
  const [_, setCurrentView] = loginView
  const [authError, setAuthError] = useState<string | undefined>(undefined)

  const linkRef =
    useRef<
      DetailedHTMLProps<
        AnchorHTMLAttributes<HTMLAnchorElement>,
        HTMLAnchorElement
      >
    >()

  const handleError = (_e: Error) => {
    const statusCode = _e.response?.status
    if (statusCode === 401)
      setAuthError(
        "Invalid login credentials, please provide valid credentials..."
      )
    else if (statusCode === 403) setAuthError("User not found")
    else setAuthError("Something went Wrong, please try again...")
  }

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignInCredentials>()

  const router = useRouter()

  const onSubmit = handleSubmit(async (credentials) => {
    await medusaClient.auth
      .authenticate(credentials)
      .then(() => {
        refetchCustomer()
        if (query === "back") {
          return router.back()
        } else {
          if (linkRef && linkRef.current) {
            linkRef.current.click()
          } else {
            redirect("/")
          }
        }
      })
      .catch(handleError)
  })

  return (
    <div className="max-w-sm w-full flex flex-col items-center">
      <a href="/account" ref={linkRef} aria-hidden />
      {isSubmitting && (
        <div className="z-10 fixed inset-0 bg-white bg-opacity-50 flex items-center justify-center">
          <Spinner />
        </div>
      )}
      <p className="text-heading3 uppercase mb-6 font-[roboto]">Welcome back</p>
      {/* <p className="text-center text-base-regular text-gray-700 mb-8">
        Sign in to access an enhanced shopping experience.
      </p> */}
      <form className="w-full" onSubmit={onSubmit}>
        {authError && (
          <div
            className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4"
            role="alert"
          >
            <span className="text-rose-500 w-full text-small-regular capitalize">
              These credentials do not match our records
            </span>
          </div>
        )}
        <div className="flex flex-col w-full gap-y-2">
          <Input
            label="Email"
            //
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
            autoComplete="mail"
            errors={errors}
            className="border-b-2 border-red"
          />
          <Input
            label="Password"
            type="password"
            {...register("password", {
              required: {
                message: "Password is required...",
                value: true,
              },
            })}
            autoComplete="current-password"
            errors={errors}
            className="border-b-2 border-red"
          />
        </div>

        <Button className="mx-auto mt-6 " variant="colered" color="green">
          Enter
        </Button>
      </form>
      <span className="text-center text-gray-700 text-small-regular mt-6">
        Not a member?{" "}
        <button
          onClick={() => setCurrentView(LOGIN_VIEW.REGISTER)}
          className="underline hover:text-red"
        >
          Join us
        </button>
        .
      </span>
    </div>
  )
}

export default Login
