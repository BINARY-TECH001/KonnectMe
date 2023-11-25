import PostStats from "@/components/shared/PostStats"
import { Button } from "@/components/ui"
import { useUserContext } from "@/context/AuthContext"
import { useGetPostById, useGetPosts } from "@/lib/react-query/queriesAndMutations"
import { multiFormatDateString } from "@/lib/utils"
import Loader from '@/components/shared/Loader'
import { Link, useParams } from "react-router-dom"
import GridPostList from "@/components/shared/GridPostList"


const PostDetails = () => {
  const { id } = useParams()
  const { data: post, isFetching: isFetchingPost } = useGetPostById(id || "")
  const { data: posts, isFetching:isFetchingRelatedPosts} = useGetPosts()


  const { user } = useUserContext()

  const handleDeletePost = () => {

  }

  return (
    <div className="post_details-container">
      {isFetchingPost ? <Loader /> : (
        <div className="post_details-card">
          <img
            src={post?.imageUrl}
            alt="post"
            className="post_details-img"
          />
          <div className="post_details-info">
            <div className="flex-between w-full">
              <Link to={`/profile/${post?.creator.$id}`} className="flex items-center gap-3">
                <img
                  src={post?.creator?.imageUrl || '/assets/icons/profile-placeholder.svg'}
                  alt="creator"
                  className="rounded-full w-12 h-8 lg:h-12 lg:h-12"
                />
                <div className="flex flex-col">
                  <p className="base-medium lg:body-bold text-light-1"> {post?.creator.name} </p>
                  <div className="flex-center gap-2 text-light-3">
                    <p className="subtle-semibold lg:small-regular"> {multiFormatDateString(post?.$createdAt)} </p>
                    -
                    <p className="subtle-semibold lg:small-regular"> {post?.location} </p>
                  </div>
                </div>
              </Link>

              <div className="flex-center">
                <Link to={`/update-post/${post?.$id}`}>
                  <img src="/assets/icons/edit.svg" alt="edit" width={24} height={24} className={`btn ${user.id !== post?.creator.$id && "hidden"}`} />
                </Link>

                <Button
                  onClick={handleDeletePost}
                  variant="ghost"
                  className={`ghost_details-delete_btn user.id !== post?.creator.$id && "hidden"`}
                >
                  <img src="/assets/icons/delete.svg" alt="delete" width={24} height={24} />
                </Button>
              </div>
            </div>

            <hr className="border w-full border-dark-4/80" />
            <div className="flex flex-col flex-1 small-medium lg:base-regular">
              <p> {post?.caption} </p>
              <ul className="flex gap-1 mt-2">
                {post?.tags.map((tag: string) => (
                  <li key={tag} className="text-light-3"> #{tag} </li>
                ))}
              </ul>
            </div>

            <div className="w-full">
              <PostStats post={post} userId={user.id} />
            </div>
          </div>
        </div>
      )}

      <div className="flex-between w-full max-w-5xl mt-4 mb-7">
        <h3 className="body-bold md:h3-bold">More Related Posts</h3>

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

      <div className="flex flex-wrap gap-9 w-full max-w-5xl">
        {isFetchingRelatedPosts ? <Loader /> : (
          posts?.pages.map((item, index) => (
            <GridPostList key={`page-${index}`} posts={item.documents} isFetching={isFetchingRelatedPosts}/>
          ))
        )}
      </div>

    </div>
  )
}

export default PostDetails
