'use client';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { initializeTheme } from '@/redux/features/themeSlice';

const ThemeInitializer = ({ children }: { children: React.ReactNode }) => {
  const dispatch = useAppDispatch();
  const { loading } = useAppSelector(state => state.theme);

  useEffect(() => {
    dispatch(initializeTheme());
  }, [dispatch]);

  if (loading) return null;

  return <>{children}</>;
};

export default ThemeInitializer;
