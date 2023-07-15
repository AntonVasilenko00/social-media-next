import { HTMLProps } from 'react'
import { twMerge } from 'tailwind-merge'

import { ProfileIcon, ChevronDownIcon } from '@/shared/icons/vk-icons'

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

export default ProfileWithChevronIcon
