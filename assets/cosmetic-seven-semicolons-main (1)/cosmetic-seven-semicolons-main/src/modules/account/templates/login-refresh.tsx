"use client"

import { useAccount } from "@/lib/context/account-context"
// import Register from "@/modules/account/components/register"
import { redirect } from "next/navigation"
import { useEffect } from "react"
import Login from "../components/login"
import Logins from "@/containers/login"
import Registers from "@/containers/register"

const LoginRefresh = ({ query }: { query: string }) => {
  const { loginView, customer, retrievingCustomer } = useAccount()
  const [currentView, _] = loginView

  console.log(currentView, "currentView")

  // const router = useRouter()

  useEffect(() => {
    if (!retrievingCustomer && customer) {
      redirect("/account")
    }
  }, [customer, retrievingCustomer])

  return (
    <div className="w-full flex justify-center p-4">
      {currentView === 'sign-in' ? (
        // <Login query={query} />
        <Logins />
      ) : (
        // <Register query={query} />
        <Registers />
      )}
    </div>
  )
}

export default LoginRefresh
