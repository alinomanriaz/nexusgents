// // app/providers/ReduxInit.tsx
// 'use client'
// import { useEffect } from 'react'
// import { useAppDispatch } from './hooks'
// import { fetchCurrentUser } from './features/currentUserSlice'

// export function ReduxInit() {
//   const dispatch = useAppDispatch()

//   useEffect(() => {
//     dispatch(fetchCurrentUser())
//   }, [dispatch])

//   return null // no UI
// }
