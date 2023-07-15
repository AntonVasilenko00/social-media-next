import Link from 'next/link'

import { SidebarMenuItem } from '@/shared/components/layout/Sidebar/types'

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

export default ItemGroup
