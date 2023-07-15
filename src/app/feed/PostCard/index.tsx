'use client'

import classNames from 'classnames'
import { HTMLProps, useEffect, useRef, useState } from 'react'
import Image from 'next/image'

import ContactProfilePicture from '@/components/ContactProfilePicture'

import {
  CommentIcon,
  HorizontalDotsMenuIcon,
  LikeIcon,
  ShareIcon,
  ViewsIcon,
} from '@/lib/icons/vk-icons'
import { Post } from '@/lib/types'

interface PostCard extends HTMLProps<HTMLDivElement> {
  post: Post
}

const PostCard: React.FC<PostCard> = ({ post }) => {
  const containerRef = useRef<HTMLDivElement>(null)

  const [isTextClamped, setIsTextClamped] = useState(true)

  useEffect(() => {
    console.log(containerRef.current?.offsetWidth)
  })

  return (
    <div className="max-w-96 bg-white rounded p-4">
      <div className="flex gap-2 items-center">
        <ContactProfilePicture contact={post.author} iconSize={40} />
        <div>
          <p className="text-sm">{post.author.name}</p>
          <p className="text-xs">
            {post.datetimePosted.getHours() - new Date().getHours()} hours ago
          </p>
        </div>
        <HorizontalDotsMenuIcon
          width={18}
          height={18}
          className="text-vk-icon cursor-pointer hover:animate-pulse ml-auto transition"
        />
      </div>
      <p
        className={classNames('whitespace-pre-line my-2', {
          'line-clamp-[7]': isTextClamped,
        })}
      >
        {post.text}
      </p>
      {isTextClamped && (
        <button
          className="text-blue-300"
          onClick={() => setIsTextClamped((show) => !show)}
        >
          show more
        </button>
      )}

      {post.assets?.map((asset) => {
        switch (asset.type) {
          case 'video':
            return <video src={asset.url}></video>
          case 'image':
            return (
              <div
                className={`w-full aspect-square rounded my-2 cursor-pointer`}
              >
                <Image
                  className="w-full h-full rounded"
                  src={asset.url}
                  alt={asset.type}
                  width={1000}
                  height={1000}
                />
              </div>
            )
          case 'music':
            return <audio src={asset.url} />
        }
      })}

      <div className="flex gap-2">
        <span className="bg-slate-100 px-2 py-1 rounded-full inline-flex font-medium text-vk-icon cursor-pointer hover:bg-slate-200 transition gap-1">
          <LikeIcon width={24} height={24} className="text-vk-icon" />
          {post.likesNumber > 0 && post.likesNumber}
        </span>
        <span className="bg-slate-100 px-2 py-1 rounded-full inline-flex font-medium text-vk-icon cursor-pointer hover:bg-slate-200 transition gap-1">
          <CommentIcon width={24} height={24} className="text-vk-icon" />
          {post.commentsNumber > 0 && post.commentsNumber}
        </span>
        <span className="bg-slate-100 px-2 py-1 rounded-full inline-flex font-medium text-vk-icon cursor-pointer hover:bg-slate-200 transition gap-1">
          <ShareIcon width={24} height={24} className="text-vk-icon" />
        </span>

        <span className="inline-flex items-center gap-2 text-xs text-vk-icon ml-auto">
          <ViewsIcon width={16} height={16} className="" />
          {post.views}
        </span>
      </div>
    </div>
  )
}

export default PostCard
