import {
  FaDiagramProject,
  FaDiscord,
  FaEnvelope,
  FaFacebookF,
  FaGithub,
  FaHouse,
  FaLinkedinIn,
  FaRenren,
  FaUser,
} from 'react-icons/fa6'
import {
  CarRent,
  BookingApp,
  ECommerce,
  FoodApp,
  TrelloApp,
  RealtimeChat,
  TravelGoApp,
  PixabayClone,
  RedditClone,
} from '../assets'

export const Socials = [
  {
    id: `linkedin-${Date.now()}`,
    Icon: FaLinkedinIn,
    uril: 'https://www.linkedin.com/in/frederik-rbnsk',
    color: '#0072b1',
  },
  {
    id: `github-${Date.now()}`,
    Icon: FaGithub,
    uril: 'https://github.com/frdrk00',
    color: '#fff',
  },
  {
    id: `facebook-${Date.now()}`,
    Icon: FaFacebookF,
    uril: 'https://m.me/frdrk00',
    color: '#1877F2',
  },
  {
    id: `discord-${Date.now()}`,
    Icon: FaDiscord,
    uril: 'https://discord.com/users/523213617089216532',
    color: '#1877F2',
  },
]

export const Menus = [
  {
    id: `home-${Date.now()}`,
    Icon: FaHouse,
    uri: '#home',
    name: 'Home',
  },
  {
    id: `about-${Date.now()}`,
    Icon: FaUser,
    uri: '#about',
    name: 'About',
  },
  {
    id: `skills-${Date.now()}`,
    Icon: FaRenren,
    uri: '#skills',
    name: 'Skills',
  },
  {
    id: `projects-${Date.now()}`,
    Icon: FaDiagramProject,
    uri: '#projects',
    name: 'Projects',
  },
  {
    id: `contact-${Date.now()}`,
    Icon: FaEnvelope,
    uri: '#contact',
    name: 'Contact',
  },
]

export const ProjectsData = [
  {
    id: `carrent-${Date.now()}`,
    name: 'Car Rent',
    imgSrc: CarRent,
    gitURL: 'https://github.com/frdrk00/car-showcase-app-nextjs',
    demoURL: 'https://car-showcase-app-nextjs.vercel.app/',
  },
  {
    id: `bookingapp-${Date.now()}`,
    name: 'BookingApp',
    imgSrc: BookingApp,
    gitURL: 'https://github.com/frdrk00/booking-software-nextjs',
    demoURL: 'https://booking-system-beta-one.vercel.app/',
  },
  {
    id: `ecommerce-${Date.now()}`,
    name: 'E-Commerce',
    imgSrc: ECommerce,
    gitURL: 'https://github.com/frdrk00/e-commerce-front-react',
    demoURL: 'https://my-ecommerce-front-pi.vercel.app/',
  },
  {
    id: `realtimechat-${Date.now()}`,
    name: 'Realtime Chat',
    imgSrc: RealtimeChat,
    gitURL: 'https://github.com/frdrk00/realtime-chat-app-nextjs',
    demoURL: 'https://realtime-chat-snowy.vercel.app/dashboard',
  },
  {
    id: `food-${Date.now()}`,
    name: 'Single Food Restaurant',
    imgSrc: FoodApp,
    gitURL: 'https://github.com/frdrk00/food-fullstack-app-client-react',
    demoURL: 'https://food-fullstack-app-client.vercel.app/',
  },
  {
    id: `travelgoapp-${Date.now()}`,
    name: 'TravelGoApp',
    imgSrc: TravelGoApp,
    gitURL: 'https://github.com/frdrk00/travel-go-app-react-native',
    demoURL: 'https://expo.dev/@frdrk00/go-travel-app',
  },
  {
    id: `trello-${Date.now()}`,
    name: 'Trello Clone',
    imgSrc: TrelloApp,
    gitURL: 'https://github.com/frdrk00/trello-app-chat-GPT-nextjs',
    demoURL: 'https://trello-app-nextjs.vercel.app/',
  },
  {
    id: `reddit-${Date.now()}`,
    name: 'Reddit Clone',
    imgSrc: RedditClone,
    gitURL: 'https://github.com/frdrk00/reddit-clone-fullstack-nextjs',
    demoURL: 'https://breddit-frdrk.vercel.app/',
  },
  {
    id: `pixabayclone-${Date.now()}`,
    name: 'Pixabay Clone 2.0',
    imgSrc: PixabayClone,
    gitURL: 'https://github.com/frdrk00/pixabay-client-react',
    demoURL: 'https://pixabay-client-react.vercel.app/',
  },
]
