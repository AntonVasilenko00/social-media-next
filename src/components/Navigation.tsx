import React, { HTMLProps } from 'react'
import { twMerge } from 'tailwind-merge'

import { Icon, IconProps } from '@/lib/types'
import {
  ChevronDownIcon,
  MusicIcon,
  NotificationIcon,
  ProfileIcon,
  ServicesIcon,
} from '@/lib/icons/vk-icons'

interface ListItemProps extends HTMLProps<HTMLLIElement> {
  Icon: Icon
  iconProps?: IconProps
}

const ProfileWithChevronIcon: React.FC<HTMLProps<HTMLDivElement>> = (props) => {
  return (
    <div
      {...props}
      className={twMerge(
        'flex items-center justify-center gap-x-1',
        props.className,
      )}
    >
      <ProfileIcon />
      <ChevronDownIcon />
    </div>
  )
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

const Navigation: React.FC<HTMLProps<HTMLDivElement>> = (props) => {
  return (
    <nav
      {...props}
      className={twMerge(
        'flex items-center justify-between w-full h-full',
        props.className,
      )}
    >
      <ul className="flex items-center h-full">
        <ListItem Icon={NotificationIcon as Icon} />
        <ListItem Icon={MusicIcon as Icon} />
      </ul>
      <ul className="flex items-center h-full">
        <ListItem Icon={ServicesIcon as Icon} />
        <ListItem Icon={ProfileWithChevronIcon as Icon} className="w-16" />
      </ul>
    </nav>
  )
}

export default Navigation
