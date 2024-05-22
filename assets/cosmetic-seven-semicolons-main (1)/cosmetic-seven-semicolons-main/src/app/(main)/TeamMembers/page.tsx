
import TeamMembers from "@/containers/TeamMembers"

import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Team Members",

}

type Props = {}

const page = (props: Props) => {
    return (
        <>
            <TeamMembers />

        </>
    )
}

export default page
