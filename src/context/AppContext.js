// STEP 1 : Creating context
import { createContext, useState } from "react";
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

    //Data Filling done usually by API call
    async function fetchData(page=1){
        setLoading(true)
        const url= `https://codehelp-apis.vercel.app/api/get-blogs?page=${page}`
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
        fetchData,
        pageHandler
    }
    function pageHandler(page){
        fetchData(page)
    }
    return <AppContext.Provider value={value}>
        {children}
        </AppContext.Provider>
}

//STEP 3 consuming written in Blogs.js file
