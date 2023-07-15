import { HTMLProps } from 'react'
import { twMerge } from 'tailwind-merge'

interface CheckboxProps extends HTMLProps<HTMLInputElement> {}

const Checkbox: React.FC<CheckboxProps> = ({ ...props }) => {
  return (
    <>
      <input {...props} type="checkbox" className="peer sr-only" />
      <div
        className={twMerge(
          "ml-auto w-6 h-2 rounded-full bg-slate-200 relative peer-checked:after:bg-vk-icon-accent peer-checked:after:translate-x-4 after:transition after:absolute after:content-[''] after:w-4 after:h-4 after:bg-slate-400 after:rounded-full after:-top-1 after:-left-1 peer-hover:after:ring-2 ring-blue-100",
          props.className,
        )}
      />
    </>
  )
}

export default Checkbox
