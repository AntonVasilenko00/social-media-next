'use client'

import classNames from 'classnames'
import { HTMLProps } from 'react'

import useButtonToggle from '@/shared/hooks/useButtonToggle'

const EXPAND_BUTTON_TEXT = 'show more'

interface PostCardTextContentProps extends HTMLProps<HTMLParagraphElement> {
  isTextClamped?: boolean
  text: string
}

const PostCardTextContent: React.FC<PostCardTextContentProps> = ({
  text,
  ...props
}) => {
  const [isTextClamped, handleExpandButtonClick] = useButtonToggle(false)

  return (
    <p>
      <span
        {...props}
        className={classNames('whitespace-pre-line my-2', {
          'line-clamp-[7]': isTextClamped,
        })}
      >
        {text}
      </span>
      {isTextClamped && (
        <button className="text-blue-300" onClick={handleExpandButtonClick}>
          {EXPAND_BUTTON_TEXT}
        </button>
      )}
    </p>
  )
}

export default PostCardTextContent
