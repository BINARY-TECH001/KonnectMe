import { Button } from "@/components/ui"


const Profile = () => {
  return (
    <div className="container_profile">
    <div className="flex items-center justify-center w-full">
      <div className="image">
        <img src="/assets/images/profile.png" alt="user" />
      </div>

      <div className="userInfo">
        <h3> Binary Tech </h3>
        <p> @BinaryTech001 </p>
        <div className="post">
          <span> 978 </span>
          <span> Posts </span>
        </div>
        <div className="followers">
          <span> 230k </span>
          <span> Followers </span>
        </div>
        <div className="following">
          <span> 68 </span>
          <span> Following </span>
        </div>
      </div>

      <div className="actionBtn">
        <Button>
          Follow
        </Button>
        <Button>
          Message
        </Button>
      </div>
    </div>
    </div>
  )
}

export default Profile
