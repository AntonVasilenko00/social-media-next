import { Asset } from '@/shared/types'

import PostCardAssetsContent from '@/app/feed/PostList/PostCard/Content/PostCardAssetsContent'
import PostCardTextContent from '@/app/feed/PostList/PostCard/Content/PostCardTextContent'

interface PostCardContentProps {
  text: string
  assets?: Asset[]
}

const PostCardContent: React.FC<PostCardContentProps> = ({ text, assets }) => {
  return (
    <>
      <PostCardTextContent text={text} />
      {assets && <PostCardAssetsContent assets={assets} />}
    </>
  )
}

export default PostCardContent
