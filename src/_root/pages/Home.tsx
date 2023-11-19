import Loader from "@/components/shared/Loader"
import PostCard from "@/components/shared/PostCard"
import Stories from "@/components/shared/Stories"
import { useGetPosts, useGetUsers } from "@/lib/react-query/queriesAndMutations"
import { Models } from "appwrite"



const Home = () => {
  const { data: posts, isFetching: isPostLoading, isError: isErrorPosts } = useGetPosts()

  return (
    <div className="flex flex-1">
      <div className="home-container">
        <div className="home-posts">
          {isPostLoading && !posts ? (
            <Loader />
          ) : (
            <div className="lg:hidden flex justify-between items-center w-full">
              {posts?.pages.map((post: Models.Document) => (
                <li key={post.$id} >
                  <Stories posts={post.documents} />
                </li>
              ))}

              <div className="flex">
                <img 
                  src="/assets/icons/arrow-right.svg" 
                  alt="arrow" 
                />
              </div>
            </div>
          )}

          <h2 className="h3-bold md:h2-bold text-left w-full">Home Feed</h2>

          {isPostLoading && !posts ? (
            <Loader />
          ) : (
            <ul className="flex flex-col flex-1 gap-9 w-full">
              {posts?.pages.map((post: Models.Document) => (
                <li key={post.$id} >
                  <PostCard posts={post.documents} />
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  )
}

export default Home
