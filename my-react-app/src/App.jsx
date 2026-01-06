import Card from "./Card.jsx"
import Student from "./Student.jsx"
import PropTypes from "prop-types"
function App() {
  return(
    <>
      <Card/>
      <Student name="Sabeel" age="17" isStudent={false} />
      <Student name="Afifa" age="11" isStudent={true} />
      <Student name="Amaal"age={14} isStudent={false}/>
    </>
  )
} 

Student.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  isStudent: PropTypes.bool
}
