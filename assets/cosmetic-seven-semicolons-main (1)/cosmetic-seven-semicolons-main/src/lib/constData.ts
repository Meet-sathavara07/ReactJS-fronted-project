import Facebook from "@/public/icons/facebook.svg"
import Twitter from "@/public/icons/twitter.svg"
import Instagram from "@/public/icons/instagram.svg"
import Linkedin from "@/public/icons/linkedin.svg"
import Location from "@/public/icons/location.svg"
import Email from "@/public/icons/email.svg"
import Phone from "@/public/icons/phone.svg"
// import bg1 from "@/public/images/bg1.webp"

//----------------------------NAVBAR----------------------------------//
export const navbarData = {
  // heading1: "Bea You",
  heading1: "/images/logo.webp",
  heading2: ".",
  navLinks: [
    {
      id: 1,
      title: "Home",
      url: "/",
    },
    {
      id: 2,
      title: "Shop",
      url: "/products",
    },
    {
      id: 3,
      title: "About us",
      url: "/about-us",
    },
    {
      id: 4,
      title: "Contact us",
      url: "/contact-us",
    },
  ],
}

//-------------------------------HOME PAGE ------------------------------//
// export const homePageBanner = {
//   backgroundBannerImage: "/images/bannerImage.png",
//   heading: "Nourish the glow",
//   description:
//     "Discover the beauty within with Beayou , be Beautiful You.It means you can wear the less makeup and let skin SHINE through.",
//   actionBtn1: "Shop Now",
//   actionBtn2: "Explore",
// }

export const whyChooseUs = {
  image: "/images/whyChooseUsImg.jpg",
  heading: "We take skincare seriously",
  description: `As said "Glowing skin is always in".So we believe in empowering individuals to embrace their authentic selves through skincare that goes beyond the surface.
    We strive to create products that cater to individual needs, embracing the beauty of differences. Join us in the journey to discover, enhance, and truly 'Bea You'.`,
  services: [
    {
      id: 1,
      icon: "/icons/shippingtruck.svg",
      heading: "Premium Quality Ingredients",
      serviceDescription:
        "At Bea You, we prioritize the use of premium and carefully curated ingredients in our beauty products. Our formulations are crafted with the finest botanical extracts, antioxidants, and cutting-edge skincare technologies to ensure optimal effectiveness and results you can see and feel.",
    },
    {
      id: 2,
      icon: "/icons/bag.svg",
      heading: "For Every Skin Type",
      serviceDescription:
        "We understand that each person's skin is unique. That's why our product range is designed to cater to various skin types, tones, and concerns. Whether you have sensitive skin, oily complexion, or specific skincare needs, our solutions is to address your individual beauty requirements.",
    },
    {
      id: 3,
      icon: "/icons/support.svg",
      heading: "Cruelty-Free and Environmentally Conscious",
      serviceDescription:
        "We are committed to ethical beauty practices. All our products are cruelty-free, meaning they are not tested on animals. Additionally, we prioritize environmentally conscious packaging and sustainable practices to minimize our impact on the planet. Choosing Bea You means making a responsible and compassionate choice for your beauty routine.",
    },
    {
      id: 4,
      icon: "/icons/return.svg",
      heading: "Visible and Lasting Results",
      serviceDescription:
        "Our products are formulated with a focus on delivering visible and long-lasting results. Whether you're seeking radiant skin, reduced signs of aging, or a flawless complexion, our beauty products are designed to meet your expectations. Experience the transformative power of our formulations and witness the positive changes in your skin.",
    },
    {
      id: 5,
      icon: "/icons/return.svg",
      heading: "Expertly Crafted by Skincare Specialists",
      serviceDescription:
        "Behind every Bea You product is a team of dedicated skincare specialists and beauty experts. Our professionals work tirelessly to stay at the forefront of beauty trends, ensuring that our products reflect the latest innovations in the industry. Trust in the expertise of our team to bring you skincare and beauty solutions that are both effective and on-trend.",
    },
    {
      id: 6,
      icon: "/icons/return.svg",
      heading: "Community and Empowerment",
      serviceDescription:
        "Behind every Bea You product is a team of dedicated skincare specialists and beauty experts. Our professionals work tirelessly to stay at the forefront of beauty trends, ensuring that our products reflect the latest innovations in the industry. Trust in the expertise of our team to bring you skincare and beauty solutions that are both effective and on-trend.",
    },
  ],
}

export const testimonialData = {
  heading: "Testimonials",
  testimonialCards: [
    {
      id: 1,
      description: `"I've always believed that age is just a number, and with the Ageless Radiance Serum from [Your Beauty Brand], I've found the secret to aging gracefully. This serum is nothing short of a magic potion for my skin!

        I appreciate the meticulous selection of ingredients by [Your Beauty Brand]. Knowing that the serum is packed with antioxidants and nourishing elements gives me the confidence that I'm investing in the long-term health of my skin. Plus, the fact that the brand is committed to cruelty-free practices aligns perfectly with my values."`,
      image: "/images/person-1.png",
      name: "Nishita",
      designation: "CEO, Brancy-Cosmetics",
    },
    {
      id: 2,
      description: `"I am absolutely in love with the Radiant Glow Daily Cleanser from Bea You As someone who has tried countless facewashes over the years, I can confidently say that this one stands out in a league of its own.
      After just a few weeks of incorporating it into my daily routine,  I noticed a difference. The gentle exfoliation and deep cleansing action of this facewash have worked wonders on my skin. What's even more impressive is its ability to tackle stubborn blemishes without drying out my skin. 
        "`,
      image: "/images/person-1.png",
      name: "Ritesh Newal",
      designation: "CEO, Co-Founder, XYZ Inc.",
    },
  ],
}

export const shimmerData = {
  heading: "shimmer Card",
  shimmerCardData: [
    {
      id: "1",
      shImg: "/images/sale1.webp",
      className: "rounded",
    },
    {
      id: "2",
      shImg: "/images/sale2.webp",
    },
    {
      id: "3",
      shImg: "/images/sale3.webp",
    },
  ],
}

// export const categoryData ={
// heading: "category Card",
// categoryCardData : [
//   {
//     id : "1",
//     CImg: "/images/category1.webp",
//     bgColor: "bg-red-100",
//     title: "hair care",
//     tag:"new",

//   },
//   {
//     id : "2",
//     CImg: "/images/category2.webp",
//     title: "Skin care",
//     bgColor:"bg-green-100"

//   },
//   {
//     id : "3",
//     CImg: "/images/category3.webp",
//     title: "Lip stick",
//     bgColor:"bg-blue-100"

//   },
//   {
//     id : "4",
//     CImg: "/images/category4.webp",
//     title: "Lip stick",
//     tag:"sale",
//     bgColor:"bg-purple-100"

//   },
//   {
//     id : "5",
//     CImg: "/images/category5.webp",
//     title: "Lip stick",
//     bgColor:"bg-blue-100"

//   },
//   {
//     id : "6",
//     CImg: "/images/category6.webp",
//     title: "Lip stick",
//     bgColor:"bg-purple-100"

//   },
// ]
// }

// export const categoryData = {
//   heading: "category Card",
//   categoryCardData: [
//     {
//       id: "1",
//       image: "/images/category1.webp",
//       title: "Hair care",
//       tag: "new",
//     },
//     {
//       id: "2",
//       image: "/images/category2.webp",
//       title: "Skin care",
//     },
//     {
//       id: "3",
//       image: "/images/category3.webp",
//       title: "Lip stick",
//     },
//     {
//       id: "4",
//       image: "/images/category4.webp",
//       title: "Face skin",
//       tag: "sale",
//     },
//     {
//       id: "5",
//       image: "/images/category5.webp",
//       title:"Blusher",
//     },
//     {
//       id: "6",
//       image: "/images/category6.webp",
//       title: "Natural",
//     },
//   ],
// }

