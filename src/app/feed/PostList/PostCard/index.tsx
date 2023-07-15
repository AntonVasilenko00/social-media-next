'use client'

import { HTMLProps } from 'react'

import { Post } from '@/shared/types'

import PostCardFooter from '@/app/feed/PostList/PostCard/Footer'
import PostCardContent from '@/app/feed/PostList/PostCard/Content'
import PostCardHeader from '@/app/feed/PostList/PostCard/Header'

interface PostCard extends HTMLProps<HTMLDivElement> {
  post: Post
}

const PostCard: React.FC<PostCard> = ({ post }) => {
  return (
    <div className="max-w-96 bg-white rounded p-4">
      <PostCardHeader
        author={post.author}
        publicationDateTime={post.publicationDatetime}
      />
      <PostCardContent text={post.text} assets={post.assets} />
      <PostCardFooter
        comments={post.commentsNumber}
        likes={post.likesNumber}
        views={post.views}
      />
    </div>
  )
}

export default PostCard
