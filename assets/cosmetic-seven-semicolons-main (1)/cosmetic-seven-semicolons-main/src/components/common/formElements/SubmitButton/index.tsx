"use client"
import { useFormStatus } from "react-dom"
import Button from "../../Button"

type Props = {
  children: React.ReactNode
}

const SubmitButton = ({ children, ...props }: Props) => {
  const { pending } = useFormStatus()
  return (
    <Button {...props} aria-disabled={pending} disabled={pending}>
      {pending ? (
        <span className="w-6 aspect-square block rounded-full border-4 border-white border-b-transparent animate-spin">
          <span className="sr-only">loading...</span>
        </span>
      ) : (
        children
      )}
    </Button>
  )
}

export default SubmitButton
