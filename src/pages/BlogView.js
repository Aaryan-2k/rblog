import Header from '../components/Header'
import BlogCard from '../components/BlogCard'
import { AppContext } from '../context/AppContext'
import { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import './BlogView.css'

export default function BlogView(){
    const {blog,relatedPosts,isLoading,fetchBlogData}=useContext(AppContext);
    const {blogid} = useParams()
    useEffect(()=>{
        fetchBlogData(blogid)
    },[])
    console.log(blog)
    console.log(relatedPosts)
    return (
    <div>
            <Header/>
        <div className='container'>
            {blog &&
            <BlogCard value={blog}/>
            }
            <h1 className='related'>Related blogs</h1>
            {
                isLoading ? (<div><div className='loader'></div></div>)
                :
                (
                    relatedPosts.map((post)=>(
                        <BlogCard value={post}/>
                    ))
                )
            }
        </div>
    </div>
    )
}