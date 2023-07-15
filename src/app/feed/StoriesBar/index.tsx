import React, { HTMLProps } from 'react'
import { twMerge } from 'tailwind-merge'
import Image from 'next/image'

import { Story } from '@/shared/types'

interface StoriesProps extends HTMLProps<HTMLDivElement> {
  stories: Story[]
}

export const StoriesBar: React.FC<StoriesProps> = ({ stories, ...props }) => {
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
