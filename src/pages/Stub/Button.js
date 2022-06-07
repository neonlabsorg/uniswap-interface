import React from 'react'

export const Button =  ({
  children = null,
  className = '',
  to = ''
}) => {
  return <a href={to} target="_blank" rel='noopener noreferrer'
    className={`${className} border border-glass rounded-2rem uppercase py-2 px-4 text-black font-bold`}>
    {children}
  </a>
}