import {Link} from 'react-router'
export default function BlogCard(props){
    let url=`/category/${props.value.category}`   

    return (
            <div className='blog'>
                <h3>{props.value.title}</h3>
                <p>By {props.value.author} on <b><Link to={url}>{props.value.category}</Link></b></p>
                <p>Posted on {props.value.date}</p>
                <p className="content">{props.value.content}</p>
                <p>{props.value.tags.map((tag)=>(<span className="tags">#{tag}</span>))}</p>
            </div>
    )
}
