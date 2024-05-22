import Banner from "@/components/common/Banner"
import { homePageBanner } from "@/lib/constData"
import HomeBlogpost from "@/components/common/homepageblogpost"
import { homeblogpost } from "@/lib/constData"

const HomepageBlogpost = () => {
  return (
    <section className="flex flex-col gap-16 items-center py-0">
      <div className="text-center translate-y-5">
        <h1 className=" font-[roboto] text-6xl pb-2">Blog Posts</h1>
        <p className=" -pb-20">
          Join us on this journey as we uncover the keys that empower you to
          embrace your natural beauty
        </p>
      </div>
      <div className="mx-automax-w-7xl p-5 md:p-5 md:grid-cols-3 gap-4 md:gap-8 lg:flex">
        {homeblogpost &&
          homeblogpost.map((item) => {
            return <HomeBlogpost key={item.id} data={item} />
          })}
        {/* <HomeBlogpost data={homeblogpost} /> */}
      </div>
    </section>
  )
}

export default HomepageBlogpost