export const categoryData = {
  heading: "category Card",
  categoryCardData: [
    {
      id: "1",
      CImg: "/images/category1.webp",
      color: "green",
      title: "Hair care",
      tag: "new",
    },
    {
      id: "2",
      CImg: "/images/category2.webp",
      color: "yellow",
      title: "Skin care",
    },
    {
      id: "3",
      CImg: "/images/category3.webp",
      title: "Lip stick",
      color: "purple",
    },
    {
      id: "4",
      CImg: "/images/category4.webp",
      title: "Face Skin",
      tag: "sale",
      color: "Skin",
    },
    {
      id: "5",
      CImg: "/images/category5.webp",
      title: "Blusher",
      color: "pink",
    },
    {
      id: "6",
      CImg: "/images/category6.webp",
      title: "Natural",
      color: "Syellow",
    },
  ],
}

// export const Productbranded ={

//   productsbrand : [
//      {
//        id: 1,
//        name: "Hare Care",
//        image: "/images/harecare.webp",
//        color: "#DCFFD2",
//      },
//      {
//        id: 2,
//        name: "Skin Care",
//        image: "/images/skincare.webp",
//        color: "#FFEDB4",
//      },
//      {
//        id: 3,
//        name: "Lip Stick",
//        image: "/images/lipstick.webp",
//        color: "#DFE4FF",
//      },
//      {
//        id: 4,
//        name: "Face Skin",
//        image: "/images/faceskin.webp",
//        color: "#FFEACC",
//      },
//      {
//        id: 5,
//        name: "Blusher",
//        image: "/images/blusher.webp",
//        color: "#FFDAE0",
//      },
//      {
//        id: 6,
//        name: "Natural",
//        image: "/images/natural.webp",
//        color: "#FFF3DA",
//      },
//    ]

// }

//-------------------------------FOOTER-------------------------------//

export const footerData = {
  footerImage: "/images/logo.webp",
  newsLetter: {
    heading: "Subscribe to Newsletter",
  },

  description:
    "Lorem ipsum dolor sit amet consectetur,adipisicing elit. In, distinctio?",
  socialMedia: [
    {
      id: 1,
      name: "facebook",
      icon: Facebook,
      url: "https://www.facebook.com/creatorsongraphy"
    },
    {
      id: 2,
      name: "Twitter",
      icon: Twitter,
      url: "https://twitter.com/graphyapp"
    },

    {
      id: 4,
      name: "Linkedin",
      icon: Linkedin,
      url: "https://www.linkedin.com/company/thespecialcharacter/"
    },
  ],
  footerLinks: [
    [
      {
        id: 1,
        title: "Blog",
        url: "/products",
      },
      {
        id: 2,
        title: "Privacy",
        url: "/Privacy-policy",
      },

      {
        id: 3,
        title: "My Account",
        url: "/brancylogin",
      },
    ],
    [
      {
        id: 1,
        title: "About us",
        url: "/about-us",
      },
      {
        id: 2,
        title: "Login",
        url: "/brancylogin",
      },
      {
        id: 3,
        title: "FAQ's",
        url: "/FAQ",
      },
    ],
    [
      {
        id: 1,
        title: "Contact",
        url: "/contact-us",
      },
      {
        id: 2,
        title: "Shop",
        url: "/products",
      },
    ],
  ],
  copyright: {
    description: "Copyright ©2023. All Rights Reserved.",
    links: [
      {
        id: 1,
        title: "Terms & Conditions",
        url: "/terms-and-conditions",
      },
      {
        id: 2,
        title: "Privacy Policy",
        url: "/Privacy-policy",
      },
      {
        id: 3,
        title: "Team Members",
        url: "/TeamMembers",
      },
    ],
  },
}
//----------------------------------LOGIN SECTION------------------------------------//
export const LoginVideo = {
  image: "/images/vid.mp4",
  link: "/brancyregister",
}
export const RegisterVideo = {
  image: "/images/vid.mp4",
  link: "/brancylogin",
}
//-------------------------------TEAM MEMBERS SECTION---------------------------------//
export const teamMemberCard = {
  heading: "TEAM SEVEN SEMICOLONS",
  subtitle: "Meet our creative team members",
  memberimages: [
    {
      id: 1,
      url: "/images/yashvi.jpeg",
      title: "Yashvi Vithalani",
      role: "Team Leader",
      linkedin: "https://www.linkedin.com/in/yashvi-vithalani-26413a273/",
      instagram: "https://www.instagram.com/vithalaniyashvi_21/?hl=en",
      github: "https://github.com/YashviVithalani",
    },
    {
      id: 2,
      url: "/images/dhrumil.jpeg",
      title: "Darji Dhrumil",
      role: "Co-Team Lead",
      linkedin: "https://www.linkedin.com/in/darji-dhrumil-962745213/",
      instagram: "https://www.instagram.com/darji.dhrumil/",
      github: "https://github.com/DarjiDhrumil",
    },
    {
      id: 3,
      url: "/images/kreena.jpeg",
      title: "Kreena Shah",
      role: "Team Member",
      linkedin: "https://www.linkedin.com/in/kreena-shah-678b262aa/",
      instagram: "https://www.instagram.com/kinuuh__36_/",
      github: "https://github.com/Kreenashah36",
    },

    {
      id: 4,
      url: "/images/manali.jpg",
      title: "Manali Dama",
      role: "Team Member",
      linkedin:
        "https://www.linkedin.com/in/manali-dama-0b865a268?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      instagram:
        "https://www.instagram.com/_minnie._06?igsh=MWZjbnlicGZjd3U5OQ==",
      github: "https://github.com/ManaliDama",
    },
    {
      id: 5,
      url: "/images/vraj.jpeg",
      title: "Vraj Patel",
      role: "Team Member",
      linkedin:
        "https://www.linkedin.com/in/vraj-patel-6b1813247?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      instagram:
        "https://www.instagram.com/vraj.__.patel_?igsh=MWg1M2diczk1M2k5bQ==",
      github: "https://github.com/vrajpatel48",
    },
    {
      id: 6,
      url: "/images/dhwani.jpg",
      title: "Dhwani Patel",
      role: "Team Member",
      linkedin:
        "https://www.linkedin.com/in/patel-dhwani-903213247?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      instagram:
        "https://www.instagram.com/dhwani212003?igsh=MTY5cGFkZDR4ZHcwdQ==",
      github: "https://github.com/dhwani212003",
    },
    {
      id: 7,
      url: "/images/avi.jpeg",
      title: "Avi Mungra",
      role: "Team Member",
      linkedin:
        "https://www.linkedin.com/in/avi-mungra?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      instagram: "https://www.instagram.com/",
      github: "https://github.com/AviMungra",
    },
    {
      id: 8,
      url: "/images/shrav.jpg",
      title: "Shravanee S.",
      role: "Team Member",
      linkedin: "https://in.linkedin.com/in/shravanee-shivarkar-317160232",
      instagram: "https://www.instagram.com/shrav22_?igsh=MWM0bzJ0NmV4ZHBhaw==",
      github:
        "https://github.com/I-Shravanee?tab=overview&from=2023-12-01&to=2023-12-31",
    },
  ],
}
//----------------------------------FAQ SECTION-----------------------------------------//
export const FAQCard = {
  cards: [
    {
      id: 1,
      question:
        "Mauris congue euismod purus at semper. Morbi et vulputate massa?",
      answer:
        "Donec mattis finibus elit ut tristique. Nullam tempus nunc eget arcu vulputate, eu porttitor tellus commodo. Aliquam erat volutpat. Aliquam consectetur lorem eu viverra lobortis. Morbi gravida, nisi id fringilla ultricies, elit lorem eleifend lorem",
    },
    {
      id: 2,
      question: "Donec mattis finibus elit ut tristique?",
      answer:
        "Donec mattis finibus elit ut tristique. Nullam tempus nunc eget arcu vulputate, eu porttitor tellus commodo. Aliquam erat volutpat. Aliquam consectetur lorem eu viverra lobortis. Morbi gravida, nisi id fringilla ultricies, elit lorem eleifend lorem",
    },
    {
      id: 3,
      question: "Aenean elit orci, efficitur quis nisl at, accusan?",
      answer:
        "Donec mattis finibus elit ut tristique. Nullam tempus nunc eget arcu vulputate, eu porttitor tellus commodo. Aliquam erat volutpat. Aliquam consectetur lorem eu viverra lobortis. Morbi gravida, nisi id fringilla ultricies, elit lorem eleifend lorem",
    },
    {
      id: 4,
      question: "Pellentesque habitant morbi tristique senectus et netus?",
      answer:
        "Donec mattis finibus elit ut tristique. Nullam tempus nunc eget arcu vulputate, eu porttitor tellus commodo. Aliquam erat volutpat. Aliquam consectetur lorem eu viverra lobortis. Morbi gravida, nisi id fringilla ultricies, elit lorem eleifend lorem",
    },
    {
      id: 5,
      question: "Nam pellentesque aliquam metus",
      answer:
        "Donec mattis finibus elit ut tristique. Nullam tempus nunc eget arcu vulputate, eu porttitor tellus commodo. Aliquam erat volutpat. Aliquam consectetur lorem eu viverra lobortis. Morbi gravida, nisi id fringilla ultricies, elit lorem eleifend lorem",
    },
    {
      id: 6,
      question: "Anean elit orci, efficitur quis nisl at?",
      answer:
        "Donec mattis finibus elit ut tristique. Nullam tempus nunc eget arcu vulputate, eu porttitor tellus commodo. Aliquam erat volutpat. Aliquam consectetur lorem eu viverra lobortis. Morbi gravida, nisi id fringilla ultricies, elit lorem eleifend lorem",
    },
    {
      id: 7,
      question: "Morbi gravida, nisi id fringilla ultricies, elit lorem?.",
      answer:
        "Donec mattis finibus elit ut tristique. Nullam tempus nunc eget arcu vulputate, eu porttitor tellus commodo. Aliquam erat volutpat. Aliquam consectetur lorem eu viverra lobortis. Morbi gravida, nisi id fringilla ultricies, elit lorem eleifend lorem",
    },
    {
      id: 8,
      question: "Anena elit orci, efficitur quis nisl at, accumsan?",
      answer:
        "Donec mattis finibus elit ut tristique. Nullam tempus nunc eget arcu vulputate, eu porttitor tellus commodo. Aliquam erat volutpat. Aliquam consectetur lorem eu viverra lobortis. Morbi gravida, nisi id fringilla ultricies, elit lorem eleifend lorem",
    },
  ],
}

