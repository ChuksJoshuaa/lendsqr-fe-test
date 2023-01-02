import { UserProps } from "./types";

export const changeTime = (utc: string) => {
  let theDate = new Date(Date.parse(utc));

  const dateChange = theDate.toDateString().slice(4, 15);
  const timeChange = new Date(theDate).toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });

  return `${dateChange} ${timeChange}`;
};

export const randy = () => Math.floor(Math.random() * 1000000);

export const NumberChange = (digit: number) => {
  return digit.toLocaleString();
};

const paginate = (followers: UserProps[]) => {
  const itemsPerPage = 10;
  const numberOfPages = Math.ceil(followers.length / itemsPerPage);

  const newFollowers = Array.from({ length: numberOfPages }, (_, index) => {
    const start = index * itemsPerPage;
    return followers.slice(start, start + itemsPerPage);
  });

  return newFollowers;
};

export default paginate;
