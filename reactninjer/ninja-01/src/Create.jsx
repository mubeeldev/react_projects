import { useState } from "react"
import { useNavigate } from 'react-router-dom'

function Create(){
    const [ title , setTitle ] = useState('');
    const [ content , setContent ] = useState('');
    const [ isadding, setIsadding ] = useState(false);
    const history = useNavigate();

    const handleSubmit =(e) => {
        e.preventDefault();
        const blog = { title , content } 
        setIsadding(true);
        fetch ( "http://localhost:8000/blogs", {
            method: "POST",
            header : { "content-type": "application/json"},
            body : JSON.stringify(blog)
        })
        .then(() => {
            setIsadding(false);
            history('/')
        })
    }
    return(
        <div className="create text-center">
            <h2 className="font-bold text-2xl block " >Add a New Blog</h2>

            <form onSubmit={handleSubmit}
            className="grid px-4"
            >
            <label className="text-left font-semibold text-red-400" htmlFor="blog title">Blog title</label>
            <input 
                className="border rounded-md border-gray-300 text-2xl text-gray-700 font-semibold pl-2 py-3 h-8"
                type="text"
                name="blog title"
                required
                value= { title}
                onChange={(e) => {setTitle(e.target.value)}}
            />
            <label className="font-semibold text-left text-red-400" htmlFor="blog title">Blog body</label>
            <textarea 
                className="border border-gray-300 rounded-sm text-2 p-2 "
                name="blog body" 
                required
                value={ content }
                onChange={(e) => {setContent(e.target.value)}}
            ></textarea>
            <label className="text-left font-semibold text-red-400 " htmlFor="blog autor">blog autor: </label>
            <select >
                <option value="mario">mario</option>
                <option value="mubeel">mubeel</option>
            </select>
            {!isadding && <button className="font-semibold text-[20px] border bg-red-400 text-red-200 hover:text-black rounded-md">Add Blog</button>}
            {isadding && <button className="font-semibold text-[20px] border bg-red-400 text-red-200 hover:text-black rounded-md">Adding.............</button>}

            </form>

            
        </div>
    )
}
export default Create