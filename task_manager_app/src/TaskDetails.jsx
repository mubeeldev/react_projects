import { Link, useNavigate, useParams } from "react-router-dom";
import UsedFetch from "./UseFatch";
import { useState } from "react";




const TaskDetails = () => {
    const navigate = new useNavigate();
    const { id } = useParams();
    const url  = "http://localhost:8000/tasks/";
    const { data:task } = UsedFetch(url +id );
    // const selectedTask = url +task.id;
    const history = useNavigate()
    const [ done , setDone] = useState(false);
    
    const handleStat = () => {
        return(
            fetch(url+id ,{
                method: "PATCH",
                headers : { "Content-Type": "application/json" },
                body : JSON.stringify({
                    status : "in progress"
                })

            }).then(() =>{
                navigate('/')
            })
            
        )
    }

    const handleDone = () => {
        return(
            fetch(url+id ,{
                method: "PATCH",
                headers : { "Content-Type": "application/json" },
                body : JSON.stringify({
                    status : "completed"
                })

            }).then(() =>{
                navigate('/')
            })
            
        )
    }

    const handleDelete = () => {
        return(
            fetch(url + task.id, {
                method:"DELETE"
            }).then(() => {
                history("/");
            })
        )
    }
    const handleBack = () => {
        navigate(-1);
    }

    return(
        <div className="taskdetails ml-[300px] grid items-center justify-center mt-8 p-4 ">
            <h1 className="text-2xl font-mono font-bold text-center">Task details</h1>

            <div className="w-full  ">
                {
                    task && (
                        <div id="container" className="task p-4 m-2 rounded-md shadow-sm hover:shadow-md  " key={task.id}>
                                {setDone && <h2 id="title" className={`font-bold font-sans rounded-md text-2xl p-8 text-center  ${task.status === "completed"?"line-through"
                                                                                :task.priority === "Low"? "bg-linear-to-r from-green-300 to-green-200" 
                                                                                :task.priority === "Medium"? "bg-linear-to-r from-yellow-300 to-yellow-200 "
                                                                                :task.priority === "High"? "bg-linear-to-r from-red-200 to-red-100":
                                                                                ""} `}>{task.title}</h2>}
                                <p className="font-sans font-light text-2xl p-4  ">{task.description}</p>
                                <div className="flex justify-between text-2xl px-8 py-4 ">
                                <p className="font-sans font-medium">Date: <span className="text-green-800 pl-4">{task.due_date}</span></p>
                                <p className="font-sans font-medium">Priority: <span className="text-green-800 pl-4">{task.priority}</span></p>
                                </div>

                                <p className="font-sans font-medium text-2xl text-center py-4 "><span className="text-green-800 pl-4">{task.status}</span></p>

                                <div className="buttons gap-8 mt-2 flex justify-center items-center m-8 text-2xl">
                                    <button onClick={handleStat} className="fa-solid fa-play hover:font-bold "><span className="p-2 text-xs">Start</span></button>
                                    <button onClick={handleDone} className="fa-solid fa-check hover:font-bold "><span className="p-2 text-xs">Done</span></button>
                                    <Link to={`/EditeTask/${task.id}`} className="fa-regular fa-pen-to-square hover:font-extrabold "><span className="p-2 text-xs">Edit</span></Link>
                                    <button onClick={handleDelete} className="text-red-500 fa-regular fa-trash-can"><span className="p-2 text-xs">Delete</span></button>
                                    <button onClick={handleBack} className=" font-bold fa-solid fa-backward"><span className="p-2 font-bold text-xs">Back</span></button>

                                </div>
                        </div>
                    )
                }
                
            </div>
        </div>
    );
}
export default TaskDetails;