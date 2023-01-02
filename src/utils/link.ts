import { UserProps } from "./types";

export const linkData =
  "https://fonts.googleapis.com/css2?family=Amiri:ital@1&family=Lobster+Two&family=Cormorant+Garamond:wght@300&family=Racing+Sans+One&family=Rajdhani:wght@500&family=Roboto+Mono:wght@100&display=swap";

export const fetchUrl =
  "https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users";

export const activeLink =
  "d-flex align-items-center gap-2 pl-4 pt-2 pb-2 fs-6 active";

export const normalLink =
  "d-flex align-items-center gap-2 pl-4 pt-2 pb-2 fs-5 normal";

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
