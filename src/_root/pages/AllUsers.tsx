import TopCreator from '@/components/shared/TopCreator'
import React from 'react'
import { useGetUsers } from '@/lib/react-query/queriesAndMutations'
import { Models } from 'appwrite'
import UserCard from '@/components/shared/userCard'
import { Loader } from 'lucide-react'

const AllUsers = () => {
  const { data: creators, isFetching: isUserLoading, isError: isErrorCreators} = useGetUsers();

  return (
    <div className='explore-container mt-3'>
      <div className="w-full max-w-5xl mt-2 mb-2">
        <div className="flex gap-2">
          <img src="/assets/icons/people.svg" alt="" className='invert-white' width={28} height={28} />
          <h3 className="body-bold md:h3-bold">All Users</h3>
        </div>

        <div className='mt-10 p-5 lg:block'>
          <div className="user-container">
            {
              isUserLoading && !creators ? (
                <Loader />
              ) : (
                <div className="grid 2xl:grid-cols-3 gap-6">
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
        </div>
      </div>
      )
}

      export default AllUsers
