
function App() {
  const students = [
    { id: 1, name: "Ravi", marks: 85 },
    { id: 2, name: "Sita", marks: 45 },
    { id: 3, name: "Ram", marks: 70 },
    { id: 4, name: "Priya", marks: 30 },
    { id: 5, name: "Kiran", marks: 90 }
  ];

  return (
    <div>
      <h1>Student List</h1>

      {students.map((s) => (
        <p key={s.id}>
          {s.name} - {s.marks} - 
          {s.marks >= 40 ? "Pass" : "Fail"}
        </p>
      ))}

      <Footer />
    </div>
  );
}

function Footer() {
  return <h3>Student Management System</h3>;
}

export default App;