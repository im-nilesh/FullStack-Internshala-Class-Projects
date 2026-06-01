import { useState } from "react";
import "./App.css";
import StudentCard from "./components/StudentCard";

function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [course, setCourse] = useState("");
  const [showStudents, setShowStudents] = useState(true);
  const [inp, setInp] = useState("");
  const [students, setStudents] = useState([
    {
      Name: "Nilesh",
      Age: 22,
      Course: "Information Science",
    },
    {
      Name: "Rahul",
      Age: 19,
      Course: "BBA",
    },
    {
      Name: "Nikhil",
      Age: 28,
      Course: "Computer Science",
    },
    {
      Name: "Alok",
      Age: 22,
      Course: "Engineering",
    },
  ]);

  function editStudent(studentName) {
    setName(studentName.Name);
    setAge(studentName.Age);
    setCourse(studentName.Course);
  }

  function deleteStudent(studentName) {
    const updatedStudents = students.filter((item) => {
      if (item.Name != studentName) {
        return true;
      }
    });
    setStudents(updatedStudents);
  }

  function handleClick() {
    setShowStudents(!showStudents);
  }

  const filterdStudent = students.filter((item) => {
    return item.Name.toLowerCase().includes(inp);
  });

  function addStudent() {
    const newStudent = { Name: name, Age: age, Course: course };
    const addedStudents = [...students, newStudent];
    setStudents(addedStudents);
    setName("");
    setAge("");
    setCourse("");
  }

  return (
    <>
      <h4>Student Counter = {filterdStudent.length}</h4>
      <input
        type="text"
        placeholder="Search Student"
        onChange={(e) => {
          setInp(e.target.value.toLowerCase());
        }}
      />

      <h3>Add Student:</h3>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />

      <input
        type="number"
        placeholder="Age"
        value={age}
        onChange={(e) => {
          setAge(e.target.value);
        }}
      />

      <input
        type="text"
        placeholder="Course"
        value={course}
        onChange={(e) => {
          setCourse(e.target.value);
        }}
      />

      <button onClick={addStudent}>Add Student</button>

      {showStudents ? (
        filterdStudent.map((student) => {
          return (
            <StudentCard
              key={student.Name}
              Name={student.Name}
              Age={student.Age}
              Course={student.Course}
              deleteStudent={() => {
                deleteStudent(student.Name);
              }}
              editStudent={() => {
                editStudent(student.Name);
              }}
            />
          );
        })
      ) : (
        <></>
      )}
      <button onClick={handleClick}>
        {showStudents ? "Hide Students" : "Show Students"}
      </button>
    </>
  );
}

export default App;
