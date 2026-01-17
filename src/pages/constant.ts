import {
  AndroidStudioIcon,
  BlenderIcon,
  CssIcon,
  ExpoIcon,
  FigmaIcon,
  FirebaseIcon,
  GitIcon,
  GithubIcon,
  GraphqlIcon,
  HtmlIcon,
  JavascriptIcon,
  LinkedinIcon,
  NextJSIcon,
  ReactIcon,
  ReduxIcon,
  SassIcon,
  TailwindIcon,
  ThreeJSIcon,
  TwitterXIcon,
  TypescriptIcon,
  VscodeIcon,
} from "@/assets/icons";
import IslandLuxury from "@/assets/trubooker.png";
import Orralearn from "@/assets/Screenshot (414).png";
import zig from "@/assets/zid.png";
import bit from "@/assets/orra4 (1).png";
import astro from "@/assets/astro.png";
import Trybe from "@/assets/Hero Section.png";
import Travel from "@/assets/senpay.png";
import hoterr from "@/assets/Screenshot (423).png";
import Em2geeFoods2 from "@/assets/Pro6.png";
import Em2geeFoods3 from "@/assets/Pro2.png";
import Em2geeFoods4 from "@/assets/Pro3.png";
import Em2geeFoods5 from "@/assets/Untitled design (1).png";
import mobile from "@/assets/mobile.webp";
import decmark from "@/assets/decmark_cover.jpg";
import centrl from "@/assets/centrl.jpeg";
import slice from "@/assets/App_Feature_Compressed.jpg";
import answer from "@/assets/answer.png";
import mobile1 from "@/assets/68747470733a2f2f646f776e6c6f61642e617070646576732e6e65742f62616e6e65722f656e7661746f2f75692f7862616e6b2f312e706e67.png";

export const SOCIAL_LINKS = [
  {
    link: "https://github.com/abed-obaah",
    icon: GithubIcon,
  },
  {
    link: "https://www.linkedin.com/in/abednegoobaah",
    icon: LinkedinIcon,
  },
  {
    link: "https://twitter.com/abed_obaah",
    icon: TwitterXIcon,
  },
];

export const PROJECTS = [
  {
    name: "Centrl",
    image: centrl,
    desc: "The ultimate platform for hosting and managing events, as well as creating and participating in exciting competitions.",
    date: "Mar 10, 2025",
    stacks: ["React Native", "Javascript", "Tailwind CSS", "Redux","React"],
    live: "https://www.centrl.ng/",
    code: "https://github.com/abed-obaah/",
  },
  {
    name: "SprintVault",
    image: Trybe,
    desc: " Platform to Convert Your Crypto To Cash.",
    date: "Dec 20, 2025",
    stacks: ["React.js", "Javascript", "Tailwind CSS", "Redux"],
    live: "http://sprintvault.com/",
    code: "https://github.com/abed-obaah/",
  },
  {
    name: "Send Pay",
    image: Travel,
    desc: "Seamless & Secure Cross-Border Payments for People, Businesses & Enterprises.",
    date: "December 06, 2025",
    stacks: ["jQuery", "React", "Gsap", "Sentry"],
    live: "https://sendpayments.com/",
    code: "#",
  },
  {
    name: "Fiatplug",
    image: zig,
    desc: "Instant cash for gift cards & crypto exchange",
    date: "Feb 10, 2023",
    stacks: ["React.js", "Javascript", "CSS", "Redux","Binance APi","coinbase Api","code mirror"],
    live: "https://www.fiatplug.com/",
    
  },
  {
    name: "wealth-management-site",
    image: astro,
    desc: "an innovative Web3-powered platform designed to revolutionize the way users engage with cryptocurrencies and blockchain technology. This project aims to create a dynamic and immersive space that combines cutting-edge web development with the decentralized and secure nature of blockchain.",
    date: "Jan 01, 2023",
    stacks: ["Reactjs", "Javascript", "CSS", "Redux","Binance APi","coinbase Api","code mirror"],
    live: "https://wealth-management-site.netlify.app/en.html",
    code: "#",
  },
 
  {
    name: "Trubooker",
    image: IslandLuxury,
    desc: "Redirecting your plans into Reality",
    date: "Jul 20, 2024",
    stacks: ["React", "Javascript", "CSS", "Redux"],
    live: "https://www.trubooker.com/",
    figma:
      "#",
  },
  // {
  //   name: "Davinci-writer",
  //   desc: "Ultimate Ai Creator,blogs,text-to-speach,ad creations.",
  //   date: "Jul 30, 2023",
  //   stacks: ["Next.js", "Typescript", "Tailwind CSS", "SASS", "OpenAi Api",],
  //   live: "https://Davinci.berkine.me",
  // },
  // {
  //   name: "abednegoobaah.vercel.app",
  //   desc: "Of course, my personal portfolio 😎. The codebase is publicly available for use.",
  //   date: "Nov 10, 2023",
  //   stacks: [
  //     "React.js + Vite.js",
  //     "Typescript",
  //     "SASS",
  //     "Tailwind CSS",
  //     "Lenis (smooth scrolling)",
  //     "Vercel",
  //   ],
  //   code: "https://github.com/abed-obaah/portfolio",
  // },
  
  // {
  //   name: "Hosterr",
  //   image: hoterr,
  //   desc: "With Hosterr, get your website up and running in no less than 5 minutes with the most competitive pricing packages available online.",
  //   date: "December 27, 2020",
  //   stacks: ["jQuery", "Javascript", "HTML", "CSS"],
  //   live: "https://hosterr-waitlist.vercel.app",
  //   code: "#",
  // },
  // {
  //   name: "Mintly",
  //   image: Em2geeFoods2,
  //   desc: "A Platform to swap,buy,trade coins, and collect Loans.",
  //   date: "December 27, 2020",
  //   stacks: ["React Native","CSS"],
  //   live: "https://content.mintsoft.org/mintly.apk",
  //   code: "#",
  // },
  // {
  //   name: "Kicksciti",
  //   image: Em2geeFoods3,
  //   desc: "A branded Mobile App to sell and buy goods 😄.",
  //   date: "December 27, 2020",
  //   stacks: ["React Native", "Javascript", "React native animated", "CSS"],
  //   live: "https://play.google.com/store/apps/details?id=com.kicksciti.android",
  //   code: "#",
  // },
];

