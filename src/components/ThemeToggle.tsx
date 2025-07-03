'use client';
import { useEffect, useState } from 'react';
import { IoSunnyOutline } from 'react-icons/io5';
import { FaMoon } from 'react-icons/fa';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { toggleTheme, initializeTheme } from '@/redux/features/themeSlice';

const ThemeToggle = () => {
  const dispatch = useAppDispatch();
  const { mode: theme, loading } = useAppSelector(state => state.theme);

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    dispatch(initializeTheme()); // ✅ client-only
    setMounted(true);
  }, [dispatch]);

  if (!mounted || loading) return null;

  return (
    <div
      onClick={() => dispatch(toggleTheme())}
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
