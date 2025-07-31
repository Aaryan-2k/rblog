import Header from '../components/Header'
import Blogs from '../components/Blogs'
import Pagination from '../components/Pagination'
import { AppContext } from "../context/AppContext"
import { useContext } from 'react'
export default function Category(){
    const {category}=useContext(AppContext);
    return (
            <div>
            <Header></Header>
            <div className='container'>
                <h2>Blogs on <b>{category}</b></h2>
                <Blogs/>
            </div>
                <Pagination></Pagination>
            </div>
    )
}