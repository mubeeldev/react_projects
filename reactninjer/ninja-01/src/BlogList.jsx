
function BlogList({ blogs, title}) {
    
    return(

        <div id="home" className="home">
        <h1 className="text-4xl font-bold mb-4">{title}</h1>
        {blogs.map((blog) => (
            <div className="blog-preview mb-1 mx-4 p-1 hover:shadow-md" key={blog.id}>
                <h1 className="text-3xl text-red-400 font-bold">{blog.title}</h1>
                <div className="my-1 font-semibold">
                    <p className="text-gray-800">{blog.content}</p>
                    {/* <p className="text-gray-800">Author: {blog.person.name}</p> */}
                </div>
                
            </div>
        ))}
    </div>
    );
    
}
export default BlogList;
