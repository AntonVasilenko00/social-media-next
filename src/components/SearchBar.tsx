import React, { HTMLProps } from 'react'
import { twMerge } from 'tailwind-merge'

import { SearchIcon } from '@/lib/icons/vk-icons'

const SearchBar: React.FC<HTMLProps<HTMLInputElement>> = (props) => {
  return (
    <div
      className={twMerge(
        'bg-slate-100 hover:bg-slate-200 rounded-md flex items-center px-2 transition',
        props.className,
      )}
    >
      <SearchIcon className="text-vk-icon" width={16} height={16} />
      <input
        {...props}
        placeholder="Search"
        type="text"
        className="bg-transparent px-2 py-1 outline-none w-full"
      />
    </div>
  )
}

export default SearchBar
