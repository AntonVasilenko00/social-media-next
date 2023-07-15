import React, { HTMLProps } from 'react'
import { twMerge } from 'tailwind-merge'
import Image from 'next/image'
import { NextPage } from 'next'

import SearchBar from '@/components/SearchBar'

import PostCard from '@/app/feed/PostCard'

import { Post, Story } from '@/lib/types'
import { FireIcon } from '@/lib/icons/vk-icons'

interface StoriesProps extends HTMLProps<HTMLDivElement> {
  stories: Story[]
}

const StoriesBar: React.FC<StoriesProps> = ({ stories, ...props }) => {
  return (
    <div
      {...props}
      className={twMerge('bg-white rounded p-2', props.className)}
    >
      <h2>Stories</h2>
      <ul className="flex gap-2 my-1 overflow-x-scroll no-scrollbar">
        {stories.map((story, index) => (
          <li
            key={index}
            className="flex flex-shrink-0 cursor-pointer w-28 h-48 rounded-xl bg-slate-100 relative"
          >
            {story.previewImage && (
              <Image src={story.previewImage} alt={story.author.name} />
            )}

            <div className="w-8 h-8 rounded-full bg-slate-300 absolute bottom-6 left-1/2 -translate-x-1/2">
              {story.author.imageUrl && (
                <Image src={story.author.imageUrl} alt={story.author.name} />
              )}
              <span className="absolute top-8">{story.author.name}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

const story: Story = {
  author: {
    isOnline: true,
    name: '4ch',
  },
}

const stories: Story[] = []

for (let i = 0; i < 5; i++) {
  stories.push(story)
}

const post: Post = {
  author: {
    isOnline: true,
    name: '4ch',
  },
  datetimePosted: new Date(),
  text: `В Осиповичах мужчина упал с балкона.

  Прибывшие к месту вызова работники МЧС обнаружили мужчину лежащим на крыше магазина, пристроенного к дому, на уровне второго этажа.
  
  Мужчина 1955 г.р., пенсионер, проживает с супругой в этом же доме на 5 этаже. С его слов, он вышел на балкон покурить, почувствовал головокружение и упал вниз.
  
  Работники МЧС оказали пострадавшему первую медицинскую помощь и передали бригаде скорой медицинской помощи.
  
  Мужчина госпитализирован с травмами.`,
  likesNumber: 3,
  commentsNumber: 0,
  repostsNumber: 0,
  views: 889,
  assets: [
    {
      type: 'image',
      url: 'https://sun1-94.userapi.com/impg/n-bJ_XDImnhuV_CpQfxlRA7da4RzwQ4vPAVRQA/ZOwkke-8W1Y.jpg?size=1071x1080&quality=96&sign=7a380b20294541f9e165489adf8c7396&type=album',
    },
  ],
}

const posts: Post[] = [post, post]

interface FeedListProps extends HTMLProps<HTMLUListElement> {
  posts: Post[]
}

const FeedList: React.FC<FeedListProps> = ({ ...props }) => {
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

const Feed: NextPage = () => {
  return (
    <div className={twMerge('w-full flex gap-2')}>
      <section className="flex flex-col gap-2 rounded-md w-2/3 max-md:w-full">
        <SearchBar placeholder="What's new?" className="bg-white px-4" />
        <StoriesBar stories={stories} className="px-4" />
        <FeedList posts={posts} />
      </section>
      <aside className="rounded-md w-1/3 h-fit max-md:hidden">
        <ul className="bg-white p-2 rounded flex flex-col gap-2">
          <li className="bg-slate-100 cursor-pointer p-1 px-2 rounded">
            Новости
          </li>
          <li className="hover:bg-slate-100 cursor-pointer p-1 px-2 rounded">
            Рекомендации
          </li>
          <li className="hover:bg-slate-100 cursor-pointer p-1 px-2 rounded">
            Поиск
          </li>
          <hr />
          <li className="hover:bg-slate-100 cursor-pointer p-1 px-2 rounded">
            Реакции
          </li>
          <li className="hover:bg-slate-100 cursor-pointer p-1 px-2 rounded">
            Обновления
          </li>
          <li className="hover:bg-slate-100 cursor-pointer p-1 px-2 rounded">
            Комментарии
          </li>
        </ul>
        <label className="my-2 p-2 flex items-center bg-white rounded cursor-pointer w-full">
          <FireIcon width={18} height={18} className="text-red-500" />
          <p className="mx-2 select-none">Hottest first</p>
          <input type="checkbox" className="peer sr-only" />
          <div className="ml-auto w-6 h-2 rounded-full bg-slate-200 relative peer-checked:after:bg-vk-icon-accent peer-checked:after:translate-x-4 after:transition after:absolute after:content-[''] after:w-4 after:h-4 after:bg-slate-400 after:rounded-full after:-top-1 after:-left-1"></div>
        </label>
      </aside>
    </div>
  )
}

export default Feed
