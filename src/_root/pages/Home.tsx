import Loader from "@/components/shared/Loader"
import PostCard from "@/components/shared/PostCard"
import Stories from "@/components/shared/Stories"
import TopCreator from "@/components/shared/TopCreator"
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
            <div className="flex justify-between items-center w-full">
              {posts?.pages.map((post: Models.Document) => (
                <div key={post.$id} >
                  <Stories posts={post.documents} />
                </div>
              ))}

              <div className="flex gap-1 p-2 rounded-full bg-dark-4">
                <img 
                  src="/assets/icons/arrow-right.svg" 
                  alt="arrow" 
                  width={24}
                  height={28}
                />
              </div>
            </div>
          )}

        <div className="flex-between w-full max-w-5xl mt-2 mb-2">
        <h2  className="h3-bold md:h2-bold text-left w-full">Home Feed</h2>

        <div className="flex-center gap-3 bg-dark-3 rounded-xl px-4 py-2 cursor-pointer">
          <p className="small-medium md:base-medium text-light-2">All</p>
          <img
            src="/assets/icons/filter.svg"
            width={20}
            height={20}
            alt="filter"
          />
        </div>
      </div>

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
      <TopCreator />
    </div>
  )
}

export default Home
