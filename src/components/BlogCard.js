import {Link} from 'react-router'
import {useParams} from 'react-router-dom'
export default function BlogCard(props){
    const {blogid}=useParams()
    return (
            <div className='blog'>
                <h3>{blogid ?
                props.value.title :
                (<Link to={`/blogs/blog_view/${props.value.id}`}>{props.value.title}</Link>)
                }</h3>
                <p>By {props.value.author} on <b><Link to={`/blogs/category/${encodeURIComponent(props.value.category)}`}>{props.value.category}</Link></b></p>
                <p>Posted on {props.value.date}</p>
                <p className="content">{props.value.content}</p>
                <p>{props.value.tags.map((tag)=>(<span className="tags"><Link to={`/blogs/tag/${encodeURIComponent(tag)}`}>#{tag}</Link></span>))}</p>
            </div>
    )
}
