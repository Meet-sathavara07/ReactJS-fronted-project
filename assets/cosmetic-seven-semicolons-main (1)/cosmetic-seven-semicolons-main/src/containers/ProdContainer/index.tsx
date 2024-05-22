import React from "react"
import Image from "next/image"
import ProdCard from "@/components/products/ProdCard"
import { productData } from "@/lib/constData"
import ProductCard from "@/components/products/ProductCard"

type Props = {}

const ProdContainer = (props: Props) => {
  return (
    <section className="grid grid-cols-2 justify-items-center md:grid-cols-3 lg:grid-cols-4 overflow-hidden rounded-3xl  gap-6">
      {productData.map((item, index) => (
        <ProductCard key={index}>
          <div className="group ">
            <div className="object-cover delay-300 overflow-hidden rounded-xl">
              <Image
                src={item.pImg}
                alt={`product image ${index}`}
                width={"700"}
                height={"800"}
                className="transform origin-bottom transition-transform group-hover:scale-105 rounded-b-xl "
              />
              <div className="absolute justify-center bottom-20  ">
                <button
                  type="submit"
                  className="  text-white  tracking-widest bg-white p-3 border-2 border-red-500 opacity-100  rounded-full uppercase   focus:outline-none  group-hover:-translate-y-11 group-hover:visible group-hover:opacity-100 transition-all duration-200 "
                >
                  <Image
                    src="/icons/heart.svg"
                    alt=""
                    width={"100"}
                    height={"100"}
                  />
                </button>
                <button className=" bg-white tracking-widest border-2 border-red-500  rounded-full uppercase text-slate-950 p-3 px-14 focus:outline-none opacity-100  group-hover:-translate-y-11 group-hover:visible group-hover:opacity-100 transition-all duration-200">
                  <span>add to cart</span>
                </button>
                <button
                  type="submit"
                  className="  text-white  tracking-widest bg-white p-3 border-2 border-red-500   rounded-full uppercase opacity-0  focus:outline-none group-hover:-translate-y-11 group-hover:visible group-hover:opacity-100 transition-all duration-200  "
                >
                  <Image
                    src="/icons/check.svg"
                    alt=""
                    width={"100"}
                    height={"100"}
                  />
                </button>
              </div>
            </div>

            {/* Additional product details or components can be added here */}
            <div>
              <div className="flex justify-between pt-4 ">
                <div className="flex gap-0 ">
                  <Image
                    src="/icons/star.svg"
                    alt="rating"
                    width={"14"}
                    height={"14"}
                    className="color-slate-100 fill-red-500 stroke-2 stroke-red-500"
                  />
                  <Image
                    src="/icons/star.svg"
                    alt="rating"
                    width={"14"}
                    height={"14"}
                  />
                  <Image
                    src="/icons/star.svg"
                    alt="rating"
                    width={"14"}
                    height={"14"}
                  />
                  <Image
                    src="/icons/star.svg"
                    alt="rating"
                    width={"14"}
                    height={"14"}
                  />
                  <Image
                    src="/icons/star.svg"
                    alt="rating"
                    width={"14"}
                    height={"14"}
                  />
                </div>
                <p className="text-xs item-center">{item.reviews}</p>
              </div>
              <a href="http://" className="font-sans text-xl pt-6">
                {" "}
                {item.title}
              </a>
              <div className="flex flex-1 gap-1 ">
                <p className="font-sans text-xl">{item.price}</p>
                <p className="line-through font-thin text-xs pt-2">
                  {item.orignalPrice}
                </p>
              </div>
            </div>
          </div>
        </ProductCard>
      ))}
    </section>
  )
}

export default ProdContainer
