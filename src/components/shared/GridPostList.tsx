import { useUserContext } from "@/context/AuthContext"
import { Models } from "appwrite"
import { type } from "os"


type GridPostListProps ={
    posts: Models.Document[]
}

const GridPostList = ({ posts }:GridPostListProps) => {
    const { user } = useUserContext()
  return (
    <ul className="grid-container">
        
    </ul>
  )
}

export default GridPostList
