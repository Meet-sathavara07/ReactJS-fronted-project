import { ContactDetailType } from "@/utils/types"
import style from "./contactdetail.module.css"
import { SVGProps, cloneElement } from "react"
import Image from "next/image"

const ContactDetail = ({ data }: ContactDetailType) => {
  // const Icon = (props: SVGProps<SVGSVGElement>) => {
  // 	const Ele = () => data.icon;
  // 	return cloneElement(<Ele />, {
  // 		...props,
  // 	});
  // };

  const Icon = data.icon

  return (
    // <section className="relative z-2 md:-mt-28 flex items-center justify-center w-full p-3  max[760px]:mt-96 max-[450px]:mt-12">
    <div
      className=" relative z-2 -top-36
     bg-gradient-to-r from-[#b19290] via-[#F1EFDA] to-[#f2b2b2]

      flex flex-col justify-center font-medium font-Inter items-center cursor-pointer hover:shadow-2xl hover:scale-[1.1] transition-all ease-in duration-100 overflow-hidden rounded-lg shadow py-14 px-5 m-3 w-1/6 min-w-72"
    >
      <Image
        className="size-14 p-[6px] rounded-full transition ease-in-out  hover:scale-125"
        src={data.icon}
        width={2}
        height={2}
        alt="phone"
      />
      <p className="mt-5 max-h-0 text-center text-ellipsis transition ease-in-out hover:scale-105 hover:text-[#7d3d3d]">
        {data.description}
      </p>
    </div>
    // </section>

    // <div className={style.contactDetails}>
    //   <div className="p-3 aspect-square rounded-md bg-green text-white">
    //     <Icon className="h-5" />
    //   </div>

    //   <p className={style.description}>{data.description}</p>
    // </div>
  )
}

export default ContactDetail
