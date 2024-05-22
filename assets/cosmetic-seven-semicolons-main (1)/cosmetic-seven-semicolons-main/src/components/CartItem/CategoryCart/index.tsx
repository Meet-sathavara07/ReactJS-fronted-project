import React from 'react'

type Props = {}

const CategoryCart = (props: Props) => {
  return (
    <><div className="relative group transition-transform transform-gpu rounded-xl hover:rotate-y-full
    0 bg-green-200 hover:shadow-2xl aspect-w-3 aspect-h-4  w-auto  lg:w-full  h-48 md:h-52 lg:h-52  flex space-x-4 flex-col justify-center items-center ">
  <div className="rounded    flip-container ">
    <div className="flipper">
      <img className="block justify-center xl:w-16 w-16" src="https://template.hasthemes.com/brancy/brancy/assets/images/shop/category/1.webp" alt="Image Alt Text" />
    </div>
  </div>
  <div className="badge absolute xl:right-0 right-2 top-3 mr-3 mt-auto bg-red-400 text-white text-center rounded-full  px-4 py-0 xl:-translate-x-2 flex justify-center transform sm:-rotate-0 lg:rotate-0 xl:-rotate-90 xl:-top-3 ">
    <span className="mx-auto mb-1">new</span>
  </div>
  <hr className="mx-auto  h-0.5 w-7 bg-red-400 xl:mt-9 mt-5 mb-2 " />
  <div className="flex justify-center items-center font-mt-1 text-black -mb-4">
    Hare care
  </div>
</div>

  

 </>
  )
}

export default CategoryCart