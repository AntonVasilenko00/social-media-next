import { HTMLProps } from 'react'
import { twMerge } from 'tailwind-merge'

import { Icon, IconProps } from '@/shared/types'

interface ListItemProps extends HTMLProps<HTMLLIElement> {
  Icon: Icon
  iconProps?: IconProps
}

const ListItem: React.FC<ListItemProps> = ({ Icon, iconProps, ...props }) => {
  return (
    <li
      {...props}
      className={twMerge(
        'cursor-pointer h-full w-12 hover:bg-slate-200 transition flex items-center justify-center',
        props.className,
      )}
    >
      <Icon
        {...iconProps}
        className={twMerge('text-vk-icon w-full h-full', iconProps?.className)}
      />
    </li>
  )
}

export default ListItem
