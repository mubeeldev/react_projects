import { useState, useEffect } from "react";
import BlogList from "./BlogList";
import useFetch from './useFatch';

function Home() {

    const { data:blogs , ispending, error } = useFetch("http://localhost:8000/blogs");
        

    return (
        <div>
            { error && <div>{ error }</div> }
            { ispending && <div>Loading...</div> }
            { blogs && <BlogList blogs={blogs} title='All blogs' />}
        </div>
    );
}
export default Home;