//-----------------------------SHOP SECTION---------------------------------------------//

export const shopPageBanner = {
  heading: "Home",
  heading1: "Products",
  subheading: "All Products",
}

export const topProduct = {
  heading: "It's a SKIN-VESTMENT",
  description: `At 'Bea You,' our mission transcends conventional beauty standards.Our goal is to foster a community where every skin journey is celebrated, recognizing that beauty is diverse and personal.
    'Bea You' is not just a skincare brand; it's a commitment to authenticity, self-love, and the belief that everyone deserves to feel confident in their unique skin.`,
  actionBtn: "Explore",
}

export const products = [
  {
    id: 1,
    handle: "product-1",
    productThumbnail: {
      id: 0,
      url: "/images/product1.png",
    },
    productImages: [
      {
        id: 1,
        url: "/images/product2.png",
      },
      {
        id: 2,
        url: "/images/product3.png",
      },
      {
        id: 3,
        url: "/images/product1.png",
      },
    ],
    productName: "Cleanser",
    price: {
      productDiscountPrice: "₹399/-",
      productOriginalPrice: "₹499/-",
    },
    weight: "125 Ml",
    category: "Skin-Face",
    ingredients: `Cucumber Extract, Lemon Extract, Rosemary Extract, Glycolic Acid, Lactic Acid, Sodium Hyaluronate, Niacinamide, L- Argenine, Licorice Extract, Alpha Arbutin, Berberis Extract, Propylene Glycol.
    Pluethylene Glycol 400, Glycerin, Edta, Fragrance, Triethanol Amine, Phenoxyethanol, Ethylhexylglycerin & Aqua 
    DIRECTION FOR USE: Put a pea size amount of Fair-Wish Under Eye Gel on the Tip of your ring finger & apply small dots under the eye & message gently. Be Careful & make sure you are not getting close to your eyelash line.`,
    howToUse: `Apply cleanser and gently massage into skin barrier.
    Wash with normal water.`,
    productDescription: `**Feel Refresh | BE Nourished| Be Beautiful | Bea You**

Get cleansed, soft & hydrated skin in just 40 seconds* with Bea You Face Cleanser. It gently yet effectively cleanses skin to remove dirt, oil and other impurities without making skin dry. Adding it in your routine will minimize the effects of environmental stressors on the skin, leaving you with cleanand soft skin. 
		
Defend against 5 sign of Skin sensitivity: Weakened free, Dryness, Roughness, Irritaton, roughness, Tightness 
		
Paraben Sulphate free 
Cruelty free 
Make in india 
		
**Key point:** Hydrating Glycerin, Vitamin B3 & B5, Non foaming formula vitamin b3: prevent water loss and retain skin's moisture content. It's also known to increase keratin. Vitamin b5 : it helps to boost the production of glutathione in our skin. it has anti-inflammatory properties that soothe irritated and dry skin`,
    additionalInfo: `**Image and actual product may very**
		
		**STORAGE:** Store in a cool place. Keep away from direct sun light. WARNING: Do not refrigerate. Replace the cap tightly after use.`,
    reviewCount: 55,
    rating: 3,
  },
  {
    id: 2,
    handle: "product-2",
    productThumbnail: {
      id: 0,
      url: "/images/product2.png",
    },
    productImages: [
      {
        id: 1,
        url: "/images/product2.png",
      },
      {
        id: 2,
        url: "/images/product2.png",
      },
      {
        id: 3,
        url: "/images/product2.png",
      },
    ],
    productName: "Gluta Radiance",
    price: {
      productDiscountPrice: "₹399/-",
      productOriginalPrice: "₹499/-",
    },
    weight: "125 Ml",
    category: "Skin-Face",
    ingredients: `Cucumber Extract, Lemon Extract, Rosemary Extract, Glycolic Acid, Lactic Acid, Sodium Hyaluronate, Niacinamide, L- Argenine, Licorice Extract, Alpha Arbutin, Berberis Extract, Propylene Glycol.
    Pluethylene Glycol 400, Glycerin, Edta, Fragrance, Triethanol Amine, Phenoxyethanol, Ethylhexylglycerin & Aqua 
    DIRECTION FOR USE: Put a pea size amount of Fair-Wish Under Eye Gel on the Tip of your ring finger & apply small dots under the eye & message gently. Be Careful & make sure you are not getting close to your eyelash line.
    `,
    howToUse: `Apply cleanser and gently massage into skin barrier.
    Wash with normal water.`,
    productDescription: `Power Glutathione | Reduce hyperpigmentation | Pore minimizer | Deep Hydration |Be Beautiful | Bea You

Unleash your inner radiance with Bea You Gluta Radiance moisturiser.The powerhouse of hydration with vitamin A,C, E. IThis gives your skin a replenished and dewy appearance, It also leaves your skin feeling soft and supple throughout the day.
      
Defend against 5 sign of Skin sensitivity: Weakened free,Dryness,Roughness,Irritaton,roughness,Tightness
      
Paraben Sulphate free
Cruelty free
Make in india

Key point: 
Glutathione 2%, Alpha Arbutin 0.2%, Niacinamide 0.2%, Hyaluronic Acid 0.2%, Kojic Acid 1%, with Vitamin A,C,E   
vitamin b3: prevent water loss and retain skin's moisture content. It's also known to increase keratin.  
Vitamin b5 : it helps to boost the production of glutathione in our skin. it has anti-inflammatory properties that soothe irritated and dry skin

* Image and actual product may very

STORAGE: Store in a cool place. Keep away from direct sun light.
WARNING: Do not refrigerate. Replace the cap tightly after use.
`,
    reviewCount: 55,
    rating: 3,
  },
  {
    id: 3,
    handle: "product-3",
    productThumbnail: {
      id: 0,
      url: "/images/product3.png",
    },
    productImages: [
      {
        id: 1,
        url: "/images/product3.png",
      },
      {
        id: 2,
        url: "/images/product3.png",
      },
      {
        id: 3,
        url: "/images/product3.png",
      },
    ],
    productName: "Ergonomic Chair",
    price: {
      productDiscountPrice: "₹599/-",
      productOriginalPrice: "₹799/-",
    },
    weight: "125 Ml",
    category: "Skin-Face",
    ingredients: "",
    howToUse: "",
    productDescription:
      "Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio",
    reviewCount: 55,
    rating: 3,
  },
  {
    id: 4,
    handle: "product-4",
    productThumbnail: {
      id: 0,
      url: "/images/product1.png",
    },
    productImages: [
      {
        id: 1,
        url: "/images/product1.png",
      },
      {
        id: 2,
        url: "/images/product1.png",
      },
      {
        id: 3,
        url: "/images/product1.png",
      },
    ],
    productName: "Ergonomic Chair",
    price: {
      productDiscountPrice: "₹899/-",
      productOriginalPrice: "₹1099/-",
    },
    weight: "125 Ml",
    category: "Skin-Face",
    ingredients: "",
    howToUse: "",
    productDescription:
      "Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio",
    reviewCount: 55,
    rating: 3,
  },
  {
    id: 5,
    handle: "product-5",
    productThumbnail: {
      id: 0,
      url: "/images/product2.png",
    },
    productImages: [
      {
        id: 1,
        url: "/images/product2.png",
      },
      {
        id: 2,
        url: "/images/product2.png",
      },
      {
        id: 3,
        url: "/images/product2.png",
      },
    ],
    productName: "Ergonomic Chair",
    price: {
      productDiscountPrice: "₹399/-",
      productOriginalPrice: "₹699/-",
    },
    weight: "125 Ml",
    category: "Skin-Face",
    ingredients: "",
    howToUse: "",
    productDescription:
      "Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio",
    reviewCount: 55,
    rating: 3,
  },
  {
    id: 6,
    handle: "product-6",
    productThumbnail: {
      id: 0,
      url: "/images/product3.png",
    },
    productImages: [
      {
        id: 1,
        url: "/images/product3.png",
      },
      {
        id: 2,
        url: "/images/product3.png",
      },
      {
        id: 3,
        url: "/images/product3.png",
      },
    ],
    productName: "Ergonomic Chair",
    price: {
      productDiscountPrice: "₹199/-",
      productOriginalPrice: "₹399/-",
    },
    weight: "125 Ml",
    category: "Skin-Face",
    ingredients: "",
    howToUse: "",
    productDescription:
      "Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio",
    reviewCount: 55,
    rating: 3,
  },
  {
    id: 7,
    handle: "product-7",
    productThumbnail: {
      id: 0,
      url: "/images/product1.png",
    },
    productImages: [
      {
        id: 1,
        url: "/images/product1.png",
      },
      {
        id: 2,
        url: "/images/product1.png",
      },
      {
        id: 3,
        url: "/images/product1.png",
      },
    ],
    productName: "Ergonomic Chair",
    price: {
      productDiscountPrice: "₹99/-",
      productOriginalPrice: "₹199/-",
    },
    weight: "125 Ml",
    category: "Skin-Face",
    ingredients: "",
    howToUse: "",
    productDescription:
      "Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio",
    reviewCount: 55,
    rating: 3,
  },
  {
    id: 8,
    handle: "product-8",
    productThumbnail: {
      id: 0,
      url: "/images/product2.png",
    },
    productImages: [
      {
        id: 1,
        url: "/images/product2.png",
      },
      {
        id: 2,
        url: "/images/product2.png",
      },
      {
        id: 3,
        url: "/images/product2.png",
      },
    ],
    productName: "Ergonomic Chair",
    price: {
      productDiscountPrice: "₹699/-",
      productOriginalPrice: "₹999/-",
    },
    weight: "125 Ml",
    category: "Skin-Face",
    ingredients: "",
    howToUse: "",
    productDescription:
      "Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio",
    reviewCount: 55,
    rating: 3,
  },
  {
    id: 9,
    handle: "product-9",
    productThumbnail: {
      id: 0,
      url: "/images/product3.png",
    },
    productImages: [
      {
        id: 1,
        url: "/images/product3.png",
      },
      {
        id: 2,
        url: "/images/product3.png",
      },
      {
        id: 3,
        url: "/images/product3.png",
      },
    ],
    productName: "Ergonomic Chair",
    price: {
      productDiscountPrice: "₹699/-",
      productOriginalPrice: "₹899/-",
    },
    weight: "125 Ml",
    category: "Skin-Face",
    ingredients: "",
    howToUse: "",
    productDescription:
      "Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio",
    reviewCount: 55,
    rating: 3,
  },
]

