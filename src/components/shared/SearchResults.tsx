import { Models } from "appwrite";
import Loader from "./Loader";
import GridPostList from "./GridPostList";

type SearchresultsProps = {
    isSearchFetching: boolean;
    searchedPosts: Models.Document[];
}

const SearchResults = ({ isSearchFetching, searchedPosts }:SearchresultsProps) => {  
    if (isSearchFetching) return <Loader />

    if( searchedPosts && searchedPosts.documents.length > 0) {
        return(
            <GridPostList posts={searchedPosts.documents} />
        )
    }
  return (
    <p className="text-light-4 mt-10 text-center w-full"> No Result Found! </p>
  )
}

export default SearchResults
