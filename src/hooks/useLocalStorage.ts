"use client";
export const localStorageService = {
  setItem: (key: string, value: any) => {
    localStorage.setItem(key, value);
  },

  getItem: (key: string) => {
    return typeof window !== "undefined" ? localStorage.getItem(key) : null;
  },

  removeItem: (key: string) => {
    localStorage.removeItem(key);
  },
};

export default localStorageService;
