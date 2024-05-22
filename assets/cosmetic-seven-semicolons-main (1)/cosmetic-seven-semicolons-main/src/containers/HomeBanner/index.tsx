// import Banner from "@/components/common/Banner"
// import { homePageBanner } from "@/lib/constData"

// const HomeBanner = () => {
//   return <Banner data={homePageBanner} />
// }

// export default HomeBanner
import { homePageBanner } from "../../lib/constData"
import Hbanner from "@/components/common/Hbanner"

const HomeBanner = () => {
  // console.log(homePageBanner)
  return <Hbanner data={homePageBanner} />
}

export default HomeBanner
