
import Registers from "@/containers/register"


import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Register",

}

type Props = {}

const page = (props: Props) => {
    return (
        <>
            <Registers />

        </>
    )
}

export default page
