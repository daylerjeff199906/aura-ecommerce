// import localforage from "localforage";
interface ILocalStorageService {
  getItem: (key: string) => string | null;
}

export const localStorageService = {
  setItem: (key: string, value: any) => {
    localStorage.setItem(key, value);
  },

  getItem: (key: string) => {
    return localStorage.getItem(key);
  },

  removeItem: (key: string) => {
    localStorage.removeItem(key);
  },
};

export default localStorageService;
