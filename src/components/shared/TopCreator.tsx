import React from 'react'
import "../../styles.css"
import UserCard from './userCard'
import { useGetUsers } from '@/lib/react-query/queriesAndMutations'
import Loader from './Loader'
import { Models } from 'appwrite'

const TopCreator = () => {
    const { data: creators, isFetching: isUserLoading, isError: isErrorCreators} = useGetUsers();

  return (
    <div className='mt-10 p-5'>
      <h3 className='h3-bold md:h2-bold text-left w-full mb-4'> Top Creators </h3>
      <div className="user-container">
      {
            isUserLoading && !creators ? (
              <Loader />
            ) : (
              <div className="grid 2xl:grid-cols-2 gap-6">
                {
                  creators?.documents.map((creator: Models.Document) => (
                    <UserCard user={creator} key={creator.name} />
                  ))
                }
              </div>
            )
          }
      </div>
    </div>
  )
}

export default TopCreator
