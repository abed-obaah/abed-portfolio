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
import IslandLuxury from "@/assets/Pro1.png";
import Orralearn from "@/assets/Screenshot (414).png";
import zig from "@/assets/orraweb4.png";
import bit from "@/assets/orra4 (1).png";
import astro from "@/assets/astro.png";
import Trybe from "@/assets/Screenshot (422).png";
import Travel from "@/assets/Screenshot (421).png";
import hoterr from "@/assets/Screenshot (423).png";
import Em2geeFoods2 from "@/assets/Pro6.png";
import Em2geeFoods3 from "@/assets/Pro2.png";
import Em2geeFoods4 from "@/assets/Pro3.png";
import Em2geeFoods5 from "@/assets/Untitled design (1).png";
import mobile from "@/assets/mobile.webp";
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
    name: "Orralearn",
    image: Orralearn,
    desc: "On Orralearn, you learn by doing. Challenge yourself on small coding exercises. Each Exercises is crafted by the community to help you strengthen different coding techniques.",
    date: "Mar 10, 2023",
    stacks: ["React Native", "Javascript", "Tailwind CSS", "Redux","React"],
    live: "https://orralearn.com/",
    code: "https://github.com/abed-obaah/orralearn-web",
  },
  {
    name: "Trybe201",
    image: Trybe,
    desc: "Trybe201 community offers complimentary hands-on training across diverse Tech Skills and fosters an inclusive environment centered around experiential learning.",
    date: "Dec 20, 2023",
    stacks: ["React.js", "Javascript", "Tailwind CSS", "Redux"],
    live: "http://trybe201.com/",
    code: "https://github.com/abed-obaah/trybe201",
  },
  // {
  //   name: "Travel Agency",
  //   image: Travel,
  //   desc: "A branded website for a company that produces bean flour. This project is my first attempt building a full business website using jQuery 😄.",
  //   date: "December 27, 2020",
  //   stacks: ["jQuery", "Javascript", "HTML", "CSS"],
  //   live: "https://travel-agency-sigma.vercel.app/",
  //   code: "#",
  // },
  {
    name: "bittradexpert",
    image: bit,
    desc: "A web application with the most complete tools to invest in crypto. Buy, store, trade, exchange, learn and earn crypto with a single tap.",
    date: "Aug 20, 2022",
    stacks: ["React.js", "Javascript", "CSS", "Redux","Php","coinbase Api"],
    live: "https://bittradexpert.com",
    code: "https://github.com/abed-obaah/bittradexpert",
  },
  {
    name: "zigzag",
    image: zig,
    desc: "cutting-edge showcase of my expertise in blockchain technology and cryptocurrency. This project is a dynamic and interactive web platform designed to highlight my skills, experiences, and contributions to the rapidly evolving world of decentralized finance and blockchain applications.",
    date: "Feb 10, 2022",
    stacks: ["React.js", "Javascript", "CSS", "Redux","Binance APi","coinbase Api","code mirror"],
    live: "https://zigzag.exchange",
    
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
 
  // {
  //   name: "Qbucks",
  //   image: IslandLuxury,
  //   desc: "A one stop shop for instant recharge of Airtime, Data, TV & Electricity bill payments, WAEC & NECO PIN, Airtime 2 Cash. Conversion and many more.",
  //   date: "Feb 10, 2022",
  //   stacks: ["React Native", "Javascript", "CSS", "Redux"],
  //   live: "https://qbucks.com.ng",
  //   figma:
  //     "#",
  // },
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
    name: "Qbucks (Android)",
    image: Em2geeFoods5,
    desc: "A one stop shop for instant recharge of Airtime, Data, TV & Electricity bill payments, WAEC & NECO PIN, Airtime 2 Cash. Conversion and many more.",
    date: "Feb 10, 2022",
    stacks: ["React Native", "Javascript", "CSS", "Redux"],
    live: "https://qbucks.com.ng",
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
    name: "DecMark(Android)",
    image: mobile1,
    desc: "DecMark is a full application for rendering services to the users ",
    date: "mar 15, 2023",
    stacks: ["React Native", "Javascript", "CSS", "Redux"],
    live: "https://drive.google.com/file/d/1j3lN1FjfGF53bxFa58dciMph1tBU9LSZ/view?usp=sharing",
    code: "#",
  },
]
