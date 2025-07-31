//Consuming data
import { useContext , useEffect} from "react";
import { AppContext } from "../context/AppContext";
import BlogCard from './BlogCard'

export default function Blogs(){
    //STEP 3: consuming data
    //Ltes Say i want to use isLoadint and Posts data here lets see how to consume it using context API

    const {isLoading,fetchData,posts}=useContext(AppContext);
    return (<div>
        {
            isLoading ? (<div><div className='loader'></div></div>)
            :
            (
                posts.map((post)=>(
                    <BlogCard value={post}/>
                ))
            )
        }
        
    </div>);
}