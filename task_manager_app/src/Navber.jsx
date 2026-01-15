import { Link } from "react-router-dom"
import { FiGrid } from "react-icons/fi"
import { GrInProgress, GrTask } from "react-icons/gr"
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5"
import { MdFormatListBulletedAdd } from "react-icons/md"
import { PiDotsThreeCircle } from "react-icons/pi"



const Navber = () => {
    return(
        <nav className="fixed top-0 bottom-0  bg-[#0C2C55]">
            <header className="">
                <div className="grid justify-between px-8 items-center pt-2">
                    <h1 className="font-bold text-[#F0FFDF] text-3xl my-8 px-2 " >
                        <GrTask className=" inline-block mr-2 "  />
                        Task Manager</h1>

                    <div className="grid text-leftfont-sans pt-4 text-[#F0FFDF] font-bold text-2xl" >
                        <Link to="/" className="mb-8 hover:border-b-2 border-white pb-2 "> 
                            <FiGrid className=" inline-block mr-8 "/> 
                            Dashboad 
                        </Link>

                        <Link to="/tasks/completed" className="mb-8 hover:border-b-2 border-white pb-2">
                            <IoCheckmarkDoneCircleOutline className=" inline-block mr-4 " />
                            Completed Tasks 
                        </Link>

                        <Link to="/tasks/in progress" className="mb-8 hover:border-b-2 border-white pb-2">
                            <GrInProgress className=" inline-block mr-4 " />
                            In Progress Tasks 
                        </Link>

                        <Link to="/tasks/not started" className="mb-8 hover:border-b-2 border-white pb-2">
                            <PiDotsThreeCircle className=" inline-block mr-4 " />
                            Pending Tasks 
                        </Link>

                        <Link to="/create" className="mb-8 hover:border-b-2 border-white pb-2" >
                            <MdFormatListBulletedAdd className=" inline-block mr-4  " />
                            Add New Task
                        </Link >
                    
                    </div>
                </div>
            
            </header>


        </nav>
    )
}
export default Navber