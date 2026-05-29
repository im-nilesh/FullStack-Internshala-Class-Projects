import { useState } from "react";
import "./App.css";
import StudentCard from "./components/StudentCard";

function App() {
  const [showStudents, setShowStudents] = useState(true);

  const students = [
    {
      Name: "Nilesh",
      Age: 22,
      Course: "Information Science",
    },
    {
      Name: "Laxmi",
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
  ];

  function handleClick() {
    setShowStudents(!showStudents);
  }

  return (
    <>
      {showStudents ? (
        students.map((student) => {
          return (
            <StudentCard
              key={student.Name}
              Name={student.Name}
              Age={student.Age}
              Course={student.Course}
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
