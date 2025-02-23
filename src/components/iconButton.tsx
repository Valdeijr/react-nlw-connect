import type { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

interface IconButtonProps extends ComponentProps<'button'> {}

export function IconButton({ className, ...props }: IconButtonProps) {
  return (
    <button
      className={twMerge(
        'items-center p-1.5 bg-grey-100 text-purple rounded-md cursor-pointer transition-colors duration-300 hover:bg-purple hover:text-grey-100',
        className
      )}
      {...props}
    />
  )
}
