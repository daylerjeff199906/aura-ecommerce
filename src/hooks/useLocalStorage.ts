import localforage from "localforage";

const localStorageService = {
  setItem: async (key: string, value: any) => {
    await localforage.setItem(key, value);
  },

  getItem: async <T>(key: string): Promise<T | null> => {
    return await localforage.getItem(key);
  },

  removeItem: async (key: string) => {
    await localforage.removeItem(key);
  },
};

export default localStorageService;
