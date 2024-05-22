import OtpVerificationForm from "@/components/auth/verify"
import OpenModal from "@/components/common/OpenModal"

type Props = {}

const Varify = (props: Props) => {
  return (
    <OpenModal>
      <OtpVerificationForm />
    </OpenModal>
  )
}

export default Varify
