import { Button } from "@/components/ui"


const Profile = () => {
  return (
    <div className="container_profile flex-col justify-center flex-1 items-start mt-20">
    <div className="flex justify-center items-start w-full gap-6">
    <div className="image h-[150px] w-[150px]">
        <img src="/assets/images/profile.png" alt="user" className="w-full"/>
      </div>

      <div className="userInfo flex flex-col gap-1">
        <h3 className="h3-bold md:h2-bold text-left w-full"> Binary Tech </h3>
        {/* <img src="/assets/icons/verify.svg" alt="verify" width={20} height={20} /> */}
        <p className="text-[#7878A3] font-[18px] mt-1"> @BinaryTech001 </p>

        <div className="postInfo flex gap-3 mt-5">
        <div className="post">
          <span className="font-[20px] text-[#877EFF]"> 978 </span>
          <span className="text-sm"> Posts </span>
        </div>
        <div className="followers">
          <span className="font-[20px] text-[#877EFF]"> 230k </span>
          <span className="text-sm"> Followers </span>
        </div>
        <div className="following">
          <span className="font-[20px] text-[#877EFF]"> 68 </span>
          <span className="text-sm"> Following </span>
        </div>
        </div>
      </div>

      <div className="actionBtn flex gap-3 items-start justify-start">
        <Button className="bg-[#877EFF] hover:bg-[#877EFF]">
          Follow
        </Button>
        <Button className="bg-[#EFEFEF] text-dark-1 hover:bg-[#EFEFEF]">
          Message
        </Button>
      </div>
    </div>

    <div className="flex relative">
      <div className="flex relative">
        hello

      </div>
    </div>
    </div>
  )
}

export default Profile
