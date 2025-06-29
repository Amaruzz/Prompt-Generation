import { create } from 'zustand';
import { User, GeneratedPrompt } from '../types';

interface AppState {
  user: User | null;
  generatedPrompts: GeneratedPrompt[];
  isLoading: boolean;
  currentCategory: 'image' | 'video';
  setUser: (user: User | null) => void;
  addGeneratedPrompt: (prompt: GeneratedPrompt) => void;
  setLoading: (loading: boolean) => void;
  setCurrentCategory: (category: 'image' | 'video') => void;
}

export const useStore = create<AppState>((set) => ({
  user: {
    id: '1',
    email: 'demo@example.com',
    plan: 'free',
    promptsGenerated: 12,
    monthlyLimit: 50,
    joinedAt: new Date(),
  },
  generatedPrompts: [],
  isLoading: false,
  currentCategory: 'image',
  setUser: (user) => set({ user }),
  addGeneratedPrompt: (prompt) =>
    set((state) => ({
      generatedPrompts: [prompt, ...state.generatedPrompts],
    })),
  setLoading: (loading) => set({ isLoading: loading }),
  setCurrentCategory: (category) => set({ currentCategory: category }),
}));