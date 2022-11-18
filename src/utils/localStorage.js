export const getLocalStorageItem = (key) => {
  try {
    return JSON.parse(localStorage.getItem(key));
  } catch (e) {
    return [];
  }
};

export const setLocalStorageItem = (key, value) => {
  return localStorage.setItem(key, JSON.stringify(value));
};
