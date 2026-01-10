import { useNavigate, useParams } from "react-router-dom"
import useFetch from "./useFatch";


const BlogDetails = () => {
    const { id } = useParams();
    const { data: blog , error , isPending } = useFetch('http://localhost:8000/blogs/' +id );
    const history = useNavigate();

    const handleDelete = () => {
        fetch( 'http://localhost:8000/blogs/'+blog.id, {
            method:"DELETE"
        }).then(() => {
            history("/")
        })

    }


    return(
        <div className="blog-details ">
            { isPending && <div>Loading.............</div> }
            { error && <div>{ error }</div> }
            { blog && (
                <article>
                    <h2 className="text-3xl font-medium pl-2" >{ blog.title }</h2>
                    <p className="font-extralight pl-8 text-2xl" >  Written by :{ blog.content }</p>
                    <button onClick={handleDelete} className="text-2xl font-medium border py1 px-2 rounded-s-md text-red-700" >Delete</button>
                </article>
                
            ) }

        </div>
    )
}
export default BlogDetails