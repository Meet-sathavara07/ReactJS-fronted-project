import React, { Children, ReactNode } from "react"

type Props = { children: ReactNode }

const ProdCard = ({ children }: Props) => {
  const ProdCardArray = React.Children.toArray(children)
  return (
    <div>
      <div className=" aspect-w-3 overflow-hidden rounded-xl">
        <div className="object-cover delay-300 overflow-hidden rounded-xl">
          {" "}
          {ProdCardArray[0]}
        </div>
        {/* <img src="./nailpolish.webp" alt="nailpolish" className="transform origin-bottom transition-transform hover:scale-105" /> */}

        <div>
          <div className="flex flex-1 h-4 justify-between pt-2 ">
            {ProdCardArray[1]}
          </div>
          <div className="pt-3">
            {/* <a href="http://" className="font-sans text-xl">Voyage Face Cleaner</a> */}
            {ProdCardArray[2]}
          </div>
          <div className="flex flex-rows gap-1 ">
            {/* <p className="font-sans text-xl">$300</p>
        <p className="line-through font-thin text-xs pt-2">$390</p> */}
            {ProdCardArray[3]}
            {ProdCardArray[4]}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProdCard
