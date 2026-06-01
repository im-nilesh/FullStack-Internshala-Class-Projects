import "./StudentCard.css";

function StudentCard({ Name, Age, Course, deleteStudent, editStudent }) {
  return (
    <div className="container">
      <h1>{Name}</h1>
      <h1>{Age}</h1>
      <h1>{Course}</h1>
      <button onClick={deleteStudent}>Delete Student</button>
      <button onClick={editStudent}>Edit Student</button>
    </div>
  );
}
export default StudentCard;