export const productReviewsData = [
  {
    id: 1,
    name: "Tomas Doe",
    image: "/images/person-1.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed viverra amet, sodales faucibus nibh. Vivamus amet potenti ultricies nunc gravida duis. Nascetur scelerisque massa sodales.",
    rating: 4,
  },
  {
    id: 2,
    name: "Tomas Doe",
    image: "/images/person-1.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed viverra amet, sodales faucibus nibh. Vivamus amet potenti ultricies nunc gravida duis. Nascetur scelerisque massa sodales.",
    rating: 5,
  },
  {
    id: 3,
    name: "Tomas Doe",
    image: "/images/person-1.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed viverra amet, sodales faucibus nibh. Vivamus amet potenti ultricies nunc gravida duis. Nascetur scelerisque massa sodales.",
    rating: 4,
  },
  {
    id: 4,
    name: "Tomas Doe",
    image: "/images/person-1.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed viverra amet, sodales faucibus nibh. Vivamus amet potenti ultricies nunc gravida duis. Nascetur scelerisque massa sodales.",
    rating: 3,
  },
]
//-------------------------------------ABOUT US -------------------------------------------//

export const aboutUsPageBanner = {
  backgroundBannerImage: "/images/bannerImage.png",
  heading: "About Us",
  description:
    "Discover the beauty within with Beayou , be Beautiful You.It means you can wear the less makeup and let skin SHINE through.",
  actionBtn1: "Shop Now",
  actionBtn2: "Explore",
}

export const servicePageBanner = {
  backgroundBannerImage: "",
  heading: "Service",
  description:
    "Discover the beauty within with Beayou , be Beautiful You.It means you can wear the less makeup and let skin SHINE through.",
  actionBtn1: "Shop Now",
  actionBtn2: "Explore",
}

//-----------------------------CONTACT-US--------------------------//

export const contactUsPageBanner = {
  backgroundBannerImage: "/images/bannerImage.png",
  heading: "Contact Us",
  description:
    "Discover the beauty within with Beayou , be Beautiful You.It means you can wear the less makeup and let skin SHINE through.",
  actionBtn1: "Shop Now",
  actionBtn2: "Explore",
}

export const contactDetails = [
  {
    id: 1,
    name: "Address",
    icon: Location,
    description: "43 Raymouth Rd. Baltemoer, London 3910",
  },
  {
    id: 2,
    name: "Email",
    icon: Email,
    description: "info@yourdomain.com",
  },
  {
    id: 3,
    name: "Phone-number",
    icon: Phone,
    description: "+1 294 3925 3939",
  },
]

//-----------------------------CART-------------------------------------//

export const cartPageBanner = {
  heading: "Home",
  heading1: "Cart",
  subheading: "Cart Products"
}

