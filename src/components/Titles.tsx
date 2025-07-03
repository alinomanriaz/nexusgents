import React, { FC } from 'react'

interface CommonProps {
  className?: string
}

interface GradientTitleProps extends CommonProps {
  text: string
}

interface TitleProps extends CommonProps {
  title: string
}

interface SubtitleProps extends CommonProps {
  subtitle: string
}

export const GradientTitle: FC<GradientTitleProps> = ({ text, className }) => {
  return (
    <div className={`${className} text-sm font-bold bg-gradient bg-clip-text text-transparent uppercase`}>
      {text}
    </div>
  )
}

export const Title: FC<TitleProps> = ({ title, className }) => {
  return (
    <div className={`${className} md:text-4xl text-2xl w-[90%] font-semibold capitalize text-center`}>
      {title}
    </div>
  )
}

export const Subtitle: FC<SubtitleProps> = ({ subtitle, className }) => {
  return (
    <div className={`${className} w-[80%] md:w-[30%] dark:text-gray-500 text-center text-gray-600 text-md`}>
      {subtitle}
    </div>
  )
}
