export const getLocalStorage = (key: string) => {
  const response = localStorage.getItem(key);

  if (!response) return null;

  return JSON.parse(response);
};
