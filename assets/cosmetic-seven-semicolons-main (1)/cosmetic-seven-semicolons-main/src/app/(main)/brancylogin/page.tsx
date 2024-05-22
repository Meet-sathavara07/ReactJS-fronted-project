
import Logins from "@/containers/login"


import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Login",

}

type Props = {}

const page = (props: Props) => {
    return (
        <>
            <Logins />

        </>
    )
}

export default page
