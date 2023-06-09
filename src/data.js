import tour1 from './images/tour-1.jpeg';
import tour2 from "./images/tour-2.jpeg";
import tour3 from "./images/tour-3.jpeg";
import tour4 from "./images/tour-4.jpeg";

export const linkData = [
  { id: 1, href: "#home", text: "home" },
  { id: 2, href: "#about", text: "about" },
  { id: 3, href: "#services", text: "services" },
  { id: 4, href: "#tours", text: "tours" },
];

export const socialLinks  = [
    {id : 1 , href : "https://www.facebook.com" , class: "fab fa-facebook"},
    {id : 2 , href : "https://www.twitter.com" , class: "fab fa-twitter"},
    {id : 3 , href : "https://www.squarespace.com" , class: "fab fa-squarespace"},
];

export const servicesData = [
  { id: 1, title: "saving money", icon: "fas fa-wallet fa-fw", text:" Lorem ipsum dolor sit amet consectetur adipisicing elit."},
  { id: 2, title: "endless hiking", icon: "fas fa-tree fa-fw", text:" Lorem ipsum dolor sit amet consectetur adipisicing elit."},
  { id: 3, title: "amazing comfort", icon: "fas fa-socks fa-fw", text:" Lorem ipsum dolor sit amet consectetur adipisicing elit."},
];

export const toursData = [
  {
    id: 1,
    date: "august 26th, 2020",
    title: "Tibet Adventure",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    location: "China",
    days: 6,
    price: 2100,
    image:tour1,
  },
  {
    id: 2,
    date: "october 1th, 2020",
    title: "best of java",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    location: "Indonesia",
    days: 11,
    price: 1400,
    image:tour2,
  },
  {
    id: 3,
    date: "september 15th, 2020",
    title: "explore hong kong",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    location: "HongKong",
    days: 8,
    price: 5000,
    image:tour3,
  },
  {
    id: 4,
    date: "december 5th, 2019",
    title: "kenya highlights",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    location: "Kenya",
    days: 20,
    price: 3300,
    image:tour4,
  },
];