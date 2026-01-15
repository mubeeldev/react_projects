
import TaskList from "./TaskList.jsx";
import UsedFetch from "./UseFatch.jsx";

const Home = () => {
    const { data:tasks, ispending, error } = UsedFetch("http://localhost:8000/tasks");
    return(
        <div className="task-preview ml-[300px] px-8">
            <h2 className="text-2xl text-center font-bold font-sans">All Tasks</h2>

            
            { error && <div>{ error } </div> }
            { ispending && <div>Loading ..........</div> }
            { tasks && <TaskList tasks={tasks} /> }
        </div>

    );
}

export default Home;