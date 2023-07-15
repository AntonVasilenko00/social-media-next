import React from 'react'
import { twMerge } from 'tailwind-merge'
import { NextPage } from 'next'

import SearchBar from '@/shared/components/SearchBar'

import FeedSideMenu from '@/app/feed/SideMenu'
import PostList from '@/app/feed/PostList'
import { posts, stories } from '@/app/feed/mocks/data'
import { StoriesBar } from '@/app/feed/StoriesBar'

const SEARCHBAR_PLACEHOLDER = "What's new?"

const Feed: NextPage = () => {
  return (
    <div className={twMerge('w-full flex gap-2')}>
      <section className="flex flex-col gap-2 rounded-md w-2/3 max-md:w-full">
        <SearchBar
          placeholder={SEARCHBAR_PLACEHOLDER}
          className="bg-white px-4"
        />
        <StoriesBar stories={stories} className="px-4" />
        <PostList posts={posts} />
      </section>
      <FeedSideMenu />
    </div>
  )
}

export default Feed
