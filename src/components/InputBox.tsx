import React from 'react'

interface InputboxProps {
  className?: string
  type: string
  name?: string
  placeholder?: string
  onChangeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Inputbox: React.FC<InputboxProps> = ({
  className = '',
  type,
  name,
  placeholder,
  onChangeHandler,
}) => {
  return (
    <input
      onChange={onChangeHandler}
      type={type}
      name={name}
      placeholder={placeholder}
      className={`${className} border dark:border-neutral-400/20 rounded-lg dark:text-white/50 py-2 px-3 dark:placeholder:text-white/30 focus:ring-1 focus:ring-inset dark:focus:ring-white/10 outline-none focus-visible:border-neutral-500/50 border-gray-800/30 placeholder:text-gray-400 text-black/50 focus:ring-blue-600`}
    />
  )
}

export default Inputbox
