import { FaUserFriends } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { GiReceiveMoney } from "react-icons/gi";
import { GrMoney } from "react-icons/gr";
import { NumberChange, randy } from "./conversions";

export const RatingsData = [
  {
    id: randy(),
    icon: <FiUsers />,
    rank: 2453,
    iconColor: "rgb(250, 177, 241)",
    iconBg: "rgba(250, 177, 241, 0.2)",
    name: "users",
  },
  {
    id: randy(),
    icon: <FaUserFriends />,
    rank: 2453,
    iconColor: "rgb(102, 107, 250)",
    iconBg: "rgba(102, 107, 250, 0.2)",
    name: "active users",
  },
  {
    id: randy(),
    icon: <GiReceiveMoney />,
    rank: NumberChange(12453),
    iconColor: "rgb(219, 151, 134)",
    iconBg: "rgba(219, 151, 134, 0.2)",
    name: "users with loans",
  },
  {
    id: randy(),
    icon: <GrMoney />,
    rank: NumberChange(102453),
    iconColor: "rgb(237, 149, 158)",
    iconBg: "rgba(237, 149, 158, 0.2)",
    name: "users with savings",
  },
];
