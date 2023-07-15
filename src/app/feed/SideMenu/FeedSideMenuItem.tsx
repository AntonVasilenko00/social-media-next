import { HTMLProps } from 'react'
import { twMerge } from 'tailwind-merge'

interface FeedSideMenuItemProps extends HTMLProps<HTMLLIElement> {
  text: string
}

const FeedSideMenuItem: React.FC<FeedSideMenuItemProps> = ({
  text,
  ...props
}) => {
  return (
    <li
      className={twMerge(
        'hover:bg-slate-100 cursor-pointer p-1 px-2 rounded',
        props.className,
      )}
    >
      {text}
    </li>
  )
}

export default FeedSideMenuItem