export const TECH_STACKS_TOOLS = [
  {
    title: "Technologies",
    collections: [
      { icon: JavascriptIcon, name: "Javascript" },
      { icon: TypescriptIcon, name: "Php" },
      { icon: TypescriptIcon, name: "Laravel" },
      { icon: ReactIcon, name: "React.js" },
      { icon: ReduxIcon, name: "Redux" },
      { icon: ExpoIcon, name: "React Native (Expo)" },
      { icon: SassIcon, name: "SASS" },
      { icon: TailwindIcon, name: "Tailwind CSS" },
      { icon: ThreeJSIcon, name: "Three.js" },
      { icon: GraphqlIcon, name: "GraphQL" },
      { icon: GitIcon, name: "Git" },
      { icon: FirebaseIcon, name: "Firebase" },
      { icon: HtmlIcon, name: "HTML" },
      { icon: CssIcon, name: "CSS" },
    ],
  },
  {
    title: "Tools",
    collections: [
      { icon: VscodeIcon, name: "VSCode" },
      { icon: FigmaIcon, name: "Figma" },
      { icon: AndroidStudioIcon, name: "Android Studio" },
      { icon: AndroidStudioIcon, name: "PhotoShop" },
    ],
  },
];

export const Mobile_APP = [
   {
    name: "Slics Ai",
    image: slice,
    desc: "Automated Expense Tracking",
    date: "May, 2025",
    stacks: ["React Native", "Javascript", "Tailwind CSS", "Redux"],
    live: "https://apps.apple.com/ng/app/slice-ai/id6739975347",
    code: "#",
  },
   {
    name: "Rentify (Android)",
    image: mobile,
    desc: "RENTIFY - ONLINE CAR RENTAL BOOKING SYSTEM,Rentify offers an easy Car Finder feature for locating ideal vehicles based on preferences.",
    date: "Mar 10, 2023",
    stacks: ["React Native", "Javascript", "Tailwind CSS", "Redux"],
    live: "https://drive.google.com/file/d/1HXhVMLZflDi081pEJTIMnuI58iLarZd0/view?usp=drive_link",
    code: "#",
  },
   {
    name: "BankX (Android)",
    image: mobile1,
    desc: "BankX is a full application  for Online Banking & Money Transfer Wallets. If you are interested to develop your own Online Banking & Money Transfer Android and iOS apps like Paypal, Payoneer, or Skrill.",
    date: "Feb 10, 2022",
    stacks: ["React Native", "Javascript", "CSS", "Redux"],
    live: "https://drive.google.com/file/d/1cWMaFoTC_PdouXnuM2jjonARvzwBwc5f/view?usp=sharing",
    code: "#",
  },
     {
    name: "Answer.ai(Android)",
    image: answer,
    desc: "Answer ai is an ai tutor,to build skills in an grade ",
    date: "mar 15, 2023",
    stacks: ["React Native", "Javascript", "CSS", "Redux"],
    // live: "https://drive.google.com/file/d/1j3lN1FjfGF53bxFa58dciMph1tBU9LSZ/view?usp=sharing",
    live: "https://play.google.com/store/search?q=answer+ai&c=apps&hl=en",
    code: "https://github.com/abed-obaah/",
  },
]
