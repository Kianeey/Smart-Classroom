import { create } from "zustand";

export const adminStore = create((set) => ({
  admin: null,
  setAdmin:(newAdmin) => set({
    admin:newAdmin,
  })

  
}));
