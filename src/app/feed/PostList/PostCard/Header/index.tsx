import { twMerge } from 'tailwind-merge'
import { HTMLProps } from 'react'

import { Author } from '@/shared/types'
import { HorizontalDotsMenuIcon } from '@/shared/icons/vk-icons'
import ContactProfilePicture from '@/shared/components/ContactProfilePicture'

import PostBublisherNameAndDatetime from '@/app/feed/PostList/PostCard/Header/PostPublisherNameAndDatetime'

const DOTS_MENU_SIZE = 18

const PROFILE_PICTURE_SIZE = 40

interface PostCardHeader extends HTMLProps<HTMLDivElement> {
  author: Author
  publicationDateTime: Date
}

const PostCardHeader: React.FC<PostCardHeader> = ({
  author,
  publicationDateTime,
  ...props
}) => {
  return (
    <div
      {...props}
      className={twMerge('flex gap-2 items-center', props.className)}
    >
      <ContactProfilePicture contact={author} iconSize={PROFILE_PICTURE_SIZE} />
      <PostBublisherNameAndDatetime
        name={author.name}
        publicationDateTime={publicationDateTime}
      />
      <HorizontalDotsMenuIcon
        width={DOTS_MENU_SIZE}
        height={DOTS_MENU_SIZE}
        className="text-vk-icon cursor-pointer hover:animate-pulse ml-auto transition"
      />
    </div>
  )
}

export default PostCardHeader
