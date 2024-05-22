import React from "react"
import Button from "../common/Button"
import { footerData } from "@/lib/constData"
import Link from "next/link"
type Props = {}

const SocialIcons = (props: Props) => {
  return (
    <div className="flex gap-4">
      {footerData.socialMedia.map((item, index) => {
        const Icon = item.icon
        return (
          <Link href={item.url} key={index}>
            <Button key={item.id} variant="round" color="green">
              <span className="sr-only">{item.name} account button</span>
              <Icon className="h-5" />
            </Button>
          </Link>
        )
      })}
    </div>
  )
}

export default SocialIcons
