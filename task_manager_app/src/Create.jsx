import { useState } from "react";
import { useNavigate } from "react-router-dom";


const Create = () => {
    const [ title, setTitle ] = useState('');
    const [ description, setDescription ] = useState('');
    const [ due_date, setDuedate ] = useState('');
    const [ priority, setPriority ] = useState('Low');
    const navigate = useNavigate();
    const [ isadding, setIsadding ] = useState(false)
    
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const tasks = { title, description, due_date, priority, status: "Pending" };
        setIsadding(true);
        fetch( "http://localhost:8000/tasks", {
            method: "POST",
            header: { "Content-Type" : "application/json" },
            body: JSON.stringify(tasks)
        } )
        .then(() => {
            setIsadding(false);
            navigate("/")
        })}
    
    return(

        <div className="ml-[300px] p-8" >
            <h2 className="text-2xl font-bold text-center ">Create Task</h2>
                <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-4 p-4 border rounded-md">
                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2" htmlFor="title">
                            Title
                        </label>
                        <input
                            className="w-full px-3 py-2 border rounded"
                            type="text"
                            id="title"
                            name="title"
                            placeholder="Enter task title"
                            value={title}
                            onChange={(e) =>{setTitle(e.target.value)}}
                            
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2" htmlFor="description">
                            Description
                        </label>
                        <textarea
                            className="w-full px-3 py-2 border rounded"
                            id="description"
                            name="description"
                            placeholder="Enter task description"
                            value={description}
                            onChange={(e) =>{setDescription(e.target.value)}}
                            
                        ></textarea>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2" htmlFor="due_date">
                            Due Date
                        </label>
                        <input
                            className="w-full px-3 py-2 border rounded"
                            type="date"
                            id="duedate"
                            name="due_date"
                            value={due_date}
                            onChange={(e) =>{setDuedate(e.target.value)}}
                            
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2" htmlFor="priority">
                            Priority
                        </label>
                        <select
                            className="w-full px-3 py-2 border rounded"
                            id="priority"
                            name="priority"
                            value={priority}
                            onChange={(e) =>{setPriority(e.target.value)}}
                        
                        >
                            <option value="Low">Low</option>
                            <option value="Medium">Medium</option>
                            <option value="High">High</option>
                        </select>
                    </div>
                        { isadding && <div>is addong</div> }
                        { !isadding && <button
                        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                        type="submit"
                    >
                        Add Task
                    </button>}
                    { isadding && <button
                        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                        type="submit"
                    >
                        Add........
                    </button> }
                
                </form>
            </div>
    )
}



export default Create;