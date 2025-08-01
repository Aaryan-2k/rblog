import Header from '../components/Header'
import Blogs from '../components/Blogs'
import { useParams } from 'react-router-dom'
import Pagination from '../components/Pagination'
export default function Category(){
    const {categoryid}=useParams();
    return (
            <div>
            <Header></Header>
            <div className='container'>
                <h2>Blogs on <b>{categoryid}</b></h2>
                <Blogs/>
            </div>
                <Pagination></Pagination>
            </div>
    )
}