
function Student(props){
    return(
        <div className="text-3xl font-bold mx-8 mb-2 shadow-xl shadow-black p-5 rounded-2xl bg-gray-100">
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Student: {props.isStudent ? "Yes" : "No"}</p>
        </div>
    );
}
export default Student