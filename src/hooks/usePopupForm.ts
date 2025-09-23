import { create } from 'zustand';

interface PopupFormState {
  isOpen: boolean;
  openPopup: () => void;
  closePopup: () => void;
}

export const usePopupForm = create<PopupFormState>((set) => ({
  isOpen: false,
  openPopup: () => set({ isOpen: true }),
  closePopup: () => set({ isOpen: false }),
}));