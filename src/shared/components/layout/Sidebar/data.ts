import {
  ProfileIcon,
  NewsIcon,
  MessengerIcon,
  CallsIcon,
  FriendsIcon,
  GroupsIcon,
  MusicIcon,
  VideoIcon,
  GamesIcon,
  StickersIcon,
  MarketIcon,
  ServicesIcon,
  FavoriteIcon,
  FilesIcon,
} from '@/shared/icons/vk-icons'
import { SidebarMenuItem } from '@/shared/components/layout/Sidebar/types'
import { Icon } from '@/shared/types'

export const mainGroup: SidebarMenuItem[] = [
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

export const secondGroup: SidebarMenuItem[] = [
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

export const appGroup: SidebarMenuItem[] = [
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
