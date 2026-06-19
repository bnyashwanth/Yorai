import { create } from 'zustand';

interface UiState {
  isOrderModalOpen: boolean;
  selectedSymbol: string;
  orderType: 'BUY' | 'SELL';
  openOrderModal: (symbol: string, type: 'BUY' | 'SELL') => void;
  closeOrderModal: () => void;
}

export const useUiStore = create<UiState>((set) => ({
  isOrderModalOpen: false,
  selectedSymbol: '',
  orderType: 'BUY',
  openOrderModal: (symbol, type) => set({ isOrderModalOpen: true, selectedSymbol: symbol, orderType: type }),
  closeOrderModal: () => set({ isOrderModalOpen: false, selectedSymbol: '' }),
}));