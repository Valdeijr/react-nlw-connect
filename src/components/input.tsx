import type { ComponentProps } from 'react'

interface InputRootProps extends ComponentProps<'div'> {
  error?: boolean
}
export function InputRoot({ error, ...props }: InputRootProps) {
  return (
    <div
      data-error={error}
      className="
      group
      flex
      bg-grey-100
      h-12
      border
      border-grey-200
      rounded-xl
      px-4
      items-center
      gap-2
      focus-within:border-gray-100
      data-[error=true]:border-danger"
      {...props}
    />
  )
}

interface InputIconProps extends ComponentProps<'span'> {}
export function InputIcon(props: InputIconProps) {
  return (
    <span
      className="
        text-gray-400
        group-focus-within:text-gray-100
        group-[&:not(:has(input:placeholder-shown))]:text-gray-100
        group-data-[error=true]:text-danger"
      {...props}
    />
  )
}

interface InputFieldProps extends ComponentProps<'input'> {}
export function InputField(props: InputFieldProps) {
  return (
    <input
      className="
          flex-1
          outline-0"
      {...props}
    />
  )
}
