import Pagination from '../components/Pagination'
import Blogs from '../components/Blogs'
import Header from '../components/Header'
import { useParams } from 'react-router-dom'
export default function Tags(){
    const {tagid}=useParams()
    console.log(`paraaammm=${tagid}`)
return (
    <div>
        <Header></Header>
        <div className='container'>
            <h2>Blogs with <b>#{tagid}</b></h2>
            <Blogs/>
        </div>
            <Pagination></Pagination>
    </div>
)
}