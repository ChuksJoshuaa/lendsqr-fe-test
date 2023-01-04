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

export const checkDateRange = (utc: string) => {
  let utcValue = utc.slice(0, 4);
  let newUtcValue = Number(utcValue);

  let status = "Unactive";

  if (newUtcValue > 2000 && newUtcValue <= 2030) {
    status = "Active";
  }

  if (newUtcValue > 2030 && newUtcValue <= 2060) {
    status = "Pending";
  }

  if (newUtcValue > 2060 && newUtcValue <= 2080) {
    status = "Blacklisted";
  }

  return status;
};

export const colorChange = (status: string) => {
  let color = "status-red";

  if (status === "Unactive") {
    color = "status-black";
  }

  if (status === "Active") {
    color = "status-green";
  }

  if (status === "Pending") {
    color = "status-yellow";
  }

  return color;
};
