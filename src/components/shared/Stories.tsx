import { Models } from "appwrite"


type PostCardProps ={
    posts: Models.Document
}

const Stories = ({ posts }: PostCardProps) => {
  return (

    <div className='flex items-center justify-start gap-4'>
    {posts.map((post) => (
      <div className="rounded-full items-start justify-start" key={post.imageUrl}>
        <img 
            src={post?.imageUrl}
            alt="post" 
            className="rounded-full"
            width={80}
            height={20}
        />
    </div>
    ))}
    </div>
  )
}

export default Stories
