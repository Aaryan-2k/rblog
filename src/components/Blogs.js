//Consuming data
import { useContext , useEffect} from "react";
import { AppContext } from "../context/AppContext";


export default function Blogs(){
    //STEP 3: consuming data
    //Ltes Say i want to use isLoadint and Posts data here lets see how to consume it using context API

    const {isLoading,fetchData,posts}=useContext(AppContext);
    useEffect(()=>{
        fetchData()
    },[])
    return (<div>
        {
            isLoading ? (<div><div className='loader'></div></div>)
            :
            (
                posts.map((post)=>(
                    <div className='blog'>
                    <h3>{post.title}</h3>
                    <p>By {post.author} on <b>{post.category}</b></p>
                    <p>Posted on {post.date}</p>
                    <p className="content">{post.content}</p>
                    <p>{post.tags.map((tag)=>(<span className="tags">#{tag}</span>))}</p>
                    </div>
                ))
            )
        }
        
    </div>);
}