import React from "react"
import { teamMemberCardType } from "@/utils/types"
import { teamMemberCard } from "@/lib/constData"
import Image from "next/image"
import SocialIcons from "../SocialIcons"
import Button from "../common/Button"
import Link from "next/link"

type Props = {}

const TeamMember = ({ data }: teamMemberCardType) => {
  return (
    <div className="px-container flex flex-col mx-auto flex-wrap overflow-hidden bg-gradient-to-r from-slate-50  to-emeral-200">
      <div className="heading flex flex-col justify-center items-center text-center divide-y-2 divide-red-900">
        <p className="mt-10 text-5xl  mb-5  font-[roboto]">{data.heading}</p>

        <p className="pt-5 text-2xl font-[roboto]">{data.subtitle}</p>
      </div>
      <div className=" grid  h-fit xl:grid-cols-4 mt-14  mb-14 justify-center items-center gap-3 sm:grid-cols-1 md:grid-cols-2 overflow-y-auto">
        {teamMemberCard.memberimages?.map((item) => {
          return (
            <div
              key={item.id}
              className=" bg-gradient-to-r from-purple-300 via-slate-100 to-rose-300 rounded-3xl text-black    transform origin-bottom shadow-lg transition-transform hover:scale-105 duration-200 hover:shadow-xl xl:w-10/12 lg:w-9/12 md:w-9/12   sm:w-9/12 m-10 flex flex-col justify-center items-center text-center "
            >
              <div className="w-full aspect-square relative">
                <Image
                  className="rounded-3xl object-cover p-3"
                  src={item.url}
                  fill
                  alt=""
                />
              </div>
              <p className="text-3xl m-4 mb-0 font-[roboto]">{item.title}</p>
              <span className="font-semibold font-[roboto] text-lg mb-3 ">
                {item.role}
              </span>
              <div className="share-button  flex gap-8 justify-center items-center mb-3">
                <Link target="_blank" href={item.linkedin}>
                  <Image
                    width={20}
                    height={20}
                    src="/icons/linkedin.svg"
                    alt=""
                  />
                </Link>
                <Link target="_blank" href={item.instagram}>
                  <Image
                    width={20}
                    height={20}
                    src="/icons/instagram.svg"
                    alt=""
                  />
                </Link>
                <Link target="_blank" href={item.github}>
                  <Image
                    width={30}
                    height={20}
                    src="/icons/github.svg"
                    alt=""
                  />
                </Link>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
export default TeamMember
