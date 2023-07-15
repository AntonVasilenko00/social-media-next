interface PostBublisherNameAndDatetimeProps {
  name: string
  publicationDateTime: Date
}

const PostBublisherNameAndDatetime: React.FC<
  PostBublisherNameAndDatetimeProps
> = ({ name, publicationDateTime }) => (
  <div>
    <p className="text-sm">{name}</p>
    <p className="text-xs">
      {publicationDateTime.getHours() - new Date().getHours()} hours ago
    </p>
  </div>
)

export default PostBublisherNameAndDatetime
