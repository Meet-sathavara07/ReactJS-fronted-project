import OpenModal from "@/components/common/OpenModal"
import LoginTemplate from "@/modules/account/templates/login-template"

type Props = {}

const Login = (props: Props) => {
  return (
    <OpenModal>
      <LoginTemplate query={"back"} />
    </OpenModal>
  )
}

export default Login
