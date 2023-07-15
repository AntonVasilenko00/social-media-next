import { HTMLProps } from 'react'
import { twMerge } from 'tailwind-merge'

import FeedHottest from '@/app/feed/SideMenu/FeedHottest'
import FeedSideMenuItem from '@/app/feed/SideMenu/FeedSideMenuItem'

interface SideMenuProps extends HTMLProps<HTMLDivElement> {}

const FeedSideMenu: React.FC<SideMenuProps> = ({ ...props }) => {
  return (
    <aside
      className={twMerge(
        'rounded-md w-1/3 h-fit max-md:hidden',
        props.className,
      )}
    >
      <ul className="bg-white p-2 rounded flex flex-col gap-2">
        <FeedSideMenuItem text="News" className="bg-slate-100" />
        <FeedSideMenuItem text="Recomendations" />
        <FeedSideMenuItem text="Search" />
        <hr />
        <FeedSideMenuItem text="Reactions" />
        <FeedSideMenuItem text="Updates" />
        <FeedSideMenuItem text="Comments" />
      </ul>
      <FeedHottest />
    </aside>
  )
}

export default FeedSideMenu
