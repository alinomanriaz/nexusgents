// lib/themeSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type ThemeState = {
  mode: 'light' | 'dark';
  loading: boolean;
};

const initialState: ThemeState = {
  mode: 'light',         // ✅ Safe default (no SSR issues)
  loading: true,
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<'light' | 'dark'>) => {
      state.mode = action.payload;
      localStorage.setItem('theme', action.payload);
      document.documentElement.classList.toggle('dark', action.payload === 'dark');
    },
    toggleTheme: (state) => {
      const newTheme = state.mode === 'light' ? 'dark' : 'light';
      state.mode = newTheme;
      localStorage.setItem('theme', newTheme);
      document.documentElement.classList.toggle('dark', newTheme === 'dark');
    },
    initializeTheme: (state) => {
      const stored = localStorage.getItem('theme') as 'light' | 'dark' | null;
      const theme = stored || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
      state.mode = theme;
      state.loading = false;
      document.documentElement.classList.toggle('dark', theme === 'dark');
    },
  },
});

export const { setTheme, toggleTheme, initializeTheme } = themeSlice.actions;
export default themeSlice.reducer;
