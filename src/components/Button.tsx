import React, { ReactNode } from 'react';

interface ButtonProps {
  btname: string;
  className?: string;
  iicon?: ReactNode;
  onSubmitHandler?: () => void;
  loader?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  btname,
  className = '',
  iicon,
  onSubmitHandler,
  loader = false,
}) => {
  return (
    <button
      onClick={onSubmitHandler}
      className={`${className} active:scale-x-[0.98] transition-all ease-in-out duration-400 py-[8px] px-6`}
    >
      {loader ? 'loading...' : <>
        {btname}
        {iicon}
      </>}
    </button>
  );
};

export default Button;
