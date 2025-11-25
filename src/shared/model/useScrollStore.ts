import { create } from 'zustand';

interface ScrollStore {
  lastViewedProjectId: string | null;
  setLastViewedProjectId: (id: string | null) => void;
}

export const useScrollStore = create<ScrollStore>((set) => ({
  lastViewedProjectId: null,
  setLastViewedProjectId: (id) => set({ lastViewedProjectId: id }),
}));
