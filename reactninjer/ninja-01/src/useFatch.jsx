import { useState , useEffect} from "react"

function useFetch(url){
    const [data, setData] = useState(null);
    const [ispending, setIsPending] = useState(true);
    const [error , setError] = useState(null);

    useEffect(() => {
            fetch(url)

                .then(res => {
                    if(!res.ok){
                        throw Error('Could not fetch the data for that resource');
                    }
                    return res.json();
                })
                .then(data => {
                    setData(data);
                    setIsPending(false);
                })
                .catch(err => {
                    setIsPending(false)
                    setError(err.message);
                })
        }, [url]);
        return { data, ispending, error }
}
export default useFetch