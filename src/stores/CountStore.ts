import { create } from "zustand";

interface CounterState {
  count: number;

  increase: () => void;
  decrease: () => void;
  increaseby: (value: number) => void;
  decreaseby: (value: number) => void;
}

export const counterStore = create<CounterState>((set) => ({
  count: 1,
  increase: () => set((state) => ({ count: state.count + 1 })),
  decrease: () => set((state) => ({ count: state.count - 1 })),
  increaseby: (value) => set((state) => ({ count: state.count + value })),
  decreaseby: (value) => set((state) => ({ count: state.count - value })),
}));
