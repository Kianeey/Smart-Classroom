import { create } from "zustand";
import { persist } from "zustand/middleware";

export const adminStore = create(
  persist(
    (set) => ({
      admin: null,
      setAdmin: (newAdmin) => set({ admin: newAdmin }),
    }),
    {
      name: "admin-storage", // unique name for the local storage key
      getStorage: () => localStorage, // use localStorage for persistence
    }
  )
);
