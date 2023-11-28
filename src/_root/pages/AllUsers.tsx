import TopCreator from '@/components/shared/TopCreator'
import React from 'react'
import { useGetUsers } from '@/lib/react-query/queriesAndMutations'
import { Models } from 'appwrite'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui'
import Loader from '@/components/shared/Loader'

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
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  {
                    creators?.documents.map((creator: Models.Document) => (
                      <Link to={`/profile/${creator.$id}`} className="creator-card">
                      <img
                        src={creator.imageUrl || "/assets/icons/profile-placeholder.svg"}
                        alt="creator"
                        className="rounded-full w-14 h-14"
                      />
                
                      <div className="flex-center flex-col gap-1">
                        <p className="base-medium text-light-1 text-center line-clamp-1">
                          {creator.name}
                        </p>
                        <p className="small-regular text-light-3 text-center line-clamp-1">
                          @{creator.username}
                        </p>
                      </div>
                
                      <Button type="button" size="sm" className="shad-button_primary px-5">
                        Follow
                      </Button>
                    </Link>
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
