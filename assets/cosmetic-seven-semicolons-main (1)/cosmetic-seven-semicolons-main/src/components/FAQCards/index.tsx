"use client"
import React, { useEffect } from "react"
import { FAQCardType } from "@/utils/types"
import { FAQCard } from "@/lib/constData"
import Image from "next/image"
import { Disclosure } from "@headlessui/react"

type Props = {}

const FAQ = ({ data }: FAQCardType) => {
  return (
    <div className="px-container flex flex-col justify-center items-center p-10 font-sans leading-relaxed">
      {FAQCard.cards?.map((item, index) => {
        return (
          <Disclosure key={index}>
            {({ open }) => (
              <>
                <Disclosure.Button
                  key={item.id}
                  className="font-medium border-2 border-slate-200 accordion flex justify-between bg-white w-4/5 px-3 py-4 mb-2 hover:bg-rose-200  cursor-pointer max-[450px]:w-full"
                >
                  {item.question}

                  <Image
                    alt=""
                    src="/icons/chevron-down.svg"
                    width={15}
                    height={15}
                    className={`${open ? "rotate-180 transform duration-300" : ""
                      } h-5 w-5 text-purple-500`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pb-4 mb-2 pt-4 text-sm answer border-2 border-rose-300 bg-white text-gray-300 transition-all">
                  {item.answer}
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        )
      })}
    </div>
  )
}
export default FAQ
