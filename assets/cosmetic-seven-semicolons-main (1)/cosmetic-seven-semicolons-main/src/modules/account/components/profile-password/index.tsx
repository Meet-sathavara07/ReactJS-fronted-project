import { medusaClient } from "@/lib/config"
import { Customer } from "@medusajs/medusa"
import { useUpdateMe } from "medusa-react"
import React, { useEffect } from "react"
import { useForm } from "react-hook-form"
import AccountInfo from "../account-info"
import Input from "@/components/common/formElements/Input"
import { passwordRegex } from "@/lib/util/regex"

type MyInformationProps = {
  customer: Omit<Customer, "password_hash">
}

type UpdateCustomerPasswordFormData = {
  old_password: string
  new_password: string
  confirm_password: string
}

const ProfileName: React.FC<MyInformationProps> = ({ customer }) => {
  const [errorMessage, setErrorMessage] = React.useState<string | undefined>(
    undefined
  )
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    setError,
  } = useForm<UpdateCustomerPasswordFormData>()

  const {
    mutate: update,
    isLoading,
    isSuccess,
    isError,
    reset: clearState,
  } = useUpdateMe()

  useEffect(() => {
    reset()
  }, [customer, reset])

  const updatePassword = async (data: UpdateCustomerPasswordFormData) => {
    const isValid = await medusaClient.auth
      .authenticate({
        email: customer.email,
        password: data.old_password,
      })
      .then(() => true)
      .catch(() => false)

    if (!isValid) {
      setError("old_password", {
        type: "validate",
        message: "Old password is incorrect",
      })
      setErrorMessage("Old password is incorrect")

      return
    }

    if (data.new_password !== data.confirm_password) {
      setError("confirm_password", {
        type: "validate",
        message: "Passwords do not match",
      })
      setErrorMessage("Passwords do not match")

      return
    }

    return update({
      id: customer.id,
      password: data.new_password,
    })
  }

  return (
    <form
      onSubmit={handleSubmit(updatePassword)}
      onReset={() => reset()}
      className="w-full"
    >
      <AccountInfo
        label="Password"
        currentInfo={
          <span className="font-semibold">
            The password is not shown for security reasons
          </span>
        }
        isLoading={isLoading}
        isSuccess={isSuccess}
        isError={isError}
        errorMessage={errorMessage}
        clearState={clearState}
      >
        <div className="grid grid-cols-2 gap-4">
          <Input
            label="Old password"
            {...register("old_password", {
              required: true,
            })}
            type="password"
            errors={errors}
            className="border-b-2 border-[#ff6565]"
          />
          <Input
            label="New password"
            type="password"
            {...register("new_password", {
              required: {
                message: "Password is required...",
                value: true,
              },
              minLength: {
                value: 8,
                message: "Password is too short (Minimum eight characters)",
              },
              pattern: {
                value: passwordRegex,
                message:
                  "Minimum eight characters, at least one letter, one number and one special character is required",
              },
            })}
            errors={errors}
            className="border-b-2 border-[#ff6565]"
          />
          <Input
            label="Confirm password"
            type="password"
            {...register("confirm_password", {
              required: {
                message: "Password is required...",
                value: true,
              },
              minLength: {
                value: 8,
                message: "Password is too short (Minimum eight characters)",
              },
              pattern: {
                value: passwordRegex,
                message:
                  "Minimum eight characters, at least one letter, one number and one special character is required",
              },
            })}
            errors={errors}
            className="border-b-2 border-[#ff6565]"
          />
        </div>
      </AccountInfo>
    </form>
  )
}

export default ProfileName
