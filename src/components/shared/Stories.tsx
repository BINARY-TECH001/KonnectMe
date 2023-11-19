import { Models } from "appwrite"


type PostCardProps ={
    posts: Models.Document
}

const Stories = ({ posts }: PostCardProps) => {
  return (

    <div className='flex items-center justify-start gap-4 rounded-full p-3'>
    {posts.map((post) => (
      <div className="rounded-full items-start justify-start" key={post.imageUrl}>
        <div className="border-4 border-slate-500 rounded-full">
        <img 
            src={post?.imageUrl}
            alt="post" 
            className="rounded-full"
            width={80}
            height={20}
        />

        </div>
        <p className="line-clamp-1 mt-2 text-center text-light-2 text-sm"> { post?.creator?.name } </p>
    </div>
    ))}
    </div>
  )
}

export default Stories
