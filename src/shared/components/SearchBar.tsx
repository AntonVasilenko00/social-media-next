import React, { HTMLProps } from 'react'
import { twMerge } from 'tailwind-merge'

import { SearchIcon } from '@/shared/icons/vk-icons'

const SEARCH_ICON_SIZE = 16

const SearchBar: React.FC<HTMLProps<HTMLInputElement>> = (props) => {
  return (
    <div
      className={twMerge(
        'bg-slate-100 hover:bg-slate-200 rounded-md flex items-center px-2 transition',
        props.className,
      )}
    >
      <SearchIcon
        className="text-vk-icon"
        width={SEARCH_ICON_SIZE}
        height={SEARCH_ICON_SIZE}
      />
      <input
        placeholder="Search"
        {...props}
        type="text"
        className="bg-transparent px-2 py-1 outline-none w-full"
      />
    </div>
  )
}

export default SearchBar
