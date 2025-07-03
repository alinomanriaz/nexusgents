// // lib/themeSlice.ts
// import { createSlice, PayloadAction } from '@reduxjs/toolkit'

// type ThemeState = {
//   mode: 'light' | 'dark'
//   loading: boolean
// }

// // Check saved preference or system preference
// const getInitialTheme = (): 'light' | 'dark' => {
//   if (typeof window !== 'undefined') {
//     const saved = localStorage.getItem('theme') as 'light' | 'dark' | null
//     return saved || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
//   }
//   return 'light'
// }

// const initialState: ThemeState = {
//   mode: getInitialTheme(),
//   loading: true,
// }

// const themeSlice = createSlice({
//   name: 'theme',
//   initialState,
//   reducers: {
//     setTheme: (state, action: PayloadAction<'light' | 'dark'>) => {
//       state.mode = action.payload
//       localStorage.setItem('theme', action.payload)
//       document.documentElement.classList.add('dark')
//     },
//     toggleTheme: (state) => {
//       const newTheme = state.mode === 'light' ? 'dark' : 'light'
//       state.mode = newTheme
//       localStorage.setItem('theme', newTheme)
//       document.documentElement.classList.toggle('dark', newTheme === 'dark')
//     },
//     initializeTheme: (state) => {
//       const stored = localStorage.getItem('theme') as 'light' | 'dark' | null
//       const theme = stored || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
//       state.mode = theme
//       state.loading = false
//       document.documentElement.classList.toggle('dark', theme === 'dark')
//     }
//   }
// })

// export const { setTheme, toggleTheme, initializeTheme } = themeSlice.actions
// export default themeSlice.reducer
