import { useEffect, useState } from "react"


const UsedFetch = (url) => {
    const [ data, setData ] = useState(null);
    const [ ispending , setIspending ] =useState(true);
    const [ error , setError ] = useState(null);

    useEffect(() => {
        const Abortcont = new AbortController();
        fetch(url, {signal: Abortcont.signal})
        .then(res => {
            if(!res.ok) {
                throw Error("Could not fetch the data for that reasource");
            }
            return res.json();
        })
        .then(data => {
            setData(data.reverse());
            setIspending(false);
            
        })
        .catch(err => {
            if(err.name === "AbortError") {
                console.log("Error Aborted");
            }else{
                setIspending(false);
                setError(err.message);
            }
        })
    }),[url];
    return{ data , ispending, error}
}
export default UsedFetch