"use client"

import { useAccount } from "@/lib/context/account-context"
import Register from "@/modules/account/components/register"
import { redirect } from "next/navigation"
import { useEffect } from "react"
import Login from "../components/login"

const LoginTemplate = ({ query }: { query: string }) => {
  const { loginView, customer, retrievingCustomer } = useAccount()
  const [currentView, _] = loginView

  // const router = useRouter()

  useEffect(() => {
    if (!retrievingCustomer && customer) {
      redirect("/account")
    }
  }, [customer, retrievingCustomer])

  return (
    <div className="w-full flex justify-center p-4">
      {currentView === "sign-in" ? (
        <Login query={query} />
      ) : (
        <Register query={query} />
      )}
    </div>
  )
}

export default LoginTemplate
