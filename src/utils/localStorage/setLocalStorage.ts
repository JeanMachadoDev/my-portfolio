type SetLocalStorageProps = {
  key: string;
  value: string | unknown;
};

export const setLocalStorage = ({ key, value }: SetLocalStorageProps) => {
  localStorage.setItem(key, JSON.stringify(value));
};
