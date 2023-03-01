import subsImg from "../assets/image-trust.svg";
import chartImg from "../assets/image-chart.svg";
import account from "../assets/phone-3.svg";
import card from "../assets/phone-2.svg";
import dashboard from "../assets/phone-1.svg";
import safe from "../assets/image-safe.svg";
import wallet from "../assets/image-wallet.svg";
import cardAdd from "../assets/icon-card-add.svg";
import cardGet from "../assets/icon-card-get.svg";
import cardOffer from "../assets/icon-card-offer.svg";
import chat from "../assets/chat.svg";
import gold from "../assets/gold.svg";

export const subscribtionsData = {
  heading: "Manage subscriptions smarter, in one Place",
  feature: [
    "Organise subscriptions in one place",
    "Block unwanted subscriptions easily",
    "Never get charged for a trial again",
  ],
  image: subsImg,
};

export const savingData = {
  heading: "Track your saving and spending habits",
  feature: [
    "Get up to 1.96% annual interst paid daily",
    "Withdraw instantly, any time",
    "Fund it your way",
  ],
  image: chartImg,
};

export const securityData = {
  heading: "End-to-end security",
  sub: "Be at peasce with our top of the line security systems and trusted partners.",
  image: safe,
};

export const moneyData = {
  heading: "Simple way to manage your money",
  feature: [
    {
      id: 1,
      icon: cardAdd,
      sub: "Save as you spend",
      text: "Shop with your Smartbank card to save even you're spending",
    },
    {
      id: 2,
      icon: cardOffer,
      sub: "Get insider offers",
      text: "We'll fix you up with discounts and cashback on your favorite brands",
    },
    {
      id: 3,
      icon: cardGet,
      sub: "Effortless cashback",
      text: "Everytime you spend, you earn cashback, simple as that!",
    },
  ],
  image: wallet,
};

export const step_1 = {
  heading: "You're a few simple steps away",
  feature: [
    "Download our app",
    "Signup or log in",
    "Choose an account to open first",
  ],
  image: account,
  icon: false,
};

export const step_2 = {
  heading: "Choose either virtual or physical card",
  feature: [
    "Debit and/or credit cards",
    "Virtual instant cards",
    "Physical cards",
  ],
  image: card,
  icon: true,
};

export const step_3 = {
  heading: "Strart saving, stop worrying",
  feature: ["Best currency rates", "Low transfare fees", "Secure payments"],
  image: dashboard,
  icon: true,
};

export const grad_1 = {
  heading: "Invite friends and getbonuses",
  sub: "Earn 50 GBP for every 3 friends who transfare over 200 GBP",
  img: chat,
  bg: "radial-gradient(121.59% 299.1% at -18.79% 121.59%, #FB4491 0%, #FF9EC7 0.01%, #4635C3 100%)",
};
export const grad_2 = {
  heading: "Earn cashback and discounts - get rewards",
  sub: "Excellent rates for exchanging, sending, and spending in 200+ countries",
  img: gold,
  bg: "radial-gradient(159.21% 377.09% at -20.15% 100%, #4937C4 0%, #98B5FF 100%)",
};

export const footerData = [
  { id: 1, head: "Company", links: ["About", "Feature", "Works", "Career"] },
  {
    id: 2,
    head: "Help",
    links: ["Customer Support", "Plans", "Complaints", "Website terms"],
  },
  {
    id: 3,
    head: "Resources",
    links: ["Essentials", "Saving Accounts", "Insurance", "Security"],
  },
  {
    id: 4,
    head: "Legal",
    links: ["Legal agreements", "Terms & Conditions", "Privacy Policy"],
  },
];
