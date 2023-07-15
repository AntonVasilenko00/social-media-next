import { HTMLProps } from 'react'
import { twMerge } from 'tailwind-merge'

import { Icon } from '@/shared/types'

const ICONS_SIZE = 24

const MIN_ELEMENT_VALUE = 0

interface PostCardFooterElementProps extends HTMLProps<HTMLLIElement> {
  Icon: Icon
  value?: number
}

const PostCardFooterElement: React.FC<PostCardFooterElementProps> = ({
  Icon,
  value,
  ...props
}) => {
  return (
    <li
      {...props}
      className={twMerge(
        'bg-slate-100 px-2 py-1 rounded-full inline-flex font-medium text-vk-icon cursor-pointer hover:bg-slate-200 transition gap-1',
      )}
    >
      <Icon width={ICONS_SIZE} height={ICONS_SIZE} className="text-vk-icon" />
      {value && value > MIN_ELEMENT_VALUE && value}
    </li>
  )
}

export default PostCardFooterElement
