import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"



const EditeTask  = () => {
    const url  = "http://localhost:8000/tasks/";
    const { id } = useParams();
    const [ data , setData] = useState(null);
    const [ title , setTitle ] = useState("");
    const [ description , setDescription ] = useState("");
    const [ ispending , setIspending ] = useState(true);
    const [ due_date , setDuedate ] = useState("");
    const [ priority , setPriority ] = useState("");
    const [ originalData , setOriginalData ] = useState(null);
    const navigate = useNavigate();


    useEffect(() => {
        fetch(url+id)
            .then(res =>{
                return res.json();
            })
            .then((data) => {
                setData(data);
                setOriginalData(data);
                setIspending(false);
                
                
            })
    },[url])
    
    const handleSubmit = (e) => {
        e.preventDefault();
        
        if(!originalData) return;
        
        const update = {}
        if(title && title !== originalData.title) {
            update.title = title;
        }
        if(description && description !== originalData.description) {
            update.description = description;
        }
        if(due_date && due_date !== originalData.due_date) {
            update.due_date = due_date;
        }
        if(priority && priority !== originalData.priority) {
            update.priority = priority;
        }


        // setIspending(true);
        fetch(url+id , {
            method:"PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body:JSON.stringify(update)
        })
        .then(() => {
            navigate("/")
        })
    
    }


    return(
        <div className=" ml-[300px] mt-[200px] ">
            { ispending && <div>Loading................</div> }
            { data && <div>
            <h2 className="text-2xl font-bold text-center ">Edit Task</h2>
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
                        defaultValue={data.title}
                        onChange={(e) => setTitle(e.target.value)}
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
                        defaultValue={data.description}
                        onChange={(e) => setDescription(e.target.value)}
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
                        defaultValue={data.due_date}
                        onChange={(e) => setDuedate(e.target.value)}
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
                        defaultValue={data.priority}
                        onChange={(e) => setPriority(e.target.value)}
                    >
                        <option value="Low">Low</option>
                        <option value="Medium">Medium</option>
                        <option value="High">High</option>
                    </select>
                </div>
                <button
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                    type="submit"
                >
                    Save Changes
                </button>
            </form>
            </div>

                    }
        </div>
        
    )

}
export default EditeTask