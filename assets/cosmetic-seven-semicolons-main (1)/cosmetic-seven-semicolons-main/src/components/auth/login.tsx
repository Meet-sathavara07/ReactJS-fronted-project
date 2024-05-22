import Input from "../common/formElements/Input"
import SubmitButton from "../common/formElements/SubmitButton"
import Button from "../common/Button"
import Link from "next/link"

type Props = {}

const LoginForm = (props: Props) => {
  async function generateOtp(formData: FormData) {
    "use server"

    const rawFormData = {
      email: formData.get("phone"),
    }

    console.log("formdata", rawFormData)
    // todo: generate otp
    console.log("demo otp: ", 1234)

    // mutate data
    // revalidate cache
  }

  return (
    <div className="flex flex-col w-full gap-8 max-w-md mx-auto py-8">
      <h4>OTP Varification</h4>
      <p>
        We will send you a <span className="font-bold">One Time Password</span>{" "}
        on your phone number
      </p>
      <form action={generateOtp} className="flex flex-col gap-6 w-full">
        <Input
          name="phone"
          placeholder="Enter your phone number"
          type="number"
          label="Phone Number"
          autoComplete="tel"
        />
        <SubmitButton variant="fill" color="green" type="submit">
          Sent OTP
        </SubmitButton>

        <Button>Resent otp</Button>

        <Link scroll={false} href={"/login/verify"}>
          enter otp
        </Link>
      </form>
    </div>
  )
}

export default LoginForm
