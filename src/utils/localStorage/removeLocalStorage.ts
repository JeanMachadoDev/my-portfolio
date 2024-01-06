type RemoveLocalStorageProps = {
  key: string;
};

export const removeLocalStorage = ({ key }: RemoveLocalStorageProps) => {
  localStorage.removeItem(key);
};
