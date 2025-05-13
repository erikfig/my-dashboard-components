import { createElement, HTMLAttributes, ReactNode } from 'react'

export type CardProps = {
  children: ReactNode,
  type?: string,
  label?: string,
  overflow?: boolean,
} & HTMLAttributes<HTMLDivElement>

export const Card = ({ children, type, className, overflow = true, ...props }: CardProps) => {
  let localType: string = type ?? 'div'
  const localClassName = `relative${ overflow ? ' overflow-hidden ' : '' }m-6 p-8 shadow-2xl rounded-2xl bg-light dark:bg-neutral-800 ${className}`

  return createElement(localType, { ...props, className: localClassName }, children)
}
