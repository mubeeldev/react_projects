import { Link } from "react-router-dom"

const TaskList = (props) => {
    const tasks = props.tasks;
    
        return(
            <div className="tasklist  md:grid grid-cols-3"  >
                {tasks.map((task) => (
                        <div draggable="true" className={`task p-4 m-2 rounded-xl shadow-xl hover:shadow-md  md:inline-block font-sans `} key={task.id}>
                            <Link to={`/TaskDetails/${task.id}`}>
                                <h2 className={`font-bold font-sans p-4 rounded-xl text-center ${task.status === "completed"?"line-through"
                                                                                :task.priority === "Low"? "bg-linear-to-r from-green-300 to-green-200" 
                                                                                :task.priority === "Medium"? "bg-linear-to-r from-yellow-300 to-yellow-200 "
                                                                                :task.priority === "High"? "bg-linear-to-r from-red-200 to-red-100":
                                                                                ""}`}>{task.title}</h2>
                                <p className="font-sans font-light text-center p-8">{task.description}</p>
                                <div className="flex justify-between">
                                <p className="font-sans font-medium text-center">Date: <span className="text-green-800 pl-4">{task.due_date}</span></p>
                                <p className="font-sans font-medium text-center">Priority: <span className="text-green-800 pl-4">{task.priority}</span></p>
                                </div>

                                <div className="flex justify-between items-center mt-4">
                                    <p className="font-light font-sans italic " >Mubeel  Express</p>
                                    <p className={`font-sans font-bold p-2 rounded-md text-center ${task.status === "completed"?"line-through"
                                                                                :task.priority === "Low"? "bg-linear-to-r from-green-200 to-green-100" 
                                                                                :task.priority === "Medium"? "bg-linear-to-r from-yellow-200 to-yellow-100 "
                                                                                :task.priority === "High"? "bg-linear-to-r from-red-200 to-red-100":
                                                                                ""} `}>{task.status}</p>
                                    
                                </div>
                                
                            </Link>
                        </div>
                    ))}
            </div>
    )
        
    

}
export default TaskList