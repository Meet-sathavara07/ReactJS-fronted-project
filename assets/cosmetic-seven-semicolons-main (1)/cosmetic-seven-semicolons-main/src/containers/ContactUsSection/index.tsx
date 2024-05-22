import React from "react"
import { contactDetails } from "@/lib/constData"
import { brancycontactDetails } from "@/lib/constData"
import ContactDetailCard from "@/components/ContactDetailCard"
import ContactForm from "@/containers/ContactForm"
import style from "./contact.module.css"

const ContactUsSection = () => {
  return (
    <section className="h-auto w-auto flex flex-wrap justify-center p-0 pt-10 bg-white md:gap-6 max-[470px]:flex-col max-[770px]:items-center ">
      {brancycontactDetails &&
        brancycontactDetails.map((item) => {
          return <ContactDetailCard key={item.id} data={item} />
        })}
      {/* Map Section */}
      <div className=" flex flex-wrap md:flex-nowrap items-center justify-center ">
        <div className="min-w-[50%]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3669.533477353274!2d72.5376850098213!3d23.11416777902256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e83d506ef6f0f%3A0x550c5bf579c81861!2sThe%20Special%20Character!5e0!3m2!1sen!2sin!4v1706001823120!5m2!1sen!2sin"
            width="100%"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-screen rounded-xl"
          />
        </div>
        <div>
          <ContactForm />
        </div>
      </div>
      {/* <div className="flex w-full items-center shadow rounded-xl max-[770px]:min-h-[300px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3669.533477353274!2d72.5376850098213!3d23.11416777902256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e83d506ef6f0f%3A0x550c5bf579c81861!2sThe%20Special%20Character!5e0!3m2!1sen!2sin!4v1706001823120!5m2!1sen!2sin"
          width="100%"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="h-screen rounded-xl"
        />
      </div> */}
    </section>

    // <section>
    //   <div className={style.contactContainer}>
    //     <div className={style.contactDetailWrapper}>
    //       {contactDetails &&
    //         contactDetails.map((item) => {
    //           return <ContactDetailCard key={item.id} data={item} />
    //         })}
    //     </div>
    // <ContactForm />
    //   </div>
    // </section>
  )
}

export default ContactUsSection
