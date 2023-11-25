import GridPostList from "@/components/shared/GridPostList"
import Loader from "@/components/shared/Loader"
import { Button } from "@/components/ui"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useGetUserPosts } from "@/lib/react-query/queriesAndMutations"
import { Link, useParams } from "react-router-dom"


const Profile = () => {
  const { id } = useParams()
  const { data: Userposts, isFetching } = useGetUserPosts(id || "")

  if (isFetching) return <Loader />

  return (
    <div className="container_profile flex-wrap md:flex-row justify-center">
      <div className="flex justify-center sm:flex-col xs:flex-col lg:flex-row items-start w-full gap-6">
        <div className="image h-[150px] w-[150px]">
          <img src="/assets/images/profile.png" alt="user" className="w-full" />
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

      <div className="flex relative flex-col items-start justify-center mt-2 w-full lg:ml-[480px]">
        <div className="bio w-[628px] h-[103px]">
          <p>For Developers, By Developers
            💻 Web Development & Coding
            🎥 YouTube - JavaScript Mastery
            ✉️ Business Inquiries - Email or DM </p>
        </div>
        <div className="course flex gap-5 m-0">
          <div className="containerI w-[73px]">
            <div className="iconContainer border-4 border-slate-500 rounded-full">
              <img src="/assets/images/js.png" alt="icon" className="w-full" />
            </div>
            <p className="truncate text-center text-[12px] mt-1">Javscript Masterclass</p>
          </div>

          <div className="containerI w-[73px]">
            <div className="iconContainer border-4 border-slate-500 rounded-full">
              <img src="/assets/images/movie.png" alt="icon" className="w-full" />
            </div>
            <p className="truncate text-center text-[12px] mt-1"> Movie </p>
          </div>

          <div className="containerI w-[73px]">
            <div className="iconContainer border-4 border-slate-500 rounded-full">
              <img src="/assets/images/web3.png" alt="icon" className="w-full" />
            </div>
            <p className="truncate text-center text-[12px] mt-1">Web3</p>
          </div>

          <div className="containerI w-[73px]">
            <div className="iconContainer border-4 border-slate-500 rounded-full">
              <img src="/assets/images/masterclass.png" alt="icon" className="w-full" />
            </div>
            <p className="truncate text-center text-[12px] mt-1">Masterclass</p>
          </div>

          <div className="containerI w-[73px]">
            <div className="iconContainer border-4 border-slate-500 rounded-full">
              <img src="/assets/images/Faqs.png" alt="icon" className="w-full" />
            </div>
            <p className="truncate text-center text-[12px] mt-1"> Faqs </p>
          </div>
        </div>
      </div>

      <div className=" flex items-start w-full justify-center flex-1">
        <div className="w-full max-w-5xl mt-16 mb-7">
          <Tabs defaultValue="account" className="w-[400px]  ">
            <TabsList className="bg-dark-3 rounded-md flex gap-2 w-full justify-between">
              <TabsTrigger value="account" className="bg-dark-3 flex gap-2 rounded-md px-3 w-full">
                <img src="/assets/icons/posts.svg" alt="" className="" width={20} height={20} />
                <span className="text-sm"> Post </span>
              </TabsTrigger>
              <TabsTrigger value="password" className="bg-dark-3 flex gap-2 rounded-md px-3 w-full">
                <img src="/assets/icons/reels.svg" alt="" className="" width={20} height={20} />
                Reels
              </TabsTrigger>
              <TabsTrigger value="tagged" className="bg-dark-3 flex gap-2 rounded-md px-3 w-full">
                <img src="/assets/icons/tags.svg" alt="" className="" width={20} height={20} />
                Tagged
              </TabsTrigger>
            </TabsList>
            <div className=" gap-9 w-full max-w-5xl">
            <TabsContent value="account" className="">  {Userposts?.documents.map((post) => (
               <ul className="grid-containe">
                 <li key={post.$id} className=" min-w-h0 h-80">
                   <Link to={`/post/${post.$id}`} className="grid-post_link">
                     <img 
                       src={post.imageUrl} 
                       alt="post" 
                       className="h-full w-full object-cover"
                     />
                   </Link>
         
                   {/* <div className="grid-post_user">
                     {showUser && (
                       <div className="flex items-center justify-start gap-2 flex-1">
                         <img src={post.creator.imageUrl} alt="creator" className="h-8 w-8 rounded-full" />
                         <p line-clamp-1> {post.creator.name} </p>
                       </div>
                     )}
         
                     {showStats && <PostStats post={post} userId={user.id} />}
                   </div> */}
                 </li>
             </ul>
            ))}
            </TabsContent>
            </div>
            <TabsContent value="password"> Reels </TabsContent>
            <TabsContent value="tagged"> Tagged </TabsContent>
          </Tabs>
        </div>
      </div>

    </div>
  )
}

export default Profile
