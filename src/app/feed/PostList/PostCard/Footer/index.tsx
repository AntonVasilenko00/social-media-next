import { HTMLProps } from 'react'
import { twMerge } from 'tailwind-merge'

import { LikeIcon, CommentIcon, ShareIcon } from '@/shared/icons/vk-icons'
import { Icon } from '@/shared/types'

import PostCardFooterViewsElement from '@/app/feed/PostList/PostCard/Footer/PostCardFooterViewsElement'
import PostCardFooterElement from '@/app/feed/PostList/PostCard/Footer/PostCardFooterElement'

interface PostCardFooter extends HTMLProps<HTMLDivElement> {
  likes: number
  comments: number
  views: number
}

const PostCardFooter: React.FC<PostCardFooter> = ({
  likes,
  comments,
  views,
  ...props
}) => {
  return (
    <ul className={twMerge('flex gap-2', props.className)}>
      <PostCardFooterElement Icon={LikeIcon as Icon} value={likes} />
      <PostCardFooterElement Icon={CommentIcon as Icon} value={comments} />
      <PostCardFooterElement Icon={ShareIcon as Icon} />
      <PostCardFooterViewsElement views={views} />
    </ul>
  )
}

export default PostCardFooter