export const cartPage = {
  cartHeaderList: [
    {
      id: 1,
      name: "Image",
    },
    {
      id: 2,
      name: "Product",
    },
    {
      id: 3,
      name: "Price",
    },
    {
      id: 4,
      name: "Quantity",
    },
    {
      id: 5,
      name: "Total",
    },
    {
      id: 6,
      name: "Remove",
    },
  ],
  cartProductList: [
    {
      id: 1,
      productImage: "/images/product1.png",
      productName: "Chair",
      productPrice: "₹50.00",
    },
    {
      id: 2,
      productImage: "/images/product2.png",
      productName: "Chair",
      productPrice: "₹50.00",
    },
    {
      id: 3,
      productImage: "/images/product3.png",
      productName: "Chair",
      productPrice: "₹50.00",
    },
    {
      id: 4,
      productImage: "/images/product1.png",
      productName: "Chair",
      productPrice: "₹50.00",
    },
    {
      id: 5,
      productImage: "/images/product2.png",
      productName: "Chair",
      productPrice: "₹50.00",
    },
    {
      id: 6,
      productImage: "/images/product3.png",
      productName: "Chair",
      productPrice: "₹50.00",
    },
  ],
  cartActionBtn1: "Update Cart",
  cartActionBtn2: "Continue shopping",
}

export const coupon = {
  heading: "Coupon",
  description: "Lorem a src jkuyyhur",
  CouponActionBtn: "Apply Code",
}

export const cartTotal = {
  heading: "Cart Totals ",
  subtotal: "Subtotal",
  total: "Total",
  checkoutActionBtn: "Proceed To Checkout",
}
//-----------------------------CHECKOUT FORM--------------------------//

// ------------------------------Brancy aboutus banner component---------------//

export const brancyaboutUsPageBanner = {
  image: "/images/about1.webp",
  aboutusimage: "/images/about-title.webp",
  heading: "We, are Brancy ",
  subtitle: "Best cosmetics provider",
  description:
    "Discover the beauty within with Brancy , be Beautiful You.It means you can wear the less makeup and let skin SHINE through.",
  actionBtn1: "Shop Now",
  actionBtn2: "Explore",
}

export const brancyFAQPageBanner = {
  image: "/images/faq-home.webp",
  faqimage: "/images/faq-title.webp",
  heading: "Frequent Questions",
  subtitle: "Best cosmetics provider",
  description:
    "Discover the beauty within with Brancy , be Beautiful You.It means you can wear the less makeup and let skin SHINE through.",
}

export const brancyservicecard = {
  image: "/images/about2.webp",
  services: [
    {
      id: 1,
      icon: "/images/funfact1.webp",
      heading: "5000+",
      serviceDescription: "CLIENTS",
    },
    {
      id: 2,
      icon: "/images/funfact2.webp",
      heading: "250+",
      serviceDescription: "PROJECTS",
    },
    {
      id: 3,
      icon: "/images/funfact3.webp",
      heading: "1.5M+",
      serviceDescription: "REVENUE",
    },
  ],
}
export const aboutusfooter = {
  services: [
    {
      id: 1,
      icon: "/images/feature1.webp",
      heading: "SUPPORT TEAM",
      serviceDescription:
        "Our Support Team is your dedicated ally, ensuring your needs are met with care and expertise to ensure quality support.",
    },
    {
      id: 2,
      icon: "/images/feature2.webp",
      heading: "CERTIFICATION",
      serviceDescription:
        "Ensuring Quality and Trust in Every Product. Our commitment to excellence guarantees your confidence in our offerings.",
    },
    {
      id: 3,
      icon: "/images/feature3.webp",
      heading: "NATURAL PRODUCTS",
      serviceDescription:
        "Harnessing the Power of Nature for Your Beauty. Discover our range crafted with care for a healthier, radiant you.",
    },
  ],
}

export const brancycontactusbanner = {
  image: "/images/Contactus.mp4",
  heading: "Contact",
  description:
    " Reach out to us with your inquiries, feedback, or requests. We're here to assist you. Contact us via phone, email, or our contact form. Our dedicated support team is available around the clock to answer your questions and provide assistance.",
}

export const homeblogpost = [
  {
    id: 1,
    image: "/images/blog1.webp",
    author: " THOMAS DE MOMEN",
    date: "Decemmber 21, 2023",
    description: `"The Beauty of Becoming: Navigating the Journey Within"`,
  },
  {
    id: 2,
    image: "/images/blog2.webp",
    author: "Charlotte du Bois",
    date: "March 6, 2023",
    description: `"Glamour Unveiled: A Makeup Journey to Self-Expression"`,
  },
  {
    id: 3,
    image: "/images/blog3.webp",
    author: " Olivia de Montagne",
    date: "December 20, 2022",
    description: `"Embrace the Beauty Within: A Journey of Self-Discovery"`,
  },
]

export const brancycontactDetails = [
  {
    id: 1,
    name: "location",
    icon: "/images/location.svg",
    description: "The Special Character",
  },
  {
    id: 2,
    name: "Email",
    icon: "/images/email.svg",
    description: "example123@gmail.com",
  },
  {
    id: 3,
    name: "Phone-number",
    icon: "/images/telephone.svg",
    description: "+91 9892763560",
  },
]
export const homePageBanner = {
  backgroundBannerImage: "/images/slider1.webp",
  // heading: "Nourish the glow",
  backgroundBannerImage1: "/images/text-theme.webp",
  heading1: "CLEAN FRESH",
  description:
    " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus possimus error tenetur sunt, repudiandae asperiores, ullam ex non maxime libero.",
  // description:
  //   "Discover the beauty within with Beayou , be Beautiful You.It means you can wear the less makeup and let skin SHINE through.",
  // actionBtn1: "Shop Now",
  // actionBtn2: "Explore"
} //----------------------------PRODUCTS--------------------------------//
// constData.ts

