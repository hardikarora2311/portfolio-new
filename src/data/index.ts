export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Experience", link: "#experience" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a Notion like platform.",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "PowerPDF : Chat-To-PDF Tool",
    des: "A Full Stack AI SaaS app that allow users to chat to their uploaded PDF and get all the right answers.",
    img: "/power-pdf.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "https://powerpdf.vercel.app/",
  },
  {
    id: 2,
    title: "Podcastrr : AI Podcast Creation Tool",
    des: "A Full Stack AI SaaS app with text-to-multiple-voices functionality and AI- generated images to publish podcast with thumbnail and voice all using text prompts.",
    img: "/podcastrr.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "https://podcastrr-live.vercel.app/",
  },
  {
    id: 3,
    title: "CaseCobra : Custom Phone Cases",
    des: "A Full stack web-app that allows users to design their own custom phone cases, with their uploaded image.",
    img: "/casecobra.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "https://casecobra-live.vercel.app/",
  },
  {
    id: 4,
    title: "Animated Apple Iphone 3D Website",
    des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
    img: "/p4.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "https://apple-iphone15-hardik.vercel.app/",
  },
  {
    id: 5,
    title: "Whatsapp Direct",
    des: "A ReactJS app to send WhatsApp messages without saving the contact.",
    img: "/wa.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "https://sendwadirect.netlify.app/",
  },
  {
    id: 6,
    title: "Cargame : Javascript Car Game",
    des: "Built a ready to play fun Car game in Javascript with response to object collision and keeps score of the player. Leveraged core JS functionalities including BoundingClient, and AnimationFrame to build a feature-rich and fun game.",
    img: "/car-game.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "https://cargame-hardik.netlify.app/",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Associate Web Developer",
    company: "Career Wings",
    desc: "Worked on the first website of the company from scratch, collaborating with the design team and working directly with the founders to build the software team from ground up.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Founder",
    company: "OneShot Studios",
    desc: "Started providing software and content services to early stage startups, then shifting onto SaaS companies. Built and led a team of 4 people, went on to work with some enterprise clientele like : HCL Tech.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 3,
    title: "Beta Tester",
    company: "Avalon Labs",
    desc: "Worked in the testing for Avalon’s flagship community product – Scenes. My feedback and insights helped in gaining it Number One position on Product Hunt (#1 Product of the Day)",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/hardikarora2311",
  },
  {
    id: 2,
    img: "/twit.svg",
    link: "https://twitter.com/HardikA2311_",
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/hardika2311/",
  },
];
