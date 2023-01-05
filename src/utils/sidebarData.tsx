import { FiUsers } from "react-icons/fi";
import {
  FaUserFriends,
  FaHandshakeAltSlash,
  FaUserCog,
  FaScroll,
  FaServer,
} from "react-icons/fa";
import {
  AiFillCodeSandboxSquare,
  AiOutlineMoneyCollect,
  AiOutlineBarChart,
} from "react-icons/ai";
import { RiMoneyCnyCircleFill } from "react-icons/ri";
import { BiShoppingBag } from "react-icons/bi";
import { BsJournalBookmark } from "react-icons/bs";
import { BsFillPersonCheckFill, BsPersonX } from "react-icons/bs";
import {
  GiPaperBagCrumpled,
  GiReceiveMoney,
  GiPaperBagFolded,
  GiFlameSpin,
} from "react-icons/gi";
import { GrMoney } from "react-icons/gr";

export const links = [
  {
    title: "Customers",
    links: [
      {
        name: "Users",
        icon: <FiUsers />,
      },
      {
        name: "Guarantors",
        icon: <FaUserFriends />,
      },
      {
        name: "Loans",
        icon: <GiPaperBagCrumpled />,
      },
      {
        name: "Decision Models",
        icon: <FaHandshakeAltSlash />,
      },
      {
        name: "Savings",
        icon: <AiFillCodeSandboxSquare />,
      },
      {
        name: "Loan Requests",
        icon: <GiReceiveMoney />,
      },
      {
        name: "Whitelist",
        icon: <BsFillPersonCheckFill />,
      },
      {
        name: "Karma",
        icon: <BsPersonX />,
      },
    ],
  },

  {
    title: "Businesses",
    links: [
      {
        name: "Organization",
        icon: <BiShoppingBag />,
      },
      {
        name: "Loan Products",
        icon: <GiReceiveMoney />,
      },
      {
        name: "Saving Products",
        icon: <GiPaperBagFolded />,
      },
      {
        name: "Fees and Charges",
        icon: <GrMoney />,
      },
      {
        name: "Transactions",
        icon: <AiOutlineMoneyCollect />,
      },
      {
        name: "Services",
        icon: <GiFlameSpin />,
      },
      {
        name: "Service Account",
        icon: <FaUserCog />,
      },
      {
        name: "Settlement",
        icon: <FaScroll />,
      },
      {
        name: "Reports",
        icon: <AiOutlineBarChart />,
      },
    ],
  },
  {
    title: "Settings",
    links: [
      {
        name: "Preferences",
        icon: <FaServer />,
      },
      {
        name: "Fees and Pricing",
        icon: <RiMoneyCnyCircleFill />,
      },
      {
        name: "Audit Logs",
        icon: <BsJournalBookmark />,
      },
    ],
  },
];
