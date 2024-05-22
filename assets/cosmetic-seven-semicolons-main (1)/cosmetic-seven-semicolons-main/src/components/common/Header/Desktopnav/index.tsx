import Link from "next/link"
import style from "./desktopnav.module.css"
import { NavLinksType } from "@/utils/types"
import AccountBtn from "../AccountBtn"
import CartBtn from "../CartBtn"
import MobileNav from "../Mobilenav"
import NavLinks from "../NavLinks"
import Image from "next/image"

const DesktopNav = ({ data }: { data: NavLinksType }) => {
  return (
    <div className={style.deskNav}>
      <MobileNav data={data} />

      <Link href={"/"} className={style.logoWrapper}>
        <h1>
          <span className={style.heading1}>
            <Image src={data.heading1} alt="logo" width={65} height={65} />
          </span>
          {/* <span className={style.heading2}>{data.heading2}</span> */}
        </h1>
      </Link>
      <div className={style.contentWrapper}>
        <NavLinks links={data} />

        <div className={style.icons}>
          <AccountBtn />
          <CartBtn />
        </div>
      </div>
    </div>
  )
}

export default DesktopNav
