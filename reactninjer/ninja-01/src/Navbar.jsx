import { Link } from "react-router-dom";

function Navbar() {
    const title = "The Mubeel Blog";
    return(
        <>
            <div className="flex justify-between items-center p-4">
                <h1 className="text-red-700 text-2xl font-bold">{title}</h1>
                <div className="flex gap-3 text-8">
                    <Link to="/">Home</Link>
                    <Link to="/Create">New Blog</Link>
                </div>
            </div>
        </>
    )
}
export default Navbar;