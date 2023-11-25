import React from 'react'

const AllUsers = () => {
  return (
    <div className='explore-container mt-3'>
       <div className="flex-between w-full max-w-5xl mt-2 mb-2">
        <div className="flex gap-2">
          <img src="/assets/icons/people.svg" alt="" className='invert-white' width={28} height={28} />
        <h3 className="body-bold md:h3-bold">All Users</h3>

        </div>
        </div>
    </div>
  )
}

export default AllUsers
