'use client';
import { IoSunnyOutline } from 'react-icons/io5';
import { FaMoon } from 'react-icons/fa';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { toggleTheme } from '@/redux/features/themeSlice';

// import { RootState } from '../redux/store';

const ThemeToggle = () => {
  const theme= useAppSelector(state=> state.theme.mode)
  const Dispatch= useAppDispatch()

  if (!theme) return null // or loading state

  return (
    <div
      onClick={()=>Dispatch(toggleTheme())}
      className="cursor-pointer border border-neutral-700/80 rounded-full p-1 ml-auto mr-4"
    >
      {theme === 'dark' ? (
        <FaMoon className="size-5 p-1" />
      ) : (
        <IoSunnyOutline className="size-5" />
      )}
    </div>
  );
};

export default ThemeToggle;
  