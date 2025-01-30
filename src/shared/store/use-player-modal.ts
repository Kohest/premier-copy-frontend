import { create } from "zustand";
interface initialState {
  isModalOpen: boolean;
  toggleModal: (isModalOpen: boolean) => void;
}
export const usePlayerModalStore = create<initialState>((set, get) => ({
  isModalOpen: false,
  toggleModal: (isModalOpen: boolean) => set({ isModalOpen }),
}));
