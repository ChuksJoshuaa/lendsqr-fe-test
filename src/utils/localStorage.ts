export const saveUser = (email: string) => {
  return localStorage.setItem("profile", JSON.stringify({ email }));
};

export const getUser = () => {
  return JSON.parse(localStorage.getItem("profile")!);
};
