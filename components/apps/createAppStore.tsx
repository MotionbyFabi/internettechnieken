import React from "react";
import create from "zustand";

interface AppStoreProps {
  appName: string;
  setAppName: (title: string) => void;
}

export const useAppStore = create<AppStoreProps>((set) => ({
  appName: "Finder",
  setAppName: (title) => {
    set((state) => ({ appName: (state.appName = title) }));
  },
}));

interface AppOpenProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  setClose: (open: boolean) => void;
}

export const useAppOpen = create<AppOpenProps>((set) => ({
  open: false,
  setOpen: () => set({ open: true }),
  setClose: () => set({ open: false }),
}));

interface AppMaxProps {
  max: boolean;
  setMax: (max: boolean) => void;
  setMin: (max: boolean) => void;
}

export const useAppMax = create<AppMaxProps>((set) => ({
  max: false,
  setMax: () => set({ max: true }),
  setMin: () => set({ max: false }),
}));
