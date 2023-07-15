import React, { HTMLProps } from 'react'

import ItemGroup from '@/shared/components/layout/Sidebar/ItemGroup'
import {
  mainGroup,
  secondGroup,
  appGroup,
} from '@/shared/components/layout/Sidebar/data'

const SidebarNav: React.FC<HTMLProps<HTMLDivElement>> = (props) => {
  return (
    <aside {...props}>
      <nav>
        <ItemGroup items={mainGroup} />
        <hr className="m-1" />
        <ItemGroup items={secondGroup} />
        <hr className="m-1" />
        <ItemGroup items={appGroup} />
      </nav>
    </aside>
  )
}

export default SidebarNav
