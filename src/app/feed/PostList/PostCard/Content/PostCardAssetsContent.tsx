import { HTMLProps } from 'react'
import Image from 'next/image'

import { Asset } from '@/shared/types'

const DEFAULT_IMAGE_DEMENTIONS = 1000

interface PostCardAssetsProps extends HTMLProps<HTMLDivElement> {
  assets: Asset[]
}

const PostCardAssetsContent: React.FC<PostCardAssetsProps> = ({ assets }) => {
  return (
    <>
      {assets?.map((asset) => {
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
                  width={DEFAULT_IMAGE_DEMENTIONS}
                  height={DEFAULT_IMAGE_DEMENTIONS}
                />
              </div>
            )
          case 'music':
            return <audio src={asset.url} />
        }
      })}
    </>
  )
}

export default PostCardAssetsContent
