import { HTMLProps } from 'react'
import { twMerge } from 'tailwind-merge'

import { Post } from '@/shared/types'

import PostCard from '@/app/feed/PostList/PostCard'
import { posts } from '@/app/feed/mocks/data'

interface PostListProps extends HTMLProps<HTMLUListElement> {
  posts: Post[]
}

const PostLits: React.FC<PostListProps> = ({ ...props }) => {
  return (
    <ul className={twMerge('flex flex-col gap-2 rounded', props.className)}>
      {posts.map((post, index) => (
        <li key={index}>
          <PostCard post={post} />
        </li>
      ))}
    </ul>
  )
}

export default PostLits
