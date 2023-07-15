import React, { HTMLProps } from 'react'
import { twMerge } from 'tailwind-merge'

import ProfileWithChevronIcon from '@/shared/components/layout/Header/ProfileWithChevronIcon'
import ListItem from '@/shared/components/layout/Header/NavigationListItem'
import { Icon } from '@/shared/types'
import {
  MusicIcon,
  NotificationIcon,
  ServicesIcon,
} from '@/shared/icons/vk-icons'

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