export const productData = [
  {
    id: "1",
    pImg: "/images/shop1.webp",
    title: "Face Serum",
    rating: "5",
    reviews: "10 reviews",
    price: "$200",
    orignalPrice: "$255",
    weight: "125 Ml",
    category: "Skin-Face",
    ingredients: `Cucumber Extract, Lemon Extract, Rosemary Extract, Glycolic Acid, Lactic Acid, Sodium Hyaluronate, Niacinamide, L- Argenine, Licorice Extract, Alpha Arbutin, Berberis Extract, Propylene Glycol.
    Pluethylene Glycol 400, Glycerin, Edta, Fragrance, Triethanol Amine, Phenoxyethanol, Ethylhexylglycerin & Aqua 
    DIRECTION FOR USE: Put a pea size amount of Fair-Wish Under Eye Gel on the Tip of your ring finger & apply small dots under the eye & message gently. Be Careful & make sure you are not getting close to your eyelash line.
    `,
    howToUse: `Apply cleanser and gently massage into skin barrier.
    Wash with normal water.`,
    productDescription: `Power Glutathione | Reduce hyperpigmentation | Pore minimizer | Deep Hydration |Be Beautiful | Bea You

Unleash your inner radiance with Bea You Gluta Radiance moisturiser.The powerhouse of hydration with vitamin A,C, E. IThis gives your skin a replenished and dewy appearance, It also leaves your skin feeling soft and supple throughout the day.
      
Defend against 5 sign of Skin sensitivity: Weakened free,Dryness,Roughness,Irritaton,roughness,Tightness
      
Paraben Sulphate free
Cruelty free
Make in india

Key point: 
Glutathione 2%, Alpha Arbutin 0.2%, Niacinamide 0.2%, Hyaluronic Acid 0.2%, Kojic Acid 1%, with Vitamin A,C,E   
vitamin b3: prevent water loss and retain skin's moisture content. It's also known to increase keratin.  
Vitamin b5 : it helps to boost the production of glutathione in our skin. it has anti-inflammatory properties that soothe irritated and dry skin

* Image and actual product may very

STORAGE: Store in a cool place. Keep away from direct sun light.
WARNING: Do not refrigerate. Replace the cap tightly after use.
`,
  },
  // ... other product entries
  {
    id: "2",
    pImg: "/images/shop2.webp",
    title: "CC Cream",
    rating: "5",
    reviews: "10 reviews",
    price: "$320",
    orignalPrice: "$425",
    weight: "125 Ml",
    category: "Skin-Face",
    ingredients: `Cucumber Extract, Lemon Extract, Rosemary Extract, Glycolic Acid, Lactic Acid, Sodium Hyaluronate, Niacinamide, L- Argenine, Licorice Extract, Alpha Arbutin, Berberis Extract, Propylene Glycol.
    Pluethylene Glycol 400, Glycerin, Edta, Fragrance, Triethanol Amine, Phenoxyethanol, Ethylhexylglycerin & Aqua 
    DIRECTION FOR USE: Put a pea size amount of Fair-Wish Under Eye Gel on the Tip of your ring finger & apply small dots under the eye & message gently. Be Careful & make sure you are not getting close to your eyelash line.
    `,
    howToUse: `Apply cleanser and gently massage into skin barrier.
    Wash with normal water.`,
    productDescription: `Power Glutathione | Reduce hyperpigmentation | Pore minimizer | Deep Hydration |Be Beautiful | Bea You

Unleash your inner radiance with Bea You Gluta Radiance moisturiser.The powerhouse of hydration with vitamin A,C, E. IThis gives your skin a replenished and dewy appearance, It also leaves your skin feeling soft and supple throughout the day.
      
Defend against 5 sign of Skin sensitivity: Weakened free,Dryness,Roughness,Irritaton,roughness,Tightness
      
Paraben Sulphate free
Cruelty free
Make in india

Key point: 
Glutathione 2%, Alpha Arbutin 0.2%, Niacinamide 0.2%, Hyaluronic Acid 0.2%, Kojic Acid 1%, with Vitamin A,C,E   
vitamin b3: prevent water loss and retain skin's moisture content. It's also known to increase keratin.  
Vitamin b5 : it helps to boost the production of glutathione in our skin. it has anti-inflammatory properties that soothe irritated and dry skin

* Image and actual product may very

STORAGE: Store in a cool place. Keep away from direct sun light.
WARNING: Do not refrigerate. Replace the cap tightly after use.
`,
  },
  {
    id: "3",
    pImg: "/images/shop3.webp",
    title: "Lipstick",
    rating: "5",
    reviews: "10 reviews",
    price: "$20",
    orignalPrice: "$25",
    weight: "125 Ml",
    category: "Skin-Face",
    ingredients: `Cucumber Extract, Lemon Extract, Rosemary Extract, Glycolic Acid, Lactic Acid, Sodium Hyaluronate, Niacinamide, L- Argenine, Licorice Extract, Alpha Arbutin, Berberis Extract, Propylene Glycol.
    Pluethylene Glycol 400, Glycerin, Edta, Fragrance, Triethanol Amine, Phenoxyethanol, Ethylhexylglycerin & Aqua 
    DIRECTION FOR USE: Put a pea size amount of Fair-Wish Under Eye Gel on the Tip of your ring finger & apply small dots under the eye & message gently. Be Careful & make sure you are not getting close to your eyelash line.
    `,
    howToUse: `Apply cleanser and gently massage into skin barrier.
    Wash with normal water.`,
    productDescription: `Power Glutathione | Reduce hyperpigmentation | Pore minimizer | Deep Hydration |Be Beautiful | Bea You

Unleash your inner radiance with Bea You Gluta Radiance moisturiser.The powerhouse of hydration with vitamin A,C, E. IThis gives your skin a replenished and dewy appearance, It also leaves your skin feeling soft and supple throughout the day.
      
Defend against 5 sign of Skin sensitivity: Weakened free,Dryness,Roughness,Irritaton,roughness,Tightness
      
Paraben Sulphate free
Cruelty free
Make in india

Key point: 
Glutathione 2%, Alpha Arbutin 0.2%, Niacinamide 0.2%, Hyaluronic Acid 0.2%, Kojic Acid 1%, with Vitamin A,C,E   
vitamin b3: prevent water loss and retain skin's moisture content. It's also known to increase keratin.  
Vitamin b5 : it helps to boost the production of glutathione in our skin. it has anti-inflammatory properties that soothe irritated and dry skin

* Image and actual product may very

STORAGE: Store in a cool place. Keep away from direct sun light.
WARNING: Do not refrigerate. Replace the cap tightly after use.
`,
  },
  {
    id: "4",
    pImg: "/images/shop4.webp",
    title: "Product 4",
    rating: "5",
    reviews: "10 reviews",
    price: "$20",
    orignalPrice: "$25",
    weight: "125 Ml",
    category: "Skin-Face",
    ingredients: `Cucumber Extract, Lemon Extract, Rosemary Extract, Glycolic Acid, Lactic Acid, Sodium Hyaluronate, Niacinamide, L- Argenine, Licorice Extract, Alpha Arbutin, Berberis Extract, Propylene Glycol.
    Pluethylene Glycol 400, Glycerin, Edta, Fragrance, Triethanol Amine, Phenoxyethanol, Ethylhexylglycerin & Aqua 
    DIRECTION FOR USE: Put a pea size amount of Fair-Wish Under Eye Gel on the Tip of your ring finger & apply small dots under the eye & message gently. Be Careful & make sure you are not getting close to your eyelash line.
    `,
    howToUse: `Apply cleanser and gently massage into skin barrier.
    Wash with normal water.`,
    productDescription: `Power Glutathione | Reduce hyperpigmentation | Pore minimizer | Deep Hydration |Be Beautiful | Bea You

Unleash your inner radiance with Bea You Gluta Radiance moisturiser.The powerhouse of hydration with vitamin A,C, E. IThis gives your skin a replenished and dewy appearance, It also leaves your skin feeling soft and supple throughout the day.
      
Defend against 5 sign of Skin sensitivity: Weakened free,Dryness,Roughness,Irritaton,roughness,Tightness
      
Paraben Sulphate free
Cruelty free
Make in india

Key point: 
Glutathione 2%, Alpha Arbutin 0.2%, Niacinamide 0.2%, Hyaluronic Acid 0.2%, Kojic Acid 1%, with Vitamin A,C,E   
vitamin b3: prevent water loss and retain skin's moisture content. It's also known to increase keratin.  
Vitamin b5 : it helps to boost the production of glutathione in our skin. it has anti-inflammatory properties that soothe irritated and dry skin

* Image and actual product may very

STORAGE: Store in a cool place. Keep away from direct sun light.
WARNING: Do not refrigerate. Replace the cap tightly after use.
`,
  },
  {
    id: "5",
    pImg: "/images/shop5.webp",
    title: "Product 5",
    rating: "5",
    reviews: "10 reviews",
    price: "$20",
    orignalPrice: "$25",
    weight: "125 Ml",
    category: "Skin-Face",
    ingredients: `Cucumber Extract, Lemon Extract, Rosemary Extract, Glycolic Acid, Lactic Acid, Sodium Hyaluronate, Niacinamide, L- Argenine, Licorice Extract, Alpha Arbutin, Berberis Extract, Propylene Glycol.
    Pluethylene Glycol 400, Glycerin, Edta, Fragrance, Triethanol Amine, Phenoxyethanol, Ethylhexylglycerin & Aqua 
    DIRECTION FOR USE: Put a pea size amount of Fair-Wish Under Eye Gel on the Tip of your ring finger & apply small dots under the eye & message gently. Be Careful & make sure you are not getting close to your eyelash line.
    `,
    howToUse: `Apply cleanser and gently massage into skin barrier.
    Wash with normal water.`,
    productDescription: `Power Glutathione | Reduce hyperpigmentation | Pore minimizer | Deep Hydration |Be Beautiful | Bea You

Unleash your inner radiance with Bea You Gluta Radiance moisturiser.The powerhouse of hydration with vitamin A,C, E. IThis gives your skin a replenished and dewy appearance, It also leaves your skin feeling soft and supple throughout the day.
      
Defend against 5 sign of Skin sensitivity: Weakened free,Dryness,Roughness,Irritaton,roughness,Tightness
      
Paraben Sulphate free
Cruelty free
Make in india

Key point: 
Glutathione 2%, Alpha Arbutin 0.2%, Niacinamide 0.2%, Hyaluronic Acid 0.2%, Kojic Acid 1%, with Vitamin A,C,E   
vitamin b3: prevent water loss and retain skin's moisture content. It's also known to increase keratin.  
Vitamin b5 : it helps to boost the production of glutathione in our skin. it has anti-inflammatory properties that soothe irritated and dry skin

* Image and actual product may very

STORAGE: Store in a cool place. Keep away from direct sun light.
WARNING: Do not refrigerate. Replace the cap tightly after use.
`,
  },
  {
    id: "6",
    pImg: "/images/shop6.webp",
    title: "Product 6",
    rating: "5",
    reviews: "10 reviews",
    price: "$20",
    orignalPrice: "$25",
    weight: "125 Ml",
    category: "Skin-Face",
    ingredients: `Cucumber Extract, Lemon Extract, Rosemary Extract, Glycolic Acid, Lactic Acid, Sodium Hyaluronate, Niacinamide, L- Argenine, Licorice Extract, Alpha Arbutin, Berberis Extract, Propylene Glycol.
    Pluethylene Glycol 400, Glycerin, Edta, Fragrance, Triethanol Amine, Phenoxyethanol, Ethylhexylglycerin & Aqua 
    DIRECTION FOR USE: Put a pea size amount of Fair-Wish Under Eye Gel on the Tip of your ring finger & apply small dots under the eye & message gently. Be Careful & make sure you are not getting close to your eyelash line.
    `,
    howToUse: `Apply cleanser and gently massage into skin barrier.
    Wash with normal water.`,
    productDescription: `Power Glutathione | Reduce hyperpigmentation | Pore minimizer | Deep Hydration |Be Beautiful | Bea You

Unleash your inner radiance with Bea You Gluta Radiance moisturiser.The powerhouse of hydration with vitamin A,C, E. IThis gives your skin a replenished and dewy appearance, It also leaves your skin feeling soft and supple throughout the day.
      
Defend against 5 sign of Skin sensitivity: Weakened free,Dryness,Roughness,Irritaton,roughness,Tightness
      
Paraben Sulphate free
Cruelty free
Make in india

Key point: 
Glutathione 2%, Alpha Arbutin 0.2%, Niacinamide 0.2%, Hyaluronic Acid 0.2%, Kojic Acid 1%, with Vitamin A,C,E   
vitamin b3: prevent water loss and retain skin's moisture content. It's also known to increase keratin.  
Vitamin b5 : it helps to boost the production of glutathione in our skin. it has anti-inflammatory properties that soothe irritated and dry skin

* Image and actual product may very

STORAGE: Store in a cool place. Keep away from direct sun light.
WARNING: Do not refrigerate. Replace the cap tightly after use.
`,
  },
  {
    id: "7",
    pImg: "/images/shop1.webp",
    title: "Product 7",
    rating: "5",
    reviews: "10 reviews",
    price: "$20",
    orignalPrice: "$25",
    weight: "125 Ml",
    category: "Skin-Face",
    ingredients: `Cucumber Extract, Lemon Extract, Rosemary Extract, Glycolic Acid, Lactic Acid, Sodium Hyaluronate, Niacinamide, L- Argenine, Licorice Extract, Alpha Arbutin, Berberis Extract, Propylene Glycol.
    Pluethylene Glycol 400, Glycerin, Edta, Fragrance, Triethanol Amine, Phenoxyethanol, Ethylhexylglycerin & Aqua 
    DIRECTION FOR USE: Put a pea size amount of Fair-Wish Under Eye Gel on the Tip of your ring finger & apply small dots under the eye & message gently. Be Careful & make sure you are not getting close to your eyelash line.
    `,
    howToUse: `Apply cleanser and gently massage into skin barrier.
    Wash with normal water.`,
    productDescription: `Power Glutathione | Reduce hyperpigmentation | Pore minimizer | Deep Hydration |Be Beautiful | Bea You

Unleash your inner radiance with Bea You Gluta Radiance moisturiser.The powerhouse of hydration with vitamin A,C, E. IThis gives your skin a replenished and dewy appearance, It also leaves your skin feeling soft and supple throughout the day.
      
Defend against 5 sign of Skin sensitivity: Weakened free,Dryness,Roughness,Irritaton,roughness,Tightness
      
Paraben Sulphate free
Cruelty free
Make in india

Key point: 
Glutathione 2%, Alpha Arbutin 0.2%, Niacinamide 0.2%, Hyaluronic Acid 0.2%, Kojic Acid 1%, with Vitamin A,C,E   
vitamin b3: prevent water loss and retain skin's moisture content. It's also known to increase keratin.  
Vitamin b5 : it helps to boost the production of glutathione in our skin. it has anti-inflammatory properties that soothe irritated and dry skin

* Image and actual product may very

STORAGE: Store in a cool place. Keep away from direct sun light.
WARNING: Do not refrigerate. Replace the cap tightly after use.
`,
  },
  {
    id: "7",
    pImg: "/images/shop1.webp",
    title: "Product 7",
    rating: "5",
    reviews: "10 reviews",
    price: "$20",
    orignalPrice: "$25",
    weight: "125 Ml",
    category: "Skin-Face",
    ingredients: `Cucumber Extract, Lemon Extract, Rosemary Extract, Glycolic Acid, Lactic Acid, Sodium Hyaluronate, Niacinamide, L- Argenine, Licorice Extract, Alpha Arbutin, Berberis Extract, Propylene Glycol.
      Pluethylene Glycol 400, Glycerin, Edta, Fragrance, Triethanol Amine, Phenoxyethanol, Ethylhexylglycerin & Aqua 
      DIRECTION FOR USE: Put a pea size amount of Fair-Wish Under Eye Gel on the Tip of your ring finger & apply small dots under the eye & message gently. Be Careful & make sure you are not getting close to your eyelash line.
      `,
    howToUse: `Apply cleanser and gently massage into skin barrier.
      Wash with normal water.`,
    productDescription: `Power Glutathione | Reduce hyperpigmentation | Pore minimizer | Deep Hydration |Be Beautiful | Bea You
  
  Unleash your inner radiance with Bea You Gluta Radiance moisturiser.The powerhouse of hydration with vitamin A,C, E. IThis gives your skin a replenished and dewy appearance, It also leaves your skin feeling soft and supple throughout the day.
        
  Defend against 5 sign of Skin sensitivity: Weakened free,Dryness,Roughness,Irritaton,roughness,Tightness
        
  Paraben Sulphate free
  Cruelty free
  Make in india
  
  Key point: 
  Glutathione 2%, Alpha Arbutin 0.2%, Niacinamide 0.2%, Hyaluronic Acid 0.2%, Kojic Acid 1%, with Vitamin A,C,E   
  vitamin b3: prevent water loss and retain skin's moisture content. It's also known to increase keratin.  
  Vitamin b5 : it helps to boost the production of glutathione in our skin. it has anti-inflammatory properties that soothe irritated and dry skin
  
  * Image and actual product may very
  
  STORAGE: Store in a cool place. Keep away from direct sun light.
  WARNING: Do not refrigerate. Replace the cap tightly after use.
  `,
  },
  {
    id: "7",
    pImg: "/images/shop1.webp",
    title: "Product 7",
    rating: "5",
    reviews: "10 reviews",
    price: "$20",
    orignalPrice: "$25",
    weight: "125 Ml",
    category: "Skin-Face",
    ingredients: `Cucumber Extract, Lemon Extract, Rosemary Extract, Glycolic Acid, Lactic Acid, Sodium Hyaluronate, Niacinamide, L- Argenine, Licorice Extract, Alpha Arbutin, Berberis Extract, Propylene Glycol.
        Pluethylene Glycol 400, Glycerin, Edta, Fragrance, Triethanol Amine, Phenoxyethanol, Ethylhexylglycerin & Aqua 
        DIRECTION FOR USE: Put a pea size amount of Fair-Wish Under Eye Gel on the Tip of your ring finger & apply small dots under the eye & message gently. Be Careful & make sure you are not getting close to your eyelash line.
        `,
    howToUse: `Apply cleanser and gently massage into skin barrier.
        Wash with normal water.`,
    productDescription: `Power Glutathione | Reduce hyperpigmentation | Pore minimizer | Deep Hydration |Be Beautiful | Bea You
    
    Unleash your inner radiance with Bea You Gluta Radiance moisturiser.The powerhouse of hydration with vitamin A,C, E. IThis gives your skin a replenished and dewy appearance, It also leaves your skin feeling soft and supple throughout the day.
          
    Defend against 5 sign of Skin sensitivity: Weakened free,Dryness,Roughness,Irritaton,roughness,Tightness
          
    Paraben Sulphate free
    Cruelty free
    Make in india
    
    Key point: 
    Glutathione 2%, Alpha Arbutin 0.2%, Niacinamide 0.2%, Hyaluronic Acid 0.2%, Kojic Acid 1%, with Vitamin A,C,E   
    vitamin b3: prevent water loss and retain skin's moisture content. It's also known to increase keratin.  
    Vitamin b5 : it helps to boost the production of glutathione in our skin. it has anti-inflammatory properties that soothe irritated and dry skin
    
    * Image and actual product may very
    
    STORAGE: Store in a cool place. Keep away from direct sun light.
    WARNING: Do not refrigerate. Replace the cap tightly after use.
    `,
  },
  {
    id: "7",
    pImg: "/images/shop1.webp",
    title: "Product 7",
    rating: "5",
    reviews: "10 reviews",
    price: "$20",
    orignalPrice: "$25",
    weight: "125 Ml",
    category: "Skin-Face",
    ingredients: `Cucumber Extract, Lemon Extract, Rosemary Extract, Glycolic Acid, Lactic Acid, Sodium Hyaluronate, Niacinamide, L- Argenine, Licorice Extract, Alpha Arbutin, Berberis Extract, Propylene Glycol.
          Pluethylene Glycol 400, Glycerin, Edta, Fragrance, Triethanol Amine, Phenoxyethanol, Ethylhexylglycerin & Aqua 
          DIRECTION FOR USE: Put a pea size amount of Fair-Wish Under Eye Gel on the Tip of your ring finger & apply small dots under the eye & message gently. Be Careful & make sure you are not getting close to your eyelash line.
          `,
    howToUse: `Apply cleanser and gently massage into skin barrier.
          Wash with normal water.`,
    productDescription: `Power Glutathione | Reduce hyperpigmentation | Pore minimizer | Deep Hydration |Be Beautiful | Bea You
      
      Unleash your inner radiance with Bea You Gluta Radiance moisturiser.The powerhouse of hydration with vitamin A,C, E. IThis gives your skin a replenished and dewy appearance, It also leaves your skin feeling soft and supple throughout the day.
            
      Defend against 5 sign of Skin sensitivity: Weakened free,Dryness,Roughness,Irritaton,roughness,Tightness
            
      Paraben Sulphate free
      Cruelty free
      Make in india
      
      Key point: 
      Glutathione 2%, Alpha Arbutin 0.2%, Niacinamide 0.2%, Hyaluronic Acid 0.2%, Kojic Acid 1%, with Vitamin A,C,E   
      vitamin b3: prevent water loss and retain skin's moisture content. It's also known to increase keratin.  
      Vitamin b5 : it helps to boost the production of glutathione in our skin. it has anti-inflammatory properties that soothe irritated and dry skin
      
      * Image and actual product may very
      
      STORAGE: Store in a cool place. Keep away from direct sun light.
      WARNING: Do not refrigerate. Replace the cap tightly after use.
      `,
  },
  {
    id: "7",
    pImg: "/images/shop1.webp",
    title: "Product 7",
    rating: "5",
    reviews: "10 reviews",
    price: "$20",
    orignalPrice: "$25",
    weight: "125 Ml",
    category: "Skin-Face",
    ingredients: `Cucumber Extract, Lemon Extract, Rosemary Extract, Glycolic Acid, Lactic Acid, Sodium Hyaluronate, Niacinamide, L- Argenine, Licorice Extract, Alpha Arbutin, Berberis Extract, Propylene Glycol.
            Pluethylene Glycol 400, Glycerin, Edta, Fragrance, Triethanol Amine, Phenoxyethanol, Ethylhexylglycerin & Aqua 
            DIRECTION FOR USE: Put a pea size amount of Fair-Wish Under Eye Gel on the Tip of your ring finger & apply small dots under the eye & message gently. Be Careful & make sure you are not getting close to your eyelash line.
            `,
    howToUse: `Apply cleanser and gently massage into skin barrier.
            Wash with normal water.`,
    productDescription: `Power Glutathione | Reduce hyperpigmentation | Pore minimizer | Deep Hydration |Be Beautiful | Bea You
        
        Unleash your inner radiance with Bea You Gluta Radiance moisturiser.The powerhouse of hydration with vitamin A,C, E. IThis gives your skin a replenished and dewy appearance, It also leaves your skin feeling soft and supple throughout the day.
              
        Defend against 5 sign of Skin sensitivity: Weakened free,Dryness,Roughness,Irritaton,roughness,Tightness
              
        Paraben Sulphate free
        Cruelty free
        Make in india
        
        Key point: 
        Glutathione 2%, Alpha Arbutin 0.2%, Niacinamide 0.2%, Hyaluronic Acid 0.2%, Kojic Acid 1%, with Vitamin A,C,E   
        vitamin b3: prevent water loss and retain skin's moisture content. It's also known to increase keratin.  
        Vitamin b5 : it helps to boost the production of glutathione in our skin. it has anti-inflammatory properties that soothe irritated and dry skin
        
        * Image and actual product may very
        
        STORAGE: Store in a cool place. Keep away from direct sun light.
        WARNING: Do not refrigerate. Replace the cap tightly after use.
        `,
  },
  {
    id: "7",
    pImg: "/images/shop1.webp",
    title: "Product 7",
    rating: "5",
    reviews: "10 reviews",
    price: "$20",
    orignalPrice: "$25",
    weight: "125 Ml",
    category: "Skin-Face",
    ingredients: `Cucumber Extract, Lemon Extract, Rosemary Extract, Glycolic Acid, Lactic Acid, Sodium Hyaluronate, Niacinamide, L- Argenine, Licorice Extract, Alpha Arbutin, Berberis Extract, Propylene Glycol.
              Pluethylene Glycol 400, Glycerin, Edta, Fragrance, Triethanol Amine, Phenoxyethanol, Ethylhexylglycerin & Aqua 
              DIRECTION FOR USE: Put a pea size amount of Fair-Wish Under Eye Gel on the Tip of your ring finger & apply small dots under the eye & message gently. Be Careful & make sure you are not getting close to your eyelash line.
              `,
    howToUse: `Apply cleanser and gently massage into skin barrier.
              Wash with normal water.`,
    productDescription: `Power Glutathione | Reduce hyperpigmentation | Pore minimizer | Deep Hydration |Be Beautiful | Bea You
          
          Unleash your inner radiance with Bea You Gluta Radiance moisturiser.The powerhouse of hydration with vitamin A,C, E. IThis gives your skin a replenished and dewy appearance, It also leaves your skin feeling soft and supple throughout the day.
                
          Defend against 5 sign of Skin sensitivity: Weakened free,Dryness,Roughness,Irritaton,roughness,Tightness
                
          Paraben Sulphate free
          Cruelty free
          Make in india
          
          Key point: 
          Glutathione 2%, Alpha Arbutin 0.2%, Niacinamide 0.2%, Hyaluronic Acid 0.2%, Kojic Acid 1%, with Vitamin A,C,E   
          vitamin b3: prevent water loss and retain skin's moisture content. It's also known to increase keratin.  
          Vitamin b5 : it helps to boost the production of glutathione in our skin. it has anti-inflammatory properties that soothe irritated and dry skin
          
          * Image and actual product may very
          
          STORAGE: Store in a cool place. Keep away from direct sun light.
          WARNING: Do not refrigerate. Replace the cap tightly after use.
          `,
  },
]
