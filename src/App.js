import React from "react";
import { BrowserRouter as Router, Routes, Route,} from "react-router-dom";
import Login from "./screens/Login";
import Register from "./screens/Register";
import AddBook from "./screens/addBook/Index";
import Books from "./screens/Books";
import AddStudent from "./screens/addStudent";
import Students from "./screens/student";
import LoanBook from "./screens/loanBook";

function App() {
  return (
    <Router>
      <Routes>
        {/* Rota padrão para a tela de login */}
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />}/>
        <Route path="/AddBook" element={<AddBook />} />
        <Route path="/Books" element={<Books />} />
        <Route path="/addStudent" element={<AddStudent />} />
        <Route path="/Student" element={<Students />} />
        <Route path="/loanbook" element={<LoanBook />} />

      </Routes>
    </Router>
  );
}

export default App;
