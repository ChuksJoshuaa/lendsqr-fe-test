import { FiWifi } from "react-icons/fi";
import { randy } from "./link";

export const changeTime = (utc: string) => {
  let theDate = new Date(Date.parse(utc));

  const dateChange = theDate.toDateString().slice(4, 15);
  const timeChange = new Date(theDate).toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });

  return `${dateChange} ${timeChange}`;
};

export const UsersData = [
  {
    id: randy(),
    icon: <FiWifi />,
    name: "Organization",
  },
  {
    id: randy(),
    icon: <FiWifi />,
    name: "Username",
  },
  {
    id: randy(),
    icon: <FiWifi />,
    name: "Email",
  },
  {
    id: randy(),
    icon: <FiWifi />,
    name: "Phone Number",
  },
  {
    id: randy(),
    icon: <FiWifi />,
    name: "Date Joined",
  },
  {
    id: randy(),
    icon: <FiWifi />,
    name: "Status",
  },
];

export const selectCount = [
  {
    id: randy(),
    value: 1,
  },
  {
    id: randy(),
    value: 2,
  },
  {
    id: randy(),
    value: 3,
  },
  {
    id: randy(),
    value: 4,
  },
  {
    id: randy(),
    value: 5,
  },
  {
    id: randy(),
    value: 6,
  },
  {
    id: randy(),
    value: 7,
  },
  {
    id: randy(),
    value: 8,
  },
  {
    id: randy(),
    value: 9,
  },
  {
    id: randy(),
    value: 10,
  },
];
