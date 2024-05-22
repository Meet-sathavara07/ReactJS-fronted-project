import { footerData } from "@/lib/constData"
import Link from "next/link"
import SocialIcons from "@/components/SocialIcons"
import Image from "next/image"
import styles from "./footer.module.css"
import NewsLetter from "@/components/NewsLetter"

type Props = {}
const Footer = (props: Props) => {
  return (
    <div className={styles.footerWrapper}>
      {/* newsletter */}

      <footer className={styles.footer}>
        <div className={styles.footerDataWrapper}>
          <div className={styles.descriptionWrapper}>
            <Link href="/">
              <div className={styles.footerImageWrapper}>
                <Image
                  fill
                  src={footerData.footerImage}
                  alt="footer image"
                  className="object-contain translate-x-4 translate-y-5 "
                />
              </div>
            </Link>
            <p className={styles.description}>{footerData.description} </p>
          </div>
          {/* <p className={styles.heading}>{footerData.heading}</p> */}
          <div className={styles.footerLinks}>
            {footerData?.footerLinks?.map((item, index) => {
              return (
                <div key={index} className={styles.footerLinkSection}>
                  {item?.map((link) => {
                    return (
                      <Link
                        key={link.id}
                        href={link.url}
                        className={styles.link}
                      >
                        {link.title}
                      </Link>
                    )
                  })}
                </div>
              )
            })}

            <div className={styles.descriptionWrapper}>
              <SocialIcons />
            </div>
          </div>
        </div>
        <hr className="opacity-30" />
        <div className={styles.copyrightWrapper}>
          <p className="sm">{footerData.copyright.description}</p>
          <div className={styles.copyrightLinks}>
            {footerData.copyright.links.map((link) => {
              return (
                <Link
                  key={link.id}
                  href={link.url}
                  className={styles.copyrightLink}
                >
                  {link.title}
                </Link>
              )
            })}
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer

// const Footer = (props: Props) => {
//   return (
//     <div className={styles.footerWrapper}>
//       <div className={styles.footerImageWrapper}>
//         <Image
//           fill
//           src={footerData.footerImage}
//           alt="footer image"
//           className="object-contain"
//         />
//       </div>
//       {/* newsletter */}
//       <NewsLetter />
//       <footer className={styles.footer}>
//         <p className={styles.heading}>{footerData.heading}</p>
//         <div className={styles.footerDataWrapper}>
//           <div className={styles.descriptionWrapper}>
//             <p className={styles.description}>{footerData.description}</p>
//             <SocialIcons />
//           </div>
//           <div className={styles.footerLinks}>
//             {footerData?.footerLinks?.map((item, index) => {
//               return (
//                 <div key={index} className={styles.footerLinkSection}>
//                   {item?.map((link) => {
//                     return (
//                       <Link
//                         key={link.id}
//                         href={link.url}
//                         className={styles.link}
//                       >
//                         {link.title}
//                       </Link>
//                     )
//                   })}
//                 </div>
//               )
//             })}
//           </div>
//         </div>
//         <hr className="opacity-30" />
//         <div className={styles.copyrightWrapper}>
//           <p className="sm">{footerData.copyright.description}</p>
//           <div className={styles.copyrightLinks}>
//             {footerData.copyright.links.map((link) => {
//               return (
//                 <Link
//                   key={link.id}
//                   href={link.url}
//                   className={styles.copyrightLink}
//                 >
//                   {link.title}
//                 </Link>
//               )
//             })}
//           </div>
//         </div>
//       </footer>
//     </div>
//   )
// }

// export default Footer
