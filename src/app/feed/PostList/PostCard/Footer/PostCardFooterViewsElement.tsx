import { HTMLProps } from 'react'
import { twMerge } from 'tailwind-merge'

import { ViewsIcon } from '@/shared/icons/vk-icons'

interface PostCardFooterViewsElementProps extends HTMLProps<HTMLSpanElement> {
  views: number
}

const ICON_SIZE = 16

const PostCardFooterViewsElement: React.FC<PostCardFooterViewsElementProps> = ({
  views,
  ...props
}) => {
  return (
    <span
      {...props}
      className={twMerge(
        'inline-flex items-center gap-2 text-xs text-vk-icon ml-auto',
        props.className,
      )}
    >
      <ViewsIcon width={ICON_SIZE} height={ICON_SIZE} className="" />
      {views}
    </span>
  )
}

export default PostCardFooterViewsElement
