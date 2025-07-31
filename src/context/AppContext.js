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
    const [category,setCategory]=useState(null);

    //Data Filling done usually by API call
    async function fetchData(page=1, category=null){
        setLoading(true)
        let url= `https://codehelp-apis.vercel.app/api/get-blogs?page=${page}`
        if (category){
            url+=`&category=${category}`
        }
        console.log('---------------------------')
        console.log(url)
        try{
            let res=await fetch(url)
            let data= await res.json()
            setTotalPages(data.totalPages);
            setPageNumber(data.page)
            setPosts(data.posts)
            setCategory(data.posts.at(0).category)
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
    useEffect(()=>{
        console.log('pathh changed');
        console.log(location.pathname);
        const pathname=location.pathname
        const cat=pathname.includes("category") ? pathname.split("/").at(-1) : null
        console.log(`categorrryy=${cat} && ${category}`)
        fetchData(pagenumber,cat)
    },[pagenumber,location])

    function pageHandler(page){
        setPageNumber(page)
    }
    
    //contains all the data that we have defined.---->functions,variables,states,data
    const value={
        category,
        isLoading,
        setLoading,
        pagenumber,
        setPageNumber,
        totalpages,
        setTotalPages,
        posts,
        setPosts,
        fetchData,
        pageHandler
    }

    return <AppContext.Provider value={value}>
        {children}
        </AppContext.Provider>
}


//STEP 3 consuming written in Blogs.js file
