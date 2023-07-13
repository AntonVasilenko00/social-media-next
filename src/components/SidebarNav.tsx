import React, { HTMLProps } from 'react'
import Link from 'next/link'

import { Icon } from '@/lib/types'
import {
  CallsIcon,
  FavoriteIcon,
  FilesIcon,
  FriendsIcon,
  GamesIcon,
  GroupsIcon,
  MarketIcon,
  MessengerIcon,
  MusicIcon,
  NewsIcon,
  ProfileIcon,
  ServicesIcon,
  StickersIcon,
  VideoIcon,
} from '@/lib/icons/vk-icons'

interface SidebarMenuItem {
  Icon: Icon
  link: string
  text: string
}

const items: SidebarMenuItem[] = [
  {
    Icon: ProfileIcon as Icon,
    text: 'My Page',
    link: '/profile',
  },
  {
    Icon: NewsIcon as Icon,
    text: 'Feed',
    link: '/feed',
  },
  {
    Icon: MessengerIcon as Icon,
    link: '/im',
    text: 'Messenger',
  },
  {
    Icon: CallsIcon as Icon,
    link: '/calls',
    text: 'Calls',
  },
  {
    Icon: FriendsIcon as Icon,
    link: '/friends',
    text: 'Friends',
  },
  {
    Icon: GroupsIcon as Icon,
    link: '/groups',
    text: 'Groups',
  },
  {
    Icon: MusicIcon as Icon,
    link: '/music',
    text: 'Music',
  },
  {
    Icon: VideoIcon as Icon,
    link: '/video',
    text: 'Video',
  },
  {
    Icon: GamesIcon as Icon,
    text: 'Games',
    link: '/games',
  },
  {
    Icon: StickersIcon as Icon,
    text: 'Stickers',
    link: '/stickers',
  },
  {
    Icon: MarketIcon as Icon,
    text: 'Market',
    link: '/market',
  },
  {
    Icon: ServicesIcon as Icon,
    text: 'Services',
    link: '/services',
  },
]

const itemsSecondPart: SidebarMenuItem[] = [
  {
    text: 'Favourite',
    Icon: FavoriteIcon as Icon,
    link: '/favourite',
  },
  {
    text: 'Files',
    Icon: FilesIcon as Icon,
    link: '/files',
  },
]

const itemsAppGroup: SidebarMenuItem[] = [
  {
    text: 'app 1',
    link: '/apps/1',
    Icon: ServicesIcon as Icon,
  },
  {
    text: 'VK Coin',
    link: '/apps/vk-coin',
    Icon: ServicesIcon as Icon,
  },
]

interface ItemGroupProps {
  items: SidebarMenuItem[]
}

const ItemGroup: React.FC<ItemGroupProps> = ({ items }) => {
  return (
    <ul className="flex flex-col gap-y-0.5">
      {items.map((item, index) => (
        <li
          key={index}
          className="flex items-center space-x-2 cursor-pointer hover:bg-slate-200 rounded"
        >
          <Link
            className="flex gap-2 p-1 w-full rounded outline-none focus:bg-slate-200"
            href={item.link}
          >
            {item.Icon && (
              <item.Icon
                width={20}
                height={20}
                className="text-vk-icon-accent"
              />
            )}
            {item.text}
          </Link>
        </li>
      ))}
    </ul>
  )
}

const SidebarNav: React.FC<HTMLProps<HTMLDivElement>> = (props) => {
  return (
    <aside {...props}>
      <nav>
        <ItemGroup items={items} />
        <hr className="m-1" />
        <ItemGroup items={itemsSecondPart} />
        <hr className="m-1" />
        <ItemGroup items={itemsAppGroup} />
      </nav>
    </aside>
  )
}

export default SidebarNav
