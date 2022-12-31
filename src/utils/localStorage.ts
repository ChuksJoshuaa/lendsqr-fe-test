export const saveUser = (
  id: string,
  name: string,
  email: string,
  avatar: string
) => {
  return localStorage.setItem(
    "profile",
    JSON.stringify({ id, name, email, avatar })
  );
};

export const getUser = () => {
  return JSON.parse(localStorage.getItem("profile")!);
};
