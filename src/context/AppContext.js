// STEP 1 : Creating context
import { createContext, useState,useEffect } from "react";
import { useLocation } from "react-router-dom";
export const AppContext=createContext();

//STEP 2 : Creating Provider
//CHILDREN REFERS TO ALL THE COMPONENTS OR TAGS THAT ARE INSIDE AppContextProvider tag.
//Example: <AppContextProvider> <App/><AppContextProvider>
//<App/> is children in above example.


//we usually define all the dynamic data that can be required by any component throughut all the application in privider function
export default function AppContextProvider({children}){
    const [isLoading, setLoading]= useState(false)
    const [pagenumber, setPageNumber]= useState(1);
    const [totalpages, setTotalPages]=useState(null);
    const [posts, setPosts]=useState([]);
    const location=useLocation()
    const [relatedPosts, setRelatedPosts]=useState([]);
    const [blog, setBlog]=useState(null)

    //Data Filling done usually by API call
    async function fetchData(page=1, category=null, tag=null){
        setLoading(true)
        let url= `https://codehelp-apis.vercel.app/api/get-blogs?page=${page}`
        if (category){
            url+=`&category=${category}`
        }
        if(tag){
            url+=`&tag=${tag}`
        }
        console.log('-------------PRINTING FETCH API URL-----------------')
        console.log(url)
        console.log('-------------PRINTING FETCH API URL-----------------')

        try{
            let res=await fetch(url)
            let data= await res.json()
            setTotalPages(data.totalPages);
            setPageNumber(data.page)
            setPosts(data.posts)
            console.log("prenting response of fetch API")
            console.log(data)
        }
        catch{
            console.log("an  error accured in API calling");
            setTotalPages(null)
            setPageNumber(null)
            setPosts([]);
        }
        setLoading(false)
    }    

    async function fetchBlogData(blogid){
        setLoading(true)
        let url=`https://codehelp-apis.vercel.app/api/get-blog?blogId=${blogid}`
        console.log('-------------PRINTING BLOG API URL-----------------')
        console.log(url)
        console.log('-------------PRINTING BLOG API URL-----------------')
        try{
            let data=await fetch(url)
            data=await data.json()
            console.log(data)
            setRelatedPosts(data.relatedBlogs)
            setBlog(data.blog)
        }
        catch{
            console.log('FetchBlog API failed')

        }
        setLoading(false)
    }
    useEffect(()=>{
        console.log('pathh changed');
        console.log(location.pathname);
        const pathname=location.pathname
        let last_keyword=null
        if (pathname.includes("category")){
            last_keyword=pathname.split("/").at(-1)
            fetchData(pagenumber,last_keyword)
        }
        else if(pathname.includes("tag")){
            last_keyword=pathname.split("/").at(-1)
            fetchData(pagenumber,null,last_keyword)
        }
        else if (pathname.includes("blogs")){
                fetchData(pagenumber);
            }
        
    },[pagenumber,location.pathname])

    function pageHandler(page){
        setPageNumber(page)
    }
    
    //contains all the data that we have defined.---->functions,variables,states,data
    const value={
        isLoading,
        setLoading,
        pagenumber,
        setPageNumber,
        totalpages,
        setTotalPages,
        posts,
        setPosts,
        fetchBlogData,
        pageHandler,
        blog,
        relatedPosts
    }

    return <AppContext.Provider value={value}>
        {children}
        </AppContext.Provider>
}


//STEP 3 consuming written in Blogs.js file
