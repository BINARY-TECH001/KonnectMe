import React, { useEffect, useState } from "react";
import { useDeleteSavedPost, useGetCurrentUser, useLikePost, useSavePost } from "@/lib/react-query/queriesAndMutations";
import { Models } from "appwrite"
// import { checkIsLiked } from "@/lib/utils";
import { set } from "zod";
import { deleteSavedPost } from "@/lib/appwrite/api";
import Loader from "./Loader";

type PostStatsProps ={
    post?: Models.Document;
    userId: string;
}

const PostStats = ({ post, userId } : PostStatsProps) => {

    const checkIsLiked = (likeList: string[], userId: string) => {
        return likeList.includes(userId);
      };

    const likesList = post?.likes.map((user: Models.Document) => user.$id);

    console.log(post)

    const [likes, setLikes] = useState(likesList)
    const [isSaved, setIsSaved] = useState(false)

    console.log(likes)

    const { mutate: likePost } = useLikePost()
    const { mutate: savePost, isPending : isSavingPost } = useSavePost();
    const { mutate: deleteSavedPost, isPending : isDeletingPost } = useDeleteSavedPost()

    const { data: currentUser } = useGetCurrentUser()
     const savedPostRecord = currentUser?.save.find(
    (record: Models.Document) => record.post.$id === post?.$id
  );

    useEffect(() => {
        setIsSaved(!!savedPostRecord) //same as below 👇
        // setIsSaved(savedPostRecord ? true : false)
    }, [currentUser])

    const handleLikePost = (e: React.MouseEvent) => {
        e.stopPropagation();

        let newLikes = [...likes]
        const hasLiked = newLikes.includes(userId)

        if(hasLiked){
            newLikes = newLikes.filter((id) => id !== userId)
        } else {
            newLikes.push(userId)
        }
        setLikes(newLikes)
        likePost({ postId: post?.$id || "", likesArray:newLikes })
    }

    const handleSavePost = (e: React.MouseEvent)=> {
        e.stopPropagation();
        
        if(savedPostRecord){
            setIsSaved(false)
            deleteSavedPost(savedPostRecord.$id)
        } else{
            savePost({ userId, postId: post?.$id || ""})
            setIsSaved(true)  
        }

    }
  return (
    <div className="flex justify-between z-20 mt-5">
      <div className="flex gap-5">
      <div className="flex gap-1">
       <img 
            src={checkIsLiked(likes, userId) 
                ? "/assets/icons/liked.svg"
                : "/assets/icons/like.svg"
            }
            alt="like" 
            width={20}
            height={20}
            onClick={handleLikePost}
            className="cursor-poinnter"
        />
        <p className="small-medium lg:base-medium">{likes.length}</p>
      </div>

      <div className="flex gap-1">
        <img
          src="/assets/icons/chat.svg"
          alt="comment"
          width={20}
          height={20}
        />
        <p className="small-medium lg:base-medium">68</p>
      </div>
      <div className="flex gap-1">
        <img
          src="/assets/icons/share.svg"
          alt="share"
          width={20}
          height={20}
        />
        <p className="small-medium lg:base-medium">68</p>
      </div>
      </div>

      <div className="flex gap-2">
      {isSavingPost || isDeletingPost ? <Loader /> : 
      <img 
            src={isSaved 
                ? "/assets/icons/saved.svg"
                : "/assets/icons/save.svg"
            }
            alt="like" 
            width={20}
            height={20}
            onClick={handleSavePost}
            className="cursor-poinnter"
        />
        }
      </div>
    </div>
  )
}

export default PostStats
