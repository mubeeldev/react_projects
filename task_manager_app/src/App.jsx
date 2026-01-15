import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navber from "./Navber.jsx"
import Home from "./Home.jsx"
import TaskDetails from "./TaskDetails.jsx"
import EditeTask from "./EditeTask.jsx"
import Create from "./Create.jsx"
import Tasks from "./CompletedTasks.jsx"



function App() {


  return (
    <BrowserRouter  >
      <div  >
        <Navber />
        <div className="content ">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path={`/TaskDetails/:id`} element={<TaskDetails />} />
            <Route path={`/EditeTask/:id`} element={<EditeTask />} />
            <Route path="/Create" element={<Create />} />
            <Route path="/tasks/:status" element={<Tasks />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
