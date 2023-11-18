import React from 'react'
import "../../styles.css"
import UserCard from './userCard'
import { useGetUsers } from '@/lib/react-query/queriesAndMutations'
import Loader from './Loader'

const TopCreator = () => {
    const { data: creators, isFetching: isUserLoading, isError: isErrorCreators} = useGetUsers();

    console.log(creators)
  return (
    <div className='mt-10 p-4'>
      <h3 className='h3-bold md:h2-bold text-left w-full'> Top Creators </h3>
      <div className="grid-container">
      {
            isUserLoading && !creators ? (
              <Loader />
            ) : (
              <ul className="flex flex-col flex-1 gap-9 w-full">
                {
                  posts?.documents.map((post: Models.Document) => (
                    <PostCard post={post} key={post.caption} />
                  ))
                }
              </ul>
            )
          }
      </div>
    </div>
  )
}

export default TopCreator
