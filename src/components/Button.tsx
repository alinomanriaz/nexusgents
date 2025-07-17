import Link from 'next/link';
import React, { ReactNode } from 'react';

interface FormSubmitButtonProps {
  btname: string;
  className?: string;
  iicon?: ReactNode;
  onSubmitHandler?: () => void;
  loader?: boolean;
}

interface LinkButtonProps {
  name: string;
  link: string;
  className?: string
}

export const FormSubmitButton: React.FC<FormSubmitButtonProps> = ({
  btname,
  className = '',
  iicon,
  onSubmitHandler,
  loader = false,
}) => {
  return (
    <button
      onClick={onSubmitHandler}
      className={`flex justify-center items-center ${className} active:scale-x-[0.98] transition-all ease-in-out duration-400 py-[8px] px-6`}
    >
      {loader ? 'loading...' : <>
        <div>{btname}</div>
        <div>{iicon}</div>
      </>}
    </button>
  );
};

export const LinkButton: React.FC<LinkButtonProps> = ({ name, link, className }) => {
  return (
    <div className='my-8'>
      <Link
        className={`flex justify-center items-center ${className} active:scale-x-[0.98] transition-all ease-in-out duration-400 py-[8px] px-6`}
        href={link}>
        {name}
      </Link>
    </div>
  )
}
