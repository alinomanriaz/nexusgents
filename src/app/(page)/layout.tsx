import Footer from '@/components/Footer';
import React, { ReactNode } from 'react';

interface AllPagesLayoutProps {
  children: ReactNode;
}

const AllPageslayout: React.FC<AllPagesLayoutProps> = ({ children }) => {
  return (
    <>
      {children}
      <Footer />
    </>
  );
};

export default AllPageslayout;
